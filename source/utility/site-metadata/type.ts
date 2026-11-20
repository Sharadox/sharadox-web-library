import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface SiteMetadataOptions {
  locale: Locale;
  /** The page's path after the locale ("/privacy"); the home page by default. */
  path?: string;
  /** The page's own title: the site's name is added after it. */
  title: string;
  description: string;
}
