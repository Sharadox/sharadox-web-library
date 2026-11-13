import { SECTION } from "@sharadox/sharadox-web-library/content/section";

/** The sections the top navigation and the phone menu link to, in order, and the menu button's labels. */
export const NAVIGATION = {
  links: [SECTION.services, SECTION.touchpoints, SECTION.capabilities, SECTION.process, SECTION.contact],
  main: { en: "Main", pt: "Principal" },
  menu: { en: "Open menu", pt: "Abrir menu" },
  close: { en: "Close menu", pt: "Fechar menu" },
} as const;
