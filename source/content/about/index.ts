/**
 * "About", between the hero and the services: the sentence that lights up as it scrolls, then the two things
 * Sharadox does. The brand, online, everywhere; and, given the most room, the platform that runs the business:
 * automated where it can be, and where people do the work by hand (packing, loading, delivering), each job reaching
 * the right person as a simple task, all of it run from anywhere. Its panel shows one job at work in it.
 */
export const ABOUT = {
  statement: {
    en: "From branding, websites, apps and marketing, to tailored systems that fully automate or drastically simplify your daily operations.",
    pt: "Do branding, websites, aplicações e marketing, a sistemas à medida que automatizam por completo ou simplificam drasticamente as suas operações diárias.",
  },
  brand: {
    eyebrow: { en: "Brand", pt: "Marca" },
    title: { en: "Your whole brand, online.", pt: "Toda a sua marca, online." },
    text: {
      en: "Identity, website, apps, social media and campaigns, designed, built and grown by one studio, so everything your customers see feels like one.",
      pt: "Identidade, website, aplicações, redes sociais e campanhas, desenhados, construídos e impulsionados por um só estúdio, para que tudo o que os seus clientes veem pareça um só.",
    },
    parts: {
      en: ["Identity", "Website", "Apps", "Social media", "Campaigns"],
      pt: ["Identidade", "Website", "Aplicações", "Redes sociais", "Campanhas"],
    },
  },
  business: {
    eyebrow: { en: "Platforms", pt: "Plataformas" },
    title: { en: "Your business, run from anywhere.", pt: "O seu negócio, gerido de qualquer lugar." },
    text: {
      en: "A platform made for the way your company works, from the office to the warehouse floor. Everything that can run on its own does. Every job your people do by hand reaches the right person as a simple task on their phone, and is ticked off there. You see it all happen, and run the whole business, from anywhere in the world.",
      pt: "Uma plataforma feita para a forma como a sua empresa trabalha, do escritório ao armazém. Tudo o que pode andar sozinho anda. Cada trabalho feito à mão pela sua equipa chega à pessoa certa como uma tarefa simples no telemóvel, e é dado como feito ali mesmo. Vê tudo a acontecer, e gere todo o negócio, a partir de qualquer lugar do mundo.",
    },
    points: [
      {
        title: { en: "Automated", pt: "Automático" },
        text: {
          en: "Orders, invoices, stock, bookings and reminders run themselves.",
          pt: "Encomendas, faturas, stock, reservas e lembretes tratam-se sozinhos.",
        },
      },
      {
        title: { en: "Your team", pt: "A sua equipa" },
        text: {
          en: "Packing, loading, deliveries, visits: each job reaches the right person, ticked off with a tap.",
          pt: "Embalar, carregar, entregar, visitar: cada trabalho chega à pessoa certa e fica feito com um toque.",
        },
      },
      {
        title: { en: "Anywhere", pt: "Em qualquer lugar" },
        text: {
          en: "See and run it all on your phone, tablet or computer, wherever you are.",
          pt: "Veja e gira tudo no telemóvel, no tablet ou no computador, onde quer que esteja.",
        },
      },
    ],
    /**
     * The platform in the picture, as a business sees it in its own: three tabs a pointer clicks through in turn, all
     * about one job (Ana Sousa's kitchen at Villa Mar, by a renovation company), so the figures agree across them.
     * Its own figures, never Sharadox prices.
     */
    feed: {
      live: { en: "Live", pt: "Em direto" },
      viewing: { en: "Viewed from", pt: "Visto de" },
      /** Where it's being looked at from, one after another. */
      places: {
        en: ["Lisbon", "London", "New York", "Tokyo"],
        pt: ["Lisboa", "Londres", "Nova Iorque", "Tóquio"],
      },
      tabs: [
        { en: "Activity", pt: "Atividade" },
        { en: "Project", pt: "Projeto" },
        { en: "Client", pt: "Cliente" },
      ],
      /** Who did it, when a person did; the platform's own work says "Automatic". */
      automatic: { en: "Automatic", pt: "Automático" },
      /**
       * The log, oldest first, appearing one entry at a time at the top: what was done (`icon` from icon-web-library),
       * by whom, when, and the detail a pointer hovering it shows.
       */
      events: [
        {
          icon: "document-check",
          by: "Ana Sousa",
          time: "09:12",
          en: "Ana approved the kitchen quote",
          pt: "A Ana aprovou o orçamento da cozinha",
          detail: { en: "€18,400 · signed on her phone", pt: "18 400 € · assinado no telemóvel" },
        },
        {
          icon: "euro",
          time: "09:12",
          en: "Deposit of €5,000 received",
          pt: "Sinal de 5000 € recebido",
          detail: { en: "Receipt sent to Ana", pt: "Recibo enviado à Ana" },
        },
        {
          icon: "package",
          by: "Rui",
          time: "09:40",
          en: "Rui ordered the oak worktop",
          pt: "O Rui encomendou a bancada de carvalho",
          detail: { en: "Arrives Thursday", pt: "Chega na quinta-feira" },
        },
        {
          icon: "truck",
          by: "Marta",
          time: "10:05",
          en: "Tiles delivered to Villa Mar",
          pt: "Azulejos entregues na Villa Mar",
          detail: { en: "Received by Marta, with a photo", pt: "Recebidos pela Marta, com fotografia" },
        },
        {
          icon: "wrench",
          by: "Marta",
          time: "11:30",
          en: "Marta installed the cabinets",
          pt: "A Marta instalou os armários",
          detail: { en: "Task 17 of 25 · Ana notified", pt: "Tarefa 17 de 25 · Ana avisada" },
        },
        {
          icon: "euro",
          by: "Ana Sousa",
          time: "11:48",
          en: "Ana paid €7,500",
          pt: "A Ana pagou 7500 €",
          detail: { en: "€12,500 of €18,400 paid", pt: "12 500 € de 18 400 € pagos" },
        },
      ],
      project: {
        name: { en: "Kitchen renovation", pt: "Renovação da cozinha" },
        place: "Villa Mar",
        status: { en: "In progress", pt: "Em curso" },
        progress: { en: "Progress", pt: "Progresso" },
        tasksLabel: { en: "tasks", pt: "tarefas" },
        /** Done of all, before the pointer ticks the next one. */
        tasks: { done: 17, total: 25 },
        /** The checklist around where the job is: done, the one the pointer ticks, and what's left. */
        checklist: [
          { en: "Strip out the old kitchen", pt: "Retirar a cozinha antiga", done: true },
          { en: "Lay the floor tiles", pt: "Assentar o pavimento", done: true },
          { en: "Install the cabinets", pt: "Instalar os armários", done: true },
          { en: "Fit the oak worktop", pt: "Montar a bancada de carvalho", done: false },
          { en: "Final walk-through with Ana", pt: "Vistoria final com a Ana", done: false },
        ],
        paidLabel: { en: "Paid", pt: "Pago" },
        quotedLabel: { en: "Quoted", pt: "Orçamentado" },
        paid: 12500,
        quoted: 18400,
      },
      client: {
        name: "Ana Sousa",
        initials: "AS",
        since: { en: "Client since 2024 · 3 projects", pt: "Cliente desde 2024 · 3 projetos" },
        paidLabel: { en: "Paid", pt: "Pago" },
        quotedLabel: { en: "Quoted", pt: "Orçamentado" },
        /** Every project's quote together, and what she has paid of it. */
        paid: 36900,
        quoted: 42800,
        projectsLabel: { en: "Projects", pt: "Projetos" },
        projects: [
          { en: "Bathroom", pt: "Casa de banho", year: "2024", amount: 14900 },
          { en: "Terrace", pt: "Terraço", year: "2025", amount: 9500 },
          { en: "Kitchen", pt: "Cozinha", year: "2026", amount: 18400 },
        ],
        tasksLabel: { en: "Tasks", pt: "Tarefas" },
        /** Across her projects, after the pointer ticks the worktop: 22 + 24 + 18 of 22 + 24 + 25. */
        tasks: { done: 64, total: 71 },
        doneLabel: { en: "done", pt: "feitas" },
        leftLabel: { en: "to do", pt: "por fazer" },
      },
    },
  },
} as const;
