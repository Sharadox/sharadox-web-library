import { classNames } from "@sharadox/web-library/class-name";
import styles from "./index.module.scss";
import type { ButtonProperties } from "@sharadox/sharadox-web-library/component/button/type";

/** Pill button or link: solid (the foreground color) or ghost (outlined). */
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
      {arrow && (
        <span className={styles.arrow} aria-hidden>
          →
        </span>
      )}
    </>
  );
  return href ? (
    <a href={href} className={names} onClick={onClick}>
      {content}
    </a>
  ) : (
    <button className={names} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
