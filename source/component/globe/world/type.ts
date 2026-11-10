import type { GlobeColors } from "@sharadox/sharadox-web-library/component/globe/color/type";
import type { GlobeDrag } from "@sharadox/sharadox-web-library/hook/globe-drag/type";

export interface WorldProperties {
  /** Float32 [latitude, longitude] land pairs. */
  data: Float32Array;
  /** Supplies the rotation each frame. */
  drag: GlobeDrag;
  colors: GlobeColors;
}
