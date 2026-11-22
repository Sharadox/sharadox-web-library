import { inlineImage } from "@sharadox/email-web-library/inline-image";
import { createContactAction } from "@sharadox/form-web-library/contact-action";
import { EMAIL_LOGO } from "@sharadox/sharadox-web-library/content/email-logo";
import { EMAIL_LOGO_DARK } from "@sharadox/sharadox-web-library/content/email-logo-dark";
import { SHARADOX_EMAIL } from "@sharadox/sharadox-web-library/content/email-design";
import { CONTACT } from "@sharadox/sharadox-web-library/content/contact";
import { SITE } from "@sharadox/sharadox-web-library/content/site";

/**
 * The contact form's work, called by the application's server action (which adds the visitor's IP address). It
 * sends one email, from contact@web.sharadox.com on the sending subdomain (`EMAIL_SENDER_ADDRESS`, through Amazon SES
 * over SMTP: `EMAIL_SERVER_*`) as "Sharadox", to both the visitor and contact@sharadox.com, replies going to
 * contact@sharadox.com: one conversation for both. Its subject is "Contact · Name (Organization) · <identifier>"
 * ("Contacto · …" when the visitor used Portuguese), and it thanks the visitor, lists every detail and signs off from
 * Sharadox (form-web-library's createContactAction, in SHARADOX_EMAIL). It needs a name, an email or a phone, at
 * least one choice and a message of at least `CONTACT.minimumMessageLength` characters. Each address may send 5
 * messages an hour and everyone together 50 emails a day, which caps what a flood can cost.
 */
export const sendContact = createContactAction({
  to: SITE.email,
  company: CONTACT.sender,
  logo: async () => inlineImage("logo", EMAIL_LOGO),
  darkLogo: async () => inlineImage("logo-dark", EMAIL_LOGO_DARK),
  design: SHARADOX_EMAIL,
  choices: Object.fromEntries(CONTACT.needs.options.map((need) => [need.key, { en: need.en, pt: need.pt }])),
  // The same rules the form checks before sending.
  reach: "email-or-phone",
  requireChoice: true,
  minimumMessageLength: CONTACT.minimumMessageLength,
});
