"use client";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { requestContactNeeds } from "@sharadox/sharadox-web-library/utility/contact-need";
import styles from "./index.module.scss";
import type { ServiceUnlistedProperties } from "@sharadox/sharadox-web-library/component/service-unlisted/type";

/**
 * After the services and everything they include (the capabilities), for ideas that fit none of them: an invitation
 * to talk, in a section of its own, whose button goes to the contact form with "What I need is not listed" ticked.
 *
 * @example
 * <ServiceUnlisted locale="en" />
 */
export function ServiceUnlisted({ locale }: ServiceUnlistedProperties) {
  return (
    <Section className={styles.unlisted} padded={false}>
      <div className={styles.copy}>
        <h2>{translate(SERVICES.unlisted.title, locale)}</h2>
        <p>{translate(SERVICES.unlisted.text, locale)}</p>
      </div>
      <Button href={`#${SECTION.contact.id}`} arrow onClick={() => requestContactNeeds(["not-listed"])}>
        {translate(SERVICES.unlisted.action, locale)}
      </Button>
    </Section>
  );
}
