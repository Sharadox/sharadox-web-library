import { Reveal } from "@sharadox/animation-web-library/reveal";
import { ScrollWords } from "@sharadox/animation-web-library/scroll-word";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { BrandParts } from "@sharadox/sharadox-web-library/component/about/brand-parts";
import { PlatformFlow } from "@sharadox/sharadox-web-library/component/about/platform-flow";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { AboutProperties } from "@sharadox/sharadox-web-library/component/about/type";

/**
 * Between the hero and the services: a sentence that lights up as it scrolls (the brand everywhere online, and the
 * system that runs the business behind it), then its two halves as numbered chapters, each told in one picture.
 * 01, the brand: five tiles of everything customers see. 02, the platform: a flow from the customers, through the
 * platform, to the team, with the owner watching it all live.
 */
export function About({ locale }: AboutProperties) {
  const { brand, platform } = ABOUT;
  return (
    <Section id={SECTION.about.id} className={styles.about}>
      <Eyebrow>{translate(SECTION.about, locale)}</Eyebrow>
      <ScrollWords text={translate(ABOUT.statement, locale)} className={styles.statement} />
      {[
        { chapter: brand, picture: <BrandParts locale={locale} />, key: "brand" },
        { chapter: platform, picture: <PlatformFlow locale={locale} />, key: "platform" },
      ].map(({ chapter, picture, key }) => (
        <div key={key} className={styles.chapter} data-chapter={key}>
          <Reveal className={styles.heading}>
            <span className={`${styles.number} monospace`}>{chapter.number}</span>
            <Eyebrow className={styles.eyebrow}>{translate(chapter.eyebrow, locale)}</Eyebrow>
            <h3 className={styles.title}>{translate(chapter.title, locale)}</h3>
            <p className={styles.text}>{translate(chapter.text, locale)}</p>
          </Reveal>
          <Reveal delay={0.1} className={styles.picture}>
            {picture}
          </Reveal>
        </div>
      ))}
    </Section>
  );
}
