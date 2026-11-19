import type { ReactNode } from "react";
import type { Project } from "@sharadox/sharadox-web-library/component/portfolio/type";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface ProjectPageProperties {
  project: Project;
  locale: Locale;
  /** What each chapter shows, by its key: the website's own components, running live. */
  chapters: Partial<Record<Project["chapters"][number]["key"], ReactNode>>;
}
