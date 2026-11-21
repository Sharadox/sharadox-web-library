import { emailLayout } from "@sharadox/email-web-library/email-layout";
import type { EmailContent } from "@sharadox/email-web-library/email-layout/type";
import type { InlineImage } from "@sharadox/email-web-library/email-message/type";
import { inlineImage } from "@sharadox/email-web-library/inline-image";
import { EMAIL_LOGO } from "@sharadox/sharadox-web-library/content/email-logo";
import { EMAIL_LOGO_DARK } from "@sharadox/sharadox-web-library/content/email-logo-dark";
import { SHARADOX_EMAIL } from "@sharadox/sharadox-web-library/content/email-design";

/**
 * Any email Sharadox sends, in email-web-library's layout with its globe and name (`SHARADOX_EMAIL`): give what it says, send it with
 * `brandedEmailImages()` so its mark shows without loading anything.
 *
 * @example
 * await sender.send({ from, to, subject, text,
 *   html: brandedEmail({ language: "en", preview, eyebrow: "Invoice", heading: "Your invoice is ready" }),
 *   inlineImages: brandedEmailImages() });
 */
export const brandedEmail = (content: EmailContent) =>
  emailLayout(content, SHARADOX_EMAIL, { light: true, dark: true });

/** The images a Sharadox email carries: its globe in black ("logo") and in white for dark themes ("logo-dark"). */
export const brandedEmailImages = (): InlineImage[] => [
  inlineImage("logo", EMAIL_LOGO),
  inlineImage("logo-dark", EMAIL_LOGO_DARK),
];
