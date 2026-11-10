import type { NeedKey } from "@sharadox/sharadox-web-library/content/contact";

/** A validated contact form submission. */
export interface ContactMessage {
  name: string;
  email: string;
  company: string;
  message: string;
  locale: string;
  /** What the visitor needs, ticked in the form. */
  needs: NeedKey[];
}

export type ParsedContact = { kind: "bot" } | { kind: "invalid" } | { kind: "valid"; value: ContactMessage };
