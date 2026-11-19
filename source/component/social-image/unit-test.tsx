// @vitest-environment node
import { expect, test, vi } from "vitest";

const shareImage = vi.fn((element: unknown, options: unknown) => ({ element, options }));
vi.mock("@sharadox/metadata-web-library/share-image", () => ({ shareImage }));
const { renderSocialImage } = await import("@sharadox/sharadox-web-library/component/social-image");

interface Drawn {
  props: { children?: unknown; width?: number };
}

/** Every text inside a rendered element. */
const texts = (node: unknown): string[] => {
  if (typeof node === "string") return [node];
  if (Array.isArray(node)) return node.flatMap(texts);
  if (node && typeof node === "object" && "props" in node) return texts((node as Drawn).props.children);
  return [];
};

/** The mark's drawn width: the first thing inside the image. */
const markWidth = (element: unknown) => ((element as Drawn).props.children as Drawn[])[0]!.props.width;

test("draws the mark at half the shorter side, alone or with the headline", async () => {
  for (const name of ["landscape.png", "portrait-headline.png", "landscape-headline.png"] as const)
    await renderSocialImage({ locale: name === "portrait-headline.png" ? "pt" : "en", name });
  const calls = shareImage.mock.calls as [unknown, { width: number; height: number }][];
  expect(calls.map(([, options]) => [options.width, options.height])).toEqual([
    [1920, 1080],
    [1080, 1920],
    [1920, 1080],
  ]);
  expect(texts(calls[0]![0])).toEqual([]);
  expect(texts(calls[1]![0]).join(" ")).toBe("Tecnologias que simplificam o mundo.");
  expect(texts(calls[2]![0]).join(" ")).toBe("Technologies that simplify the world.");
  expect(calls.map(([element]) => markWidth(element))).toEqual([540, 540, 540]);
});

test("draws the background alone, and the email card small, in proportion, with rounded corners", async () => {
  shareImage.mockClear();
  await renderSocialImage({ locale: "en", name: "background.png" });
  await renderSocialImage({ locale: "en", name: "email-card.png" });
  const calls = shareImage.mock.calls as [Drawn & { props: { style: Record<string, number> } }, { width: number }][];
  const [background, card] = calls.map(([element]) => element);
  expect((background!.props.children as unknown[]).filter(Boolean)).toEqual([]);
  expect(background!.props.style.borderRadius).toBe(0);
  expect(calls[1]![1].width).toBe(256);
  expect(markWidth(card)).toBe(72);
  expect(card!.props.style.borderRadius).toBe(12);
  expect(card!.props.style.gap).toBeCloseTo(12.8);
  expect(texts(card).join(" ")).toBe("Technologies that simplify the world.");
});
