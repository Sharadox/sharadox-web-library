import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface ProjectProperties {
  locale: Locale;
  /** Whether the next task on the checklist has been ticked. */
  ticked: boolean;
}
