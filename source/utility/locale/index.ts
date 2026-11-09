import { isLocale } from "@sharadox/web-library/internationalization/locale";
import type { Locale } from "@sharadox/sharadox-web-library/utility/locale/type";

/** Every language sharadox.com is published in. The first one is the default (x-default). */
export const LOCALES: readonly Locale[] = ["en", "pt"];

/** Narrows an untrusted route segment to one of the site's locales. */
export function isSiteLocale(value: string): value is Locale {
  return isLocale(value, LOCALES);
}
