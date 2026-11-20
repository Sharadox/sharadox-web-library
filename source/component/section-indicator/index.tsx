"use client";
import { SectionLink } from "@sharadox/scroll-web-library/section-link";
import type { CSSProperties } from "react";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { useActiveSection } from "@sharadox/scroll-web-library/active-section";
import { SECTION_INDICATOR } from "@sharadox/sharadox-web-library/content/section-indicator";
import styles from "./index.module.scss";
import type { SectionIndicatorProperties } from "@sharadox/sharadox-web-library/component/section-indicator/type";
import { twoDigits } from "@sharadox/web-library/text/two-digit";

const IDS = SECTION_INDICATOR.sections.map((section) => section.id);

/**
 * The side indicator, in the margin right of the grid frame: a rail along the frame that fills as the page scrolls,
 * a tick and number per section reaching out from it (the current one lit with its own progress), and its name
 * flashing in to the right whenever it changes. Every entry jumps to its section; all names show while the pointer
 * is over it. Nothing shifts when the section changes: each tick grows inside a slot of its own.
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
              <SectionLink
                href={`#${section.id}`}
                className={current ? styles.current : undefined}
                title={section[locale]}
                aria-current={current ? "location" : undefined}
              >
                <span className={styles.tick} aria-hidden>
                  <span />
                </span>
                <span className={`${styles.number} monospace`}>{twoDigits(index + 1)}</span>
                {/* The name's place: to the right, or ending at the window's edge when there isn't room. Keyed by
                    the active section, so the name replays its flash whenever the section changes. */}
                <span className={styles.label}>
                  <span key={current ? `${section.id}-on` : section.id} className={styles.name}>
                    {section[locale]}
                  </span>
                </span>
              </SectionLink>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
