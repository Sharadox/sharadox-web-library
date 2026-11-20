/**
 * Joins the parts that are set with the Sharadox separator (·): web-library's `separated`, kept here for one version
 * so sites can move to `@sharadox/web-library/text/separated`. Goes in the next minor version.
 *
 * @example
 * separate("Contact", "Ana (Café)"); // "Contact · Ana (Café)"
 */
export { separated as separate } from "@sharadox/web-library/text/separated";
