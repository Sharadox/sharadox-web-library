import { translate } from "@sharadox/internationalization-web-library/translate";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { FeedProperties } from "@sharadox/sharadox-web-library/component/about/feed/type";

/** The minute each event happened at, after the first one. */
const minute = (index: number) => `09:${String(41 + index).padStart(2, "0")}`;

/**
 * The platform at work, as a live feed: what it has just done on its own (an order in, the invoice sent, the stock
 * updated, the customer told, tomorrow's bookings confirmed) ticking in one by one, while the place it's being
 * looked at from changes (Lisbon, London, New York, Tokyo). A picture, so it's hidden from assistive technology.
 */
export function Feed({ locale }: FeedProperties) {
  const { feed } = ABOUT.business;
  return (
    <div className={styles.feed} aria-hidden>
      <div className={styles.header}>
        <span className={styles.live}>
          <i />
          {translate(feed.live, locale)}
        </span>
        <span className={styles.viewing}>
          {translate(feed.viewing, locale)}
          <span className={styles.places}>
            {feed.places[locale].map((place) => (
              <b key={place}>{place}</b>
            ))}
          </span>
        </span>
      </div>
      <ol className={styles.events}>
        {feed.events.map((event, index) => (
          <li key={event.en}>
            <i className={styles.check} />
            <span>{translate(event, locale)}</span>
            <time className="monospace">{minute(index)}</time>
          </li>
        ))}
      </ol>
    </div>
  );
}
