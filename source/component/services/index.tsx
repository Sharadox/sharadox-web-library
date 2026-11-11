import type { ReactNode } from "react";
import { Reveal } from "@sharadox/animation-web-library/reveal";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { CampaignVisual } from "@sharadox/sharadox-web-library/component/services/campaign-visual";
import { Cell } from "@sharadox/sharadox-web-library/component/services/cell";
import { DesignVisual } from "@sharadox/sharadox-web-library/component/services/design-visual";
import { MobileVisual } from "@sharadox/sharadox-web-library/component/services/mobile-visual";
import { PlatformVisual } from "@sharadox/sharadox-web-library/component/services/platform-visual";
import { SocialVisual } from "@sharadox/sharadox-web-library/component/services/social-visual";
import { WebVisual } from "@sharadox/sharadox-web-library/component/services/web-visual";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import type { ServiceKey } from "@sharadox/sharadox-web-library/content/services";
import styles from "./index.module.scss";
import type { ServicesProperties } from "@sharadox/sharadox-web-library/component/services/type";

/** "What we do": the five disciplines as cells of one grid, each with a live visual. */
export function Services({ locale }: ServicesProperties) {
  const visuals: Record<ServiceKey, ReactNode> = {
    "web-application": (
      <div className={styles.split}>
        <WebVisual />
        <PlatformVisual />
      </div>
    ),
    "mobile-application": <MobileVisual locale={locale} />,
    "graphic-design": <DesignVisual />,
    "social-media": <SocialVisual locale={locale} />,
    "marketing-campaign": <CampaignVisual locale={locale} />,
  };
  return (
    <Section id="services" padded={false}>
      <div className={styles.heading}>
        <SectionHeading eyebrow={translate(SERVICES.eyebrow, locale)} title={translate(SERVICES.title, locale)} />
      </div>
      <div className={styles.grid}>
        <Cross corner="top-left" />
        <Cross corner="top-right" />
        {SERVICES.items.map((service, index) => (
          // The grid item stays put (it carries the hairlines); only its content reveals.
          <div key={service.key} className={styles[service.key]}>
            <Reveal delay={(index % 3) * 0.08} className={styles.reveal}>
              <Cell
                id={service.key}
                visual={visuals[service.key]}
                number={service.number}
                kinds={service.kinds[locale]}
                title={translate(service.title, locale)}
                lead={translate(service.lead, locale)}
                text={translate(service.text, locale)}
              />
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
