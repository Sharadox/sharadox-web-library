import { expect, test } from "vitest";
import { siteMetadata } from "@sharadox/sharadox-web-library/utility/site-metadata";
import { SITE } from "@sharadox/sharadox-web-library/content/site";

test("gives a page its title, description, addresses and share image", () => {
  const metadata = siteMetadata({
    locale: "en",
    path: "/privacy",
    title: "Privacy Policy",
    description: "How we use data.",
  });
  expect(metadata.title).toMatchObject({ default: "Privacy Policy" });
  expect(metadata.description).toBe("How we use data.");
  expect(String(metadata.alternates?.canonical)).toContain("/en/privacy");
  expect(JSON.stringify(metadata.openGraph)).toContain("/en/opengraph-image");
  expect(JSON.stringify(metadata.openGraph)).toContain(JSON.stringify(SITE.name).slice(1, -1));
});
