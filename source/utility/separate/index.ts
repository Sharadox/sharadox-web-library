import { SEPARATOR } from "@sharadox/sharadox-web-library/content/separator";

/** Joins the parts that are set with the Sharadox separator, spaced: separate("01", "Web") → "01 · Web". */
export function separate(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(` ${SEPARATOR} `);
}
