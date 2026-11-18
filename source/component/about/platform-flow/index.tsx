import { Fragment, type CSSProperties } from "react";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { PlatformFlowProperties } from "@sharadox/sharadox-web-library/component/about/platform-flow/type";

/**
 * How a platform runs a business, as a flow read left to right (top to bottom on phones): the customers' steps, the
 * platform's own (the one that matters most, lit), the team's on their phone, each ticking off in turn while a pulse
 * travels between them; under it all, the owner, watching live from wherever they are.
 */
export function PlatformFlow({ locale }: PlatformFlowProperties) {
  const { lanes, you } = ABOUT.platform;
  // Every step's place in the whole flow, so they tick off one after another, lane after lane.
  const offsets = lanes.map((_, index) => lanes.slice(0, index).reduce((sum, lane) => sum + lane.steps.length, 0));
  return (
    <div className={styles.flow}>
      <div className={styles.lanes}>
        {lanes.map((lane, index) => (
          <Fragment key={lane.key}>
            {index > 0 && (
              <span className={styles.link} aria-hidden>
                <i />
              </span>
            )}
            <section className={styles.lane} data-lane={lane.key} aria-label={translate(lane.title, locale)}>
              <header className={styles.header}>
                <span className={styles.badge} aria-hidden />
                <span>
                  <b>{translate(lane.title, locale)}</b>
                  <span className={styles.note}>{translate(lane.note, locale)}</span>
                </span>
              </header>
              <ol className={styles.steps}>
                {lane.steps.map((step, position) => (
                  <li key={step.en} style={{ "--order": offsets[index]! + position } as CSSProperties}>
                    <i className={styles.tick} aria-hidden />
                    {translate(step, locale)}
                  </li>
                ))}
              </ol>
            </section>
          </Fragment>
        ))}
      </div>
      <div className={styles.you}>
        <span className={styles.live}>
          <i aria-hidden />
          {translate(you.live, locale)}
        </span>
        <b>{translate(you.title, locale)}</b>
        <span className={styles.text}>{translate(you.text, locale)}</span>
        <span className={styles.places} aria-hidden>
          {you.places[locale].map((place) => (
            <span key={place}>{place}</span>
          ))}
        </span>
      </div>
    </div>
  );
}
