/**
 * The four service groups and their cards. A group's `key` is its anchor; a card's `key` is both its contact form
 * choice (the card's button ticks it) and which 3D object it shows. `capabilities` fill the Capabilities sheet;
 * `kinds` are the group's short names under the hero.
 */
export const SERVICES = {
  eyebrow: { en: "Services", pt: "Serviços" },
  title: { en: "Pick where to start.", pt: "Escolha por onde começar." },
  items: [
    {
      key: "web",
      number: "01",
      title: { en: "Web", pt: "Web" },
      kinds: {
        en: ["Websites", "Platforms", "E-commerce", "Hosting", "Email"],
        pt: ["Websites", "Plataformas", "E-commerce", "Alojamento", "Email"],
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
            en: "A system tailored to your company: it automates as much of your operations as possible and makes everything else as simple as it can be.",
            pt: "Um sistema feito à medida da sua empresa: automatiza o máximo possível das suas operações e torna todo o resto o mais simples possível.",
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
          key: "hosting",
          title: { en: "Hosting", pt: "Alojamento" },
          text: {
            en: "We host what we build and look after it every day: updates, backups and security, and if anything goes wrong, we're on it until it's back up.",
            pt: "Alojamos o que construímos e cuidamos disso todos os dias: atualizações, cópias de segurança e segurança, e se algo falhar, tratamos de tudo até voltar a funcionar.",
          },
          action: { en: "Host With Us", pt: "Alojar Connosco" },
          chip: { en: "Hosting", pt: "Alojamento" },
        },
        {
          key: "professional-email",
          title: { en: "Professional Emails", pt: "Emails Profissionais" },
          text: {
            en: "Email at your own domain, like you@yourdomain.com, on every device your team uses, and set up so your messages land in the inbox, not in spam.",
            pt: "Email com o seu próprio domínio, como voce@oseudominio.pt, em todos os dispositivos da sua equipa, e configurado para que as suas mensagens cheguem à caixa de entrada, e não ao spam.",
          },
          action: { en: "Get Professional Email", pt: "Ter Email Profissional" },
          chip: { en: "Professional Email", pt: "Email Profissional" },
        },
      ],
      capabilities: {
        en: [
          "Websites and landing pages",
          "Custom business management systems",
          "Business automation",
          "AI search optimization: found and recommended by AI assistants",
          "AI assistants and automations in your systems",
          "Online stores with cards, MB WAY and Multibanco",
          "Bookings, orders and client areas",
          "Integrations with invoicing, CRM and payments",
          "Search engine optimization",
          "Websites in every language you need",
          "Analytics and conversion tracking",
          "Hosting, monitoring and backups",
          "Domains, SSL and security",
          "Professional email",
          "Privacy, cookies and accessibility done right",
        ],
        pt: [
          "Websites e landing pages",
          "Sistemas de gestão à medida",
          "Automatização do negócio",
          "Otimização para pesquisa com IA: encontrado e recomendado por assistentes de IA",
          "Assistentes e automatizações com IA nos seus sistemas",
          "Lojas online com cartão, MB WAY e Multibanco",
          "Reservas, encomendas e áreas de cliente",
          "Integrações com faturação, CRM e pagamentos",
          "Otimização para motores de busca",
          "Websites em todas as línguas de que precisa",
          "Análise e acompanhamento de conversões",
          "Alojamento, monitorização e cópias de segurança",
          "Domínios, SSL e segurança",
          "Email profissional",
          "Privacidade, cookies e acessibilidade bem feitos",
        ],
      },
    },
    {
      key: "desktop-and-mobile",
      number: "02",
      title: { en: "Desktop & Mobile", pt: "Computador e Telemóvel" },
      kinds: { en: ["PWA", "Android", "iOS"], pt: ["PWA", "Android", "iOS"] },
      lead: { en: "Apps for every screen.", pt: "Aplicações para todos os ecrãs." },
      cards: [
        {
          key: "progressive-web-application",
          title: { en: "Progressive Web Applications (PWAs)", pt: "Aplicações Web Progressivas (PWAs)" },
          text: {
            en: "Your website, platform, online store or anything else built for the web, installable on any device like any other app. No app stores in between and no fees to pay them, one codebase for every platform, updates that reach every device at once, and far less to spend than on a separate app for each.",
            pt: "O seu website, plataforma, loja online ou qualquer outra coisa feita para a web, instalável em qualquer dispositivo como qualquer outra aplicação. Sem lojas pelo meio nem comissões a pagar-lhes, um só código para todas as plataformas, atualizações que chegam a todos os dispositivos ao mesmo tempo, e muito menos custos do que uma aplicação separada para cada uma.",
          },
          action: { en: "Build My App", pt: "Criar a Minha Aplicação" },
          chip: { en: "PWA", pt: "PWA" },
        },
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
      ],
      capabilities: {
        en: [
          "Phones, tablets and computers",
          "iPhone, Android, Windows and Mac",
          "Install from the website",
          "Works offline",
          "Push notifications",
          "Logins, accounts and payments",
          "Camera, location and other device features",
          "Connected to your website or platform",
          "Publishing on Google Play and the App Store",
          "App analytics",
          "Updates and maintenance",
        ],
        pt: [
          "Telemóveis, tablets e computadores",
          "iPhone, Android, Windows e Mac",
          "Instalação a partir do website",
          "Funciona sem internet",
          "Notificações push",
          "Logins, contas e pagamentos",
          "Câmara, localização e outras funções do dispositivo",
          "Ligada ao seu website ou plataforma",
          "Publicação no Google Play e na App Store",
          "Análise da aplicação",
          "Atualizações e manutenção",
        ],
      },
    },
    {
      key: "creative",
      number: "03",
      title: { en: "Creative", pt: "Criativo" },
      kinds: {
        en: ["Branding", "Rebranding", "Design", "Print", "Merch"],
        pt: ["Branding", "Rebranding", "Design", "Impressos", "Merchandising"],
      },
      lead: { en: "An identity people remember.", pt: "Uma identidade que fica na memória." },
      cards: [
        {
          key: "branding",
          title: { en: "Branding", pt: "Branding" },
          text: {
            en: "Defining who your brand is: what it stands for, who it speaks to, its name, its voice, and the look and feel everything else will follow.",
            pt: "Definir quem a sua marca é: o que defende, a quem fala, o nome, o tom de voz, e o estilo e a sensação que tudo o resto vai seguir.",
          },
          action: { en: "Build My Brand", pt: "Criar a Minha Marca" },
          chip: { en: "Branding", pt: "Branding" },
        },
        {
          key: "rebranding",
          title: { en: "Rebranding", pt: "Rebranding" },
          text: {
            en: "Giving your brand a fresh look and feel, in step with who you are today and where you're heading, while keeping what customers already love.",
            pt: "Dar à sua marca um visual e uma sensação renovados, ao ritmo de quem é hoje e para onde vai, mantendo o que os clientes já adoram.",
          },
          action: { en: "Refresh My Brand", pt: "Renovar a Minha Marca" },
          chip: { en: "Rebranding", pt: "Rebranding" },
        },
        {
          key: "branding-design",
          title: { en: "Branding Design", pt: "Design de Marca" },
          text: {
            en: "Creating what branding or rebranding defined: the logo, colors, typefaces and icons, gathered in a brand book anyone can follow.",
            pt: "Criar o que o branding ou o rebranding definiu: o logótipo, as cores, as tipografias e os ícones, reunidos num manual de marca que todos podem seguir.",
          },
          action: { en: "Design My Brand", pt: "Desenhar a Minha Marca" },
          chip: { en: "Branding Design", pt: "Design de Marca" },
        },
        {
          key: "print-design",
          title: { en: "Printing", pt: "Impressão" },
          text: {
            en: "Business cards, flyers, brochures, signage and packaging, designed with your brand and printed by trusted partners, colors as they should be.",
            pt: "Cartões de visita, flyers, brochuras, sinalética e embalagens, desenhados com a sua marca e impressos por parceiros de confiança, com as cores certas.",
          },
          action: { en: "Print With Us", pt: "Imprimir Connosco" },
          chip: { en: "Printing", pt: "Impressão" },
        },
        {
          key: "merchandise",
          title: { en: "Merchandise", pt: "Merchandising" },
          text: {
            en: "Your brand on things people keep: T-shirts, caps, bottles, mugs, pens and bags, designed by us and made by trusted partners.",
            pt: "A sua marca em coisas que as pessoas guardam: t-shirts, bonés, garrafas, canecas, canetas e sacos, desenhados por nós e produzidos por parceiros de confiança.",
          },
          action: { en: "Create My Merch", pt: "Criar o Meu Merchandising" },
          chip: { en: "Merchandise", pt: "Merchandising" },
        },
      ],
      capabilities: {
        en: [
          "Brand strategy and positioning",
          "Naming and slogans",
          "Logo and identity",
          "Color and typography",
          "Tone of voice",
          "Icons and illustrations",
          "Brand guidelines",
          "Social media templates",
          "Presentations and documents",
          "Business cards, flyers and signage",
          "Packaging",
          "Merchandise",
          "Printing with trusted partners",
        ],
        pt: [
          "Estratégia e posicionamento de marca",
          "Naming e slogans",
          "Logótipo e identidade",
          "Cor e tipografia",
          "Tom de voz",
          "Ícones e ilustrações",
          "Manual de marca",
          "Modelos para redes sociais",
          "Apresentações e documentos",
          "Cartões de visita, flyers e sinalética",
          "Embalagem",
          "Merchandising",
          "Impressão com parceiros de confiança",
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
          title: { en: "Launch Campaigns", pt: "Campanhas de Lançamento" },
          text: {
            en: "A launch planned from the first teaser to day one: the message, the landing page, the campaigns and the timing.",
            pt: "Um lançamento planeado do primeiro teaser ao grande dia: a mensagem, a landing page, as campanhas e o momento certo.",
          },
          action: { en: "Plan a Launch", pt: "Planear um Lançamento" },
          chip: { en: "Launch Campaign", pt: "Campanha de Lançamento" },
        },
        {
          key: "lead-generation",
          title: { en: "Lead Generation Campaigns", pt: "Campanhas de Geração de Leads" },
          text: {
            en: "Campaigns and landing pages that bring people interested in what you offer straight to your inbox, ready for a reply.",
            pt: "Campanhas e landing pages que trazem pessoas interessadas no que oferece diretamente para a sua caixa de entrada, prontas para uma resposta.",
          },
          action: { en: "Get More Leads", pt: "Ter Mais Leads" },
          chip: { en: "Lead Generation", pt: "Geração de Leads" },
        },
        {
          key: "sales-generation",
          title: { en: "Sales Generation Campaigns", pt: "Campanhas de Geração de Vendas" },
          text: {
            en: "Ads on Meta and Google, email and offers built around one goal, more sales, and measured down to the last click.",
            pt: "Anúncios no Meta e no Google, email e ofertas construídos à volta de um objetivo, mais vendas, e medidos até ao último clique.",
          },
          action: { en: "Grow My Sales", pt: "Aumentar as Vendas" },
          chip: { en: "Sales Generation", pt: "Geração de Vendas" },
        },
        {
          key: "brand-awareness",
          title: { en: "Brand Awareness Campaigns", pt: "Campanhas de Notoriedade de Marca" },
          text: {
            en: "Your name in front of the right people, near you and beyond, again and again, until they think of you first.",
            pt: "O seu nome à frente das pessoas certas, perto de si e mais além, vezes sem conta, até pensarem primeiro em si.",
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
          "Lead generation and landing pages",
          "Email marketing and newsletters",
          "Google Business Profile and local search",
          "Social media growth plans",
          "Content calendars",
          "Retargeting",
          "Offers and promotions",
          "Analytics and return on investment",
          "Clear monthly reports",
        ],
        pt: [
          "Campanhas de lançamento",
          "Meta e Google Ads",
          "Geração de leads e landing pages",
          "Email marketing e newsletters",
          "Perfil da Empresa no Google e pesquisa local",
          "Planos de crescimento nas redes",
          "Calendários de conteúdo",
          "Remarketing",
          "Ofertas e promoções",
          "Análise e retorno do investimento",
          "Relatórios mensais claros",
        ],
      },
    },
  ],
  /** After every service: for ideas that fit none of them. */
  unlisted: {
    title: { en: "Didn't find the service you were looking for?", pt: "Não encontrou o serviço que procurava?" },
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
