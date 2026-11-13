import { separate } from "@sharadox/sharadox-web-library/utility/separate";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { LocaleLink } from "@sharadox/internationalization-web-library/locale-link";
import { StyleSwitch } from "@sharadox/sharadox-web-library/component/style-switch";
import { Wordmark } from "@sharadox/sharadox-web-library/component/wordmark";
import { FOOTER } from "@sharadox/sharadox-web-library/content/footer";
import { PRIVACY_PAGE } from "@sharadox/sharadox-web-library/content/privacy";
import { LICENSE } from "@sharadox/sharadox-web-library/content/license";
import { LANGUAGE } from "@sharadox/sharadox-web-library/content/language";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import { SLOGAN } from "@sharadox/sharadox-web-library/content/slogan";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { STYLE } from "@sharadox/sharadox-web-library/content/style";
import { CopyrightYears } from "@sharadox/time-web-library/copyright-years";
import { FOUNDED, SITE } from "@sharadox/sharadox-web-library/content/site";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import styles from "./index.module.scss";
import type { FooterProperties } from "@sharadox/sharadox-web-library/component/footer/type";

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
          <p className={styles.slogan}>{translate(SLOGAN, locale)}</p>
          <a href={`mailto:${SITE.email}`} className={styles.email}>
            {SITE.email}
          </a>
        </div>
        <nav aria-label={translate(SECTION.services, locale)}>
          <h2 className="monospace">{translate(SECTION.services, locale)}</h2>
          {SERVICES.items.map((service) => (
            <a key={service.key} href={`${home}#${service.key}`}>
              {translate(service.title, locale)}
            </a>
          ))}
        </nav>
        <nav aria-label={translate(FOOTER.studio, locale)}>
          <h2 className="monospace">{translate(FOOTER.studio, locale)}</h2>
          <a href={`${home}#${SECTION.capabilities.id}`}>{translate(SECTION.capabilities, locale)}</a>
          <a href={`${home}#${SECTION.process.id}`}>{translate(SECTION.process, locale)}</a>
          <a href={`${home}#${SECTION.contact.id}`}>{translate(SECTION.contact, locale)}</a>
          <a href={`/${locale}${LICENSE.path}`} aria-current={path === LICENSE.path ? "page" : undefined}>
            {translate(LICENSE.title, locale)}
          </a>
          <a href={`/${locale}${PRIVACY_PAGE.path}`} aria-current={path === PRIVACY_PAGE.path ? "page" : undefined}>
            {translate(PRIVACY_PAGE.title, locale)}
          </a>
          <a href="#top">{translate(FOOTER.top, locale)} ↑</a>
        </nav>
        <div className={styles.settings}>
          <h2 className="monospace">{translate(LANGUAGE.label, locale)}</h2>
          <span className={styles.languages}>
            {LOCALES.locales.map((other) => (
              <LocaleLink key={other} locale={other} href={`/${other}${path}`} current={other === locale}>
                {LANGUAGE.names[other]}
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
        © <CopyrightYears since={FOUNDED} /> {separate("Sharadox", translate(FOOTER.rights, locale))}
      </p>
    </footer>
  );
}
