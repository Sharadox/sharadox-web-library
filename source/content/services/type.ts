import type { NeedKey } from "@sharadox/sharadox-web-library/content/contact";
import type { Translated } from "@sharadox/sharadox-web-library/content/locale/type";

/** A call to action on a service card: its label, and the contact form choice it ticks. */
export interface ServiceAction {
  need: NeedKey;
  label: Translated;
}
