import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { ServiceShortcut } from "@sharadox/sharadox-web-library/component/service-shortcut";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { translate } from "@sharadox/internationalization-web-library/translate";
import styles from "./index.module.scss";
import type { ServiceIndexProperties } from "@sharadox/sharadox-web-library/component/service-index/type";

/** The four service groups in a row of grid cells under the hero, each a shortcut to its section. */
export function ServiceIndex({ locale, base = "" }: ServiceIndexProperties) {
  return (
    <nav className={styles.index} aria-label={translate(SERVICES.eyebrow, locale)}>
      {SERVICES.items.map((service, index) => (
        <ServiceShortcut
          key={service.key}
          locale={locale}
          service={service}
          base={base}
          className={styles.cell}
          style={{ animationDelay: `${0.9 + index * 0.08}s` }}
        />
      ))}
      <Cross corner="bottom-left" />
      <Cross corner="bottom-right" />
    </nav>
  );
}
