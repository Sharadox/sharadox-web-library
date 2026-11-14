import { llmsText as buildLlmsText } from "@sharadox/metadata-web-library/llms-text";
import { LICENSE } from "@sharadox/sharadox-web-library/content/license";
import { PROCESS } from "@sharadox/sharadox-web-library/content/process";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import { SLOGAN } from "@sharadox/sharadox-web-library/content/slogan";

/**
 * sharadox.com's `llms.txt` (in the shared shape from @sharadox/metadata-web-library): what Sharadox does, how it
 * works and how to reach it, in plain Markdown for AI assistants, written from the site's own content.
 *
 * @example
 * export const GET = () => new Response(llmsText(), { headers: { "content-type": "text/plain; charset=utf-8" } });
 */
export function llmsText(): string {
  return buildLlmsText({
    title: SITE.name,
    summary: SLOGAN.en,
    details: SITE.description.en,
    sections: [
      {
        title: "What Sharadox does",
        lines: SERVICES.items.flatMap((service) =>
          service.cards.map((card) => `${service.title.en}, ${card.title.en}: ${card.text.en}`),
        ),
      },
      {
        title: "How it works",
        lines: PROCESS.steps.map((step) => `${step.title.en}: ${step.text.en}`),
        style: "numbered",
      },
      { title: "Contact", lines: [`Email: ${SITE.email}`, `Start a project: ${SITE.url}/en#${SECTION.contact.id}`] },
      {
        title: "Pages",
        lines: [
          `[Home (English)](${SITE.url}/en)`,
          `[Início (Português)](${SITE.url}/pt)`,
          `[License](${SITE.url}/en${LICENSE.path})`,
        ],
      },
    ],
  });
}
