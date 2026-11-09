import Link from "next/link";
import { FOOTER } from "@sharadox/sharadox-web-library/content/footer";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import { LOCALES } from "@sharadox/sharadox-web-library/utility/locale";
import { translate } from "@sharadox/web-library/internationalization/translate";
import styles from "./index.module.scss";
import type { FooterProperties } from "@sharadox/sharadox-web-library/component/footer/type";

/** Slogan, links, the big gradient wordmark and the legal line. */
export function Footer({ locale }: FooterProperties) {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.slogan}>{translate(SITE.slogan, locale)}.</p>
        <div className={styles.links}>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span className={styles.languages}>
            {LOCALES.map((other) => (
              <Link
                key={other}
                href={`/${other}`}
                hrefLang={other}
                aria-current={other === locale ? "true" : undefined}
              >
                {other === "en" ? "English" : "Português"}
              </Link>
            ))}
          </span>
          <a href="#top">{translate(FOOTER.top, locale)} ↑</a>
        </div>
      </div>
      <div className={styles.mark} aria-hidden>
        Sharadox
      </div>
      <p className={`${styles.legal} monospace`}>
        © {new Date().getFullYear()} Sharadox · {translate(FOOTER.rights, locale)}
      </p>
    </footer>
  );
}
