import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface FeedProperties {
  locale: Locale;
  /** Extra classes for the stage around the panel, to size or place it in the page. */
  className?: string;
}
