import { isLikelyBot } from "@sharadox/web-library/form/bot-check";
import { readField } from "@sharadox/web-library/form/field";
import type { ParsedContact } from "@sharadox/sharadox-web-library/utility/parse-contact/type";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Reads and validates the contact form, flagging likely bots (honeypot filled or submitted too fast). */
export function parseContact(form: FormData, now = Date.now()): ParsedContact {
  if (isLikelyBot(form, { now })) return { kind: "bot" };
  const value = {
    name: readField(form, "name", 120),
    email: readField(form, "email", 200),
    company: readField(form, "company", 160),
    message: readField(form, "message", 5000),
    locale: readField(form, "locale", 5) || "en",
  };
  if (!value.name || !value.message || !EMAIL.test(value.email)) return { kind: "invalid" };
  return { kind: "valid", value };
}
