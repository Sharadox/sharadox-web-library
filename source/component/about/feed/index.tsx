import { translate } from "@sharadox/internationalization-web-library/translate";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { FeedProperties } from "@sharadox/sharadox-web-library/component/about/feed/type";

/** The minute each event happened at, after the first one. */
const minute = (index: number) => `09:${String(41 + index).padStart(2, "0")}`;

/**
 * The platform at work, as a live feed: what has just happened ticking in one by one. Some of it done on its own (an
 * order in, the invoice sent, the customer told, the stock updated), some by people through it (John packed the
 * order, Mary loaded the van; their initials stand in for the tick). Meanwhile the place it's being looked at from
 * changes (Lisbon, London, New York, Tokyo). A picture, so it's hidden from assistive technology.
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
            {"by" in event ? <i className={styles.person}>{event.by}</i> : <i className={styles.check} />}
            <span>{event[locale]}</span>
            <time className="monospace">{minute(index)}</time>
          </li>
        ))}
      </ol>
    </div>
  );
}
