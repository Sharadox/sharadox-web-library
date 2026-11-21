// @vitest-environment node
import { expect, test } from "vitest";
import { brandedEmail, brandedEmailImages } from "@sharadox/sharadox-web-library/utility/branded-email";

test("writes any email in Sharadox's design, carrying its mark", () => {
  const html = brandedEmail({ language: "pt", preview: "A sua fatura", eyebrow: "Fatura", heading: "A sua fatura" });
  expect(html).toContain('<html lang="pt">');
  expect(html).toContain('src="cid:logo"');
  expect(html).toContain(">Sharadox</td>");
  expect(html).toContain("background-color:#ffffff");
  expect(html).toContain('href="https://sharadox.com"');
  const [logo] = brandedEmailImages();
  expect(logo!.id).toBe("logo");
  expect([...logo!.content.subarray(1, 4)]).toEqual([0x50, 0x4e, 0x47]);
});
