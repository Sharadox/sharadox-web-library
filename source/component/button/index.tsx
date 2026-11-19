import { Icon } from "@sharadox/icon-web-library/icon";
import { SectionLink } from "@sharadox/scroll-web-library/section-link";
import { classNames } from "@sharadox/web-library/class-name";
import { leavesSite, newTab } from "@sharadox/web-library/navigation/new-tab";
import styles from "./index.module.scss";
import type { ButtonProperties } from "@sharadox/sharadox-web-library/component/button/type";

/**
 * Pill button or link: solid (the foreground color) or ghost (outlined). Links to the site's own pages and sections are
 * Next.js links; email, phones and other sites are plain links that open in a new tab.
 */
export function Button({
  children,
  href,
  variant = "solid",
  size = "medium",
  arrow,
  disabled,
  className,
  onClick,
}: ButtonProperties) {
  const names = classNames(styles.button, styles[variant], size !== "medium" && styles[size], className);
  const content = (
    <>
      {children}
      {arrow && <Icon name="chevron-right" className={styles.arrow} strokeWidth={1.8} />}
    </>
  );
  // The site's own pages and sections go through Next.js; anything else (email, other sites) opens in a new tab.
  if (href && leavesSite(href))
    return (
      <a href={href} className={names} onClick={onClick} {...newTab(href)}>
        {content}
      </a>
    );
  return href ? (
    <SectionLink href={href} className={names} onClick={onClick}>
      {content}
    </SectionLink>
  ) : (
    <button className={names} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
