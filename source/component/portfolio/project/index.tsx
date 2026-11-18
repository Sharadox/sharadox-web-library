import { translate } from "@sharadox/internationalization-web-library/translate";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { Screens } from "@sharadox/sharadox-web-library/component/portfolio/screens";
import { serviceName } from "@sharadox/sharadox-web-library/component/portfolio/select-projects";
import { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";
import styles from "./index.module.scss";
import type { ProjectProperties } from "@sharadox/sharadox-web-library/component/portfolio/project/type";

/** The month a project went live, the way the language says it ("November 2026", "novembro de 2026"). */
const month = (date: string, locale: string) =>
  new Intl.DateTimeFormat(locale === "pt" ? "pt-PT" : "en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

/**
 * One project: the live site on a computer and a phone beside its story: number, launch month, client, headline,
 * what it is, its details, chips of the services we made for it, and a link to visit it.
 */
export function Project({ project, index, locale }: ProjectProperties) {
  const { details } = PORTFOLIO;
  const launched = month(project.date, locale);
  return (
    <article className={styles.project} aria-labelledby={`project-${project.key}`}>
      <Screens project={project} label={`${project.client} ${translate(PORTFOLIO.screens, locale)}`} />
      <div className={styles.story}>
        <p className={`monospace ${styles.top}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <time dateTime={project.date}>{launched}</time>
        </p>
        <h3 id={`project-${project.key}`}>
          <span className={styles.client}>{project.client}</span>
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
        <Button href={project.url} variant="ghost" arrow className={styles.visit}>
          {translate(PORTFOLIO.visit, locale)}
        </Button>
      </div>
    </article>
  );
}
