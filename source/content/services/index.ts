/**
 * The four service groups and their cards (a card may add `points`, shown as a list). A group's `key` is its anchor; a card's `key` is both its contact form
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
      kinds: {
        en: ["Websites", "Platforms", "E-commerce", "CMS", "APIs"],
        pt: ["Websites", "Plataformas", "E-commerce", "CMS", "APIs"],
      },
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
        {
          key: "content-management-system",
          title: { en: "Content Management Systems (CMS)", pt: "Sistemas de Gestão de Conteúdos (CMS)" },
          text: {
            en: "Change your texts, photos, prices and posts yourself, from a simple screen. No code and no technical knowledge needed: your website stays yours to update, whenever you want.",
            pt: "Altere os seus textos, fotografias, preços e publicações sozinho, num ecrã simples. Sem código e sem conhecimentos técnicos: o seu website continua a ser seu para atualizar, sempre que quiser.",
          },
          action: { en: "Manage My Content", pt: "Gerir os Meus Conteúdos" },
          chip: { en: "CMS", pt: "CMS" },
        },
        {
          key: "application-programming-interface",
          title: { en: "APIs", pt: "APIs" },
          text: {
            en: "An API lets programs talk to each other. We build secure, documented APIs that connect your website, apps, partners and tools, so your data goes where it's needed by itself.",
            pt: "Uma API permite que programas falem entre si. Criamos APIs seguras e documentadas que ligam o seu website, aplicações, parceiros e ferramentas, para que os dados cheguem sozinhos onde são precisos.",
          },
          action: { en: "Build an API", pt: "Criar uma API" },
          chip: { en: "API", pt: "API" },
        },
      ],
      capabilities: {
        en: [
          "Websites and landing pages",
          "Online stores",
          "Bookings and ordering",
          "Content management systems",
          "APIs and integrations",
          "Search engine optimization",
        ],
        pt: [
          "Websites e landing pages",
          "Lojas online",
          "Reservas e encomendas",
          "Sistemas de gestão de conteúdos",
          "APIs e integrações",
          "Otimização para motores de busca",
        ],
      },
    },
    {
      key: "desktop-and-mobile-application",
      number: "02",
      title: { en: "Desktop and Mobile Applications", pt: "Aplicações para Computador e Telemóvel" },
      kinds: { en: ["Desktop", "Mobile", "PWA"], pt: ["Computador", "Telemóvel", "PWA"] },
      lead: { en: "Built once. On every screen.", pt: "Feita uma vez. Em todos os ecrãs." },
      cards: [
        {
          key: "progressive-web-application",
          title: { en: "Progressive Web Applications (PWAs)", pt: "Aplicações Web Progressivas (PWAs)" },
          text: {
            en: "One app for every device: phones, tablets and computers, on iPhone, Android, Windows and Mac. It installs straight from your website, opens full screen from the home screen and sends notifications, like any other app.",
            pt: "Uma aplicação para todos os dispositivos: telemóveis, tablets e computadores, em iPhone, Android, Windows e Mac. Instala-se diretamente a partir do seu website, abre em ecrã inteiro a partir do ecrã principal e envia notificações, como qualquer outra aplicação.",
          },
          points: [
            {
              title: { en: "No store in between", pt: "Sem loja pelo meio" },
              text: {
                en: "No app store reviews, rules or commissions: no store can delay your updates, take a cut or remove your app. It stays yours.",
                pt: "Sem revisões, regras nem comissões das lojas de aplicações: nenhuma loja pode atrasar as suas atualizações, ficar com uma parte ou remover a sua aplicação. Continua a ser sua.",
              },
            },
            {
              title: { en: "One codebase, every platform", pt: "Um só código, todas as plataformas" },
              text: {
                en: "Your platform, shop or blog is built once, and the same work becomes the app on every device. Nothing is made again from scratch for each platform.",
                pt: "A sua plataforma, loja ou blog é feita uma vez, e o mesmo trabalho torna-se a aplicação em todos os dispositivos. Nada é refeito de raiz para cada plataforma.",
              },
            },
            {
              title: { en: "Less to pay, less to wait", pt: "Menos custos, menos espera" },
              text: {
                en: "One project instead of three costs less, launches sooner, and every improvement reaches every device on the same day.",
                pt: "Um projeto em vez de três custa menos, chega mais cedo, e cada melhoria chega a todos os dispositivos no mesmo dia.",
              },
            },
          ],
          action: { en: "Build My App", pt: "Criar a Minha Aplicação" },
          chip: { en: "PWA", pt: "PWA" },
        },
      ],
      capabilities: {
        en: [
          "Phones, tablets and computers",
          "iPhone, Android, Windows and Mac",
          "Install from the website",
          "Push notifications",
          "One codebase for every platform",
          "Updates and maintenance",
        ],
        pt: [
          "Telemóveis, tablets e computadores",
          "iPhone, Android, Windows e Mac",
          "Instalação a partir do website",
          "Notificações push",
          "Um só código para todas as plataformas",
          "Atualizações e manutenção",
        ],
      },
    },
    {
      key: "creative",
      number: "03",
      title: { en: "Creative Services", pt: "Serviços Criativos" },
      kinds: { en: ["Branding", "Rebranding", "Design"], pt: ["Branding", "Rebranding", "Design"] },
      lead: { en: "An identity people remember.", pt: "Uma identidade que fica na memória." },
      cards: [
        {
          key: "branding",
          title: { en: "Branding", pt: "Branding" },
          text: {
            en: "Branding is deciding who your brand is before anything is drawn: what it stands for, who it speaks to, its name, its story and its tone of voice. It becomes the guidelines everything else follows.",
            pt: "Branding é definir quem a sua marca é antes de se desenhar o que quer que seja: o que defende, a quem fala, o nome, a história e o tom de voz. Torna-se nas diretrizes que tudo o resto segue.",
          },
          action: { en: "Build My Brand", pt: "Criar a Minha Marca" },
          chip: { en: "Branding", pt: "Branding" },
        },
        {
          key: "rebranding",
          title: { en: "Rebranding", pt: "Rebranding" },
          text: {
            en: "Rebranding can be a refresh, a new look, feel and way of presenting your brand that keeps what customers already love, or a complete change, from the name to the logo, when the business has become something new.",
            pt: "Um rebranding pode ser uma renovação, um novo visual, sensação e forma de apresentar a marca que mantém o que os clientes já adoram, ou uma mudança completa, do nome ao logótipo, quando o negócio se tornou algo novo.",
          },
          action: { en: "Refresh My Brand", pt: "Renovar a Minha Marca" },
          chip: { en: "Rebranding", pt: "Rebranding" },
        },
        {
          key: "branding-design",
          title: { en: "Branding Design", pt: "Design de Marca" },
          text: {
            en: "Branding design is making what people actually see, following the brand's guidelines: the logo, colors and type, and every asset from menus and signage to social media templates, drawn as one system.",
            pt: "Design de marca é criar o que as pessoas realmente veem, seguindo as diretrizes da marca: o logótipo, as cores e a tipografia, e todos os materiais, de menus e sinalética a modelos para redes sociais, desenhados como um só sistema.",
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
      title: { en: "Marketing Campaigns", pt: "Campanhas de Marketing" },
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
  /** After every service: for ideas that fit none of them. */
  unlisted: {
    title: { en: "Didn't find what you were looking for?", pt: "Não encontrou o que procurava?" },
    text: {
      en: "Tell us your idea. Let's talk it through and see how we can help.",
      pt: "Conte-nos a sua ideia. Vamos falar sobre ela e ver como podemos ajudar.",
    },
    action: { en: "Let's Talk", pt: "Vamos Falar" },
  },
} as const;

/** One of the four service group keys. */
export type ServiceKey = (typeof SERVICES.items)[number]["key"];

/** One of the service cards' keys: also its contact form choice and its 3D object. */
export type ServiceCardKey = (typeof SERVICES.items)[number]["cards"][number]["key"];
