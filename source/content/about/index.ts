/**
 * "About", between the hero and the services: the sentence that lights up as it scrolls, then Sharadox's two halves,
 * each told in one picture. 01, the brand: everything customers see, from one identity. 02, the platform that runs
 * the business, as a flow anyone can follow left to right: customers order and book, the platform does the paperwork
 * on its own, the team gets each job on their phone, and the owner sees it all from anywhere.
 */
export const ABOUT = {
  statement: {
    en: "We take your brand everywhere online, and build the system that runs your business behind it.",
    pt: "Levamos a sua marca a todo o lado online, e construímos o sistema que gere o seu negócio por trás dela.",
  },
  brand: {
    number: "01",
    eyebrow: { en: "Brand", pt: "Marca" },
    title: { en: "Your whole brand, everywhere online.", pt: "Toda a sua marca, em todo o lado online." },
    text: {
      en: "One identity, designed once and carried the same way through everything your customers see.",
      pt: "Uma identidade, desenhada uma vez e levada da mesma forma a tudo o que os seus clientes veem.",
    },
    /** What the brand reaches, each drawn small: its key names the drawing. */
    parts: [
      {
        key: "identity",
        title: { en: "Identity", pt: "Identidade" },
        note: { en: "Logo, colors and voice", pt: "Logótipo, cores e tom" },
      },
      {
        key: "website",
        title: { en: "Website", pt: "Website" },
        note: { en: "Found, fast, in every language", pt: "Encontrado, rápido, em todas as línguas" },
      },
      {
        key: "apps",
        title: { en: "Apps", pt: "Aplicações" },
        note: { en: "On every phone and computer", pt: "Em todos os telemóveis e computadores" },
      },
      {
        key: "social",
        title: { en: "Social media", pt: "Redes sociais" },
        note: { en: "A feed that looks like you", pt: "Um feed com a sua cara" },
      },
      {
        key: "campaigns",
        title: { en: "Campaigns", pt: "Campanhas" },
        note: { en: "The right people, at the right time", pt: "As pessoas certas, no momento certo" },
      },
    ],
  },
  platform: {
    number: "02",
    eyebrow: { en: "Platforms", pt: "Plataformas" },
    title: { en: "Your business, run by one system.", pt: "O seu negócio, gerido por um só sistema." },
    text: {
      en: "Your customers order and book online. The platform does the paperwork on its own. Your team gets each job on their phone. And you see it all, from anywhere.",
      pt: "Os seus clientes encomendam e reservam online. A plataforma trata da papelada sozinha. A sua equipa recebe cada trabalho no telemóvel. E você vê tudo, a partir de qualquer lugar.",
    },
    /** The flow, left to right: who does what, and the steps that tick off in turn. */
    lanes: [
      {
        key: "customers",
        title: { en: "Your customers", pt: "Os seus clientes" },
        note: { en: "Online, any time", pt: "Online, a qualquer hora" },
        steps: [
          { en: "Order online", pt: "Encomendam online" },
          { en: "Book a visit", pt: "Marcam uma visita" },
          { en: "Pay securely", pt: "Pagam em segurança" },
        ],
      },
      {
        key: "platform",
        title: { en: "Your platform", pt: "A sua plataforma" },
        note: { en: "Runs on its own", pt: "Trabalha sozinha" },
        steps: [
          { en: "Invoice issued and sent", pt: "Fatura emitida e enviada" },
          { en: "Stock updated", pt: "Stock atualizado" },
          { en: "Customer notified", pt: "Cliente avisado" },
          { en: "Job sent to the team", pt: "Trabalho enviado à equipa" },
        ],
      },
      {
        key: "team",
        title: { en: "Your team", pt: "A sua equipa" },
        note: { en: "On their phone", pt: "No telemóvel" },
        steps: [
          { en: "Pack order #1048", pt: "Embalar encomenda #1048" },
          { en: "Load the van", pt: "Carregar a carrinha" },
          { en: "Visit at 3 pm", pt: "Visita às 15h" },
        ],
      },
    ],
    you: {
      title: { en: "You", pt: "Você" },
      text: {
        en: "See and run it all, live, from your phone, tablet or computer.",
        pt: "Veja e gira tudo, ao vivo, no telemóvel, tablet ou computador.",
      },
      live: { en: "Live", pt: "Ao vivo" },
      /** Where it's being looked at from, one after another. */
      places: { en: ["Lisbon", "London", "New York", "Tokyo"], pt: ["Lisboa", "Londres", "Nova Iorque", "Tóquio"] },
    },
  },
} as const;
