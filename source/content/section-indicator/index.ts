import { SECTION } from "@sharadox/sharadox-web-library/content/section";

/** The sections the side indicator lists, in page order. */
export const SECTION_INDICATOR = {
  label: { en: "Sections", pt: "Secções" },
  sections: [
    SECTION.home,
    SECTION.about,
    SECTION.services,
    SECTION.capabilities,
    SECTION.process,
    SECTION.faq,
    SECTION.contact,
  ],
} as const;
