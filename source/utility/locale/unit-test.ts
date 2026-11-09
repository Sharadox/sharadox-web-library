import { expect, it } from "vitest";
import { isSiteLocale, LOCALES } from "@sharadox/sharadox-web-library/utility/locale";

it("accepts only the site's locales", () => {
  expect(LOCALES.every(isSiteLocale)).toBe(true);
  expect(isSiteLocale("fr")).toBe(false);
});
