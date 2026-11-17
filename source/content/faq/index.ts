/**
 * "Questions": what people ask before getting in touch, each answered in a few lines. Also given to search engines
 * as an FAQ page (component/structured-data). No prices: every project gets its own quote.
 */
export const FAQ = {
  title: { en: "Good questions.", pt: "Boas perguntas." },
  /** Beside the questions: for anything they don't answer. */
  more: {
    text: { en: "Something else on your mind? Just ask.", pt: "Tem outra dúvida? É só perguntar." },
    action: { en: "Ask Us", pt: "Perguntar" },
  },
  items: [
    {
      question: { en: "How much does a project cost?", pt: "Quanto custa um projeto?" },
      answer: {
        en: "Every business is different, so every project gets its own quote, clear and in writing, before anything starts. Tell us what you need and we'll send it.",
        pt: "Cada negócio é diferente, por isso cada projeto tem o seu orçamento, claro e por escrito, antes de começarmos. Diga-nos do que precisa e enviamo-lo.",
      },
    },
    {
      question: { en: "How long does it take?", pt: "Quanto tempo demora?" },
      answer: {
        en: "A website usually takes a few weeks; platforms and apps take longer, depending on what they need to do. You get a clear timeline with your quote, and we keep you posted at every step.",
        pt: "Um website costuma demorar algumas semanas; plataformas e aplicações demoram mais, conforme o que têm de fazer. Recebe um prazo claro com o orçamento, e mantemo-lo a par em cada passo.",
      },
    },
    {
      question: {
        en: "My business runs on a lot of manual work. Can a platform really help?",
        pt: "O meu negócio depende de muito trabalho manual. Uma plataforma ajuda mesmo?",
      },
      answer: {
        en: "That's where it helps most. We start by learning how your team works today. Then whatever can run on its own does, and every job done by hand (packing, loading, deliveries, visits) reaches the right person as a simple task on their phone, so nothing gets lost and you see everything as it happens.",
        pt: "É aí que mais ajuda. Começamos por perceber como a sua equipa trabalha hoje. Depois, o que pode andar sozinho anda, e cada trabalho feito à mão (embalar, carregar, entregar, visitar) chega à pessoa certa como uma tarefa simples no telemóvel, para que nada se perca e veja tudo a acontecer.",
      },
    },
    {
      question: {
        en: "Can you work with what I already have?",
        pt: "Podem trabalhar com o que já tenho?",
      },
      answer: {
        en: "Yes. We can improve your current website, move it somewhere better, or connect a new platform to the tools you already use, such as your invoicing software, your online store or your email.",
        pt: "Sim. Podemos melhorar o seu website atual, mudá-lo para um sítio melhor, ou ligar uma nova plataforma às ferramentas que já usa, como o programa de faturação, a loja online ou o email.",
      },
    },
    {
      question: {
        en: "Do I need to deal with hosting, domains or email?",
        pt: "Tenho de tratar do alojamento, do domínio ou do email?",
      },
      answer: {
        en: "No. By default we take care of all of it: the domain, the hosting, the email and the accounts behind them. If you'd rather keep them in your name, we'll set it up that way.",
        pt: "Não. Por defeito tratamos de tudo: o domínio, o alojamento, o email e as contas por trás deles. Se preferir tê-los em seu nome, fazemos assim.",
      },
    },
    {
      question: {
        en: "Will everything be legally compliant?",
        pt: "Fica tudo de acordo com a lei?",
      },
      answer: {
        en: "Yes. Everything legal is done as the law requires: privacy policy, cookie consent, GDPR, consumer information and, in Portugal, the complaints book.",
        pt: "Sim. Toda a parte legal é feita como a lei exige: política de privacidade, consentimento de cookies, RGPD, informação ao consumidor e, em Portugal, o livro de reclamações.",
      },
    },
    {
      question: {
        en: "Will people find me on Google and in AI assistants?",
        pt: "As pessoas vão encontrar-me no Google e nos assistentes de IA?",
      },
      answer: {
        en: "Everything we build is made to be found: fast, well structured, in every language you need, and written so search engines and AI assistants understand what you do and recommend you for it.",
        pt: "Tudo o que construímos é feito para ser encontrado: rápido, bem estruturado, em todas as línguas de que precisa, e escrito para que os motores de busca e os assistentes de IA percebam o que faz e o recomendem.",
      },
    },
    {
      question: {
        en: "Can I start with just one thing, like a logo or a campaign?",
        pt: "Posso começar só com uma coisa, como um logótipo ou uma campanha?",
      },
      answer: {
        en: "Of course. Start wherever you need to. Everything we make fits together, so whatever comes next will feel like part of the same brand.",
        pt: "Claro. Comece por onde precisar. Tudo o que fazemos encaixa, por isso o que vier a seguir vai parecer parte da mesma marca.",
      },
    },
    {
      question: { en: "What happens after launch?", pt: "O que acontece depois do lançamento?" },
      answer: {
        en: "We stay. We keep everything updated, backed up and secure, fix anything that comes up, train your team if they need it, and keep improving what you have as your business grows.",
        pt: "Ficamos. Mantemos tudo atualizado, com cópias de segurança e seguro, resolvemos o que for preciso, damos formação à sua equipa se precisar, e continuamos a melhorar o que tem à medida que o negócio cresce.",
      },
    },
    {
      question: {
        en: "Do you work with businesses outside Portugal?",
        pt: "Trabalham com empresas fora de Portugal?",
      },
      answer: {
        en: "Yes. We're based in the Algarve and work with businesses anywhere, in English or Portuguese.",
        pt: "Sim. Estamos no Algarve e trabalhamos com empresas de qualquer lugar, em português ou em inglês.",
      },
    },
  ],
} as const;
