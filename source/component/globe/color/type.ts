/** The globe's colours for the style in use. Channels run from 0 to 1. */
export interface GlobeColors {
  /** Land dots, arcs and markers: the style's foreground. */
  ink: [number, number, number];
  /** The same, as "#rrggbb", for standard three.js materials. */
  inkHex: string;
  /** The planet body, and its rim where it turns away. */
  body: [number, number, number];
  rim: [number, number, number];
  /** Light adds up on dark styles; on light styles the ink is drawn normally (dark on light). */
  additive: boolean;
}
