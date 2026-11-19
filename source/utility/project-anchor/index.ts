/**
 * The id of a project's "See the Project" button in the portfolio, where its page's "Back to the Portfolio" returns,
 * so the visitor lands right where they left.
 *
 * @example
 * projectAnchor("luis-pires-decor-website-and-rebranding"); // "see-luis-pires-decor-website-and-rebranding"
 */
export function projectAnchor(key: string) {
  return `see-${key}`;
}
