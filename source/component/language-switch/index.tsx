import { translate } from "@sharadox/internationalization-web-library/translate";
import { LocaleLink } from "@sharadox/internationalization-web-library/locale-link";
import { LANGUAGE } from "@sharadox/sharadox-web-library/content/language";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import styles from "./index.module.scss";
import type { LanguageSwitchProperties } from "@sharadox/sharadox-web-library/component/language-switch/type";

/** EN/PT pill toggle. A manual choice is remembered, so sharadox.com opens in that language next time. */
export function LanguageSwitch({ locale, path = "" }: LanguageSwitchProperties) {
  return (
    <div className={styles.switch} role="group" aria-label={translate(LANGUAGE.label, locale)}>
      {LOCALES.locales.map((other) => (
        <LocaleLink key={other} locale={other} href={`/${other}${path}`} current={other === locale}>
          {other.toUpperCase()}
        </LocaleLink>
      ))}
    </div>
  );
}
