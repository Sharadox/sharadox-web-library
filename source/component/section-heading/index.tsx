import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { Reveal } from "@sharadox/animation-web-library/reveal";
import styles from "./index.module.scss";
import type { SectionHeadProperties } from "@sharadox/sharadox-web-library/component/section-heading/type";

/** Eyebrow and title that open a section. */
export function SectionHeading({ eyebrow, title }: SectionHeadProperties) {
  return (
    <Reveal className={styles.heading}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
    </Reveal>
  );
}
