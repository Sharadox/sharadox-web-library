"use client";
import { useCountUp } from "@sharadox/animation-web-library/count-up";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import styles from "../index.module.scss";
import type { StageProperties } from "@sharadox/sharadox-web-library/component/services/campaign-visual/stage/type";

/** One funnel stage in the legend: its label and a number counting up. */
export function Stage({ label, value, start, durationMilliseconds, locale }: StageProperties) {
  const count = useCountUp(value, start, durationMilliseconds);
  return (
    <div className={styles.stage}>
      <dt className="monospace">{label}</dt>
      <dd>{count.toLocaleString(LOCALES.languageTag(locale))}</dd>
    </div>
  );
}
