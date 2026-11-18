import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

/** An amount in euros, the way the language writes it ("€18,400", "18 400 €"). */
export const euros = (amount: number, locale: Locale) =>
  new Intl.NumberFormat(locale === "pt" ? "pt-PT" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
