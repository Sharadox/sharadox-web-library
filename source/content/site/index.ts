import type { Translated } from "@sharadox/sharadox-web-library/content/locale/type";

/** The year Sharadox began, where its copyright years start. */
export const FOUNDED = 2026;

/** Site-wide identity used by metadata, structured data, sitemap and share images. */
export const SITE = {
  name: "Sharadox",
  url: "https://sharadox.com",
  email: "contact@sharadox.com",
  description: {
    en: "Sharadox is a brand studio: branding, websites, platforms, online stores, content management and APIs, apps for every device and marketing campaigns, made simple. Based in the Algarve, Portugal, working worldwide.",
    pt: "A Sharadox é um estúdio de marca: branding, websites, plataformas, lojas online, gestão de conteúdos e APIs, aplicações para todos os dispositivos e campanhas de marketing, tornados simples. No Algarve, Portugal, para o mundo.",
  } satisfies Translated,
  keywords: {
    en: [
      "brand studio",
      "branding",
      "brand design",
      "websites",
      "web applications",
      "platforms",
      "progressive web apps",
      "e-commerce",
      "CMS",
      "APIs",
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
      "aplicações web progressivas",
      "e-commerce",
      "CMS",
      "APIs",
      "estratégia de redes sociais",
      "geração de leads",
      "marketing",
      "Algarve",
      "Portugal",
    ],
  },
};
