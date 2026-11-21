import type { EmailDesign } from "@sharadox/email-web-library/email-layout/type";
import { SITE } from "@sharadox/sharadox-web-library/content/site";

/**
 * What makes Sharadox's emails its own, in email-web-library's one layout (no background, the theme's foreground,
 * Geist): the globe and the name at the top left, and its site at the bottom.
 */
export const SHARADOX_EMAIL: EmailDesign = {
  name: SITE.name,
  logo: { width: 30, height: 30 },
  wordmark: true,
  signature: [{ text: new URL(SITE.url).host, href: SITE.url }],
};
