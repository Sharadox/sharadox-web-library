import type { Translated } from "@sharadox/sharadox-web-library/content/locale/type";

/** The year Sharadox began, where its copyright years start. */
export const FOUNDED = 2026;

/** Site-wide identity used by metadata, structured data, sitemap and share images. */
export const SITE = {
  name: "Sharadox",
  url: "https://sharadox.com",
  email: "contact@sharadox.com",
  description: {
    en: "Sharadox is a brand studio: branding, websites, platforms, online stores, hosting, professional email, Android, iOS and web apps, printing, merchandise and marketing campaigns, made simple. Based in the Algarve, Portugal, working worldwide.",
    pt: "A Sharadox é um estúdio de marca: branding, websites, plataformas, lojas online, alojamento, email profissional, aplicações Android, iOS e web, impressão, merchandising e campanhas de marketing, tornados simples. No Algarve, Portugal, para o mundo.",
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
      "website hosting",
      "professional email",
      "Android and iOS apps",
      "printing",
      "merchandise",
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
      "alojamento de websites",
      "email profissional",
      "aplicações Android e iOS",
      "impressão",
      "merchandising",
      "estratégia de redes sociais",
      "geração de leads",
      "marketing",
      "Algarve",
      "Portugal",
    ],
  },
};
