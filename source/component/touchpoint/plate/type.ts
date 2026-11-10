import type { TOUCHPOINT } from "@sharadox/sharadox-web-library/content/touchpoint";

export interface PlateProperties {
  layer: (typeof TOUCHPOINT.layers)[number]["key"];
  label: string;
  /** Position from the bottom of the stack. */
  index: number;
}
