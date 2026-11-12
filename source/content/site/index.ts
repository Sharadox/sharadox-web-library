import type { Translated } from "@sharadox/sharadox-web-library/content/locale/type";

/** Site-wide identity used by metadata, structured data, sitemap and share images. */
/** The year Sharadox began, where its copyright years start. */
export const FOUNDED = 2026;

export const SITE = {
  name: "Sharadox",
  url: "https://sharadox.com",
  email: "contact@sharadox.com",
  description: {
    en: "Sharadox is a brand studio: graphic design, websites and platforms, mobile apps, social media and marketing campaigns, made simple. Based in the Algarve, Portugal, working worldwide.",
    pt: "A Sharadox é um estúdio de marca: design gráfico, websites e plataformas, aplicações móveis, redes sociais e campanhas de marketing, tornados simples. No Algarve, Portugal, para o mundo.",
  } satisfies Translated,
  keywords: {
    en: [
      "brand studio",
      "graphic design",
      "branding",
      "websites",
      "web applications",
      "platforms",
      "mobile apps",
      "social media management",
      "marketing campaigns",
      "Algarve",
      "Portugal",
    ],
    pt: [
      "estúdio de marca",
      "design gráfico",
      "branding",
      "websites",
      "aplicações web",
      "plataformas",
      "aplicações móveis",
      "gestão de redes sociais",
      "campanhas de marketing",
      "Algarve",
      "Portugal",
    ],
  },
};
