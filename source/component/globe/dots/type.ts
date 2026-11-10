import type { GlobeColors } from "@sharadox/sharadox-web-library/component/globe/color/type";

export interface DotsProperties {
  colors: GlobeColors;
  /** Float32 [latitude, longitude] pairs. */
  data: Float32Array;
}
