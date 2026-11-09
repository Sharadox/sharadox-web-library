import { expect, it } from "vitest";
import { SEPARATOR } from "@sharadox/sharadox-web-library/content/separator";
import { separate } from "@sharadox/sharadox-web-library/utility/separate";

it("joins the parts that are set with the spaced separator", () => {
  expect(separate("01", "Web")).toBe(`01 ${SEPARATOR} Web`);
  expect(separate("Ana", undefined, "", "Café")).toBe(`Ana ${SEPARATOR} Café`);
});
