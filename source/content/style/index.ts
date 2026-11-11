import { defineStyles } from "@sharadox/style-web-library/definition";

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
 * Every Sharadox style (what other projects call a theme), as style groups. The colour group holds Black (dark,
 * where the site opens) and White (its exact inverse); add a dark or light option there — name, scheme and the same
 * palette keys — and it appears in the style switch. `systemDefaults` picks what "System" uses for each scheme;
 * set `defaultChoice` to "system" to follow the device from the start. More groups (corners, fonts…) go next to it.
 * The colour choice stays under the "style" storage key, so visitors keep the choice they made before.
 */
export const STYLES = defineStyles({
  groups: [
    {
      name: "color",
      defaultChoice: "black",
      systemDefaults: { dark: "black", light: "white" },
      fallbackScheme: "dark",
      storageKey: "style",
      options: [
        { name: "black", scheme: "dark", palette: BLACK },
        { name: "white", scheme: "light", palette: WHITE },
      ],
    },
  ],
});

/** Names shown in the style switch. Style names are proper names, the same in every language. */
export const STYLE = {
  label: { en: "Style", pt: "Estilo" },
  system: { en: "System", pt: "Sistema" },
  names: { black: "Black", white: "White" } as Record<string, string>,
} as const;
