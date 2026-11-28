import type { Locale, Translated } from "@sharadox/sharadox-web-library/content/locale/type";

export interface PrivacyPageProperties {
  locale: Locale;
  /** What else this site keeps in the browser, after the language and style. */
  remembered?: readonly Translated[];
}
