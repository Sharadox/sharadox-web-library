import type { CSSProperties } from "react";
import { Icon } from "@sharadox/icon-web-library/icon";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { euros } from "@sharadox/sharadox-web-library/component/about/feed/euros";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { ProjectProperties } from "@sharadox/sharadox-web-library/component/about/feed/project/type";

const { project } = ABOUT.business.feed;

/**
 * One project: its progress (a number and a bar, both going up when the next task is ticked), the checklist around
 * where the job is, and its budget, what's paid of what was quoted.
 */
export function Project({ locale, ticked }: ProjectProperties) {
  const done = project.tasks.done + (ticked ? 1 : 0);
  const progress = Math.round((done / project.tasks.total) * 100);
  const next = project.checklist.findIndex((task) => !task.done);
  return (
    <div className={styles.project}>
      <div className={styles.title}>
        <b>
          {translate(project.name, locale)} · {project.place}
        </b>
        <span className={styles.chip}>{translate(project.status, locale)}</span>
      </div>
      <div className={styles.progress}>
        <span>{translate(project.progress, locale)}</span>
        <b className={styles.percent}>{progress}%</b>
        <i style={{ "--to": `${progress}%` } as CSSProperties} />
        <small className="monospace">
          {done}/{project.tasks.total} {translate(project.tasksLabel, locale)}
        </small>
      </div>
      <ul className={styles.checklist}>
        {project.checklist.map((task, index) => (
          <li
            key={task.en}
            data-target={`task-${index}`}
            data-done={task.done || (ticked && index === next) || undefined}
          >
            <i>
              <Icon name="check" strokeWidth={2.2} />
            </i>
            {task[locale]}
          </li>
        ))}
      </ul>
      <div className={styles.budget} data-target="budget">
        <i style={{ "--to": `${(project.paid / project.quoted) * 100}%` } as CSSProperties} />
        <span>
          {translate(project.paidLabel, locale)} <b>{euros(project.paid, locale)}</b>
        </span>
        <span>
          {translate(project.quotedLabel, locale)} <b>{euros(project.quoted, locale)}</b>
        </span>
      </div>
    </div>
  );
}
