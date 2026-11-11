import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface NavigationProperties {
  locale: Locale;
  /**
   * The page's path after the locale, for example "/licence"; the home page by default. Section links then point to
   * the home page, and the language links keep the visitor on this page.
   */
  path?: string;
}
