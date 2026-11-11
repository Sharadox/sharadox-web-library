import { separate as join } from "@sharadox/web-library/text/separate";
import { SEPARATOR } from "@sharadox/sharadox-web-library/content/separator";

/**
 * Joins the parts that are set with the Sharadox separator (•), spaced on both sides.
 *
 * @example
 * separate("Contact", "Ana (Café)"); // "Contact • Ana (Café)"
 */
export function separate(...parts: (string | false | null | undefined)[]): string {
  return join(SEPARATOR, ...parts);
}
