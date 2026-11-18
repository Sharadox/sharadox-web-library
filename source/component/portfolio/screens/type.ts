import type { Project } from "@sharadox/sharadox-web-library/component/portfolio/select-projects/type";

export interface ScreensProperties {
  project: Project;
  /** What the screens show, for screen readers. */
  label: string;
}
