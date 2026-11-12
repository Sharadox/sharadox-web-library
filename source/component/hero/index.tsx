"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { isSoftNavigation } from "@sharadox/web-library/navigation/soft-navigation";
import dynamic from "next/dynamic";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { GlobePlaceholder } from "@sharadox/sharadox-web-library/component/globe/placeholder";
import { HeroGuide } from "@sharadox/sharadox-web-library/component/hero/guide";
import { HERO } from "@sharadox/sharadox-web-library/content/hero";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { ACTION } from "@sharadox/sharadox-web-library/content/action";
import { SLOGAN_LINES } from "@sharadox/sharadox-web-library/content/slogan";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { HeroProperties } from "@sharadox/sharadox-web-library/component/hero/type";

const Globe = dynamic(() => import("@sharadox/sharadox-web-library/component/globe"), {
  ssr: false,
  loading: () => <GlobePlaceholder />,
});
const EASE = [0.22, 1, 0.36, 1] as const;

/** First screen, inside the grid frame: the slogan rising line by line beside the interactive globe. */
export function Hero({ locale }: HeroProperties) {
  // After a language switch the page is rebuilt in place: show it as it was, without replaying the entrance.
  const [settled] = useState(isSoftNavigation);
  const lines = SLOGAN_LINES[locale];
  return (
    <section id={SECTION.home.id} className={styles.hero}>
      <HeroGuide />
      <Cross corner="bottom-left" />
      <Cross corner="bottom-right" />
      <div className={styles.copy}>
        <motion.div
          initial={settled ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <Eyebrow className={styles.eyebrow}>
            <span className={styles.live} aria-hidden /> {translate(HERO.eyebrow, locale)}
          </Eyebrow>
        </motion.div>
        <h1 className={styles.title}>
          {lines.map((line, index) => (
            <span className={styles.line} key={index}>
              <motion.span
                className={index === lines.length - 1 ? `${styles.lineInner} ${styles.dim}` : styles.lineInner}
                initial={settled ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.2 + index * 0.12, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className={styles.subtitle}
          initial={settled ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
        >
          {translate(HERO.subtitle, locale)}
        </motion.p>
        <motion.div
          className={styles.actions}
          initial={settled ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
        >
          <Button href={`#${SECTION.contact.id}`} arrow>
            {translate(ACTION.startProject, locale)}
          </Button>
          <Button href={`#${SECTION.services.id}`} variant="ghost">
            {translate(HERO.secondary, locale)}
          </Button>
        </motion.div>
      </div>
      <motion.div
        className={styles.globe}
        initial={settled ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: EASE }}
      >
        <Globe />
        <span className={`${styles.hint} monospace`} aria-hidden>
          {translate(HERO.drag, locale)}
        </span>
      </motion.div>
    </section>
  );
}
