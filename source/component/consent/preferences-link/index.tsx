"use client";
import { openConsent } from "@sharadox/web-library/privacy/consent";
import type { PreferencesLinkProperties } from "@sharadox/sharadox-web-library/component/consent/preferences-link/type";

/** Reopens the cookie panel so the visitor can change their answer. */
export function PreferencesLink({ label }: PreferencesLinkProperties) {
  return (
    <button type="button" onClick={openConsent} data-preferences-link>
      {label}
    </button>
  );
}
