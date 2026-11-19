import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { Reveal } from "@sharadox/animation-web-library/reveal";
import styles from "./index.module.scss";
import type { SectionHeadProperties } from "@sharadox/sharadox-web-library/component/section-heading/type";

/** Eyebrow and title that open a section, and a sentence or two under the title when there's more to say. */
export function SectionHeading({ eyebrow, title, text }: SectionHeadProperties) {
  return (
    <Reveal className={styles.heading}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 data-lines={title.includes("\n") || undefined}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
    </Reveal>
  );
}
