"use client";
import { SYSTEM_STYLE } from "@sharadox/web-library/style/definition";
import { useStyle } from "@sharadox/web-library/style/use-style";
import { translate } from "@sharadox/web-library/internationalization/translate";
import { STYLE, STYLE_CONFIGURATION } from "@sharadox/sharadox-web-library/content/style";
import styles from "./index.module.scss";
import type { StyleSwitchProperties } from "@sharadox/sharadox-web-library/component/style-switch/type";

/**
 * Picks the style: System (the default, follows the device) or any style in content/style. Each style shows as a
 * swatch of its own background and foreground, so new styles need no new icons.
 */
export function StyleSwitch({ locale, className }: StyleSwitchProperties) {
  const { choice, choose } = useStyle(STYLE_CONFIGURATION);
  const options = [
    { name: SYSTEM_STYLE, label: translate(STYLE.system, locale), swatch: undefined },
    ...STYLE_CONFIGURATION.styles.map((style) => ({
      name: style.name,
      label: STYLE.names[style.name] ?? style.name,
      swatch: style.palette,
    })),
  ];
  return (
    <div
      className={[styles.switch, className].filter(Boolean).join(" ")}
      role="radiogroup"
      aria-label={translate(STYLE.label, locale)}
    >
      {options.map((option) => (
        <button
          key={option.name}
          type="button"
          role="radio"
          aria-checked={choice === option.name}
          aria-label={option.label}
          title={option.label}
          onClick={() => choose(option.name)}
        >
          {option.swatch ? (
            <span
              className={styles.swatch}
              style={{ background: option.swatch.background, color: option.swatch.foreground }}
              aria-hidden
            />
          ) : (
            <svg viewBox="0 0 16 16" className={styles.system} aria-hidden>
              <rect x="1.5" y="2.5" width="13" height="9" rx="1.5" />
              <path d="M5.5 14h5M8 11.5V14" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
}
