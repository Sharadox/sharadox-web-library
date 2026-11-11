import { translate } from "@sharadox/internationalization-web-library/translate";
import { marked } from "marked";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { LICENSE } from "@sharadox/sharadox-web-library/content/license";
import styles from "./index.module.scss";
import type { LicenseProperties } from "@sharadox/sharadox-web-library/component/license/type";

/**
 * The license page's body, in the grid frame: eyebrow, then the license rendered from its Markdown. The license's own
 * first heading is the page's `<h1>`. The text is the site's own file, never visitor input.
 *
 * @example
 * <License locale="pt" markdown={await readFile("LICENCA.md", "utf8")} />
 */
export function License({ locale, markdown }: LicenseProperties) {
  return (
    <Section className={styles.license}>
      <Eyebrow>{translate(LICENSE.eyebrow, locale)}</Eyebrow>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: marked.parse(markdown, { async: false }) }} />
    </Section>
  );
}
