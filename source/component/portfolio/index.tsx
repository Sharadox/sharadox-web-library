import { Reveal } from "@sharadox/animation-web-library/reveal";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Project } from "@sharadox/sharadox-web-library/component/portfolio/project";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { PortfolioProperties } from "@sharadox/sharadox-web-library/component/portfolio/type";

/**
 * "Portfolio": the work we've made, newest first. Each project shows its first screen on a computer and a phone
 * beside its story, its details and the services we made for it, and leads to its own page.
 */
export function Portfolio({ locale }: PortfolioProperties) {
  return (
    <Section id={SECTION.portfolio.id} padded={false}>
      <div className={styles.heading}>
        <SectionHeading
          eyebrow={translate(SECTION.portfolio, locale)}
          title={translate(PORTFOLIO.title, locale)}
          text={translate(PORTFOLIO.text, locale)}
        />
      </div>
      {PORTFOLIO.projects.map((project, index) => (
        <Reveal key={project.key}>
          <Project project={project} index={index} locale={locale} />
        </Reveal>
      ))}
    </Section>
  );
}
