import { Reveal } from "@sharadox/animation-web-library/reveal";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { Browser } from "@sharadox/sharadox-web-library/component/portfolio/browser";
import { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { PortfolioProperties } from "@sharadox/sharadox-web-library/component/portfolio/type";

/**
 * "Portfolio": the work we've made, each project live on a computer and a phone beside its story and the services we
 * made for it, with filters by service, client and year, and a choice of order.
 */
export function Portfolio({ locale }: PortfolioProperties) {
  return (
    <Section id={SECTION.portfolio.id} padded={false}>
      <div className={styles.heading}>
        <SectionHeading eyebrow={translate(SECTION.portfolio, locale)} title={translate(PORTFOLIO.title, locale)} />
        <Reveal>
          <p className={styles.text}>{translate(PORTFOLIO.text, locale)}</p>
        </Reveal>
      </div>
      <Browser locale={locale} />
    </Section>
  );
}
