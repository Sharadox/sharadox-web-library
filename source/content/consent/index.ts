import type { ConsentConfiguration } from "@sharadox/consent-web-library/consent/type";

/**
 * What the site stores: only what it needs to work, so the panel just tells (one button, and the details). Raise
 * `version` whenever the categories change, so every visitor is told again.
 */
export const CONSENT_CONFIGURATION = {
  storageKey: "consent",
  version: 1,
  categories: [{ key: "required", required: true }],
} as const satisfies ConsentConfiguration;

/** Cookie panel copy: the title, the text and the categories (the buttons' labels are consent-web-library's). */
export const CONSENT = {
  title: { en: "Cookies", pt: "Cookies" },
  text: {
    en: "We keep only what the site needs to work: a cookie that remembers your language, and the style you chose, stored in your browser. Nothing tracks you.",
    pt: "Guardamos apenas o que o site precisa para funcionar: um cookie que lembra o seu idioma, e o estilo que escolheu, guardado no seu browser. Nada o segue.",
  },
  categories: {
    required: {
      title: { en: "Required", pt: "Necessários" },
      text: {
        en: "Your language (a cookie) and style (in your browser's storage), and this answer.",
        pt: "O seu idioma (um cookie) e estilo (no armazenamento do browser), e esta resposta.",
      },
    },
  },
} as const;
