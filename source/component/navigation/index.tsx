"use client";
import { classNames } from "@sharadox/web-library/class-name";
import { AnimatePresence, motion } from "motion/react";
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

const EASE = [0.22, 1, 0.36, 1] as const;

/** Where the bar has room for every link; below it they move into the menu (keep in step with the styles). */
const WIDE = "(min-width: 1101px)";

/**
 * Fixed top bar that frosts once the page scrolls, with the style and language switches. Below 1100px the links
 * open in a menu under the bar, in the bar's frosted background; it scrolls when it doesn't fit (a phone held
 * sideways). The menu sits beside the bar, not in it: the bar's blur would otherwise make the menu the bar's size.
 */
export function Navigation({ locale, path = "" }: NavigationProperties) {
  const home = path ? `/${locale}` : "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(scrollY > 24);
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const escape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    // Turning a tablet until the links fit in the bar closes the menu.
    const wide = matchMedia(WIDE);
    const widen = () => wide.matches && setOpen(false);
    addEventListener("keydown", escape);
    wide.addEventListener("change", widen);
    return () => {
      document.documentElement.style.overflow = "";
      removeEventListener("keydown", escape);
      wide.removeEventListener("change", widen);
    };
  }, [open]);
  const links = NAVIGATION.links.map((section) => ({
    href: `${home}#${section.id}`,
    name: translate(section, locale),
  }));
  const contact = `${home}#${SECTION.contact.id}`;
  return (
    <>
      <header className={classNames(styles.navigation, (scrolled || open) && styles.scrolled)}>
        <div className={styles.inner}>
          <Wordmark href={`/${locale}`} />
          <nav className={styles.links} aria-label={translate(NAVIGATION.main, locale)}>
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className={styles.end}>
            <StyleSwitch locale={locale} className={styles.style} />
            <LanguageSwitch locale={locale} path={path} />
            <Button href={contact} size="small" className={styles.callToAction}>
              {translate(ACTION.startProject, locale)}
            </Button>
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={open}
              aria-controls="menu"
              aria-label={translate(open ? NAVIGATION.close : NAVIGATION.menu, locale)}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu"
            // Smooth scrolling leaves the menu alone, so scrolling it never moves the page behind.
            data-lenis-prevent
            className={styles.menu}
            aria-label={translate(NAVIGATION.main, locale)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 + index * 0.05, ease: EASE }}
              >
                <span className="monospace">{String(index + 1).padStart(2, "0")}</span>
                {link.name}
              </motion.a>
            ))}
            <motion.div
              className={styles.menuAction}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 + links.length * 0.05, ease: EASE }}
            >
              <Button href={contact} arrow onClick={() => setOpen(false)}>
                {translate(ACTION.startProject, locale)}
              </Button>
              {/* On the smallest phones the style switch leaves the bar, to keep room for the menu button. */}
              <StyleSwitch locale={locale} className={styles.menuStyle} />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
