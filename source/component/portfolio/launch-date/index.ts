import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

/** The day a project went live, the way the language says it: "17 November 2026", "17 de novembro de 2026". */
export const launchDate = (date: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale === "pt" ? "pt-PT" : "en-GB", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(date),
  );
