"use client";
import { classNames } from "@sharadox/web-library/class-name";
import { useEffect, useState } from "react";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { LanguageSwitch } from "@sharadox/sharadox-web-library/component/language-switch";
import { StyleSwitch } from "@sharadox/sharadox-web-library/component/style-switch";
import { Wordmark } from "@sharadox/sharadox-web-library/component/wordmark";
import { NAVIGATION } from "@sharadox/sharadox-web-library/content/navigation";
import { translate } from "@sharadox/internationalization-web-library/translate";
import styles from "./index.module.scss";
import type { NavigationProperties } from "@sharadox/sharadox-web-library/component/navigation/type";

const LINKS = ["services", "capabilities", "process", "contact"] as const;

/** Fixed top bar that frosts once the page scrolls, with the style and language switches. */
export function Navigation({ locale }: NavigationProperties) {
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
          {LINKS.map((link) => (
            <a key={link} href={`#${link}`}>
              {translate(NAVIGATION[link], locale)}
            </a>
          ))}
        </nav>
        <div className={styles.end}>
          <StyleSwitch locale={locale} className={styles.style} />
          <LanguageSwitch locale={locale} />
          <Button href="#contact" size="small" className={styles.callToAction}>
            {translate(NAVIGATION.callToAction, locale)}
          </Button>
        </div>
      </div>
    </header>
  );
}
