import { separate } from "@sharadox/sharadox-web-library/utility/separate";

/** Hero copy. The title is split into lines so the last one can be styled on its own. */
export const HERO = {
  eyebrow: {
    en: separate("Algarve, Portugal", "working worldwide"),
    pt: separate("Algarve, Portugal", "para o mundo inteiro"),
  },
  subtitle: {
    en: "One studio for your whole brand — identity, websites, platforms, apps, social media and campaigns, designed, built and grown as one.",
    pt: "Um só estúdio para toda a sua marca — identidade, websites, plataformas, aplicações, redes sociais e campanhas, desenhados, construídos e impulsionados como um todo.",
  },
  secondary: { en: "Explore Services", pt: "Ver Serviços" },
  drag: { en: "Drag to explore", pt: "Arraste para explorar" },
} as const;
