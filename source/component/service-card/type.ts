import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";
import type { SERVICES } from "@sharadox/sharadox-web-library/content/services";

export interface ServiceCardProperties {
  locale: Locale;
  /** One of the cards in `SERVICES`. */
  card: (typeof SERVICES.items)[number]["cards"][number];
  /** The object beside the words instead of above them, for a card alone in its row. */
  wide?: boolean;
}
