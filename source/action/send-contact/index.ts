import { createContactAction } from "@sharadox/form-web-library/contact-action";
import { CONTACT } from "@sharadox/sharadox-web-library/content/contact";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import { separate } from "@sharadox/sharadox-web-library/utility/separate";

/**
 * The contact form's work, called by the application's server action (which adds the visitor's IP address). It
 * emails contact@sharadox.com from the sending subdomain (`EMAIL_SENDER_ADDRESS`, through Amazon SES over SMTP:
 * `EMAIL_SERVER_*`) as "Sharadox Web Application", with the visitor as reply-to and the subject
 * "Contact • Name (Company)".
 */
export const sendContact = createContactAction({
  to: SITE.email,
  senderName: CONTACT.senderName,
  site: "sharadox.com",
  subject: (message) =>
    separate(CONTACT.subject, message.company ? `${message.name} (${message.company})` : message.name),
  choices: Object.fromEntries(CONTACT.needs.options.map((need) => [need.key, need.en])),
});
