import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface ServiceIndexProperties {
  locale: Locale;
  /** Where the sections are: `""` (this page) by default, `/<locale>` from other pages. */
  base?: string;
}
