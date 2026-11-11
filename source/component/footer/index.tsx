import { separate } from "@sharadox/sharadox-web-library/utility/separate";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { PreferencesLink } from "@sharadox/sharadox-web-library/component/consent/preferences-link";
import { CONSENT } from "@sharadox/sharadox-web-library/content/consent";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { LocaleLink } from "@sharadox/internationalization-web-library/locale-link";
import { StyleSwitch } from "@sharadox/sharadox-web-library/component/style-switch";
import { Wordmark } from "@sharadox/sharadox-web-library/component/wordmark";
import { FOOTER } from "@sharadox/sharadox-web-library/content/footer";
import { LICENCE } from "@sharadox/sharadox-web-library/content/licence";
import { NAVIGATION } from "@sharadox/sharadox-web-library/content/navigation";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { STYLE } from "@sharadox/sharadox-web-library/content/style";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import styles from "./index.module.scss";
import type { FooterProperties } from "@sharadox/sharadox-web-library/component/footer/type";

const LANGUAGE_NAMES = { en: "English", pt: "Português" } as const;

/** Columns of links in the grid, the style and language switches, the big gradient wordmark and the legal line. */
export function Footer({ locale, path = "" }: FooterProperties) {
  const home = path ? `/${locale}` : "";
  return (
    <footer className={styles.footer}>
      <Cross corner="top-left" />
      <Cross corner="top-right" />
      <div className={styles.columns}>
        <div className={styles.brand}>
          <Wordmark href={`/${locale}`} />
          <p className={styles.slogan}>{translate(SITE.slogan, locale)}.</p>
          <a href={`mailto:${SITE.email}`} className={styles.email}>
            {SITE.email}
          </a>
        </div>
        <nav aria-label={translate(FOOTER.services, locale)}>
          <h2 className="monospace">{translate(FOOTER.services, locale)}</h2>
          {SERVICES.items.map((service) => (
            <a key={service.key} href={`${home}#${service.key}`}>
              {translate(service.title, locale)}
            </a>
          ))}
        </nav>
        <nav aria-label={translate(FOOTER.studio, locale)}>
          <h2 className="monospace">{translate(FOOTER.studio, locale)}</h2>
          <a href={`${home}#capabilities`}>{translate(NAVIGATION.capabilities, locale)}</a>
          <a href={`${home}#process`}>{translate(NAVIGATION.process, locale)}</a>
          <a href={`${home}#contact`}>{translate(NAVIGATION.contact, locale)}</a>
          <PreferencesLink label={translate(CONSENT.preferences, locale)} />
          <a href={`/${locale}${LICENCE.path}`} aria-current={path === LICENCE.path ? "page" : undefined}>
            {translate(LICENCE.title, locale)}
          </a>
          <a href="#top">{translate(FOOTER.top, locale)} ↑</a>
        </nav>
        <div className={styles.settings}>
          <h2 className="monospace">{translate(FOOTER.language, locale)}</h2>
          <span className={styles.languages}>
            {LOCALES.locales.map((other) => (
              <LocaleLink key={other} locale={other} href={`/${other}${path}`} current={other === locale}>
                {LANGUAGE_NAMES[other]}
              </LocaleLink>
            ))}
          </span>
          <h2 className="monospace">{translate(STYLE.label, locale)}</h2>
          <StyleSwitch locale={locale} className={styles.style} />
        </div>
      </div>
      <div className={styles.mark} aria-hidden>
        Sharadox
      </div>
      <p className={`${styles.legal} monospace`}>
        {separate(`© ${new Date().getFullYear()} Sharadox`, translate(FOOTER.rights, locale))}
      </p>
    </footer>
  );
}
