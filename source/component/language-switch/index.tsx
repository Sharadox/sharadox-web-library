import Link from "next/link";
import { LOCALES } from "@sharadox/sharadox-web-library/utility/locale";
import styles from "./index.module.scss";
import type { LanguageSwitchProperties } from "@sharadox/sharadox-web-library/component/language-switch/type";

/** EN/PT pill toggle. */
export function LanguageSwitch({ locale }: LanguageSwitchProperties) {
  return (
    <div className={styles.switch} role="group" aria-label="Language">
      {LOCALES.map((other) => (
        <Link key={other} href={`/${other}`} hrefLang={other} aria-current={other === locale ? "true" : undefined}>
          {other.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
