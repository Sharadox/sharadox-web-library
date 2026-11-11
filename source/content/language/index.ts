import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

/** How languages are named on the site: the switches' label, and each language in its own words. */
export const LANGUAGE = {
  label: { en: "Language", pt: "Idioma" },
  names: { en: "English", pt: "Português" } satisfies Record<Locale, string>,
} as const;
