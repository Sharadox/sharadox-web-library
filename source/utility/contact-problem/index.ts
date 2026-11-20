import { contactProblems as contactDetailProblems } from "@sharadox/form-web-library/contact-problem";
import { CONTACT } from "@sharadox/sharadox-web-library/content/contact";

/** Something the contact form needs before it can be sent; each names its message in `CONTACT.problems`. */
export type ContactProblem = keyof typeof CONTACT.problems;

/**
 * What a filled-in contact form still lacks, by the same rules the server applies: a name, an email or a phone (each
 * valid when given), at least one choice, and a message of at least `CONTACT.minimumMessageLength` characters.
 * Empty when it can be sent.
 *
 * @example
 * contactProblems(new FormData(form)); // ["reach", "needs"]
 */
export function contactProblems(form: FormData): ContactProblem[] {
  const text = (name: string) => String(form.get(name) ?? "").trim();
  // The contact details by the shared rules, then this form's own: a choice and a long enough message.
  return [
    ...contactDetailProblems({ name: text("name"), email: text("email"), phone: text("phone") }),
    ...(form.getAll("need").length === 0 ? (["needs"] as const) : []),
    ...(text("message").length < CONTACT.minimumMessageLength ? (["message"] as const) : []),
  ];
}
