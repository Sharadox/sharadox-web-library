import { findStyle } from "@sharadox/web-library/style/definition";
import { STYLE_CONFIGURATION } from "@sharadox/sharadox-web-library/content/style";
import { hexChannel } from "@sharadox/sharadox-web-library/utility/hex-channel";
import type { GlobeColors } from "@sharadox/sharadox-web-library/component/globe/color/type";

/** The globe's colours, taken from a style's palette (`foreground`, `globe-body`, `globe-rim`). */
export function globeColors(styleName: string): GlobeColors {
  const style =
    findStyle(STYLE_CONFIGURATION, styleName) ?? findStyle(STYLE_CONFIGURATION, STYLE_CONFIGURATION.defaults.dark)!;
  const palette = style.palette as Record<string, string>;
  return {
    ink: hexChannel(palette.foreground!),
    inkHex: palette.foreground!,
    body: hexChannel(palette["globe-body"]!),
    rim: hexChannel(palette["globe-rim"]!),
    additive: style.scheme === "dark",
  };
}
