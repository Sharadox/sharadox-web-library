"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { translate } from "@sharadox/web-library/internationalization/translate";
import { CONSENT_OPEN_EVENT, requiredOnly } from "@sharadox/web-library/privacy/consent";
import { useConsent } from "@sharadox/web-library/privacy/use-consent";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { Toggle } from "@sharadox/sharadox-web-library/component/consent/toggle";
import { CONSENT, CONSENT_CONFIGURATION } from "@sharadox/sharadox-web-library/content/consent";
import styles from "./index.module.scss";
import type { ConsentProperties } from "@sharadox/sharadox-web-library/component/consent/type";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The cookie panel. It shows while there is no stored answer: Accept All and manual choices are kept for good;
 * Deny lasts only for this visit, so the visitor is asked again next time. "Cookie Preferences" reopens it.
 */
export function Consent({ locale }: ConsentProperties) {
  const { status, acceptAll, deny, save } = useConsent(CONSENT_CONFIGURATION);
  const [reopened, setReopened] = useState(false);
  const [manual, setManual] = useState(false);
  const [granted, setGranted] = useState<Record<string, boolean>>(() => requiredOnly(CONSENT_CONFIGURATION));

  useEffect(() => {
    const open = () => {
      const current = status?.kind === "decided" ? status.record.granted : requiredOnly(CONSENT_CONFIGURATION);
      setGranted({ ...current });
      setManual(true);
      setReopened(true);
    };
    addEventListener(CONSENT_OPEN_EVENT, open);
    return () => removeEventListener(CONSENT_OPEN_EVENT, open);
  }, [status]);

  const visible = reopened || status?.kind === "unknown";
  const close = (action: () => void) => () => {
    action();
    setReopened(false);
    setManual(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          key="consent"
          className={styles.consent}
          role="dialog"
          aria-labelledby="consent-title"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          transition={{ duration: 0.7, delay: reopened ? 0 : 0.8, ease: EASE }}
        >
          <Cross corner="top-left" />
          <Cross corner="top-right" />
          <div className={styles.header}>
            <span className={styles.cookie} aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <h2 id="consent-title">{translate(CONSENT.title, locale)}</h2>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            {manual ? (
              <motion.div
                key="manual"
                className={styles.categories}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                {CONSENT_CONFIGURATION.categories.map((category) => (
                  <Toggle
                    key={category.key}
                    title={translate(CONSENT.categories[category.key].title, locale)}
                    text={translate(CONSENT.categories[category.key].text, locale)}
                    checked={"required" in category ? true : !!granted[category.key]}
                    locked={"required" in category}
                    lockedLabel={translate(CONSENT.alwaysOn, locale)}
                    onChange={(checked) => setGranted((current) => ({ ...current, [category.key]: checked }))}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.p
                key="summary"
                className={styles.text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {translate(CONSENT.text, locale)}
              </motion.p>
            )}
          </AnimatePresence>
          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={close(acceptAll)}>
              {translate(CONSENT.acceptAll, locale)}
            </button>
            {manual ? (
              <button type="button" onClick={close(() => save(granted))}>
                {translate(CONSENT.save, locale)}
              </button>
            ) : (
              <button type="button" onClick={close(deny)}>
                {translate(CONSENT.deny, locale)}
              </button>
            )}
            <button
              type="button"
              className={styles.quiet}
              onClick={() => (manual && !reopened ? setManual(false) : manual ? close(() => {})() : setManual(true))}
            >
              {translate(manual ? (reopened ? CONSENT.close : CONSENT.back) : CONSENT.customize, locale)}
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
