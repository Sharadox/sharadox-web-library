/**
 * The home page's sections: element id and name. Navigation, footer, section indicator and section headings all
 * use these names, so a section is renamed in one place.
 */
export const SECTION = {
  home: { id: "home", en: "Home", pt: "Início" },
  services: { id: "services", en: "Services", pt: "Serviços" },
  touchpoints: { id: "touchpoints", en: "One System", pt: "Um Só Sistema" },
  capabilities: { id: "capabilities", en: "Capabilities", pt: "Capacidades" },
  process: { id: "process", en: "Process", pt: "Processo" },
  contact: { id: "contact", en: "Contact", pt: "Contacto" },
} as const;
