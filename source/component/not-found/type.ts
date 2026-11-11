import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface NotFoundProperties {
  locale: Locale;
  /** The address that wasn't found, shown as the request that failed, for example "/en/old-page". */
  path: string;
}
