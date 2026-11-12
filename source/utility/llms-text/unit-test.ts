import { expect, test } from "vitest";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { llmsText } from "@sharadox/sharadox-web-library/utility/llms-text";

test("describes Sharadox for AI assistants in llms.txt form", () => {
  const text = llmsText();
  expect(text.startsWith("# Sharadox\n\n> Technologies that simplify the world.\n\nSharadox is a brand studio")).toBe(
    true,
  );
  for (const service of SERVICES.items) expect(text).toContain(`- ${service.title.en} (`);
  expect(text).toContain("1. Understand: We start with your business, not with code.");
  expect(text).toContain("- Email: contact@sharadox.com");
  expect(text).toContain("[License](https://sharadox.com/en/license)");
});
