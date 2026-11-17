/** "Capabilities": everything each discipline delivers, listed in full (from SERVICES), and what always comes with it. */
export const CAPABILITY = {
  title: { en: "Everything, in detail.", pt: "Tudo, em detalhe." },
  /** Under the sheet: what comes with every project, whatever it is. */
  included: {
    title: { en: "Always included", pt: "Sempre incluído" },
    items: [
      { en: "A clear quote before we start", pt: "Um orçamento claro antes de começarmos" },
      { en: "One person to talk to, start to finish", pt: "Uma só pessoa com quem falar, do início ao fim" },
      { en: "In English or Portuguese", pt: "Em português ou em inglês" },
      { en: "Your domain and accounts in your name", pt: "O seu domínio e as suas contas em seu nome" },
      { en: "Privacy and GDPR built in", pt: "Privacidade e RGPD de raiz" },
      { en: "Support after launch", pt: "Acompanhamento depois do lançamento" },
    ],
  },
} as const;
