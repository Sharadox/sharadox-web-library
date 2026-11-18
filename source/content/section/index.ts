/**
 * The home page's sections: element id and name. Navigation, footer, section indicator and section headings all
 * use these names, so a section is renamed in one place.
 */
export const SECTION = {
  home: { id: "home", en: "Home", pt: "Início" },
  about: { id: "about", en: "About", pt: "Sobre" },
  services: { id: "services", en: "Services", pt: "Serviços" },
  capabilities: { id: "capabilities", en: "Capabilities", pt: "Capacidades" },
  portfolio: { id: "portfolio", en: "Portfolio", pt: "Portefólio" },
  process: { id: "process", en: "Process", pt: "Processo" },
  faq: { id: "faq", en: "Questions", pt: "Perguntas" },
  contact: { id: "contact", en: "Contact", pt: "Contacto" },
} as const;
