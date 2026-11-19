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
import { newTab } from "@sharadox/web-library/navigation/new-tab";

/** Contact section: the invitation on the left and the direct email on the right, the form across both under them. */
export function Contact({ locale, action }: ContactProperties) {
  return (
    <Section id={SECTION.contact.id} className={styles.contact}>
      <div className={styles.glow} aria-hidden />
      <Reveal className={styles.heading}>
        <Eyebrow>{translate(SECTION.contact, locale)}</Eyebrow>
        <h2>{translate(CONTACT.title, locale)}</h2>
        <p className={styles.text}>{translate(CONTACT.text, locale)}</p>
      </Reveal>
      <Reveal delay={0.05} className={styles.direct}>
        <span className="monospace">{translate(CONTACT.direct, locale)}</span>
        <a href={`mailto:${SITE.email}`} {...newTab(`mailto:${SITE.email}`)}>
          {SITE.email}
        </a>
      </Reveal>
      <Reveal delay={0.1} className={styles.form}>
        <ContactForm locale={locale} action={action} />
      </Reveal>
    </Section>
  );
}
