import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { Reveal } from "@sharadox/animation-web-library/reveal";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { CONTACT } from "@sharadox/sharadox-web-library/content/contact";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { ContactForm } from "@sharadox/sharadox-web-library/component/contact/form";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { ContactProperties } from "@sharadox/sharadox-web-library/component/contact/type";

/** Contact section: invitation and direct email on the left, the form on the right. */
export function Contact({ locale, action }: ContactProperties) {
  return (
    <Section id={SECTION.contact.id} className={styles.contact}>
      <div className={styles.glow} aria-hidden />
      <Reveal className={styles.heading}>
        <Eyebrow>{translate(SECTION.contact, locale)}</Eyebrow>
        <h2>{translate(CONTACT.title, locale)}</h2>
        <p className={styles.text}>{translate(CONTACT.text, locale)}</p>
        <p className={styles.direct}>
          <span className="monospace">{translate(CONTACT.direct, locale)}</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <ContactForm locale={locale} action={action} />
      </Reveal>
    </Section>
  );
}
