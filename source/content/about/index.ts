/**
 * "About", between the hero and the services: the sentence that lights up as it scrolls, then the two things
 * Sharadox does. The brand, online, everywhere; and, given the most room, the platform that runs the business
 * (automated where it can be, simple where it can't, managed from anywhere), shown working in its live feed.
 */
export const ABOUT = {
  statement: {
    en: "We take your brand everywhere online, and build the system that runs your business behind it.",
    pt: "Levamos a sua marca a todo o lado online, e construímos o sistema que gere o seu negócio por trás dela.",
  },
  brand: {
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
      en: "A platform made for the way your company works. Everything that can run on its own does, and everything else takes a click, so you and your team run the whole business from anywhere in the world.",
      pt: "Uma plataforma feita para a forma como a sua empresa trabalha. Tudo o que pode andar sozinho anda, e o resto fica à distância de um clique, para que a sua equipa e você giram todo o negócio a partir de qualquer lugar do mundo.",
    },
    points: [
      {
        title: { en: "Automated", pt: "Automático" },
        text: {
          en: "Orders, bookings, stock, invoices and reminders run themselves.",
          pt: "Encomendas, reservas, stock, faturas e lembretes tratam-se sozinhos.",
        },
      },
      {
        title: { en: "Simple", pt: "Simples" },
        text: {
          en: "What's left for people is one click away, in one place.",
          pt: "O que fica para as pessoas está a um clique, num só lugar.",
        },
      },
      {
        title: { en: "Anywhere", pt: "Em qualquer lugar" },
        text: {
          en: "On your phone, tablet or computer, wherever you are.",
          pt: "No telemóvel, no tablet ou no computador, onde quer que esteja.",
        },
      },
    ],
    /** The live feed in the picture: what the platform has just done on its own. */
    feed: {
      live: { en: "Running on its own", pt: "A trabalhar sozinho" },
      events: [
        { en: "New order received", pt: "Nova encomenda recebida" },
        { en: "Invoice issued and sent", pt: "Fatura emitida e enviada" },
        { en: "Stock updated", pt: "Stock atualizado" },
        { en: "Customer notified", pt: "Cliente notificado" },
        { en: "Tomorrow's bookings confirmed", pt: "Reservas de amanhã confirmadas" },
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
