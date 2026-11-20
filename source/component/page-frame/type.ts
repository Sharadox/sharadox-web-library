import type { ReactNode } from "react";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface PageFrameProperties {
  locale: Locale;
  /** The page's path after the locale ("/privacy"); the home page by default. */
  path?: string;
  /** Before the navigation (a notice above the bar). */
  before?: ReactNode;
  /** Right after the navigation, outside the page's content (a section indicator). */
  aside?: ReactNode;
  /** After the footer (a bar fixed to the bottom of the screen). */
  after?: ReactNode;
  /** The page's own content, inside `<main>`. */
  children: ReactNode;
}
