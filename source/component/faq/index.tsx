import { StructuredData } from "@sharadox/metadata-web-library/structured-data";
import { structuredDataGraph } from "@sharadox/metadata-web-library/structured-data-graph";
import { Icon } from "@sharadox/icon-web-library/icon";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { FAQ } from "@sharadox/sharadox-web-library/content/faq";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import styles from "./index.module.scss";
import type { FaqProperties } from "@sharadox/sharadox-web-library/component/faq/type";

/**
 * "Questions": the heading and a way to ask anything else on the left, the questions on the right, each opening to
 * its answer. Native disclosure elements (`details`), so they open with a keyboard, a tap or the page's search
 * (find in page opens the one that matches), with no script. The same questions and answers go to search engines as
 * an FAQ page, here, on the page that shows them.
 */
export function Faq({ locale }: FaqProperties) {
  const data = structuredDataGraph({
    "@type": "FAQPage",
    "@id": `${SITE.url}/${locale}#${SECTION.faq.id}`,
    inLanguage: LOCALES.languageTag(locale),
    mainEntity: FAQ.items.map((item) => ({
      "@type": "Question",
      name: translate(item.question, locale),
      acceptedAnswer: { "@type": "Answer", text: translate(item.answer, locale) },
    })),
  });
  return (
    <Section id={SECTION.faq.id} className={styles.faq}>
      <StructuredData data={data} />
      <div className={styles.aside}>
        <SectionHeading eyebrow={translate(SECTION.faq, locale)} title={translate(FAQ.title, locale)} />
        <p>{translate(FAQ.more.text, locale)}</p>
        <Button href={`#${SECTION.contact.id}`} variant="ghost" arrow>
          {translate(FAQ.more.action, locale)}
        </Button>
      </div>
      <div className={styles.list}>
        {FAQ.items.map((item) => (
          <details key={item.question.en} className={styles.item}>
            <summary>
              {translate(item.question, locale)}
              <Icon name="chevron-down" strokeWidth={1.8} className={styles.chevron} />
            </summary>
            <p>{translate(item.answer, locale)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
