import type { ContactState } from "@sharadox/sharadox-web-library/action/send-contact/type";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface ContactProperties {
  locale: Locale;
  /** The application's server action, which calls `sendContact`. */
  action: (state: ContactState, form: FormData) => Promise<ContactState>;
}
