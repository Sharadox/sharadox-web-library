import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface LicenceProperties {
  locale: Locale;
  /** The licence text in Markdown: the Portuguese original for "pt", the English translation for "en". */
  markdown: string;
}
