import type { Translated as GenericTranslated } from "@sharadox/web-library/internationalization/locale/type";

/** A language sharadox.com is published in. */
export type Locale = "en" | "pt";

/** A piece of copy written in every published language. */
export type Translated = GenericTranslated<Locale>;
