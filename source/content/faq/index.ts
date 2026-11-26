/**
 * "Questions": what people ask before getting in touch, each answered in a few lines. Also given to search engines
 * as an FAQ page (component/structured-data). No prices: every project gets its own quote.
 */
export const FAQ = {
  title: { en: "Good Questions.", pt: "Boas Perguntas." },
  /** Beside the questions: for anything they don't answer. */
  more: {
    text: { en: "Something else on your mind? Just ask.", pt: "Tem outra dúvida? É só perguntar." },
    action: { en: "Ask Us", pt: "Perguntar" },
  },
  items: [
    {
      question: { en: "How Much Does a Project Cost?", pt: "Quanto Custa um Projeto?" },
      answer: {
        en: "Every business is different, so every project gets its own quote, clear and in writing, before anything starts. Tell us what you need and we'll send it.",
        pt: "Cada negócio é diferente, por isso cada projeto tem o seu orçamento, claro e por escrito, antes de começarmos. Diga-nos do que precisa e enviamo-lo.",
      },
    },
    {
      question: { en: "How Long Does It Take?", pt: "Quanto Tempo Demora?" },
      answer: {
        en: "A website usually takes a few weeks; platforms and apps take longer, depending on what they need to do. You get a clear timeline with your quote, and we keep you posted at every step.",
        pt: "Um website costuma demorar algumas semanas; plataformas e aplicações demoram mais, conforme o que têm de fazer. Recebe um prazo claro com o orçamento, e mantemo-lo a par em cada passo.",
      },
    },
    {
      question: {
        en: "My Business Runs on a Lot of Manual Work. Can a Platform Really Help?",
        pt: "O Meu Negócio Depende de Muito Trabalho Manual. Uma Plataforma Ajuda Mesmo?",
      },
      answer: {
        en: "That's where it helps most. We start by learning how your team works today. Then whatever can run on its own does, and every job done by hand (packing, loading, deliveries, visits) reaches the right person as a simple task on their phone, so nothing gets lost and you see everything as it happens.",
        pt: "É aí que mais ajuda. Começamos por perceber como a sua equipa trabalha hoje. Depois, o que pode andar sozinho anda, e cada trabalho feito à mão (embalar, carregar, entregar, visitar) chega à pessoa certa como uma tarefa simples no telemóvel, para que nada se perca e veja tudo a acontecer.",
      },
    },
    {
      question: {
        en: "Can You Work with What I Already Have?",
        pt: "Podem Trabalhar com o que Já Tenho?",
      },
      answer: {
        en: "Yes. We can improve your current website, move it somewhere better, or connect a new platform to the tools you already use, such as your invoicing software, your online store or your email.",
        pt: "Sim. Podemos melhorar o seu website atual, mudá-lo para um sítio melhor, ou ligar uma nova plataforma às ferramentas que já usa, como o programa de faturação, a loja online ou o email.",
      },
    },
    {
      question: {
        en: "Do I Need to Deal with Hosting, Domains or Email?",
        pt: "Tenho de Tratar do Alojamento, do Domínio ou do Email?",
      },
      answer: {
        en: "No. By default we take care of all of it: the domain, the hosting, the email and the accounts behind them. If you'd rather keep them in your name, we'll set it up that way.",
        pt: "Não. Por defeito tratamos de tudo: o domínio, o alojamento, o email e as contas por trás deles. Se preferir tê-los em seu nome, fazemos assim.",
      },
    },
    {
      question: {
        en: "Will Everything Be Legally Compliant?",
        pt: "Fica Tudo de Acordo com a Lei?",
      },
      answer: {
        en: "Yes. Every country has its own rules, so we take the time to understand what's mandatory wherever you do business, and do it as the law requires: privacy policies, cookie consent, data protection, consumer information, and local requirements like Portugal's complaints book.",
        pt: "Sim. Cada país tem as suas regras, por isso dedicamos o tempo necessário a perceber o que é obrigatório onde quer que faça negócio, e fazemo-lo como a lei exige: políticas de privacidade, consentimento de cookies, proteção de dados, informação ao consumidor e requisitos locais, como o livro de reclamações em Portugal.",
      },
    },
    {
      question: {
        en: "Will People Find Me on Google and in AI Assistants?",
        pt: "As Pessoas Vão Encontrar-me no Google e nos Assistentes de IA?",
      },
      answer: {
        en: "Everything we build is made to be found: fast, well structured, in every language you need, and written so search engines and AI assistants understand what you do and recommend you for it.",
        pt: "Tudo o que construímos é feito para ser encontrado: rápido, bem estruturado, em todas as línguas de que precisa, e escrito para que os motores de busca e os assistentes de IA percebam o que faz e o recomendem.",
      },
    },
    {
      question: {
        en: "Can I Start with Just One Thing, Like a Logo or a Campaign?",
        pt: "Posso Começar Só com uma Coisa, Como um Logótipo ou uma Campanha?",
      },
      answer: {
        en: "Of course. Start wherever you need to. Everything we make fits together, so whatever comes next will feel like part of the same brand.",
        pt: "Claro. Comece por onde precisar. Tudo o que fazemos encaixa, por isso o que vier a seguir vai parecer parte da mesma marca.",
      },
    },
    {
      question: { en: "What Happens After Launch?", pt: "O que Acontece Depois do Lançamento?" },
      answer: {
        en: "We stay. We keep everything updated, backed up and secure, fix anything that comes up, train your team if they need it, and keep improving what you have as your business grows.",
        pt: "Ficamos. Mantemos tudo atualizado, com cópias de segurança e seguro, resolvemos o que for preciso, damos formação à sua equipa se precisar, e continuamos a melhorar o que tem à medida que o negócio cresce.",
      },
    },
    {
      question: {
        en: "Do You Work with Businesses Outside Portugal?",
        pt: "Trabalham com Empresas Fora de Portugal?",
      },
      answer: {
        en: "Yes. We're based in the Algarve and work with businesses anywhere, in English or Portuguese.",
        pt: "Sim. Estamos no Algarve e trabalhamos com empresas de qualquer lugar, em português ou em inglês.",
      },
    },
  ],
} as const;
