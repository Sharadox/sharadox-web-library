/**
 * The four service groups and their cards. A group's `key` is its anchor; a card's `key` is both its contact form
 * choice (the card's button ticks it) and which 3D object it shows. `capabilities` fill the Capabilities sheet;
 * `kinds` are the group's short names under the hero.
 */
export const SERVICES = {
  eyebrow: { en: "Services", pt: "Serviços" },
  title: { en: "Your whole brand. One studio.", pt: "Toda a sua marca. Um só estúdio." },
  items: [
    {
      key: "web-application",
      number: "01",
      title: { en: "Web Applications", pt: "Aplicações Web" },
      kinds: { en: ["Websites", "Platforms", "E-commerce"], pt: ["Websites", "Plataformas", "E-commerce"] },
      lead: {
        en: "Websites that win. Platforms that run the business.",
        pt: "Websites que conquistam. Plataformas que gerem o negócio.",
      },
      cards: [
        {
          key: "website",
          title: { en: "Websites", pt: "Websites" },
          text: {
            en: "Fast, beautiful websites that rank on search and turn visitors into customers, in every language you need.",
            pt: "Websites rápidos e bonitos, que aparecem nas pesquisas e transformam visitas em clientes, em todas as línguas de que precisa.",
          },
          action: { en: "Get a Website", pt: "Pedir um Website" },
          chip: { en: "Website", pt: "Website" },
        },
        {
          key: "platform",
          title: { en: "Platforms", pt: "Plataformas" },
          text: {
            en: "Bookings, orders, payments, stock and invoicing in one place, built around how you work, with the repetitive tasks done automatically.",
            pt: "Reservas, encomendas, pagamentos, stock e faturação num só lugar, à medida da forma como trabalha, com as tarefas repetitivas feitas automaticamente.",
          },
          action: { en: "Build a Platform", pt: "Criar uma Plataforma" },
          chip: { en: "Platform", pt: "Plataforma" },
        },
        {
          key: "e-commerce",
          title: { en: "E-commerce", pt: "E-commerce" },
          text: {
            en: "An online store that sells around the clock: your catalog, a secure checkout, shipping and stock that keeps itself up to date.",
            pt: "Uma loja online que vende a qualquer hora: o seu catálogo, pagamento seguro, envios e stock sempre atualizado.",
          },
          action: { en: "Open an Online Store", pt: "Abrir uma Loja Online" },
          chip: { en: "E-commerce", pt: "E-commerce" },
        },
      ],
      capabilities: {
        en: [
          "Websites and landing pages",
          "Online stores",
          "Bookings and ordering",
          "Dashboards and internal tools",
          "Business automation and integrations",
          "Search engine optimization",
        ],
        pt: [
          "Websites e landing pages",
          "Lojas online",
          "Reservas e encomendas",
          "Dashboards e ferramentas internas",
          "Automação do negócio e integrações",
          "Otimização para motores de busca",
        ],
      },
    },
    {
      key: "mobile-application",
      number: "02",
      title: { en: "Mobile Applications", pt: "Aplicações Móveis" },
      kinds: { en: ["Android", "iOS", "PWA"], pt: ["Android", "iOS", "PWA"] },
      lead: { en: "In every pocket.", pt: "Em todos os bolsos." },
      cards: [
        {
          key: "android-application",
          title: { en: "Android Applications", pt: "Aplicações Android" },
          text: {
            en: "Fast Android apps for loyalty, ordering, bookings and notifications, published and looked after on Google Play.",
            pt: "Aplicações Android rápidas, para fidelização, encomendas, reservas e notificações, publicadas e mantidas no Google Play.",
          },
          action: { en: "Build an Android App", pt: "Criar uma App Android" },
          chip: { en: "Android App", pt: "App Android" },
        },
        {
          key: "ios-application",
          title: { en: "iOS Applications", pt: "Aplicações iOS" },
          text: {
            en: "iPhone and iPad apps that feel at home on Apple devices, from the first sketch to approval and updates on the App Store.",
            pt: "Aplicações para iPhone e iPad que se sentem em casa nos dispositivos Apple, do primeiro esboço à aprovação e atualizações na App Store.",
          },
          action: { en: "Build an iOS App", pt: "Criar uma App iOS" },
          chip: { en: "iOS App", pt: "App iOS" },
        },
        {
          key: "progressive-web-application",
          title: { en: "Progressive Web Applications (PWAs)", pt: "Aplicações Web Progressivas (PWAs)" },
          text: {
            en: "An app installed straight from your website, with no store in between: it works offline, sends notifications and updates itself.",
            pt: "Uma aplicação instalada diretamente a partir do seu website, sem loja pelo meio: funciona offline, envia notificações e atualiza-se sozinha.",
          },
          action: { en: "Build a PWA", pt: "Criar uma PWA" },
          chip: { en: "PWA", pt: "PWA" },
        },
      ],
      capabilities: {
        en: [
          "iPhone and Android",
          "Progressive web applications",
          "Push notifications",
          "In-app payments",
          "App Store and Google Play launch",
          "Updates and maintenance",
        ],
        pt: [
          "iPhone e Android",
          "Aplicações web progressivas",
          "Notificações push",
          "Pagamentos na aplicação",
          "Lançamento na App Store e Google Play",
          "Atualizações e manutenção",
        ],
      },
    },
    {
      key: "creative",
      number: "03",
      title: { en: "Creative", pt: "Criativo" },
      kinds: { en: ["Branding", "Rebranding", "Design"], pt: ["Branding", "Rebranding", "Design"] },
      lead: { en: "An identity people remember.", pt: "Uma identidade que fica na memória." },
      cards: [
        {
          key: "branding",
          title: { en: "Branding", pt: "Branding" },
          text: {
            en: "Who you are and how you sound: positioning, name, story and voice, so every customer sees at a glance why you.",
            pt: "Quem é e como comunica: posicionamento, nome, história e tom de voz, para que cada cliente perceba logo porque deve escolhê-lo.",
          },
          action: { en: "Build My Brand", pt: "Criar a Minha Marca" },
          chip: { en: "Branding", pt: "Branding" },
        },
        {
          key: "rebranding",
          title: { en: "Rebranding", pt: "Rebranding" },
          text: {
            en: "A fresh look and a clear message for a brand that has outgrown its image, keeping everything customers already love.",
            pt: "Um novo visual e uma mensagem clara para uma marca que cresceu mais do que a sua imagem, mantendo tudo o que os clientes já adoram.",
          },
          action: { en: "Refresh My Brand", pt: "Renovar a Minha Marca" },
          chip: { en: "Rebranding", pt: "Rebranding" },
        },
        {
          key: "branding-design",
          title: { en: "Branding Design", pt: "Design de Marca" },
          text: {
            en: "Logo, color, type and every asset the brand needs, from menus and signage to social templates, drawn as one system.",
            pt: "Logótipo, cor, tipografia e todos os ativos de que a marca precisa, de menus e sinalética a modelos para redes sociais, desenhados como um só sistema.",
          },
          action: { en: "Design My Brand", pt: "Desenhar a Minha Marca" },
          chip: { en: "Branding Design", pt: "Design de Marca" },
        },
      ],
      capabilities: {
        en: [
          "Positioning and naming",
          "Logo and identity",
          "Brand guidelines",
          "Color and typography",
          "Print, menus and signage",
          "Packaging",
        ],
        pt: [
          "Posicionamento e naming",
          "Logótipo e identidade",
          "Manual de marca",
          "Cor e tipografia",
          "Impressão, menus e sinalética",
          "Embalagem",
        ],
      },
    },
    {
      key: "marketing",
      number: "04",
      title: { en: "Marketing", pt: "Marketing" },
      kinds: {
        en: ["Launches", "Leads", "Sales", "Awareness", "Social"],
        pt: ["Lançamentos", "Leads", "Vendas", "Notoriedade", "Redes"],
      },
      lead: { en: "The right people, at the right moment.", pt: "As pessoas certas, no momento certo." },
      cards: [
        {
          key: "product-launch",
          title: { en: "Product Launches", pt: "Lançamentos de Produto" },
          text: {
            en: "A launch planned from the first teaser to day one: the message, the landing page, the campaigns and the timing.",
            pt: "Um lançamento planeado do primeiro teaser ao grande dia: a mensagem, a landing page, as campanhas e o momento certo.",
          },
          action: { en: "Plan a Launch", pt: "Planear um Lançamento" },
          chip: { en: "Product Launch", pt: "Lançamento de Produto" },
        },
        {
          key: "lead-generation",
          title: { en: "Lead Generation", pt: "Geração de Leads" },
          text: {
            en: "Campaigns and landing pages that bring people interested in what you offer straight to your inbox, ready for a reply.",
            pt: "Campanhas e landing pages que trazem pessoas interessadas no que oferece diretamente para a sua caixa de entrada, prontas para uma resposta.",
          },
          action: { en: "Get More Leads", pt: "Ter Mais Leads" },
          chip: { en: "Lead Generation", pt: "Geração de Leads" },
        },
        {
          key: "sales-generation",
          title: { en: "Sales Generation", pt: "Geração de Vendas" },
          text: {
            en: "Ads on Meta and Google, email and offers built around one goal, more sales, and measured down to the last click.",
            pt: "Anúncios no Meta e no Google, email e ofertas construídos à volta de um objetivo, mais vendas, e medidos até ao último clique.",
          },
          action: { en: "Grow My Sales", pt: "Aumentar as Vendas" },
          chip: { en: "Sales Generation", pt: "Geração de Vendas" },
        },
        {
          key: "brand-awareness",
          title: { en: "Brand Awareness", pt: "Notoriedade de Marca" },
          text: {
            en: "Your name in front of the right people, near you and beyond, until they think of you first.",
            pt: "O seu nome à frente das pessoas certas, perto de si e mais além, até pensarem primeiro em si.",
          },
          action: { en: "Make My Brand Known", pt: "Dar a Conhecer a Marca" },
          chip: { en: "Brand Awareness", pt: "Notoriedade de Marca" },
        },
        {
          key: "social-media-strategy",
          title: { en: "Social Media Growth Strategy", pt: "Estratégia de Crescimento nas Redes Sociais" },
          text: {
            en: "A growth strategy your team can follow: we plan, guide and advise, you publish, with a clear path and regular check-ins.",
            pt: "Uma estratégia de crescimento que a sua equipa pode seguir: nós planeamos, orientamos e aconselhamos, a sua equipa publica, com um caminho claro e acompanhamento regular.",
          },
          action: { en: "Plan My Growth", pt: "Planear o Meu Crescimento" },
          chip: { en: "Social Media Strategy", pt: "Estratégia para Redes Sociais" },
        },
      ],
      capabilities: {
        en: [
          "Launch campaigns",
          "Meta and Google Ads",
          "Email marketing",
          "Local search",
          "Social media growth plans",
          "Analytics and return on investment",
        ],
        pt: [
          "Campanhas de lançamento",
          "Meta e Google Ads",
          "Email marketing",
          "Pesquisa local",
          "Planos de crescimento nas redes",
          "Análise e retorno do investimento",
        ],
      },
    },
  ],
} as const;

/** One of the four service group keys. */
export type ServiceKey = (typeof SERVICES.items)[number]["key"];

/** One of the service cards' keys: also its contact form choice and its 3D object. */
export type ServiceCardKey = (typeof SERVICES.items)[number]["cards"][number]["key"];
