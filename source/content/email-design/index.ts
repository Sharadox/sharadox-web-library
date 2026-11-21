import type { EmailDesign } from "@sharadox/email-web-library/email-layout/type";
import { SITE } from "@sharadox/sharadox-web-library/content/site";

/** Geist where the reader has it, the device's own sans otherwise. */
const GEIST = "Geist, -apple-system, 'SF Pro Text', 'Segoe UI', Helvetica, Arial, sans-serif";

/**
 * What makes Sharadox's emails its own, in email-web-library's one layout (black on white, the same in every mail
 * app): the black globe and the name at the top left, and black as the brand's color (its white, on a white page).
 * Font stacks only (no web fonts, which would tell a font service the email was opened).
 */
export const SHARADOX_EMAIL: EmailDesign = {
  name: SITE.name,
  logo: { width: 30, height: 30 },
  wordmark: true,
  color: "#000000",
  fonts: { heading: GEIST, body: GEIST },
  signature: [{ text: new URL(SITE.url).host, href: SITE.url }],
};
