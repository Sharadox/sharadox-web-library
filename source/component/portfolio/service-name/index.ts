import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

/** Every service card's key and chip name. */
const CARDS: readonly { key: string; chip: { en: string; pt: string } }[] = SERVICES.items.flatMap((group) =>
  group.cards.map(({ key, chip }) => ({ key, chip })),
);

/** A service card key's short name, as its chip says it ("Website", "Alojamento"); the key itself if unknown. */
export const serviceName = (key: string, locale: Locale) => CARDS.find((card) => card.key === key)?.chip[locale] ?? key;
