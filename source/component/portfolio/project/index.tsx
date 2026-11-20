import { translate } from "@sharadox/internationalization-web-library/translate";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { Screens } from "@sharadox/sharadox-web-library/component/portfolio/screens";
import { launchDate } from "@sharadox/sharadox-web-library/component/portfolio/launch-date";
import { serviceName } from "@sharadox/sharadox-web-library/component/portfolio/service-name";
import { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";
import { projectAnchor } from "@sharadox/sharadox-web-library/utility/project-anchor";
import styles from "./index.module.scss";
import type { ProjectProperties } from "@sharadox/sharadox-web-library/component/portfolio/project/type";
import { twoDigits } from "@sharadox/web-library/text/two-digit";

/**
 * One project: its first screen on a computer and a phone beside its story: number, launch day, client, headline,
 * what it is, its details, chips of the services we made for it, and the way to its own page.
 */
export function Project({ project, index, locale }: ProjectProperties) {
  const { details } = PORTFOLIO;
  const launched = launchDate(project.date, locale);
  return (
    <article className={styles.project} aria-labelledby={`project-${project.key}`}>
      <Screens project={project} label={`${project.client} ${translate(PORTFOLIO.screens, locale)}`} />
      <div className={styles.story}>
        <p className={`monospace ${styles.top}`}>
          <span>{twoDigits(index + 1)}</span>
          <time dateTime={project.date}>{launched}</time>
        </p>
        <h3 id={`project-${project.key}`}>
          <span className={styles.client}>{project.title}</span>
          {translate(project.name, locale)}
        </h3>
        <p className={styles.text}>{translate(project.text, locale)}</p>
        <dl className={styles.details}>
          <div>
            <dt>{translate(details.client, locale)}</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>{translate(details.place, locale)}</dt>
            <dd>{translate(project.place, locale)}</dd>
          </div>
          <div>
            <dt>{translate(details.launched, locale)}</dt>
            <dd>{launched}</dd>
          </div>
        </dl>
        <div className={styles.services}>
          <span className={`monospace ${styles.label}`}>{translate(details.services, locale)}</span>
          <ul>
            {project.services.map((service) => (
              <li key={service}>{serviceName(service, locale)}</li>
            ))}
          </ul>
        </div>
        <Button
          id={projectAnchor(project.key)}
          href={`/${locale}${PORTFOLIO.path}/${project.key}`}
          arrow
          className={styles.open}
        >
          {translate(PORTFOLIO.open, locale)}
        </Button>
      </div>
    </article>
  );
}
