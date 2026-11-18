import type { CSSProperties } from "react";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { FeedProperties } from "@sharadox/sharadox-web-library/component/about/feed/type";

/** The minute each event happened at, after the first one. */
const minute = (index: number) => `09:${String(41 + index).padStart(2, "0")}`;

/** An amount in euros, the way the language writes it ("€18,400", "18 400 €"). */
const euros = (amount: number, locale: string) =>
  new Intl.NumberFormat(locale === "pt" ? "pt-PT" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);

/**
 * The platform at work, as a panel with three tabs that take turns (activity, a project, a client), under its live
 * header (the place it's being looked at from changes: Lisbon, London, New York, Tokyo).
 *
 * - **Activity:** what has just happened, ticking in one by one. Some of it done on its own (an order in, the invoice
 *   sent, the customer told, the stock updated), some by people through it (John packed the order, Mary loaded the
 *   van; their initials stand in for the tick).
 * - **Project:** one of the business's projects: its progress, tasks, milestones, and what was quoted and paid.
 * - **Client:** that project's client: what they've spent, what's quoted, and their projects so far.
 *
 * A picture, so it's hidden from assistive technology.
 */
export function Feed({ locale }: FeedProperties) {
  const { feed } = ABOUT.business;
  const { project, client } = feed;
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
      <div className={styles.tabs}>
        {feed.tabs.map((tab) => (
          <span key={tab.en}>{translate(tab, locale)}</span>
        ))}
        <i className={styles.underline} />
      </div>
      <div className={styles.panes}>
        <ol className={styles.events}>
          {feed.events.map((event, index) => (
            <li key={event.en}>
              {"by" in event ? <i className={styles.person}>{event.by}</i> : <i className={styles.check} />}
              <span>{event[locale]}</span>
              <time className="monospace">{minute(index)}</time>
            </li>
          ))}
        </ol>
        <div className={styles.project}>
          <div className={styles.title}>
            <b>
              {translate(project.name, locale)} · {project.client}
            </b>
            <span className={styles.chip}>{translate(project.status, locale)}</span>
          </div>
          <div className={styles.meter}>
            <span>{translate(project.progressLabel, locale)}</span>
            <b>{project.progress}%</b>
            <i style={{ "--to": `${project.progress}%` } as CSSProperties} />
          </div>
          <ul className={styles.milestones}>
            {project.milestones.map((milestone) => (
              <li key={milestone.en} data-state={milestone.state}>
                <i />
                {milestone[locale]}
              </li>
            ))}
          </ul>
          <div className={styles.figures}>
            <span>
              {translate(project.tasksLabel, locale)}
              <b>
                {project.tasks.done}/{project.tasks.total}
              </b>
            </span>
            <span>
              {translate(project.quotedLabel, locale)}
              <b>{euros(project.quoted, locale)}</b>
            </span>
            <span>
              {translate(project.paidLabel, locale)}
              <b>{euros(project.paid, locale)}</b>
            </span>
          </div>
        </div>
        <div className={styles.client}>
          <div className={styles.title}>
            <span className={styles.avatar}>{client.initials}</span>
            <span>
              <b>{client.name}</b>
              <small>{translate(client.since, locale)}</small>
            </span>
          </div>
          <div className={styles.figures}>
            <span>
              {translate(client.spentLabel, locale)}
              <b>{euros(client.spent, locale)}</b>
            </span>
            <span>
              {translate(client.openLabel, locale)}
              <b>{euros(client.open, locale)}</b>
            </span>
          </div>
          <span className={styles.label}>{translate(client.projectsLabel, locale)}</span>
          <ul className={styles.history}>
            {client.projects.map((past) => (
              <li key={past.en} data-state={past.state}>
                <i />
                <span>
                  {past[locale]} <small>{past.year}</small>
                </span>
                <b>{euros(past.amount, locale)}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
