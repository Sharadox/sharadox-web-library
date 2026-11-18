import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface ActivityProperties {
  locale: Locale;
  /** How many entries have come in, oldest first; the newest shows at the top. */
  shown: number;
}
