import { Reveal } from "@sharadox/web-library/animation/reveal";
import { translate } from "@sharadox/web-library/internationalization/translate";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { CAPABILITY } from "@sharadox/sharadox-web-library/content/capability";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import styles from "./index.module.scss";
import type { CapabilityProperties } from "@sharadox/sharadox-web-library/component/capability/type";

/** "Capabilities": every deliverable of every discipline, as columns of a ruled sheet. */
export function Capability({ locale }: CapabilityProperties) {
  return (
    <Section id="capabilities" padded={false}>
      <div className={styles.heading}>
        <SectionHeading eyebrow={translate(CAPABILITY.eyebrow, locale)} title={translate(CAPABILITY.title, locale)} />
      </div>
      <div className={styles.sheet}>
        {SERVICES.items.map((service, column) => (
          <div key={service.key} className={styles.column}>
            <a href={`#${service.key}`} className={styles.title}>
              <span className="monospace">{service.number}</span>
              {translate(service.title, locale)}
            </a>
            <ul>
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
