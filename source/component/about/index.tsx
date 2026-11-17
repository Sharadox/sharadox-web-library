import { Reveal } from "@sharadox/animation-web-library/reveal";
import { ScrollWords } from "@sharadox/animation-web-library/scroll-word";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { Feed } from "@sharadox/sharadox-web-library/component/about/feed";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { AboutProperties } from "@sharadox/sharadox-web-library/component/about/type";

/**
 * Between the hero and the services: a sentence that lights up as it scrolls (the brand everywhere online, and the
 * system that runs the business behind it), then the two halves of it. The brand, online, on the left; the platform
 * that runs the business, given the most room, on the right, with its live feed: the platform and the team at work.
 */
export function About({ locale }: AboutProperties) {
  const { brand, business } = ABOUT;
  return (
    <Section id={SECTION.about.id} className={styles.about}>
      <Eyebrow>{translate(SECTION.about, locale)}</Eyebrow>
      <ScrollWords text={translate(ABOUT.statement, locale)} className={styles.statement} />
      <div className={styles.panels}>
        <Reveal className={styles.brand}>
          <Eyebrow>{translate(brand.eyebrow, locale)}</Eyebrow>
          <h3>{translate(brand.title, locale)}</h3>
          <p>{translate(brand.text, locale)}</p>
          <ul className={styles.parts}>
            {brand.parts[locale].map((part) => (
              <li key={part}>{part}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className={styles.business}>
          <div className={styles.copy}>
            <Eyebrow>{translate(business.eyebrow, locale)}</Eyebrow>
            <h3>{translate(business.title, locale)}</h3>
            <p>{translate(business.text, locale)}</p>
            <ul className={styles.points}>
              {business.points.map((point) => (
                <li key={point.title.en}>
                  <b>{translate(point.title, locale)}</b>
                  <span>{translate(point.text, locale)}</span>
                </li>
              ))}
            </ul>
          </div>
          <Feed locale={locale} />
        </Reveal>
      </div>
    </Section>
  );
}
