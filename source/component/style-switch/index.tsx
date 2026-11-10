"use client";
import { SYSTEM_STYLE } from "@sharadox/web-library/style/definition";
import { useStyle } from "@sharadox/web-library/style/use-style";
import { translate } from "@sharadox/web-library/internationalization/translate";
import { STYLE, STYLE_CONFIGURATION } from "@sharadox/sharadox-web-library/content/style";
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
 * Picks the style: light styles on the left, System (the default, follows the device) in the middle, dark styles on
 * the right. Light styles show a sun and dark ones a moon; every style in content/style appears automatically.
 */
export function StyleSwitch({ locale, className }: StyleSwitchProperties) {
  const { choice, choose } = useStyle(STYLE_CONFIGURATION);
  const option = (style: (typeof STYLE_CONFIGURATION.styles)[number]) => ({
    name: style.name,
    label: STYLE.names[style.name] ?? style.name,
    icon: ICON[style.scheme],
  });
  const options = [
    ...STYLE_CONFIGURATION.styles.filter((style) => style.scheme === "light").map(option),
    { name: SYSTEM_STYLE, label: translate(STYLE.system, locale), icon: ICON.system },
    ...STYLE_CONFIGURATION.styles.filter((style) => style.scheme === "dark").map(option),
  ];
  return (
    <div
      className={[styles.switch, className].filter(Boolean).join(" ")}
      role="radiogroup"
      aria-label={translate(STYLE.label, locale)}
    >
      {options.map((item) => (
        <button
          key={item.name}
          type="button"
          role="radio"
          aria-checked={choice === item.name}
          aria-label={item.label}
          title={item.label}
          onClick={() => choose(item.name)}
        >
          <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden>
            {item.icon}
          </svg>
        </button>
      ))}
    </div>
  );
}
