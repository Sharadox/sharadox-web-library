import type { Translated } from "@sharadox/sharadox-web-library/content/locale/type";

/** The year Sharadox began, where its copyright years start. */
export const FOUNDED = 2026;

/** Site-wide identity used by metadata, structured data, sitemap and share images. */
export const SITE = {
  name: "Sharadox",
  url: "https://sharadox.com",
  email: "contact@sharadox.com",
  description: {
    en: "Sharadox is a brand studio: branding, websites, platforms and online stores, mobile apps and marketing, made simple. Based in the Algarve, Portugal, working worldwide.",
    pt: "A Sharadox é um estúdio de marca: branding, websites, plataformas e lojas online, aplicações móveis e marketing, tornados simples. No Algarve, Portugal, para o mundo.",
  } satisfies Translated,
  keywords: {
    en: [
      "brand studio",
      "branding",
      "brand design",
      "websites",
      "web applications",
      "platforms",
      "mobile apps",
      "e-commerce",
      "social media strategy",
      "lead generation",
      "marketing",
      "Algarve",
      "Portugal",
    ],
    pt: [
      "estúdio de marca",
      "branding",
      "design de marca",
      "websites",
      "aplicações web",
      "plataformas",
      "aplicações móveis",
      "e-commerce",
      "estratégia de redes sociais",
      "geração de leads",
      "marketing",
      "Algarve",
      "Portugal",
    ],
  },
};
