"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Icon } from "@sharadox/icon-web-library/icon";
import { isSoftNavigation } from "@sharadox/web-library/navigation/soft-navigation";
import dynamic from "next/dynamic";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { GlobePlaceholder } from "@sharadox/sharadox-web-library/component/globe/placeholder";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { NOT_FOUND } from "@sharadox/sharadox-web-library/content/not-found";
import { separate } from "@sharadox/sharadox-web-library/utility/separate";
import { ACTION } from "@sharadox/sharadox-web-library/content/action";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { NotFoundProperties } from "@sharadox/sharadox-web-library/component/not-found/type";

const Globe = dynamic(() => import("@sharadox/sharadox-web-library/component/globe"), {
  ssr: false,
  loading: () => <GlobePlaceholder />,
});

const EASE = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number, settled: boolean) => ({
  initial: settled ? (false as const) : { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/**
 * The 404 page's first screen, in the grid frame: a giant 404 whose zero is the live, draggable globe, the page
 * "off the map", the request that failed, and the way back. Put `ServiceIndex` under it for the five services.
 *
 * @example
 * <NotFound locale="en" path="/en/old-page" />
 */
export function NotFound({ locale, path }: NotFoundProperties) {
  // After a language switch the page is rebuilt in place: show it as it was, without replaying the entrance.
  const [settled] = useState(isSoftNavigation);
  return (
    <Section className={styles.notFound} padded={false}>
      <div className={styles.glow} aria-hidden />
      <motion.div {...rise(0.05, settled)}>
        <Eyebrow className={styles.eyebrow}>
          <span className={styles.live} aria-hidden /> {separate(translate(NOT_FOUND.error, locale), "404")}
        </Eyebrow>
      </motion.div>
      <div className={styles.code} aria-hidden>
        <motion.span className={styles.digit} {...rise(0.15, settled)}>
          4
        </motion.span>
        <motion.span
          className={styles.world}
          initial={settled ? false : { opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.6, delay: 0.25, ease: EASE }}
        >
          <Globe />
        </motion.span>
        <motion.span className={styles.digit} {...rise(0.35, settled)}>
          4
        </motion.span>
      </div>
      <h1 className={styles.title}>
        <span className={styles.line}>
          <motion.span
            className={styles.lineInner}
            initial={settled ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          >
            {translate(NOT_FOUND.heading, locale)}
          </motion.span>
        </span>
      </h1>
      <motion.p className={styles.text} {...rise(0.7, settled)}>
        {translate(NOT_FOUND.text, locale)}
      </motion.p>
      <motion.p className={`${styles.request} monospace`} {...rise(0.8, settled)}>
        <span className={styles.method}>GET</span>
        <span className={styles.path}>{path}</span>
        <span className={styles.status}>
          <Icon name="chevron-right" strokeWidth={1.8} /> 404
        </span>
        <span className={styles.caret} aria-hidden />
      </motion.p>
      <motion.div className={styles.actions} {...rise(0.9, settled)}>
        <Button href={`/${locale}`} arrow>
          {translate(NOT_FOUND.home, locale)}
        </Button>
        <Button href={`/${locale}#${SECTION.contact.id}`} variant="ghost">
          {translate(ACTION.startProject, locale)}
        </Button>
      </motion.div>
      <motion.p className={`${styles.explore} monospace`} {...rise(1, settled)}>
        {translate(NOT_FOUND.explore, locale)} <Icon name="chevron-down" strokeWidth={1.8} />
      </motion.p>
    </Section>
  );
}
