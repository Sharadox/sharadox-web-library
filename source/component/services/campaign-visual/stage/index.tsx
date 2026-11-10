"use client";
import { useCountUp } from "@sharadox/web-library/animation/count-up";
import { languageTag } from "@sharadox/web-library/internationalization/locale";
import styles from "../index.module.scss";
import type { StageProperties } from "@sharadox/sharadox-web-library/component/services/campaign-visual/stage/type";

/** One funnel stage in the legend: its label and a number counting up. */
export function Stage({ label, value, start, durationMilliseconds, locale }: StageProperties) {
  const count = useCountUp(value, start, durationMilliseconds);
  return (
    <div className={styles.stage}>
      <dt className="monospace">{label}</dt>
      <dd>{count.toLocaleString(languageTag(locale))}</dd>
    </div>
  );
}
