import type { Locale, Translated } from "@sharadox/sharadox-web-library/content/locale/type";

/** The Sharadox slogan in the lines the hero sets it on; the single source of its words. */
export const SLOGAN_LINES = {
  en: ["Technologies", "that simplify", "the world."],
  pt: ["Tecnologias", "que simplificam", "o mundo."],
} as const satisfies Record<Locale, readonly string[]>;

/**
 * The Sharadox slogan as one sentence, always with its full stop: page titles, footer, share card, structured
 * data and the app manifest all use it.
 *
 * @example
 * translate(SLOGAN, "en"); // "Technologies that simplify the world."
 */
export const SLOGAN = {
  en: SLOGAN_LINES.en.join(" "),
  pt: SLOGAN_LINES.pt.join(" "),
} satisfies Translated;
