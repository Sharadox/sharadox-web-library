import type { CSSProperties } from "react";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { euros } from "@sharadox/sharadox-web-library/component/about/feed/euros";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { ClientProperties } from "@sharadox/sharadox-web-library/component/about/feed/client/type";

const { client } = ABOUT.business.feed;

/**
 * One client, at a glance: a ring of what she has paid of everything quoted, a bar per project sized by its amount,
 * and her tasks, done against still to do.
 */
export function Client({ locale }: ClientProperties) {
  const paid = Math.round((client.paid / client.quoted) * 100);
  const largest = Math.max(...client.projects.map((project) => project.amount));
  const done = client.tasks.done;
  const left = client.tasks.total - done;
  return (
    <div className={styles.client}>
      <div className={styles.title}>
        <span className={styles.avatar}>{client.initials}</span>
        <span>
          <b>{client.name}</b>
          <small>{translate(client.since, locale)}</small>
        </span>
      </div>
      <div className={styles.money}>
        <div className={styles.ring} data-target="donut">
          <svg viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" pathLength="100" />
            <circle cx="40" cy="40" r="32" pathLength="100" strokeDasharray={`${paid} 100`} />
          </svg>
          <b>{paid}%</b>
        </div>
        <dl>
          <div>
            <dt>
              <i data-paid />
              {translate(client.paidLabel, locale)}
            </dt>
            <dd>{euros(client.paid, locale)}</dd>
          </div>
          <div>
            <dt>
              <i />
              {translate(client.quotedLabel, locale)}
            </dt>
            <dd>{euros(client.quoted, locale)}</dd>
          </div>
        </dl>
      </div>
      <div className={styles.projects}>
        <span className={`monospace ${styles.label}`}>{translate(client.projectsLabel, locale)}</span>
        {client.projects.map((project, index) => (
          <div key={project.en} className={styles.bar} data-target={`project-${index}`}>
            <span>
              {project[locale]} <small>{project.year}</small>
            </span>
            <i style={{ "--to": `${(project.amount / largest) * 100}%` } as CSSProperties} />
            <b>{euros(project.amount, locale)}</b>
          </div>
        ))}
      </div>
      <div className={styles.tasks} data-target="tasks">
        <span className={`monospace ${styles.label}`}>{translate(client.tasksLabel, locale)}</span>
        <i style={{ "--to": `${(done / client.tasks.total) * 100}%` } as CSSProperties} />
        <span>
          <b>{done}</b> {translate(client.doneLabel, locale)} · <b>{left}</b> {translate(client.leftLabel, locale)}
        </span>
      </div>
    </div>
  );
}
