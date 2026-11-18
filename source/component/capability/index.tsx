import type { CSSProperties } from "react";
import { Icon } from "@sharadox/icon-web-library/icon";
import { Reveal } from "@sharadox/animation-web-library/reveal";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { ServiceShortcut } from "@sharadox/sharadox-web-library/component/service-shortcut";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { CAPABILITY } from "@sharadox/sharadox-web-library/content/capability";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { CapabilityProperties } from "@sharadox/sharadox-web-library/component/capability/type";

/**
 * "Capabilities": everything each service group delivers, as columns of a ruled sheet headed by the same shortcuts
 * as under the hero, which stay in view while it scrolls by (shorter columns run on in empty ruled cells), and what always comes with every project.
 */
export function Capability({ locale }: CapabilityProperties) {
  const rows = 1 + Math.max(...SERVICES.items.map((service) => service.capabilities[locale].length));
  return (
    <Section id={SECTION.capabilities.id} padded={false}>
      <div className={styles.heading}>
        <SectionHeading eyebrow={translate(SECTION.capabilities, locale)} title={translate(CAPABILITY.title, locale)} />
      </div>
      <div className={styles.sheet} style={{ "--rows": rows } as CSSProperties}>
        {SERVICES.items.map((service, column) => (
          <div key={service.key} className={styles.column}>
            <ServiceShortcut locale={locale} service={service} className={styles.title} />
            <ul role="list">
              {service.capabilities[locale].map((capability, row, all) => (
                <li key={capability} data-last={row === all.length - 1 || undefined}>
                  <Reveal delay={column * 0.05 + row * 0.04} y={8} blur={0} margin="-5% 0px">
                    {capability}
                  </Reveal>
                </li>
              ))}
              {/* The sheet's empty cells, ruled like the rest, so every column runs to the bottom. */}
              {Array.from({ length: rows - 1 - service.capabilities[locale].length }, (_, row) => (
                <li key={`empty-${row}`} className={styles.empty} aria-hidden />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.included}>
        <h3 className="monospace">{translate(CAPABILITY.included.title, locale)}</h3>
        <ul role="list">
          {CAPABILITY.included.items.map((item) => (
            <li key={item.en}>
              <Icon name="check" strokeWidth={1.8} className={styles.tick} />
              {translate(item, locale)}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
