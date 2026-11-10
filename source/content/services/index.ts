import { separate } from "@sharadox/sharadox-web-library/utility/separate";

/** The five disciplines. `key` is the anchor and picks each cell's live visual; `capabilities` fill the index. */
export const SERVICES = {
  eyebrow: { en: "What we do", pt: "O que fazemos" },
  title: { en: "Your whole brand. One studio.", pt: "Toda a sua marca. Um só estúdio." },
  items: [
    {
      key: "web-application",
      number: "01",
      title: { en: "Web Applications", pt: "Aplicações Web" },
      kinds: { en: ["Websites", "Platforms"], pt: ["Websites", "Plataformas"] },
      lead: {
        en: "Websites that win. Platforms that run the business.",
        pt: "Websites que conquistam. Plataformas que gerem o negócio.",
      },
      text: {
        en: "From a website that loads in an instant, ranks on search and turns visitors into customers, to the bookings, orders, payments and dashboards behind it.",
        pt: "De um website que abre num instante, aparece nas pesquisas e transforma visitas em clientes, às reservas, encomendas, pagamentos e dashboards por trás dele.",
      },
      capabilities: {
        en: [
          "Websites and landing pages",
          "Online stores",
          "Bookings and ordering",
          "Dashboards and internal tools",
          "Integrations and APIs",
          "Search engine optimisation",
        ],
        pt: [
          "Websites e landing pages",
          "Lojas online",
          "Reservas e encomendas",
          "Dashboards e ferramentas internas",
          "Integrações e APIs",
          "Otimização para motores de busca",
        ],
      },
    },
    {
      key: "mobile-application",
      number: "02",
      title: { en: "Mobile Applications", pt: "Aplicações Móveis" },
      kinds: { en: ["iOS", "Android"], pt: ["iOS", "Android"] },
      lead: { en: "In every pocket.", pt: "Em todos os bolsos." },
      text: {
        en: "iOS and Android apps that feel native and stay fast — loyalty, ordering, bookings and notifications, published and looked after in both stores.",
        pt: "Aplicações iOS e Android que parecem nativas e são rápidas — fidelização, encomendas, reservas e notificações, publicadas e mantidas nas duas lojas.",
      },
      capabilities: {
        en: [
          "iPhone and Android",
          "One code base, both stores",
          "Push notifications",
          "In-app payments",
          "App Store and Google Play launch",
          "Updates and maintenance",
        ],
        pt: [
          "iPhone e Android",
          "Um só código, duas lojas",
          "Notificações push",
          "Pagamentos na aplicação",
          "Lançamento na App Store e Google Play",
          "Atualizações e manutenção",
        ],
      },
    },
    {
      key: "graphic-design",
      number: "03",
      title: { en: "Graphic Design", pt: "Design Gráfico" },
      kinds: { en: ["Brand Assets"], pt: ["Ativos de Marca"] },
      lead: { en: "An identity people remember.", pt: "Uma identidade que fica na memória." },
      text: {
        en: "Logo, colour, type and every asset the brand needs — from menus and signage to social templates — drawn as one coherent system.",
        pt: "Logótipo, cor, tipografia e todos os ativos de que a marca precisa — de menus e sinalética a modelos para redes sociais — desenhados como um só sistema.",
      },
      capabilities: {
        en: [
          "Logo and identity",
          "Brand guidelines",
          "Colour and typography",
          "Print, menus and signage",
          "Packaging",
          "Social and motion templates",
        ],
        pt: [
          "Logótipo e identidade",
          "Manual de marca",
          "Cor e tipografia",
          "Impressão, menus e sinalética",
          "Embalagem",
          "Modelos para redes e animação",
        ],
      },
    },
    {
      key: "social-media",
      number: "04",
      title: { en: "Social Media", pt: "Redes Sociais" },
      kinds: { en: ["Growth Plans", "Full Management"], pt: ["Planos de Crescimento", "Gestão Completa"] },
      lead: { en: "Growth, planned.", pt: "Crescimento, planeado." },
      text: {
        en: "A growth plan your team can follow, or full management — strategy, content, publishing, community and a clear report every month.",
        pt: "Um plano de crescimento que a sua equipa pode seguir, ou gestão completa — estratégia, conteúdo, publicação, comunidade e um relatório claro todos os meses.",
      },
      capabilities: {
        en: [
          "Growth plans",
          "Full management",
          "Content calendar",
          "Photo and video",
          "Community management",
          "Monthly reports",
        ],
        pt: [
          "Planos de crescimento",
          "Gestão completa",
          "Calendário de conteúdos",
          "Fotografia e vídeo",
          "Gestão de comunidade",
          "Relatórios mensais",
        ],
      },
    },
    {
      key: "marketing-campaign",
      number: "05",
      title: { en: "Marketing Campaigns", pt: "Campanhas de Marketing" },
      kinds: { en: ["Ads", "Launches", "Email"], pt: ["Anúncios", "Lançamentos", "Email"] },
      lead: { en: "The right people, at the right moment.", pt: "As pessoas certas, no momento certo." },
      text: {
        en: "Campaigns across Meta, Google and email, built around one goal and measured to the last click.",
        pt: "Campanhas no Meta, Google e email, construídas à volta de um objetivo e medidas até ao último clique.",
      },
      capabilities: {
        en: [
          "Meta and Google Ads",
          "Launch campaigns",
          "Email marketing",
          "Local search",
          "Campaign landing pages",
          "Analytics and return on investment",
        ],
        pt: [
          "Meta e Google Ads",
          "Campanhas de lançamento",
          "Email marketing",
          "Pesquisa local",
          "Landing pages de campanha",
          "Análise e retorno do investimento",
        ],
      },
    },
  ],
  notifications: {
    en: [
      ["New booking", separate("Table for 4", "8:00 PM")],
      ["Payment received", separate("€84.50", "Visa")],
      ["Order ready", separate("#2041", "Pick-up")],
      ["New customer", separate("Ana M.", "Lisbon")],
    ],
    pt: [
      ["Nova reserva", separate("Mesa para 4", "20:00")],
      ["Pagamento recebido", separate("€84,50", "Visa")],
      ["Encomenda pronta", separate("#2041", "Recolha")],
      ["Novo cliente", separate("Ana M.", "Lisboa")],
    ],
  },
  /** Labels inside the live visuals. */
  visual: {
    followers: { en: "Followers", pt: "Seguidores" },
    reach: { en: "Reach", pt: "Alcance" },
    clicks: { en: "Clicks", pt: "Cliques" },
    customers: { en: "Customers", pt: "Clientes" },
  },
} as const;

/** One of the five discipline keys. */
export type ServiceKey = (typeof SERVICES.items)[number]["key"];
