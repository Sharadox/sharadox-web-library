import { expect, test } from "vitest";
import { horizonDots } from "@sharadox/sharadox-web-library/utility/horizon-dots";

test("draws curved rows of dots inside the card, fainter row by row", () => {
  const dots = horizonDots();
  expect(dots.length).toBeGreaterThan(100);
  for (const dot of dots) {
    expect(dot.y).toBeLessThan(625);
    expect(dot.opacity).toBeGreaterThan(0);
  }
  expect(dots[0]!.opacity).toBeGreaterThan(dots.at(-1)!.opacity);
});
