/**
 * "About", between the hero and the services: the sentence that lights up as it scrolls, then the two things
 * Sharadox does. The brand, online, everywhere; and, given the most room, the platform that runs the business:
 * automated where it can be, and where people do the work by hand (packing, loading, delivering), each job reaching
 * the right person as a simple task, all of it run from anywhere. Its live feed shows both at work.
 */
export const ABOUT = {
  statement: {
    en: "We take your brand everywhere online, and build the system that runs your business behind it.",
    pt: "Levamos a sua marca a todo o lado online, e construímos o sistema que gere o seu negócio por trás dela.",
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
     * The live feed in the picture: what has just happened, done by the platform on its own or by a person (`by`,
     * shown by their initial) through it.
     */
    feed: {
      /**
       * The panel's three tabs, cycling: the activity (this feed), one project and one client, as the business sees
       * them in its own platform (its own figures, not Sharadox's prices).
       */
      tabs: [
        { en: "Activity", pt: "Atividade" },
        { en: "Project", pt: "Projeto" },
        { en: "Client", pt: "Cliente" },
      ],
      project: {
        name: { en: "Kitchen renovation", pt: "Renovação da cozinha" },
        client: "Villa Mar",
        status: { en: "In progress", pt: "Em curso" },
        progressLabel: { en: "Progress", pt: "Progresso" },
        progress: 68,
        tasksLabel: { en: "Tasks done", pt: "Tarefas feitas" },
        tasks: { done: 17, total: 25 },
        milestones: [
          { en: "Measurements", pt: "Medições", state: "done" },
          { en: "Materials ordered", pt: "Materiais encomendados", state: "done" },
          { en: "Installation", pt: "Instalação", state: "now" },
          { en: "Final check", pt: "Verificação final", state: "next" },
        ],
        quotedLabel: { en: "Quoted", pt: "Orçamentado" },
        quoted: 18400,
        paidLabel: { en: "Paid", pt: "Pago" },
        paid: 12500,
      },
      client: {
        name: "Ana Sousa",
        initials: "AS",
        since: { en: "Client since 2024", pt: "Cliente desde 2024" },
        spentLabel: { en: "Total spent", pt: "Total gasto" },
        spent: 42800,
        openLabel: { en: "Open quotes", pt: "Orçamentos em aberto" },
        open: 18400,
        projectsLabel: { en: "Projects", pt: "Projetos" },
        projects: [
          { en: "Bathroom", pt: "Casa de banho", year: "2024", amount: 14900, state: "done" },
          { en: "Terrace", pt: "Terraço", year: "2025", amount: 9500, state: "done" },
          { en: "Kitchen", pt: "Cozinha", year: "2026", amount: 18400, state: "now" },
        ],
      },
      live: { en: "Live", pt: "Em direto" },
      events: [
        { en: "New order received", pt: "Nova encomenda recebida" },
        { en: "Invoice issued and sent", pt: "Fatura emitida e enviada" },
        { en: "John packed the order", pt: "O João embalou a encomenda", by: "J" },
        { en: "Mary loaded the van", pt: "A Maria carregou a carrinha", by: "M" },
        { en: "Customer told it's on its way", pt: "Cliente avisado: vai a caminho" },
        { en: "Stock updated", pt: "Stock atualizado" },
      ],
      /** Where it's being looked at from, one after another. */
      places: {
        en: ["Lisbon", "London", "New York", "Tokyo"],
        pt: ["Lisboa", "Londres", "Nova Iorque", "Tóquio"],
      },
      viewing: { en: "Viewed from", pt: "Visto de" },
    },
  },
} as const;
