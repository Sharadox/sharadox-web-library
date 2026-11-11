import type { ConsentConfiguration } from "@sharadox/consent-web-library/consent/type";

/**
 * The cookie categories. Raise `version` whenever they change, so every visitor is asked again. Required is always
 * on; the others start off in the manual selection.
 */
export const CONSENT_CONFIGURATION = {
  storageKey: "consent",
  version: 1,
  categories: [{ key: "required", required: true }, { key: "analytics" }, { key: "marketing" }],
} as const satisfies ConsentConfiguration;

/** Cookie panel copy. */
export const CONSENT = {
  title: { en: "Cookies", pt: "Cookies" },
  text: {
    en: "We use required cookies to remember your language and style and to keep the contact form safe. With your permission, we would also measure visits and campaigns to improve the site.",
    pt: "Usamos cookies necessários para lembrar o idioma e o estilo e para proteger o formulário de contacto. Com a sua permissão, mediríamos também as visitas e as campanhas para melhorar o site.",
  },
  acceptAll: { en: "Accept All", pt: "Aceitar Todos" },
  deny: { en: "Deny", pt: "Recusar" },
  customize: { en: "Customize", pt: "Personalizar" },
  save: { en: "Save Choices", pt: "Guardar Escolhas" },
  back: { en: "Back", pt: "Voltar" },
  close: { en: "Close", pt: "Fechar" },
  alwaysOn: { en: "Always on", pt: "Sempre ativos" },
  preferences: { en: "Cookie Preferences", pt: "Preferências de Cookies" },
  categories: {
    required: {
      title: { en: "Required", pt: "Necessários" },
      text: { en: "Language, style and form security.", pt: "Idioma, estilo e segurança do formulário." },
    },
    analytics: {
      title: { en: "Analytics", pt: "Análise" },
      text: {
        en: "Anonymous visit statistics that help us improve the site.",
        pt: "Estatísticas anónimas de visitas que nos ajudam a melhorar o site.",
      },
    },
    marketing: {
      title: { en: "Marketing", pt: "Marketing" },
      text: {
        en: "Measuring our campaigns on other platforms.",
        pt: "Medição das nossas campanhas noutras plataformas.",
      },
    },
  },
} as const;
