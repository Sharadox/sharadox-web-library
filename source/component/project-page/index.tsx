import { Reveal } from "@sharadox/animation-web-library/reveal";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { launchDate } from "@sharadox/sharadox-web-library/component/portfolio/launch-date";
import { Screens } from "@sharadox/sharadox-web-library/component/portfolio/screens";
import { serviceName } from "@sharadox/sharadox-web-library/component/portfolio/service-name";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { Chapter } from "@sharadox/sharadox-web-library/component/project-page/chapter";
import { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import { projectAnchor } from "@sharadox/sharadox-web-library/utility/project-anchor";
import styles from "./index.module.scss";
import type { ProjectPageProperties } from "@sharadox/sharadox-web-library/component/project-page/type";

/**
 * A project's own page. It opens with the project's name and the headline, the whole story, the details, the services we
 * made, and the first screen on a computer and a phone. Then a word on what follows: a few of the parts we're proudest
 * of, chapter by chapter, each explained (what it is, how it works) and then running live in a window, the website's
 * own components, across the whole width of the page as on the site itself. At the end, "See It Live": the site
 * itself, in a new tab, and the way back to the project's button in the portfolio.
 *
 * @example
 * <ProjectPage project={PORTFOLIO.projects[0]} locale="en" chapters={{ hero: <Hero locale="en" /> }} />
 */
export function ProjectPage({ project, locale, chapters }: ProjectPageProperties) {
  const { details, page } = PORTFOLIO;
  const domain = new URL(project.url).host;
  const shown = project.chapters.filter((chapter) => chapters[chapter.key]);
  return (
    <article className={styles.page}>
      <Section className={styles.intro} padded={false}>
        <Reveal className={styles.copy}>
          <Eyebrow>
            {translate(SECTION.portfolio, locale)} · {launchDate(project.date, locale)}
          </Eyebrow>
          <h1>
            <span className={styles.client}>{project.title}</span>
            {translate(project.name, locale)}
          </h1>
          <p className={styles.story}>{translate(project.story, locale)}</p>
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
              <dd>{launchDate(project.date, locale)}</dd>
            </div>
          </dl>
          <div className={styles.services}>
            <span className="monospace">{translate(details.services, locale)}</span>
            <ul>
              {project.services.map((service) => (
                <li key={service}>{serviceName(service, locale)}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Screens project={project} label={`${project.client} ${translate(PORTFOLIO.screens, locale)}`} priority />
      </Section>
      <Section className={styles.lead}>
        <Eyebrow>{translate(page.intro.eyebrow, locale)}</Eyebrow>
        <p className={styles.leadText}>{translate(page.intro.text, locale)}</p>
      </Section>
      {shown.map((chapter, index) => (
        <Chapter
          key={chapter.key}
          number={index + 1}
          title={translate(chapter.title, locale)}
          text={translate(chapter.text, locale)}
          points={chapter.points.map((point) => translate(point, locale))}
          detailsLabel={translate(page.details, locale)}
          live={`${translate(page.live, locale)} · ${domain}`}
        >
          {chapters[chapter.key]}
        </Chapter>
      ))}
      <Section className={styles.end}>
        <h2>{translate(page.visitTitle, locale)}</h2>
        <div className={styles.actions}>
          <Button href={project.url} arrow>
            {translate(page.visit, locale)} {domain}
          </Button>
          <Button href={`/${locale}#${projectAnchor(project.key)}`} variant="ghost">
            {translate(page.back, locale)}
          </Button>
        </div>
      </Section>
    </article>
  );
}
