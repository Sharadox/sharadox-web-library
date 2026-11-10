/** Contact section and form copy. */
export const CONTACT = {
  /** Display name of the email the contact form sends (from web@email.sharadox.com). */
  senderName: "Sharadox Web Application",
  /** First part of the email subject: "Contact • Name (Company)". */
  subject: "Contact",
  eyebrow: { en: "Contact", pt: "Contacto" },
  title: { en: "Let's make it simple.", pt: "Vamos simplificar." },
  text: {
    en: "Tell us about your brand and what you need. We'll get back to you shortly.",
    pt: "Fale-nos da sua marca e do que precisa. Respondemos em breve.",
  },
  name: { en: "Name", pt: "Nome" },
  email: { en: "Email", pt: "Email" },
  company: { en: "Company (optional)", pt: "Empresa (opcional)" },
  services: { en: "What do you need?", pt: "Do que precisa?" },
  message: { en: "Tell us about your project", pt: "Fale-nos do seu projeto" },
  send: { en: "Send message", pt: "Enviar mensagem" },
  sending: { en: "Sending…", pt: "A enviar…" },
  sent: {
    en: "Thank you — your message is on its way. We'll be in touch soon.",
    pt: "Obrigado — a sua mensagem foi enviada. Entraremos em contacto em breve.",
  },
  errors: {
    invalid: {
      en: "Please fill in your name, a valid email and a message.",
      pt: "Preencha o nome, um email válido e a mensagem.",
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
