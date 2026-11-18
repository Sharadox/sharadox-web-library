import { translate } from "@sharadox/internationalization-web-library/translate";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { BrandPartsProperties } from "@sharadox/sharadox-web-library/component/about/brand-parts/type";

/**
 * Everything the brand reaches, as five tiles: each a small drawing (the mark, a website, a phone, a post, a rising
 * chart) over its name and a line on what it does. The drawings are decoration, hidden from assistive technology.
 */
export function BrandParts({ locale }: BrandPartsProperties) {
  return (
    <ul className={styles.parts} role="list">
      {ABOUT.brand.parts.map((part) => (
        <li key={part.key} className={styles.part}>
          <span className={styles.drawing} data-part={part.key} aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <b>{translate(part.title, locale)}</b>
          <span className={styles.note}>{translate(part.note, locale)}</span>
        </li>
      ))}
    </ul>
  );
}
