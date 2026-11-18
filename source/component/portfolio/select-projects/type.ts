import type { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";

export type Project = (typeof PORTFOLIO.projects)[number];
export type SortKey = (typeof PORTFOLIO.sorts)[number]["key"];

/** What the visitor picked: each filter empty for all. */
export interface ProjectChoice {
  service: string;
  client: string;
  year: string;
  sort: SortKey;
}
