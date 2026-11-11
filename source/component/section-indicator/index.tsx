"use client";
import type { CSSProperties } from "react";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { useActiveSection } from "@sharadox/scroll-web-library/active-section";
import { SECTION_INDICATOR } from "@sharadox/sharadox-web-library/content/section-indicator";
import styles from "./index.module.scss";
import type { SectionIndicatorProperties } from "@sharadox/sharadox-web-library/component/section-indicator/type";

const IDS = SECTION_INDICATOR.sections.map((section) => section.id);

/**
 * The side indicator: a rail that fills as the page scrolls, a tick and number per section, the current one
 * lit with its own progress, and its name flashing in whenever it changes. Every entry jumps to its section; all
 * names show while the pointer is over it.
 */
export function SectionIndicator({ locale }: SectionIndicatorProperties) {
  const { active, within, page } = useActiveSection(IDS);
  return (
    <nav
      className={styles.indicator}
      aria-label={translate(SECTION_INDICATOR.label, locale)}
      style={{ "--page": page, "--within": within } as CSSProperties}
    >
      <span className={styles.rail} aria-hidden>
        <span />
      </span>
      <ol>
        {SECTION_INDICATOR.sections.map((section, index) => {
          const current = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={current ? styles.current : undefined}
                aria-current={current ? "location" : undefined}
              >
                {/* Keyed by the active section, so the name replays its flash whenever the section changes. */}
                <span key={current ? `${section.id}-on` : section.id} className={styles.name}>
                  {section[locale]}
                </span>
                <span className={`${styles.number} monospace`}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.tick} aria-hidden>
                  <span />
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
