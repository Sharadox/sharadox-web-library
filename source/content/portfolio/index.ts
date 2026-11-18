/**
 * The portfolio: the work Sharadox has made, newest first, and the words around it. A project's `services` are
 * service card keys (content/services), so its chips use the cards' own names and filter by them. Its screens are
 * whole pages captured from the live site, kept in the site's `public/portfolio/<key>/` folder.
 */
export const PORTFOLIO = {
  title: { en: "Work that speaks for itself.", pt: "Trabalho que fala por si." },
  text: {
    en: "Every project, with what we made for it. Filter by service, client or year, and sort it your way.",
    pt: "Cada projeto, com o que fizemos para ele. Filtre por serviço, cliente ou ano, e ordene à sua maneira.",
  },
  filters: {
    label: { en: "Filter and sort the projects", pt: "Filtrar e ordenar os projetos" },
    service: { en: "Service", pt: "Serviço" },
    client: { en: "Client", pt: "Cliente" },
    year: { en: "Year", pt: "Ano" },
    sort: { en: "Sort", pt: "Ordenar" },
    allServices: { en: "All", pt: "Todos" },
    allClients: { en: "All", pt: "Todos" },
    allYears: { en: "All", pt: "Todos" },
  },
  sorts: [
    { key: "newest", en: "Newest first", pt: "Mais recentes" },
    { key: "oldest", en: "Oldest first", pt: "Mais antigos" },
    { key: "client", en: "Client, A to Z", pt: "Cliente, de A a Z" },
    { key: "name", en: "Project, A to Z", pt: "Projeto, de A a Z" },
  ],
  /** How many projects show: one, or many (the number goes before it). */
  count: { en: ["project", "projects"], pt: ["projeto", "projetos"] },
  empty: {
    en: "No project matches these filters yet.",
    pt: "Ainda nenhum projeto corresponde a estes filtros.",
  },
  reset: { en: "Show all", pt: "Mostrar tudo" },
  details: {
    client: { en: "Client", pt: "Cliente" },
    place: { en: "Where", pt: "Onde" },
    launched: { en: "Launched", pt: "Lançado" },
    services: { en: "What we made", pt: "O que fizemos" },
  },
  visit: { en: "Visit the Site", pt: "Visitar o Site" },
  /** The screens' description, for screen readers: "<project> on a computer and on a phone". */
  screens: { en: "on a computer and on a phone", pt: "num computador e num telemóvel" },
  projects: [
    {
      key: "luis-pires-decor",
      client: "Luis Pires Decor",
      name: { en: "Made by hand, now online.", pt: "Feito à mão, agora online." },
      text: {
        en: "An upholstery and interiors workshop in the Algarve since 1996. A bilingual website with a 3D logo, its work in a filterable portfolio, booking requests that reach the workshop by email, hosting on its own domain, professional email, and an app customers can install.",
        pt: "Uma oficina de estofos e decoração no Algarve desde 1996. Um website bilingue com um logótipo em 3D, o seu trabalho num portefólio com filtros, pedidos de visita que chegam à oficina por email, alojamento no seu próprio domínio, email profissional e uma aplicação que os clientes podem instalar.",
      },
      place: { en: "Algarve, Portugal", pt: "Algarve, Portugal" },
      /** When it went live, as an ISO date. */
      date: "2026-11-17",
      url: "https://luispiresdecor.com",
      services: ["website", "hosting", "professional-email", "progressive-web-application"],
      /** Whole-page captures from the live site: on a computer (1440 wide) and on a phone (390 wide). */
      screens: {
        computer: { src: "/portfolio/luis-pires-decor/computer.webp", width: 1200, height: 12309 },
        phone: { src: "/portfolio/luis-pires-decor/phone.webp", width: 390, height: 16000 },
      },
    },
  ],
} as const;
