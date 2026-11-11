import { defineLocales } from "@sharadox/internationalization-web-library/locale";

/**
 * Every language sharadox.com is published in (the default is the x-default alternate). Adding a language is one
 * more entry here, plus its copy in content/.
 */
export const LOCALES = defineLocales({ locales: ["en", "pt"], defaultLocale: "en", languageTags: { pt: "pt-PT" } });
