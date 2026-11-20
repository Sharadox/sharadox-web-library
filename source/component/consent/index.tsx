"use client";
import { ConsentPanel } from "@sharadox/consent-web-library/consent-panel";
import { consentCopy } from "@sharadox/consent-web-library/consent-copy";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { CONSENT, CONSENT_CONFIGURATION } from "@sharadox/sharadox-web-library/content/consent";
import styles from "./index.module.scss";
import type { ConsentProperties } from "@sharadox/sharadox-web-library/component/consent/type";

/** The Sharadox cookie panel: the shared consent panel with Sharadox copy, grid marks and a small turning cookie. */
export function Consent({ locale }: ConsentProperties) {
  const copy = consentCopy(CONSENT, locale);
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
