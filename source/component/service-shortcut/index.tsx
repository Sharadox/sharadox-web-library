import { SectionLink } from "@sharadox/scroll-web-library/section-link";
import { Icon } from "@sharadox/icon-web-library/icon";
import { classNames } from "@sharadox/web-library/class-name";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { separate } from "@sharadox/sharadox-web-library/utility/separate";
import styles from "./index.module.scss";
import type { ServiceShortcutProperties } from "@sharadox/sharadox-web-library/component/service-shortcut/type";

/**
 * A shortcut to one service group: its number, its name, its kinds, and a chevron that drops in on hover, over a soft
 * glow. The same button under the hero and at the head of each capabilities column.
 */
export function ServiceShortcut({ locale, service, base = "", className, style }: ServiceShortcutProperties) {
  return (
    <SectionLink href={`${base}#${service.key}`} className={classNames(styles.shortcut, className)} style={style}>
      <span className={`${styles.number} monospace`}>{service.number}</span>
      <span className={styles.title}>{translate(service.title, locale)}</span>
      <span className={`${styles.kinds} monospace`}>{separate(...service.kinds[locale])}</span>
      <Icon name="chevron-down" className={styles.arrow} strokeWidth={1.8} />
    </SectionLink>
  );
}
