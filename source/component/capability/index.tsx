import type { CSSProperties } from "react";
import { Reveal } from "@sharadox/animation-web-library/reveal";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { CAPABILITY } from "@sharadox/sharadox-web-library/content/capability";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { CapabilityProperties } from "@sharadox/sharadox-web-library/component/capability/type";

/** "Capabilities": everything each service group delivers, as columns of a ruled sheet. */
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
            <a href={`#${service.key}`} className={styles.title}>
              <span className="monospace">{service.number}</span>
              {translate(service.title, locale)}
            </a>
            <ul role="list">
              {service.capabilities[locale].map((capability, row) => (
                <li key={capability}>
                  <Reveal delay={column * 0.05 + row * 0.04} y={8} blur={0} margin="-5% 0px">
                    {capability}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
