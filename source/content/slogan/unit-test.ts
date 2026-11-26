import { expect, test } from "vitest";
import { SLOGAN, SLOGAN_LINES } from "@sharadox/sharadox-web-library/content/slogan";

test("the slogan is one sentence built from the hero's lines, ending with a full stop", () => {
  expect(SLOGAN).toEqual({
    en: "Technologies That Simplify the World.",
    pt: "Tecnologias que Simplificam o Mundo.",
  });
  for (const lines of Object.values(SLOGAN_LINES)) expect(lines.at(-1)).toMatch(/\.$/);
});
