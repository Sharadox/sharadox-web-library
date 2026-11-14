import { isEmail, isPhone } from "@sharadox/form-web-library/contact-check";
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
  const [email, phone] = [text("email"), text("phone")];
  return [
    !text("name") && "name",
    !email && !phone && "reach",
    email && !isEmail(email) && "email",
    phone && !isPhone(phone) && "phone",
    form.getAll("need").length === 0 && "needs",
    text("message").length < CONTACT.minimumMessageLength && "message",
  ].filter((problem): problem is ContactProblem => Boolean(problem));
}
