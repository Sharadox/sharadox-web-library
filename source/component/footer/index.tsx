import { Icon } from "@sharadox/icon-web-library/icon";
import { separate } from "@sharadox/sharadox-web-library/utility/separate";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import { LocaleLink } from "@sharadox/internationalization-web-library/locale-link";
import { StyleSwitch } from "@sharadox/sharadox-web-library/component/style-switch";
import { Wordmark } from "@sharadox/sharadox-web-library/component/wordmark";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { PreferencesLink } from "@sharadox/sharadox-web-library/component/consent/preferences-link";
import { CONSENT } from "@sharadox/sharadox-web-library/content/consent";
import { ComplaintsBookLink } from "@sharadox/legal-web-library/complaints-book-link";
import { DisputeNotice } from "@sharadox/legal-web-library/dispute-notice";
import { DISPUTE_RESOLUTION_CENTERS } from "@sharadox/legal-web-library/dispute-resolution";
import { ACTION } from "@sharadox/sharadox-web-library/content/action";
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

/**
 * The footer, in the grid frame: the brand (slogan, email), the services, the studio's sections with Start a Project,
 * and the language and style; then everything legal in one row on the same columns: the copyright, the links (license,
 * privacy, cookie preferences, Portugal's complaints book) with the consumer dispute notice, and the way back up.
 */
export function Footer({ locale, path = "" }: FooterProperties) {
  const home = path ? `/${locale}` : "";
  const studio = [SECTION.touchpoints, SECTION.capabilities, SECTION.process, SECTION.contact];
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
          {studio.map((section) => (
            <a key={section.id} href={`${home}#${section.id}`}>
              {translate(section, locale)}
            </a>
          ))}
          <Button href={`${home}#${SECTION.contact.id}`} size="small" arrow className={styles.start}>
            {translate(ACTION.startProject, locale)}
          </Button>
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
      {/* Everything legal in one row, on the same columns as above: the copyright under the brand, the links and the
          dispute notice under the services and the studio, the way back up under the settings. */}
      <div className={styles.legal}>
        <p className={`monospace ${styles.copyright}`}>
          © <CopyrightYears since={FOUNDED} /> {separate("Sharadox", translate(FOOTER.rights, locale))}
        </p>
        <div className={styles.legalLinks}>
          <nav aria-label={translate(FOOTER.legal, locale)} className={styles.links}>
            <a href={`/${locale}${LICENSE.path}`} aria-current={path === LICENSE.path ? "page" : undefined}>
              {translate(LICENSE.title, locale)}
            </a>
            <a href={`/${locale}${PRIVACY_PAGE.path}`} aria-current={path === PRIVACY_PAGE.path ? "page" : undefined}>
              {translate(PRIVACY_PAGE.title, locale)}
            </a>
            <PreferencesLink label={translate(CONSENT.preferences, locale)} />
            <ComplaintsBookLink locale={locale} />
          </nav>
          <p className={styles.disputes}>
            <DisputeNotice center={DISPUTE_RESOLUTION_CENTERS.algarve} locale={locale} />
          </p>
        </div>
        <div className={styles.back}>
          <a href="#top" className={styles.top}>
            {translate(FOOTER.top, locale)}
            <span className={styles.circle} aria-hidden>
              <Icon name="chevron-up" strokeWidth={1.8} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
