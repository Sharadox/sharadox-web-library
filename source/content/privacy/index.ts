import type { PrivacyOptions } from "@sharadox/privacy-web-library/privacy-policy/type";
import { SITE } from "@sharadox/sharadox-web-library/content/site";

/** The privacy policy page: its path after the locale, title and description. */
export const PRIVACY_PAGE = {
  path: "/privacy",
  title: { en: "Privacy Policy", pt: "Política de Privacidade" },
  eyebrow: { en: "Your data", pt: "Os seus dados" },
  description: {
    en: "What sharadox.com collects, why, who handles it, and your rights.",
    pt: "O que o sharadox.com recolhe, porquê, quem o trata, e os seus direitos.",
  },
} as const;

/**
 * What sharadox.com really collects and who handles it: the contact form, and the language and style it remembers.
 * Change it whenever any of that changes, and move `updated` to that day. The registered name, tax number and full
 * address of the business belong in `controller` once confirmed.
 */
export const PRIVACY: PrivacyOptions = {
  controller: {
    name: SITE.name,
    address: "Algarve, Portugal",
    email: SITE.email,
    website: SITE.url,
  },
  updated: "2026-11-13",
  contactForm: {
    fields: [
      { en: "your name", pt: "o seu nome" },
      { en: "company", pt: "empresa" },
      { en: "email", pt: "email" },
      { en: "what you need", pt: "o que precisa" },
      { en: "your message", pt: "a sua mensagem" },
    ],
  },
  remembered: [
    { en: "the language you chose", pt: "o idioma que escolheu" },
    { en: "the style you chose", pt: "o estilo que escolheu" },
  ],
  recipients: [
    {
      name: "Vercel",
      purpose: { en: "hosts the website", pt: "aloja o website" },
      location: { en: "United States", pt: "Estados Unidos" },
    },
    {
      name: "Amazon Web Services",
      purpose: { en: "sends the form's messages by email", pt: "envia as mensagens do formulário por email" },
      location: { en: "United States", pt: "Estados Unidos" },
    },
    {
      name: "Proton",
      purpose: {
        en: "hosts the mailbox the messages arrive in",
        pt: "aloja a caixa de correio onde chegam as mensagens",
      },
      location: { en: "Switzerland", pt: "Suíça" },
    },
  ],
};
