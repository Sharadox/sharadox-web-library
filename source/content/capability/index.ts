/** "Capabilities": everything each discipline delivers, listed in full (from SERVICES), and what always comes with it. */
export const CAPABILITY = {
  title: { en: "Everything, in Detail.", pt: "Tudo, em Detalhe." },
  /** Under the sheet: what comes with every project, whatever it is. */
  included: {
    title: { en: "Always included", pt: "Sempre incluído" },
    items: [
      { en: "A clear quote before we start", pt: "Um orçamento claro antes de começarmos" },
      { en: "One person to talk to, start to finish", pt: "Uma só pessoa com quem falar, do início ao fim" },
      { en: "In English or Portuguese", pt: "Em português ou em inglês" },
      {
        en: "Domain, hosting and accounts taken care of (or kept in your name, if you prefer)",
        pt: "Domínio, alojamento e contas tratados por nós (ou em seu nome, se preferir)",
      },
      {
        en: "Everything legal done as the law requires: privacy, cookies, GDPR and consumer rules",
        pt: "Toda a parte legal feita como a lei exige: privacidade, cookies, RGPD e regras do consumidor",
      },
      { en: "Support after launch", pt: "Acompanhamento depois do lançamento" },
    ],
  },
} as const;
