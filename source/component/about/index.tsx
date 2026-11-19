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
 * system that runs the business behind it), then the two halves of it, one row each across the frame. The brand,
 * online: what it is, and the five things it's made of in a numbered row. Then, given the most room, the platform
 * that runs the business: what it is beside its live feed (the platform and the team at work), and its three
 * promises in a row under both.
 */
export function About({ locale }: AboutProperties) {
  const { brand, business } = ABOUT;
  return (
    <Section id={SECTION.about.id} className={styles.about}>
      <Eyebrow>{translate(SECTION.about, locale)}</Eyebrow>
      <ScrollWords text={translate(ABOUT.statement, locale)} className={styles.statement} />
      <div className={styles.panels}>
        <Reveal className={styles.brand}>
          <div className={styles.copy}>
            <Eyebrow>{translate(brand.eyebrow, locale)}</Eyebrow>
            <h3>{translate(brand.title, locale)}</h3>
            <p>{translate(brand.text, locale)}</p>
          </div>
          <ol className={styles.parts}>
            {brand.parts[locale].map((part) => (
              <li key={part}>{part}</li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={0.1} className={styles.business}>
          <div className={styles.copy}>
            <Eyebrow>{translate(business.eyebrow, locale)}</Eyebrow>
            <h3>{translate(business.title, locale)}</h3>
            <p>{translate(business.text, locale)}</p>
          </div>
          <Feed locale={locale} className={styles.feed} />
          <ul className={styles.points}>
            {business.points.map((point) => (
              <li key={point.title.en}>
                <b>{translate(point.title, locale)}</b>
                <span>{translate(point.text, locale)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
