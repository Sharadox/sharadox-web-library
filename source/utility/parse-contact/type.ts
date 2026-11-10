import type { ServiceKey } from "@sharadox/sharadox-web-library/content/services";

/** A validated contact form submission. */
export interface ContactMessage {
  name: string;
  email: string;
  company: string;
  message: string;
  locale: string;
  /** The disciplines the visitor is interested in. */
  services: ServiceKey[];
}

export type ParsedContact = { kind: "bot" } | { kind: "invalid" } | { kind: "valid"; value: ContactMessage };
