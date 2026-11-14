import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import type { ServiceCardKey } from "@sharadox/sharadox-web-library/content/services";

/** Contact section and form copy. */
export const CONTACT = {
  /** Display name of the email the contact form sends (from web@email.sharadox.com). */
  senderName: "Sharadox Web Application",
  /** First part of the email subject: "Contact · Name (Company)". */
  subject: "Contact",
  title: { en: "Let's make it simple.", pt: "Vamos simplificar." },
  text: {
    en: "Tell us about your brand and what you need. We'll get back to you shortly.",
    pt: "Fale-nos da sua marca e do que precisa. Respondemos em breve.",
  },
  name: { en: "Name", pt: "Nome" },
  email: { en: "Email", pt: "Email" },
  phone: { en: "Phone", pt: "Telefone" },
  /** Under the email and phone: one of them is enough. */
  reach: { en: "Leave an email, a phone number, or both.", pt: "Deixe um email, um telefone, ou ambos." },
  company: { en: "Company (optional)", pt: "Empresa (opcional)" },
  needs: {
    label: { en: "What do you need?", pt: "Do que precisa?" },
    /** One choice per service card, grouped like the services, then "Something Else". `en` is also how they appear in the email. */
    groups: SERVICES.items.map((service) => ({
      key: service.key,
      title: service.title,
      options: service.cards.map((card) => ({ key: card.key, ...card.chip })),
    })),
    /** For visitors who aren't sure, or need something the services don't name. */
    unsure: {
      key: "unsure",
      title: { en: "Something Else", pt: "Outra Coisa" },
      options: [
        { key: "unsure", en: "I don't know what I need", pt: "Não sei do que preciso" },
        { key: "not-listed", en: "What I need is not listed", pt: "O que preciso não está na lista" },
      ],
    },
    /** Every choice in one list. */
    options: [
      ...SERVICES.items.flatMap((service) => service.cards.map((card) => ({ key: card.key, ...card.chip }))),
      { key: "unsure", en: "I don't know what I need", pt: "Não sei do que preciso" },
      { key: "not-listed", en: "What I need is not listed", pt: "O que preciso não está na lista" },
    ] as readonly { key: NeedKey; en: string; pt: string }[],
  },
  message: { en: "Tell us about your project", pt: "Fale-nos do seu projeto" },
  send: { en: "Send Message", pt: "Enviar Mensagem" },
  sending: { en: "Sending…", pt: "A enviar…" },
  sent: {
    en: "Thank you — your message is on its way. We'll be in touch soon.",
    pt: "Obrigado — a sua mensagem foi enviada. Entraremos em contacto em breve.",
  },
  /** The fewest characters the message may have. */
  minimumMessageLength: 20,
  /** What each field asks for when it isn't filled in right, shown under it before anything is sent. */
  problems: {
    name: { en: "Please tell us your name.", pt: "Indique o seu nome." },
    reach: {
      en: "Leave an email or a phone number, so we can answer you.",
      pt: "Deixe um email ou um telefone, para lhe podermos responder.",
    },
    email: { en: "This email doesn't look right.", pt: "Este email não parece correto." },
    phone: { en: "This phone number doesn't look right.", pt: "Este telefone não parece correto." },
    needs: { en: "Choose at least one option.", pt: "Escolha pelo menos uma opção." },
    message: {
      en: "Tell us a little more: at least 20 characters.",
      pt: "Conte-nos um pouco mais: pelo menos 20 caracteres.",
    },
  },
  errors: {
    invalid: {
      en: "Please fill in your name, an email or a phone number, at least one option and a message.",
      pt: "Preencha o nome, um email ou um telefone, pelo menos uma opção e a mensagem.",
    },
    "rate-limited": {
      en: "Too many messages from this connection. Please try again later.",
      pt: "Demasiadas mensagens desta ligação. Tente mais tarde.",
    },
    failed: {
      en: "Something went wrong sending your message. Email us directly at",
      pt: "Algo correu mal ao enviar. Escreva-nos diretamente para",
    },
  },
  direct: { en: "Or write to us directly", pt: "Ou escreva-nos diretamente" },
} as const;

/** One of the "What do you need?" choices: a service card, "unsure" or "not-listed". */
export type NeedKey = ServiceCardKey | "unsure" | "not-listed";
