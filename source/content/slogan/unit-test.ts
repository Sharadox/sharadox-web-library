import { expect, test } from "vitest";
import { SLOGAN, SLOGAN_LINES } from "@sharadox/sharadox-web-library/content/slogan";

test("the slogan is one sentence built from the hero's lines, ending with a full stop", () => {
  expect(SLOGAN).toEqual({
    en: "Technologies that simplify the world.",
    pt: "Tecnologias que simplificam o mundo.",
  });
  for (const lines of Object.values(SLOGAN_LINES)) expect(lines.at(-1)).toMatch(/\.$/);
});
