import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface StageProperties {
  label: string;
  value: number;
  /** Starts counting up when true. */
  start: boolean;
  durationMilliseconds: number;
  locale: Locale;
}
