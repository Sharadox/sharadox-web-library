import type { CSSProperties } from "react";
import type { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface ServiceShortcutProperties {
  locale: Locale;
  /** The service group it jumps to. */
  service: (typeof SERVICES.items)[number];
  /** Where it jumps: the group's anchor, after this base ("" on the home page, `/<locale>` elsewhere). */
  base?: string;
  className?: string;
  style?: CSSProperties;
}
