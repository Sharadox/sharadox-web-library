import type { ReactNode } from "react";
import type { Locale } from "@sharadox/sharadox-web-library/utility/locale/type";

export interface LocaleLinkProperties {
  /** The language the link switches to. */
  locale: Locale;
  /** Marks the link for the language being shown. */
  current?: boolean;
  children: ReactNode;
}
