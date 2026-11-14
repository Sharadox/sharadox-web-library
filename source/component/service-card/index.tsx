"use client";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { useSpotlight } from "@sharadox/pointer-web-library/spotlight";
import { useTilt } from "@sharadox/pointer-web-library/tilt";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { ServiceObject } from "@sharadox/sharadox-web-library/component/service-object";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import { requestContactNeeds } from "@sharadox/sharadox-web-library/utility/contact-need";
import styles from "./index.module.scss";
import type { ServiceCardProperties } from "@sharadox/sharadox-web-library/component/service-card/type";

/**
 * One service: its 3D object (which turns towards the pointer anywhere on the card), name, description, and a button
 * that scrolls to the contact form with this service ticked. A soft light follows the pointer.
 *
 * @example
 * <ServiceCard locale="en" card={SERVICES.items[0].cards[0]} />
 */
export function ServiceCard({ locale, card }: ServiceCardProperties) {
  const spotlight = useSpotlight<HTMLElement>();
  const tilt = useTilt<HTMLDivElement>(16);
  return (
    <article ref={spotlight} className={styles.card}>
      <div ref={tilt} className={styles.inner}>
        <div className={styles.visual}>
          <ServiceObject kind={card.key} />
        </div>
        <div className={styles.copy}>
          <h4>{translate(card.title, locale)}</h4>
          <p>{translate(card.text, locale)}</p>
          <Button
            href={`#${SECTION.contact.id}`}
            size="small"
            arrow
            className={styles.action}
            onClick={() => requestContactNeeds([card.key])}
          >
            {translate(card.action, locale)}
          </Button>
        </div>
      </div>
    </article>
  );
}
