import { translate } from "@sharadox/web-library/internationalization/translate";
import { LocaleLink } from "@sharadox/sharadox-web-library/component/locale-link";
import { NAVIGATION } from "@sharadox/sharadox-web-library/content/navigation";
import { LOCALES } from "@sharadox/sharadox-web-library/utility/locale";
import styles from "./index.module.scss";
import type { LanguageSwitchProperties } from "@sharadox/sharadox-web-library/component/language-switch/type";

/** EN/PT pill toggle. A manual choice is remembered, so sharadox.com opens in that language next time. */
export function LanguageSwitch({ locale }: LanguageSwitchProperties) {
  return (
    <div className={styles.switch} role="group" aria-label={translate(NAVIGATION.language, locale)}>
      {LOCALES.map((other) => (
        <LocaleLink key={other} locale={other} current={other === locale}>
          {other.toUpperCase()}
        </LocaleLink>
      ))}
    </div>
  );
}
