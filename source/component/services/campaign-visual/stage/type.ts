import type { Locale } from "@sharadox/sharadox-web-library/utility/locale/type";

export interface StageProperties {
  label: string;
  value: number;
  /** Starts counting up when true. */
  start: boolean;
  durationMilliseconds: number;
  locale: Locale;
}
