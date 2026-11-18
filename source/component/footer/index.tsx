import { SectionLink } from "@sharadox/scroll-web-library/section-link";
import Link from "next/link";
import { Icon } from "@sharadox/icon-web-library/icon";
import { BrandIcon } from "@sharadox/icon-web-library/brand-icon";
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
import { FOUNDED, SITE, SOCIAL } from "@sharadox/sharadox-web-library/content/site";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import styles from "./index.module.scss";
import type { FooterProperties } from "@sharadox/sharadox-web-library/component/footer/type";

/**
 * The footer, in the grid frame. Four columns: the brand (slogan, email and Start a Project), the services, the
 * studio's sections, and the language and style with the way back up under them. Then everything legal in a centered
 * row of its own: the copyright, the consumer dispute notice, and the links (license, privacy, cookie preferences,
 * Portugal's complaints book).
 */
export function Footer({ locale, path = "" }: FooterProperties) {
  const home = path ? `/${locale}` : "";
  const studio = [
    SECTION.about,
    SECTION.capabilities,
    SECTION.portfolio,
    SECTION.process,
    SECTION.faq,
    SECTION.contact,
  ];
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
          <Button href={`${home}#${SECTION.contact.id}`} size="small" arrow className={styles.start}>
            {translate(ACTION.startProject, locale)}
          </Button>
        </div>
        <nav aria-label={translate(SECTION.services, locale)}>
          <h2 className="monospace">{translate(SECTION.services, locale)}</h2>
          {SERVICES.items.map((service) => (
            <SectionLink key={service.key} href={`${home}#${service.key}`}>
              {translate(service.title, locale)}
            </SectionLink>
          ))}
        </nav>
        <nav aria-label={translate(FOOTER.studio, locale)}>
          <h2 className="monospace">{translate(FOOTER.studio, locale)}</h2>
          {studio.map((section) => (
            <SectionLink key={section.id} href={`${home}#${section.id}`}>
              {translate(section, locale)}
            </SectionLink>
          ))}
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
          <SectionLink href="#top" className={styles.top}>
            {translate(FOOTER.top, locale)}
            <span className={styles.circle} aria-hidden>
              <Icon name="chevron-up" strokeWidth={1.8} />
            </span>
          </SectionLink>
        </div>
      </div>
      {/* Everything legal, in a row of its own: the consumer dispute notice, and the links under it. */}
      <div className={styles.legal}>
        <p className={`monospace ${styles.copyright}`}>
          © <CopyrightYears since={FOUNDED} /> {separate("Sharadox", translate(FOOTER.rights, locale))}
        </p>
        <p className={styles.disputes}>
          <DisputeNotice center={DISPUTE_RESOLUTION_CENTERS.algarve} locale={locale} />
        </p>
        <nav aria-label={translate(FOOTER.legal, locale)} className={styles.links}>
          <Link href={`/${locale}${LICENSE.path}`} aria-current={path === LICENSE.path ? "page" : undefined}>
            {translate(LICENSE.title, locale)}
          </Link>
          <Link href={`/${locale}${PRIVACY_PAGE.path}`} aria-current={path === PRIVACY_PAGE.path ? "page" : undefined}>
            {translate(PRIVACY_PAGE.title, locale)}
          </Link>
          <PreferencesLink label={translate(CONSENT.preferences, locale)} />
          <ComplaintsBookLink locale={locale} />
        </nav>
        {/* The last line: Sharadox's profiles, and the Google review form, as their marks. */}
        <nav aria-label={translate(FOOTER.social, locale)} className={styles.social}>
          {SOCIAL.map((profile) => (
            <a key={profile.icon} href={profile.url} target="_blank" rel="noopener noreferrer me">
              <BrandIcon
                name={profile.icon}
                label={"review" in profile ? translate(FOOTER.review, locale) : profile.name}
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
