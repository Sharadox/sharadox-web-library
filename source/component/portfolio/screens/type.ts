import type { Project } from "@sharadox/sharadox-web-library/component/portfolio/type";

export interface ScreensProperties {
  project: Project;
  /** What the screens show, for screen readers. */
  label: string;
  /** Loads the screens first, when they open the page. */
  priority?: boolean;
}
