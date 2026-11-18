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

/**
 * Sharadox's profiles, in the footer's order: each network's mark (`BrandIcon` name), its name, and the address. They
 * are also the organization's `sameAs` in the structured data, except Google's, a share link that redirects to the
 * business profile.
 */
export const SOCIAL = [
  { icon: "facebook", name: "Facebook", url: "https://facebook.com/sharadoxcom" },
  { icon: "instagram", name: "Instagram", url: "https://instagram.com/sharadoxcom" },
  { icon: "tiktok", name: "TikTok", url: "https://tiktok.com/@sharadox.com" },
  { icon: "youtube", name: "YouTube", url: "https://youtube.com/@sharadox" },
  { icon: "x", name: "X", url: "https://x.com/sharadoxcom" },
  { icon: "threads", name: "Threads", url: "https://threads.com/@sharadoxcom" },
  { icon: "pinterest", name: "Pinterest", url: "https://pinterest.com/sharadoxcom" },
  { icon: "linkedin", name: "LinkedIn", url: "https://linkedin.com/company/sharadoxcom" },
  { icon: "google", name: "Google", url: "https://share.google/lv28MI0ABPwEvM1ad", shareLink: true },
] as const;

/** Google's form for reviewing Sharadox, linked from the footer's legal row. */
export const GOOGLE_REVIEW = "https://g.page/r/Ce_Dy76heUvHEAE/review";
