import { emailLayout } from "@sharadox/email-web-library/email-layout";
import type { EmailContent } from "@sharadox/email-web-library/email-layout/type";
import type { InlineImage } from "@sharadox/email-web-library/email-message/type";
import { inlineImage } from "@sharadox/email-web-library/inline-image";
import { EMAIL_LOGO } from "@sharadox/sharadox-web-library/content/email-logo";
import { SHARADOX_EMAIL } from "@sharadox/sharadox-web-library/content/email-design";

/**
 * Any email Sharadox sends, in its own design (`SHARADOX_EMAIL`): give what it says, send it with
 * `sharadoxEmailImages()` so its mark shows without loading anything.
 *
 * @example
 * await sender.send({ from, to, subject, text,
 *   html: sharadoxEmail({ language: "en", preview, eyebrow: "Invoice", heading: "Your invoice is ready" }),
 *   inlineImages: sharadoxEmailImages() });
 */
export const sharadoxEmail = (content: EmailContent) => emailLayout(content, SHARADOX_EMAIL, true);

/** The images a Sharadox email carries: its mark, as the inline image "logo". */
export const sharadoxEmailImages = (): InlineImage[] => [inlineImage("logo", EMAIL_LOGO)];
