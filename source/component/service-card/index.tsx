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
 * that scrolls to the contact form with this service ticked, and its `points` when it has them. A soft light follows
 * the pointer. A `wide` card puts the object beside the words.
 *
 * @example
 * <ServiceCard locale="en" card={SERVICES.items[0].cards[0]} />
 */
export function ServiceCard({ locale, card, wide = false }: ServiceCardProperties) {
  const spotlight = useSpotlight<HTMLElement>();
  const tilt = useTilt<HTMLDivElement>(16);
  return (
    <article ref={spotlight} className={styles.card} data-wide={wide || undefined}>
      <div ref={tilt} className={styles.inner}>
        <div className={styles.visual}>
          <ServiceObject kind={card.key} />
        </div>
        <div className={styles.copy}>
          <h4>{translate(card.title, locale)}</h4>
          <p>{translate(card.text, locale)}</p>
          {"points" in card && (
            <ol className={styles.points}>
              {card.points.map((point, index) => (
                <li key={point.title.en}>
                  <span className="monospace">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{translate(point.title, locale)}</strong>
                  <span>{translate(point.text, locale)}</span>
                </li>
              ))}
            </ol>
          )}
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
