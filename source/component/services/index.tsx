import { Reveal } from "@sharadox/web-library/animation/reveal";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { translate } from "@sharadox/web-library/internationalization/translate";
import { ApplicationVisual } from "@sharadox/sharadox-web-library/component/services/application-visual";
import { Card } from "@sharadox/sharadox-web-library/component/services/card";
import styles from "./index.module.scss";
import { PlatformVisual } from "@sharadox/sharadox-web-library/component/services/platform-visual";
import type { ServicesProperties } from "@sharadox/sharadox-web-library/component/services/type";
import { WebVisual } from "@sharadox/sharadox-web-library/component/services/web-visual";

/** "What we build": websites (wide), platforms and applications, each with a live visual. */
export function Services({ locale }: ServicesProperties) {
  const visuals = {
    web: <WebVisual />,
    platform: <PlatformVisual />,
    applications: <ApplicationVisual locale={locale} />,
  };
  return (
    <Section id="services">
      <SectionHeading eyebrow={translate(SERVICES.eyebrow, locale)} title={translate(SERVICES.title, locale)} />
      <div className={styles.cards}>
        {SERVICES.items.map((service, index) => (
          <Reveal key={service.key} delay={index * 0.1} className={index === 0 ? styles.wide : undefined}>
            <Card
              wide={index === 0}
              visual={visuals[service.key]}
              tag={service.tag}
              title={translate(service.title, locale)}
              lead={translate(service.lead, locale)}
              text={translate(service.text, locale)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
