import { expect, test } from "vitest";
import { projectAnchor } from "@sharadox/sharadox-web-library/utility/project-anchor";

test("names a project's button in the portfolio", () => {
  expect(projectAnchor("studio")).toBe("see-studio");
});
