"use client";
import { useMemo } from "react";
import { Globe as DotGlobe } from "@sharadox/globe-web-library/globe";
import { findOption } from "@sharadox/style-web-library/definition";
import { useStyle } from "@sharadox/style-web-library/use-style";
import { CITIES, HOME } from "@sharadox/sharadox-web-library/content/globe";
import { STYLES } from "@sharadox/sharadox-web-library/content/style";
import styles from "./index.module.scss";

const COLOR = STYLES.groups[0];
const DESTINATIONS = CITIES.map(([latitude, longitude]) => ({ latitude, longitude }));

/**
 * The hero's globe: arcs from Almancil to the world, drawn in the colours of the style in use (default export, so
 * the hero can load it lazily).
 */
export default function Globe() {
  const { style } = useStyle(STYLES, "color");
  const palette = useMemo(() => {
    const option = findOption(COLOR, style) ?? findOption(COLOR, COLOR.defaultChoice)!;
    const colors = option.palette as Record<string, string>;
    return {
      ink: colors.foreground!,
      body: colors["globe-body"]!,
      rim: colors["globe-rim"]!,
      dark: option.scheme === "dark",
    };
  }, [style]);
  return <DotGlobe palette={palette} home={HOME} destinations={DESTINATIONS} className={styles.globe} />;
}
