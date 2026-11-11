import type { Translated as GenericTranslated } from "@sharadox/internationalization-web-library/locale/type";
import type { LOCALES } from "@sharadox/sharadox-web-library/content/locale";

/** A language sharadox.com is published in. */
export type Locale = (typeof LOCALES.locales)[number];

/** A piece of copy written in every published language. */
export type Translated = GenericTranslated<Locale>;
