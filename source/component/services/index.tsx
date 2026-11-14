import { Reveal } from "@sharadox/animation-web-library/reveal";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { ServiceCard } from "@sharadox/sharadox-web-library/component/service-card";
import { ServiceUnlisted } from "@sharadox/sharadox-web-library/component/service-unlisted";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { ServicesProperties } from "@sharadox/sharadox-web-library/component/services/type";

/**
 * "Services": the four groups (Web Applications, Desktop and Mobile Applications, Creative Services, Marketing
 * Campaigns), each a numbered heading over a grid of cards with a 3D object and a button that starts that project, then
 * an invitation for ideas none of them name.
 */
export function Services({ locale }: ServicesProperties) {
  return (
    <Section id={SECTION.services.id} padded={false}>
      <div className={styles.heading}>
        <SectionHeading eyebrow={translate(SERVICES.eyebrow, locale)} title={translate(SERVICES.title, locale)} />
      </div>
      {SERVICES.items.map((service) => (
        <div key={service.key} id={service.key} className={styles.group}>
          <Cross corner="top-left" />
          <Cross corner="top-right" />
          <header className={styles.groupHeading}>
            <span className={`monospace ${styles.number}`}>{service.number}</span>
            <h3>{translate(service.title, locale)}</h3>
            <p>{translate(service.lead, locale)}</p>
          </header>
          {/* The grid item stays put (it carries the hairlines); only its content reveals. */}
          <div className={styles.cards} data-count={service.cards.length}>
            {service.cards.map((card, index) => (
              <div key={card.key}>
                <Reveal delay={(index % 3) * 0.08} className={styles.reveal}>
                  <ServiceCard locale={locale} card={card} wide={service.cards.length === 1} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      ))}
      <ServiceUnlisted locale={locale} />
    </Section>
  );
}
