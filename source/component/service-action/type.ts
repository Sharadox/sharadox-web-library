import type { ServiceAction } from "@sharadox/sharadox-web-library/content/services/type";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface ServiceActionsProperties {
  locale: Locale;
  actions: readonly ServiceAction[];
}
