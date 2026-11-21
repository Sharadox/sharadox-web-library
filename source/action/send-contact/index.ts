import { contactAcknowledgement } from "@sharadox/form-web-library/contact-acknowledgement";
import { inlineImage } from "@sharadox/email-web-library/inline-image";
import { createContactAction } from "@sharadox/form-web-library/contact-action";
import { EMAIL_LOGO } from "@sharadox/sharadox-web-library/content/email-logo";
import { SHARADOX_EMAIL } from "@sharadox/sharadox-web-library/content/email-design";
import { CONTACT } from "@sharadox/sharadox-web-library/content/contact";
import { SITE } from "@sharadox/sharadox-web-library/content/site";

/**
 * The contact form's work, called by the application's server action (which adds the visitor's IP address). It
 * emails contact@sharadox.com from contact@web.sharadox.com, on the sending subdomain (`EMAIL_SENDER_ADDRESS`, through
 * Amazon SES over SMTP: `EMAIL_SERVER_*`) as "Sharadox", with the subject "Contact · Name (Company)" ("Contacto · …"
 * when the visitor used Portuguese) and the visitor as reply-to. The email, in Sharadox's design (SHARADOX_EMAIL) and
 * in the visitor's language, holds every detail, the message, a button to answer, the form's page, the language, the
 * time and the IP. A visitor who
 * left an email gets an automatic reply in their language. It needs a name, an email or a phone, at least one choice
 * and a message of at least `CONTACT.minimumMessageLength` characters. Each address may send 5 messages an hour and
 * everyone together 50 emails a day, which caps what a flood can cost.
 */
export const sendContact = createContactAction({
  to: SITE.email,
  company: CONTACT.sender,
  site: "sharadox.com",
  logo: async () => inlineImage("logo", EMAIL_LOGO),
  design: SHARADOX_EMAIL,
  acknowledgement: contactAcknowledgement(SITE.url),
  choices: Object.fromEntries(CONTACT.needs.options.map((need) => [need.key, { en: need.en, pt: need.pt }])),
  // The same rules the form checks before sending.
  reach: "email-or-phone",
  requireChoice: true,
  minimumMessageLength: CONTACT.minimumMessageLength,
});
