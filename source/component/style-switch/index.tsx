"use client";
import { classNames } from "@sharadox/web-library/class-name";
import { useStyle } from "@sharadox/style-web-library/use-style";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { STYLE, STYLES } from "@sharadox/sharadox-web-library/content/style";
import styles from "./index.module.scss";
import type { StyleSwitchProperties } from "@sharadox/sharadox-web-library/component/style-switch/type";

const ICON = {
  // A monitor: follow the device.
  system: (
    <>
      <rect x="1.5" y="2.5" width="13" height="9" rx="1.5" />
      <path d="M5.5 14h5M8 11.5V14" />
    </>
  ),
  // A sun for light styles.
  light: (
    <>
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" />
    </>
  ),
  // A moon for dark styles.
  dark: <path d="M13.5 9.6A5.8 5.8 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1Z" />,
};

/**
 * Picks the color style: light styles on the left, System (follows the device) in the middle, dark styles on the
 * right. Light styles show a sun and dark ones a moon; every option in content/style appears automatically.
 */
export function StyleSwitch({ locale, className }: StyleSwitchProperties) {
  const { choice, choices, choose } = useStyle(STYLES, "color");
  return (
    <div className={classNames(styles.switch, className)} role="radiogroup" aria-label={translate(STYLE.label, locale)}>
      {choices.map((item) => {
        const label = item.kind === "system" ? translate(STYLE.system, locale) : STYLE.names[item.name]!;
        return (
          <button
            key={item.name}
            type="button"
            role="radio"
            aria-checked={choice === item.name}
            aria-label={label}
            title={label}
            onClick={() => choose(item.name)}
          >
            <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden>
              {ICON[item.kind === "system" ? "system" : item.scheme!]}
            </svg>
          </button>
        );
      })}
    </div>
  );
}
