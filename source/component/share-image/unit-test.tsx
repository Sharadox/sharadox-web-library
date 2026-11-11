// @vitest-environment node
import { expect, test, vi } from "vitest";

const shareImage = vi.fn((element: unknown, options: unknown) => ({ element, options }));
vi.mock("@sharadox/metadata-web-library/share-image", () => ({ shareImage }));
const { renderShareImage } = await import("@sharadox/sharadox-web-library/component/share-image");

test("renders the card at the asked size with the slogan in Geist", async () => {
  await renderShareImage({ locale: "pt", width: 1200, height: 630 });
  const [element, options] = shareImage.mock.calls[0]! as [unknown, { width: number; fonts: { name: string }[] }];
  expect(options.width).toBe(1200);
  expect(options.fonts.map((font) => font.name)).toEqual(["Geist", "GeistMono"]);
  expect(JSON.stringify(element)).toContain("Tecnologias que simplificam o mundo");
});
