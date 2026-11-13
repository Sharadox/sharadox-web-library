"use client";
import { ConsentPanel } from "@sharadox/consent-web-library/consent-panel";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { CONSENT, CONSENT_CONFIGURATION } from "@sharadox/sharadox-web-library/content/consent";
import styles from "./index.module.scss";
import type { ConsentProperties } from "@sharadox/sharadox-web-library/component/consent/type";

/** The Sharadox cookie panel: the shared consent panel with Sharadox copy, grid marks and a small turning cookie. */
export function Consent({ locale }: ConsentProperties) {
  const copy = {
    title: translate(CONSENT.title, locale),
    text: translate(CONSENT.text, locale),
    acceptAll: translate(CONSENT.acceptAll, locale),
    acknowledge: translate(CONSENT.acknowledge, locale),
    details: translate(CONSENT.details, locale),
    deny: translate(CONSENT.deny, locale),
    customize: translate(CONSENT.customize, locale),
    save: translate(CONSENT.save, locale),
    back: translate(CONSENT.back, locale),
    close: translate(CONSENT.close, locale),
    alwaysOn: translate(CONSENT.alwaysOn, locale),
    categories: Object.fromEntries(
      Object.entries(CONSENT.categories).map(([key, category]) => [
        key,
        { title: translate(category.title, locale), text: translate(category.text, locale) },
      ]),
    ),
  };
  return (
    <ConsentPanel
      configuration={CONSENT_CONFIGURATION}
      copy={copy}
      className={styles.consent}
      icon={
        <span className={styles.cookie} aria-hidden>
          <i />
          <i />
          <i />
        </span>
      }
      decoration={
        <>
          <Cross corner="top-left" />
          <Cross corner="top-right" />
        </>
      }
    />
  );
}
