// @vitest-environment node
import { expect, test } from "vitest";
import { brandedEmail, brandedEmailImages } from "@sharadox/sharadox-web-library/utility/branded-email";

test("writes any email in Sharadox's design, carrying its mark", () => {
  const html = brandedEmail({ language: "pt", preview: "A sua fatura", eyebrow: "Fatura", heading: "A sua fatura" });
  expect(html).toContain('<html lang="pt">');
  expect(html).toContain('src="cid:logo"');
  expect(html).toContain(">Sharadox</td>");
  expect(html).toContain('src="cid:logo-dark"');
  expect(html).toContain('href="https://sharadox.com"');
  const [logo, dark] = brandedEmailImages();
  expect(logo!.id).toBe("logo");
  expect(dark!.id).toBe("logo-dark");
  for (const image of [logo!, dark!]) expect([...image.content.subarray(1, 4)]).toEqual([0x50, 0x4e, 0x47]);
});
