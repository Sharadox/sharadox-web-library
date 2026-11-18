import type { Project } from "@sharadox/sharadox-web-library/component/portfolio/select-projects/type";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface ProjectProperties {
  project: Project;
  /** Its place in the list, shown as "01". */
  index: number;
  locale: Locale;
}
