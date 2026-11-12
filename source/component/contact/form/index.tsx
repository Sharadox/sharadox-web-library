"use client";
import { AnimatePresence, motion } from "motion/react";
import { useActionState, useEffect, useRef } from "react";
import type { ContactState } from "@sharadox/sharadox-web-library/action/send-contact/type";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { CONTACT } from "@sharadox/sharadox-web-library/content/contact";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import { useSpotlight } from "@sharadox/pointer-web-library/spotlight";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { CONTACT_NEED_EVENT } from "@sharadox/sharadox-web-library/utility/contact-need";
import styles from "./index.module.scss";
import type { ContactFormProperties } from "@sharadox/sharadox-web-library/component/contact/form/type";

/** The enquiry form: honeypot and fill-time spam checks, inline errors, and an animated thank-you. */
export function ContactForm({ locale, action: sendAction }: ContactFormProperties) {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendAction, { status: "idle" });
  // When the visitor started filling the form; bots submit faster than humans can.
  // When the form appeared. It goes into the hidden field as the form is sent: React puts a hidden field back to its
  // default whenever the form renders again, which silently turned the fill-time check off.
  const startedAt = useRef(0);
  const needs = useRef<HTMLFieldSetElement>(null);
  // Buttons elsewhere (the service cards) ask for choices: tick them and make them glow for a moment.
  useEffect(() => {
    const tick = (event: Event) => {
      for (const need of (event as CustomEvent<readonly string[]>).detail) {
        const input = needs.current?.querySelector<HTMLInputElement>(`input[value="${need}"]`);
        if (!input) continue;
        input.checked = true;
        const chip = input.closest("label")!;
        chip.removeAttribute("data-requested");
        void chip.offsetWidth; // restart the glow when the same choice is asked for again
        chip.setAttribute("data-requested", "");
      }
    };
    addEventListener(CONTACT_NEED_EVENT, tick);
    return () => removeEventListener(CONTACT_NEED_EVENT, tick);
  }, []);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const spotlight = useSpotlight<HTMLFormElement>();
  return (
    <AnimatePresence mode="wait">
      {state.status === "sent" ? (
        <motion.div
          key="sent"
          className={`${styles.form} ${styles.done}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          role="status"
        >
          <svg viewBox="0 0 48 48" className={styles.check} aria-hidden>
            <circle cx="24" cy="24" r="22" />
            <path d="M14 24.5l7 7 13-14" />
          </svg>
          <p>{translate(CONTACT.sent, locale)}</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          ref={spotlight}
          action={action}
          onSubmit={(event) => {
            (event.currentTarget.elements.namedItem("started-at") as HTMLInputElement).value = String(
              startedAt.current,
            );
          }}
          className={styles.form}
          exit={{ opacity: 0, scale: 0.98 }}
        >
          <input type="hidden" name="started-at" defaultValue="0" />
          <input type="hidden" name="locale" value={locale} />
          <div className={styles.honeypot} aria-hidden>
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>{translate(CONTACT.name, locale)}</span>
              <input name="name" required autoComplete="name" maxLength={120} />
            </label>
            <label className={styles.field}>
              <span>{translate(CONTACT.company, locale)}</span>
              <input name="company" autoComplete="organization" maxLength={160} />
            </label>
          </div>
          <label className={styles.field}>
            <span>{translate(CONTACT.email, locale)}</span>
            <input name="email" type="email" required autoComplete="email" maxLength={200} />
          </label>
          <fieldset ref={needs} className={styles.services}>
            <legend>{translate(CONTACT.needs.label, locale)}</legend>
            {CONTACT.needs.options.map((need) => (
              <label key={need.key} className={styles.chip}>
                <input type="checkbox" name="need" value={need.key} />
                <span>{need[locale]}</span>
              </label>
            ))}
          </fieldset>
          <label className={styles.field}>
            <span>{translate(CONTACT.message, locale)}</span>
            <textarea name="message" required rows={5} maxLength={5000} />
          </label>
          {state.status !== "idle" && (
            <p className={styles.error} role="alert">
              {state.status === "failed" ? (
                <>
                  {translate(CONTACT.errors.failed, locale)} <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </>
              ) : (
                translate(CONTACT.errors[state.status], locale)
              )}
            </p>
          )}
          <Button size="block" disabled={pending} arrow={!pending}>
            {pending ? translate(CONTACT.sending, locale) : translate(CONTACT.send, locale)}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
