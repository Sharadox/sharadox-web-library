/** "One brand. Every touchpoint.": the layers of a brand, stacked in 3D, that separate as the visitor scrolls. */
export const TOUCHPOINT = {
  eyebrow: { en: "One system", pt: "Um só sistema" },
  title: { en: "One brand. Every touchpoint.", pt: "Uma marca. Todos os pontos de contacto." },
  text: {
    en: "Identity, website, app, social feed and campaigns grow from one source, so everything your customers see feels like one — and nothing ever looks off-brand.",
    pt: "Identidade, website, aplicação, redes sociais e campanhas nascem da mesma origem, para que tudo o que os seus clientes veem pareça um só — e nada fique fora da marca.",
  },
  layers: [
    { key: "identity", en: "Identity", pt: "Identidade" },
    { key: "website", en: "Website", pt: "Website" },
    { key: "application", en: "App", pt: "Aplicação" },
    { key: "social", en: "Social", pt: "Redes sociais" },
    { key: "campaign", en: "Campaign", pt: "Campanha" },
  ],
} as const;
