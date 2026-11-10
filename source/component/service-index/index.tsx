import { separate } from "@sharadox/sharadox-web-library/utility/separate";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { translate } from "@sharadox/web-library/internationalization/translate";
import styles from "./index.module.scss";
import type { ServiceIndexProperties } from "@sharadox/sharadox-web-library/component/service-index/type";

/** The five disciplines in a row of grid cells under the hero, each a shortcut to its section. */
export function ServiceIndex({ locale }: ServiceIndexProperties) {
  return (
    <nav className={styles.index} aria-label={translate(SERVICES.eyebrow, locale)}>
      {SERVICES.items.map((service, index) => (
        <a
          key={service.key}
          href={`#${service.key}`}
          className={styles.cell}
          style={{ animationDelay: `${0.9 + index * 0.08}s` }}
        >
          <span className={`${styles.number} monospace`}>{service.number}</span>
          <span className={styles.title}>{translate(service.title, locale)}</span>
          <span className={`${styles.kinds} monospace`}>{separate(...service.kinds[locale])}</span>
          <span className={styles.arrow} aria-hidden>
            ↘
          </span>
        </a>
      ))}
      <Cross corner="bottom-left" />
      <Cross corner="bottom-right" />
    </nav>
  );
}
