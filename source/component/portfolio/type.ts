import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";
import type { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";

/** One project of the portfolio. */
export type Project = (typeof PORTFOLIO.projects)[number];

export interface PortfolioProperties {
  locale: Locale;
}
