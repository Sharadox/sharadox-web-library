"use client";
import { classNames } from "@sharadox/web-library/class-name";
import { useEffect, useState } from "react";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { LanguageSwitch } from "@sharadox/sharadox-web-library/component/language-switch";
import { StyleSwitch } from "@sharadox/sharadox-web-library/component/style-switch";
import { Wordmark } from "@sharadox/sharadox-web-library/component/wordmark";
import { NAVIGATION } from "@sharadox/sharadox-web-library/content/navigation";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import { ACTION } from "@sharadox/sharadox-web-library/content/action";
import styles from "./index.module.scss";
import type { NavigationProperties } from "@sharadox/sharadox-web-library/component/navigation/type";

/** Fixed top bar that frosts once the page scrolls, with the style and language switches. */
export function Navigation({ locale, path = "" }: NavigationProperties) {
  const home = path ? `/${locale}` : "";
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(scrollY > 24);
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);
  return (
    <header className={classNames(styles.navigation, scrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <Wordmark href={`/${locale}`} />
        <nav className={styles.links} aria-label="Main">
          {NAVIGATION.links.map((section) => (
            <a key={section.id} href={`${home}#${section.id}`}>
              {translate(section, locale)}
            </a>
          ))}
        </nav>
        <div className={styles.end}>
          <StyleSwitch locale={locale} className={styles.style} />
          <LanguageSwitch locale={locale} path={path} />
          <Button href={`${home}#${SECTION.contact.id}`} size="small" className={styles.callToAction}>
            {translate(ACTION.startProject, locale)}
          </Button>
        </div>
      </div>
    </header>
  );
}
