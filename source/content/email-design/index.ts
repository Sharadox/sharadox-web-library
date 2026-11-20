import type { EmailDesign } from "@sharadox/email-web-library/email-layout/type";
import { SITE } from "@sharadox/sharadox-web-library/content/site";

/**
 * Sharadox's look for every email it sends, the website's own: black, the globe mark and the name, a hairline fading
 * at its ends, Geist's monospace capitals for eyebrows and labels, dashed rules between details, a white pill for the
 * one thing to do, all inside the grid's frame with a "+" at each corner. Font stacks only (no web fonts, which
 * would tell a font service the email was opened): Geist where the reader has it, the device's own sans otherwise.
 */
export const SHARADOX_EMAIL: EmailDesign = {
  name: SITE.name,
  logo: { width: 30, height: 30 },
  wordmark: true,
  align: "left",
  colors: {
    page: "#000000",
    card: "#000000",
    edge: "#262626",
    text: "#ffffff",
    muted: "#a3a3a3",
    quiet: "#737373",
    rule: "#2e2e2e",
    accent: "#ffffff",
    box: "#0a0a0a",
    onAccent: "#000000",
    headerRule: "linear-gradient(90deg, #000000, #3a3a3a 20%, #3a3a3a 80%, #000000)",
  },
  fonts: {
    heading: "Geist, -apple-system, 'SF Pro Display', 'Segoe UI', Helvetica, Arial, sans-serif",
    body: "Geist, -apple-system, 'SF Pro Text', 'Segoe UI', Helvetica, Arial, sans-serif",
    label: "'Geist Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
  },
  heading: { size: 34, weight: 600, letterSpacing: "-0.04em", lineHeight: 1.1 },
  label: { size: 11, letterSpacing: "0.06em" },
  rule: "dashed",
  radius: 0,
  crosses: true,
  button: { radius: 999, uppercase: false, letterSpacing: "0" },
  signature: [{ text: new URL(SITE.url).host, href: SITE.url }],
};
