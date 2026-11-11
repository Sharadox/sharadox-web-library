import { translate } from "@sharadox/internationalization-web-library/translate";
import { marked } from "marked";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { LICENCE } from "@sharadox/sharadox-web-library/content/licence";
import styles from "./index.module.scss";
import type { LicenceProperties } from "@sharadox/sharadox-web-library/component/licence/type";

/**
 * The licence page's body, in the grid frame: eyebrow, then the licence rendered from its Markdown. The licence's own
 * first heading is the page's `<h1>`. The text is the site's own file, never visitor input.
 *
 * @example
 * <Licence locale="pt" markdown={await readFile("LICENCA.md", "utf8")} />
 */
export function Licence({ locale, markdown }: LicenceProperties) {
  return (
    <Section className={styles.licence}>
      <Eyebrow>{translate(LICENCE.eyebrow, locale)}</Eyebrow>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: marked.parse(markdown, { async: false }) }} />
    </Section>
  );
}
