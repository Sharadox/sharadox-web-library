/**
 * The portfolio: the work Sharadox has made, newest first, and the words around it. A project's `services` are
 * service card keys (content/services), so its chips use the cards' own names. Its screens are its first screen on a
 * computer and on a phone, kept in the site's `public/portfolio/<key>/` folder. Each project has a page of its own
 * (`/portfolio/<key>`), where its chapters show the website's own components running live.
 */
export const PORTFOLIO = {
  /** Where the projects' pages live: `/portfolio/<key>`. */
  path: "/portfolio",
  title: { en: "Work that\nspeaks for itself.", pt: "Trabalho que\nfala por si." },
  text: {
    en: "Every project, with what we made for it, and the work itself to explore.",
    pt: "Cada projeto, com o que fizemos para ele, e o próprio trabalho para explorar.",
  },
  details: {
    client: { en: "Client", pt: "Cliente" },
    place: { en: "Where", pt: "Onde" },
    launched: { en: "Launched", pt: "Lançado" },
    services: { en: "What we made", pt: "O que fizemos" },
  },
  /** The card's way to the project's page. */
  open: { en: "See the Project", pt: "Ver o Projeto" },
  /** The screens' description, for screen readers: "<client> on a computer and on a phone". */
  screens: { en: "on a computer and on a phone", pt: "num computador e num telemóvel" },
  /** On a project's page: the label over each live part, its end, and the way back. */
  page: {
    live: { en: "Live", pt: "Ao vivo" },
    visitTitle: { en: "See it all on its own site.", pt: "Veja tudo no próprio site." },
    visit: { en: "Visit", pt: "Visitar" },
    back: { en: "Back to the Portfolio", pt: "Voltar ao Portefólio" },
  },
  projects: [
    {
      key: "luis-pires-decor",
      client: "Luis Pires Decor",
      name: { en: "Made by hand, now online.", pt: "Feito à mão, agora online." },
      text: {
        en: "An upholstery and interiors workshop in the Algarve since 1996. A renewed brand, and a bilingual website as crafted as its work: a 3D monogram, a scroll-driven timelapse, a fabric studio, a filterable portfolio and booking requests straight to the workshop's inbox, with hosting on its own domain, professional email, and an app customers can install.",
        pt: "Uma oficina de estofos e decoração no Algarve desde 1996. Uma marca renovada, e um website bilingue tão cuidado como o seu trabalho: um monograma em 3D, um timelapse guiado pelo scroll, um estúdio de tecidos, um portefólio com filtros e pedidos de visita diretos para a caixa de correio da oficina, com alojamento no seu próprio domínio, email profissional e uma aplicação que os clientes podem instalar.",
      },
      /** On its page, after the headline: the whole story. */
      story: {
        en: "Luis Pires Decor has upholstered, sewn and dressed homes across the Algarve since 1996. We renewed its brand and its design, then built a website as crafted as the workshop: bilingual, in 3D where it counts, fast on every phone, and able to take a booking request straight to the workshop's inbox. It runs on its own domain, with professional email, and installs like an app. Below, nothing is a picture: these are the website's own components, running live on this page.",
        pt: "A Luis Pires Decor estofa, cose e veste casas por todo o Algarve desde 1996. Renovámos a sua marca e o seu design, e construímos um website tão cuidado como a oficina: bilingue, em 3D onde importa, rápido em qualquer telemóvel, e capaz de levar um pedido de visita diretamente à caixa de correio da oficina. Funciona no seu próprio domínio, com email profissional, e instala-se como uma aplicação. Abaixo, nada é uma imagem: são os próprios componentes do website, a funcionar ao vivo nesta página.",
      },
      place: { en: "Algarve, Portugal", pt: "Algarve, Portugal" },
      /** When it went live, as an ISO date. */
      date: "2026-11-17",
      url: "https://luispiresdecor.com",
      services: [
        "rebranding",
        "branding-design",
        "website",
        "hosting",
        "professional-email",
        "progressive-web-application",
      ],
      /** Its first screen, captured from the live site: on a computer (1440 by 900) and on a phone (390 by 844). */
      screens: {
        computer: { src: "/portfolio/luis-pires-decor/computer.webp", width: 1440, height: 900 },
        phone: { src: "/portfolio/luis-pires-decor/phone.webp", width: 520, height: 1125 },
      },
      /** Its page's chapters, in order: each shows one of the website's components, live, under these words. */
      chapters: [
        {
          key: "hero",
          title: { en: "A first screen in 3D", pt: "Um primeiro ecrã em 3D" },
          text: {
            en: "Black satin ripples under warm light, and the gold monogram floats above it. Bring the pointer close and it turns to face you; grab it, and spin it. Then, as on the site, the places they work in glide by, and the workshop opens full screen.",
            pt: "Cetim preto ondula sob uma luz quente, e o monograma dourado flutua por cima. Aproxime o cursor e ele vira-se para si; agarre-o, e faça-o girar. Depois, como no site, os lugares onde trabalham deslizam, e a oficina abre em ecrã inteiro.",
          },
        },
        {
          key: "sequence",
          title: { en: "From frame to finish", pt: "Da estrutura ao acabamento" },
          text: {
            en: "Seven stages of one Chesterfield, as a timelapse under your finger: as the page scrolls on, each photo fades into the next and a gold thread follows. Open any photo full screen.",
            pt: "Sete etapas de um Chesterfield, como um timelapse sob o seu dedo: à medida que a página avança, cada fotografia funde-se na seguinte e um fio dourado acompanha. Abra qualquer fotografia em ecrã inteiro.",
          },
        },
        {
          key: "fabric",
          title: { en: "The showroom, in your hands", pt: "O showroom nas suas mãos" },
          text: {
            en: "Choose a fabric family and a color, and the 3D cushion is dressed in it. Underneath, the houses in the showroom glide by: grab them, and fling them.",
            pt: "Escolha uma família de tecidos e uma cor, e a almofada em 3D veste-se com ela. Por baixo, as marcas do showroom deslizam: agarre-as, e lance-as.",
          },
        },
        {
          key: "work",
          title: { en: "The work, on an editorial wall", pt: "O trabalho, numa parede editorial" },
          text: {
            en: "The workshop's real projects, filtered by what they show. Open any photo, and page through them full screen.",
            pt: "Os projetos reais da oficina, filtrados pelo que mostram. Abra qualquer fotografia, e percorra-as em ecrã inteiro.",
          },
        },
        {
          key: "process",
          title: { en: "How it works, sewn in gold", pt: "Como funciona, cosido a ouro" },
          text: {
            en: "Five steps, joined by a gold thread that sews itself across as they scroll into view.",
            pt: "Cinco passos, unidos por um fio dourado que se cose sozinho à medida que entram no ecrã.",
          },
        },
        {
          key: "booking",
          title: { en: "Booking a visit", pt: "Marcar uma visita" },
          text: {
            en: "The form checks itself as you type, takes an email, a phone or both, and sends the request to the workshop's inbox, with a reply to the visitor. Try it: from this page, nothing is sent.",
            pt: "O formulário verifica-se enquanto escreve, aceita um email, um telefone ou ambos, e envia o pedido para a caixa de correio da oficina, com uma resposta ao visitante. Experimente: a partir desta página, nada é enviado.",
          },
        },
      ],
    },
  ],
} as const;
