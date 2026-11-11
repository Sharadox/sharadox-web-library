/** The 404 page: a page that is off the map, with the globe as the zero. */
export const NOT_FOUND = {
  /** Browser tab and search engine title (404 pages are never indexed). */
  title: { en: "Page Not Found", pt: "Página Não Encontrada" },
  error: { en: "Error", pt: "Erro" },
  heading: { en: "This page is off the map.", pt: "Esta página está fora do mapa." },
  text: {
    en: "The address may have changed, or it never existed. Everything we do is still one step away.",
    pt: "O endereço pode ter mudado, ou nunca ter existido. Tudo o que fazemos continua a um passo.",
  },
  home: { en: "Back to Home", pt: "Voltar ao Início" },
  explore: { en: "Or explore", pt: "Ou explore" },
} as const;
