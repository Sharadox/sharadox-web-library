import type { StyleConfiguration } from "@sharadox/web-library/style/definition/type";

/** Black: the Sharadox dark style. White is its exact inverse. */
const BLACK = {
  background: "#000000",
  foreground: "#ffffff",
  "foreground-2": "#a1a1a1",
  "foreground-3": "#6b6b6b",
  line: "rgba(255, 255, 255, 0.09)",
  "line-2": "rgba(255, 255, 255, 0.16)",
  card: "#0a0a0a",
  surface: "#121212",
  error: "#ff8a8a",
  "globe-body": "#050505",
  "globe-rim": "#525252",
};
const WHITE = {
  background: "#ffffff",
  foreground: "#000000",
  "foreground-2": "#5e5e5e",
  "foreground-3": "#949494",
  line: "rgba(0, 0, 0, 0.09)",
  "line-2": "rgba(0, 0, 0, 0.16)",
  card: "#f5f5f5",
  surface: "#ededed",
  error: "#c62828",
  "globe-body": "#fafafa",
  "globe-rim": "#adadad",
};

/**
 * Every Sharadox style (what other projects call a theme). Add a dark or light style here — name, scheme and the
 * same palette keys — and it appears in the style switch; `defaults` picks the one "System" uses for each scheme.
 * The site opens in Black (`defaultChoice`); set it to "system" to follow the device instead. Dark is the fallback
 * when the device's preference is unknown.
 */
export const STYLE_CONFIGURATION = {
  styles: [
    { name: "black", scheme: "dark", palette: BLACK },
    { name: "white", scheme: "light", palette: WHITE },
  ],
  defaults: { dark: "black", light: "white" },
  fallback: "dark",
  storageKey: "style",
  defaultChoice: "black",
} as const satisfies StyleConfiguration;

/** Names shown in the style switch. Style names are proper names, the same in every language. */
export const STYLE = {
  label: { en: "Style", pt: "Estilo" },
  system: { en: "System", pt: "Sistema" },
  names: { black: "Black", white: "White" } as Record<string, string>,
} as const;
