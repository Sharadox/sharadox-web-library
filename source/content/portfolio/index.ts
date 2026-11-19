import { SITE } from "@sharadox/sharadox-web-library/content/site";

/**
 * The portfolio: the work Sharadox has made, newest first, and the words around it. A project's `services` are
 * service card keys (content/services), so its chips use the cards' own names. Its screens are its first screen on a
 * computer and on a phone, kept in the site's `public/portfolio/<key>/` folder. Each project has a page of its own
 * (`/portfolio/<key>`), where its chapters show the website's own components running live.
 */
export const PORTFOLIO = {
  /** Where the projects' pages live: `/portfolio/<key>`. */
  path: "/portfolio",
  /** A project page's title ends with the portfolio's name: "<project> · Sharadox Portfolio". */
  pageTitle: { en: `${SITE.name} Portfolio`, pt: `Portefólio ${SITE.name}` },
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
    /** Before the chapters: what the page shows, and that it's the real thing. */
    intro: {
      eyebrow: { en: "Inside the website", pt: "Dentro do website" },
      text: {
        en: "A few of the parts we're proudest of on this site, each explained and then running live, right here. These aren't pictures: they're the website's own components.",
        pt: "Algumas das partes deste site de que mais nos orgulhamos, cada uma explicada e depois a funcionar ao vivo, aqui mesmo. Não são imagens: são os próprios componentes do website.",
      },
    },
    /** The label over each chapter's details. */
    details: { en: "How it works", pt: "Como funciona" },
    /** What the demo form says when sent, instead of sending. */
    demo: {
      en: "This is a demo, so nothing was sent. On the live site, this request goes straight to the workshop's inbox.",
      pt: "Isto é uma demonstração, por isso nada foi enviado. No site, este pedido segue diretamente para a caixa de correio da oficina.",
    },
    /** The end's title, over the way to the site and the way back. */
    visitTitle: { en: "See it live", pt: "Veja-o ao vivo" },
    visit: { en: "Visit", pt: "Visitar" },
    back: { en: "Back to the Portfolio", pt: "Voltar ao Portefólio" },
  },
  projects: [
    {
      key: "luis-pires-decor-website-and-rebranding",
      /** The project's name, over its headline and in its page's title. */
      title: "Luis Pires Decor Website & Rebranding",
      client: "Luis Pires Decor",
      name: { en: "A craft of decades, now easy to find.", pt: "Um ofício de décadas, agora fácil de encontrar." },
      text: {
        en: "An upholstery and interiors workshop in the Algarve since 1996. A renewed brand, and a bilingual website built to be found: described for search engines and written so AI assistants understand it, so whoever asks for an upholsterer in the Algarve is pointed its way. Inside, a 3D monogram, a scroll-driven timelapse, a fabric studio, a filterable portfolio and booking requests straight to the workshop's inbox, on its own domain, with professional email and an app customers can install.",
        pt: "Uma oficina de estofos e decoração no Algarve desde 1996. Uma marca renovada, e um website bilingue feito para ser encontrado: descrito para os motores de busca e escrito para que os assistentes de IA o compreendam, para que quem procura um estofador no Algarve chegue até ela. Lá dentro, um monograma em 3D, um timelapse guiado pelo scroll, um estúdio de tecidos, um portefólio com filtros e pedidos de visita diretos para a caixa de correio da oficina, no seu próprio domínio, com email profissional e uma aplicação que os clientes podem instalar.",
      },
      /** On its page, after the headline: the whole story. */
      story: {
        en: "Luis Pires Decor has upholstered, sewn and dressed homes across the Algarve since 1996. We renewed its brand and its design, then built a website as refined as the workshop's own work, and made to be found: every page is described for search engines in both languages, and the site explains itself to AI assistants, so people asking for an upholsterer nearby find it. It runs on its own domain, with professional email, and installs like an app.",
        pt: "A Luis Pires Decor estofa, cose e veste casas por todo o Algarve desde 1996. Renovámos a sua marca e o seu design, e construímos um website tão cuidado como o trabalho da própria oficina, e feito para ser encontrado: cada página está descrita para os motores de busca nas duas línguas, e o site explica-se aos assistentes de IA, para que quem procura um estofador por perto o encontre. Funciona no seu próprio domínio, com email profissional, e instala-se como uma aplicação.",
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
        computer: { src: "/portfolio/luis-pires-decor-website-and-rebranding/computer.webp", width: 1440, height: 900 },
        phone: { src: "/portfolio/luis-pires-decor-website-and-rebranding/phone.webp", width: 520, height: 1125 },
      },
      /**
       * Its page's chapters, in order: each is one part of the website we're proud of, what it is, a few details of how
       * it works (`points`), and then the part itself, live.
       */
      chapters: [
        {
          key: "hero",
          title: { en: "The monogram, in real 3D", pt: "O monograma, em 3D a sério" },
          text: {
            en: "The first screen greets visitors with the brand itself: the gold monogram floating over black satin that ripples under a warm light. Bring the pointer close and it turns to face you; grab it, and spin it.",
            pt: "O primeiro ecrã recebe os visitantes com a própria marca: o monograma dourado a flutuar sobre cetim preto que ondula sob uma luz quente. Aproxime o cursor e ele vira-se para si; agarre-o, e faça-o girar.",
          },
          points: [
            {
              en: "Drawn live in the browser with WebGL, not a video: sharp on any screen, and light to load.",
              pt: "Desenhado ao vivo no browser com WebGL, não é um vídeo: nítido em qualquer ecrã, e leve a carregar.",
            },
            {
              en: "The words arrive first, and the 3D scene follows without holding them back.",
              pt: "As palavras chegam primeiro, e a cena 3D segue-se sem as atrasar.",
            },
            {
              en: "It pauses when it's off screen, and holds still for visitors who ask for less motion.",
              pt: "Pausa fora do ecrã, e fica parado para quem pede menos movimento.",
            },
          ],
        },
        {
          key: "sequence",
          title: { en: "From frame to finish", pt: "Da estrutura ao acabamento" },
          text: {
            en: "Seven stages of one Chesterfield, from the bare frame to the finished sofa, told as a timelapse that your own scrolling drives.",
            pt: "Sete etapas de um Chesterfield, da estrutura nua ao sofá terminado, contadas como um timelapse guiado pelo seu próprio scroll.",
          },
          points: [
            {
              en: "The section holds still while you scroll: each photo fades into the next, and a gold thread fills.",
              pt: "A secção fica parada enquanto faz scroll: cada fotografia funde-se na seguinte, e um fio dourado enche-se.",
            },
            {
              en: "Each stage's name leads straight to it, and any photo opens full screen.",
              pt: "O nome de cada etapa leva diretamente a ela, e qualquer fotografia abre em ecrã inteiro.",
            },
            {
              en: "On phones the photo runs edge to edge, with the stage's caption over it.",
              pt: "Nos telemóveis a fotografia ocupa o ecrã de ponta a ponta, com a legenda da etapa por cima.",
            },
          ],
        },
        {
          key: "fabric",
          title: { en: "The showroom, in your hands", pt: "O showroom nas suas mãos" },
          text: {
            en: "Choose a fabric family and a color, and the 3D cushion is dressed in it, the new cloth wiping over the last.",
            pt: "Escolha uma família de tecidos e uma cor, e a almofada em 3D veste-se com ela, o novo tecido a passar sobre o anterior.",
          },
          points: [
            {
              en: "Six weaves drawn by the graphics card, each with its own texture and sheen: the soft glow of velvet, the loops of bouclé, the threads of linen.",
              pt: "Seis tecidos desenhados pela placa gráfica, cada um com a sua textura e brilho: o brilho suave do veludo, os laços do bouclé, os fios do linho.",
            },
            {
              en: "Drag the cushion to turn it, and watch the light move across the cloth.",
              pt: "Arraste a almofada para a rodar, e veja a luz a passar pelo tecido.",
            },
            {
              en: "Underneath, the fabric houses in the showroom glide by: grab them, and fling them.",
              pt: "Por baixo, as marcas de tecidos do showroom deslizam: agarre-as, e lance-as.",
            },
          ],
        },
        {
          key: "work",
          title: { en: "The work, on an editorial wall", pt: "O trabalho, numa parede editorial" },
          text: {
            en: "The workshop's real projects, laid out like a magazine spread and filtered by what they show.",
            pt: "Os projetos reais da oficina, dispostos como numa revista e filtrados pelo que mostram.",
          },
          points: [
            {
              en: "Only the filters these photos need, so none ever leads to an empty wall.",
              pt: "Só os filtros de que estas fotografias precisam, para que nenhum leve a uma parede vazia.",
            },
            {
              en: "Any photo opens full screen: page through them with the arrows, a swipe or the keyboard.",
              pt: "Qualquer fotografia abre em ecrã inteiro: percorra-as com as setas, deslizando ou com o teclado.",
            },
            {
              en: "Each photo loads at the size the screen needs, and fades in as it arrives.",
              pt: "Cada fotografia carrega no tamanho de que o ecrã precisa, e aparece suavemente quando chega.",
            },
          ],
        },
        {
          key: "booking",
          title: { en: "Booking a visit", pt: "Marcar uma visita" },
          text: {
            en: "The way into the workshop: a request that reaches its inbox at once, and an automatic reply to the visitor, in their own language.",
            pt: "A porta de entrada da oficina: um pedido que chega de imediato à sua caixa de correio, e uma resposta automática ao visitante, na sua própria língua.",
          },
          points: [
            {
              en: "It checks itself as you type, and takes an email, a phone or both.",
              pt: "Verifica-se enquanto escreve, e aceita um email, um telefone ou ambos.",
            },
            {
              en: "The phone has every country's flag and calling code, and takes digits only.",
              pt: "O telefone tem a bandeira e o indicativo de cada país, e só aceita algarismos.",
            },
            {
              en: "Bots are kept out without a single puzzle for people to solve.",
              pt: "Os robôs ficam de fora sem um único desafio para as pessoas resolverem.",
            },
            {
              en: "Try it: from this page, sending only tells you it's a demo.",
              pt: "Experimente: a partir desta página, enviar só lhe diz que é uma demonstração.",
            },
          ],
        },
      ],
    },
  ],
} as const;
