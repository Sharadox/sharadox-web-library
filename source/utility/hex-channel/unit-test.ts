import { expect, it } from "vitest";
import { hexChannel } from "@sharadox/sharadox-web-library/utility/hex-channel";

it("reads long and short hex colours", () => {
  expect(hexChannel("#ffffff")).toEqual([1, 1, 1]);
  expect(hexChannel("#000")).toEqual([0, 0, 0]);
  expect(hexChannel("#ff0080")).toEqual([1, 0, 128 / 255]);
});
