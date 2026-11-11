"use client";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { GlobePlaceholder } from "@sharadox/sharadox-web-library/component/globe/placeholder";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { HERO } from "@sharadox/sharadox-web-library/content/hero";
import { NOT_FOUND } from "@sharadox/sharadox-web-library/content/not-found";
import { separate } from "@sharadox/sharadox-web-library/utility/separate";
import styles from "./index.module.scss";
import type { NotFoundProperties } from "@sharadox/sharadox-web-library/component/not-found/type";

const Globe = dynamic(() => import("@sharadox/sharadox-web-library/component/globe"), {
  ssr: false,
  loading: () => <GlobePlaceholder />,
});

const EASE = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
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
  return (
    <Section className={styles.notFound} padded={false}>
      <div className={styles.glow} aria-hidden />
      <motion.div {...rise(0.05)}>
        <Eyebrow className={styles.eyebrow}>
          <span className={styles.live} aria-hidden /> {separate(translate(NOT_FOUND.error, locale), "404")}
        </Eyebrow>
      </motion.div>
      <div className={styles.code} aria-hidden>
        <motion.span className={styles.digit} {...rise(0.15)}>
          4
        </motion.span>
        <motion.span
          className={styles.world}
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.6, delay: 0.25, ease: EASE }}
        >
          <Globe />
        </motion.span>
        <motion.span className={styles.digit} {...rise(0.35)}>
          4
        </motion.span>
      </div>
      <h1 className={styles.title}>
        <span className={styles.line}>
          <motion.span
            className={styles.lineInner}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          >
            {translate(NOT_FOUND.heading, locale)}
          </motion.span>
        </span>
      </h1>
      <motion.p className={styles.text} {...rise(0.7)}>
        {translate(NOT_FOUND.text, locale)}
      </motion.p>
      <motion.p className={`${styles.request} monospace`} {...rise(0.8)}>
        <span className={styles.method}>GET</span>
        <span className={styles.path}>{path}</span>
        <span className={styles.status}>→ 404</span>
        <span className={styles.caret} aria-hidden />
      </motion.p>
      <motion.div className={styles.actions} {...rise(0.9)}>
        <Button href={`/${locale}`} arrow>
          {translate(NOT_FOUND.home, locale)}
        </Button>
        <Button href={`/${locale}#contact`} variant="ghost">
          {translate(HERO.primary, locale)}
        </Button>
      </motion.div>
      <motion.p className={`${styles.explore} monospace`} {...rise(1)}>
        {translate(NOT_FOUND.explore, locale)} ↓
      </motion.p>
    </Section>
  );
}
