"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { Icon } from "@sharadox/icon-web-library/icon";
import { useParallax } from "@sharadox/pointer-web-library/parallax";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Activity } from "@sharadox/sharadox-web-library/component/about/feed/activity";
import { Client } from "@sharadox/sharadox-web-library/component/about/feed/client";
import { euros } from "@sharadox/sharadox-web-library/component/about/feed/euros";
import { Project } from "@sharadox/sharadox-web-library/component/about/feed/project";
import { playFeed } from "@sharadox/sharadox-web-library/component/about/feed/script";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { FeedProperties } from "@sharadox/sharadox-web-library/component/about/feed/type";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";
import { EASE } from "@sharadox/animation-web-library/ease";

const { feed } = ABOUT.business;

/** The label a target shows while the pointer reads it. */
function tipFor(target: string, locale: Locale) {
  const { project, client } = feed;
  const [kind, index] = target.split("-");
  if (kind === "event") return translate(feed.events[Number(index)]!.detail, locale);
  if (kind === "project") {
    const past = client.projects[Number(index)]!;
    return `${past[locale]} ${past.year} · ${euros(past.amount, locale)}`;
  }
  if (kind === "budget") {
    const left = euros(project.quoted - project.paid, locale);
    return `${Math.round((project.paid / project.quoted) * 100)}% ${translate(project.paidLabel, locale).toLowerCase()} · ${left}`;
  }
  if (kind === "donut") return `${translate(client.paidLabel, locale)} ${euros(client.paid, locale)}`;
  return `${client.tasks.done}/${client.tasks.total} ${translate(client.doneLabel, locale)}`;
}

/** Where a target is inside the panel: the pointer's spot on it, and the top middle for its label. */
function placeOf(root: HTMLElement, target: string) {
  const element = root.querySelector(`[data-target="${target}"]`)!;
  const box = element.getBoundingClientRect();
  const frame = root.getBoundingClientRect();
  const left = box.left - frame.left;
  const top = box.top - frame.top;
  return {
    pointer: { x: left + Math.min(box.width * 0.6, 120), y: top + box.height * 0.55 },
    tip: { x: left + box.width / 2, y: top - 10 },
  };
}

/**
 * The platform at work, as a business sees it in its own: a live header (the place it's viewed from changes) over
 * three tabs, Activity, Project and Client, all about one job. Once the panel is in view a pointer plays through
 * them: the log fills, the pointer reads an entry, clicks Project, reads the budget and ticks the next task, clicks
 * Client and reads its charts, then goes back to Activity, over and over. Out of view it stops and starts over; with
 * less motion asked for, it rests on the full log. It is a little aware of the visitor's own pointer too: the panel
 * leans a few degrees towards it and a soft light follows it across, and it floats like the globe. It keeps one
 * height throughout, its tallest tab's: the log never grows it, the oldest entries slipping out under its bottom edge
 * as new ones arrive. A picture, so it's hidden from assistive technology.
 */
export function Feed({ locale, className }: FeedProperties) {
  const root = useRef<HTMLDivElement>(null);
  const stage = useParallax<HTMLDivElement>(0.07);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry!.isIntersecting), { threshold: 0.4 });
    observer.observe(root.current!);
    return () => observer.disconnect();
  }, []);
  // Visitors who ask for less motion get the full log, still (read when the panel comes into view).
  const playing = inView && !matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [tab, setTab] = useState(0);
  const [shown, setShown] = useState<number>(feed.events.length);
  const [ticked, setTicked] = useState(false);
  const [pointed, setPointed] = useState<string | null>(null);
  const [pressed, setPressed] = useState(0);
  const [tip, setTip] = useState<string | null>(null);
  const [places, setPlaces] = useState<{ pointer: { x: number; y: number }; tip: { x: number; y: number } }>({
    pointer: { x: 0, y: 0 },
    tip: { x: 0, y: 0 },
  });

  useEffect(() => {
    if (!playing) return;
    const stop = new AbortController();
    playFeed(
      {
        tab: setTab,
        show: setShown,
        tick: setTicked,
        point: setPointed,
        press: (down) => down && setPressed((count) => count + 1),
        tip: setTip,
      },
      feed.events.length,
      stop.signal,
    ).catch(() => {});
    return () => {
      stop.abort();
      setTab(0);
      setShown(feed.events.length);
      setTicked(false);
      setPointed(null);
      setTip(null);
    };
  }, [playing]);

  // The pointer and its label follow their target, which is outlined while the pointer is on it.
  useLayoutEffect(() => {
    const panel = root.current!;
    for (const element of panel.querySelectorAll("[data-pointed]")) element.removeAttribute("data-pointed");
    if (!pointed) return;
    setPlaces(placeOf(panel, pointed));
    if (!pointed.startsWith("tab")) panel.querySelector(`[data-target="${pointed}"]`)!.setAttribute("data-pointed", "");
  }, [pointed, tab, shown]);

  return (
    <div ref={stage} className={[styles.stage, className].filter(Boolean).join(" ")} aria-hidden>
      <div ref={root} className={styles.feed} data-playing={playing || undefined}>
        <div className={styles.header}>
          <span className={styles.live}>
            <i />
            {translate(feed.live, locale)}
          </span>
          <span className={styles.viewing}>
            {translate(feed.viewing, locale)}
            <span className={styles.places}>
              {feed.places[locale].map((place) => (
                <b key={place}>{place}</b>
              ))}
            </span>
          </span>
        </div>
        <div className={styles.tabs}>
          {feed.tabs.map((name, index) => (
            <span key={name.en} data-target={`tab-${index}`} data-active={tab === index || undefined}>
              {translate(name, locale)}
            </span>
          ))}
          <i className={styles.underline} style={{ transform: `translateX(${tab * 100}%)` }} />
        </div>
        <div className={styles.panes}>
          <div className={styles.log} data-active={tab === 0 || undefined}>
            <Activity locale={locale} shown={shown} />
          </div>
          <div data-active={tab === 1 || undefined}>
            <Project locale={locale} ticked={ticked} />
          </div>
          <div data-active={tab === 2 || undefined}>
            <Client locale={locale} />
          </div>
        </div>
        <AnimatePresence>
          {tip && (
            <motion.div
              key={tip}
              className={styles.tip}
              style={{ left: places.tip.x, top: places.tip.y, x: "-50%", y: "-100%" } as CSSProperties}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              {tipFor(tip, locale)}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className={styles.pointer}
          initial={false}
          animate={{ x: places.pointer.x, y: places.pointer.y, opacity: pointed ? 1 : 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <AnimatePresence>
            {pressed > 0 && (
              <motion.span
                key={pressed}
                className={styles.ripple}
                initial={{ opacity: 0.9, scale: 0.3 }}
                animate={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </AnimatePresence>
          <Icon name="pointer" strokeWidth={1.4} />
        </motion.div>
      </div>
    </div>
  );
}
