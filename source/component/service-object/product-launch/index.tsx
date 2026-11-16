import type { CSSProperties } from "react";
import styles from "./index.module.scss";

/** The steps of a launch campaign, in order: each lights up as the campaign reaches it. */
const STEPS = ["teaser", "page", "campaign", "launch"] as const;
/** Confetti thrown on launch day, evenly around the product. */
const CONFETTI = 12;

/**
 * Product launches: a campaign from the first teaser to day one. Along a timeline, each step lights up in turn: a
 * teaser (the product still a mystery), its landing page, the campaign announcing it, and launch day, when the product
 * is revealed and confetti flies. With reduced motion, every step is lit and the product is shown.
 */
export function ProductLaunch() {
  return (
    <div className={styles.object}>
      <div className={styles.timeline}>
        <span className={styles.track}>
          <span className={styles.progress} />
        </span>
        {STEPS.map((step, index) => (
          <div key={step} className={styles.step} data-step={index}>
            <span className={styles.tile}>
              <span className={styles[step]} />
            </span>
            <i className={styles.dot} />
          </div>
        ))}
        <div className={styles.confetti}>
          {Array.from({ length: CONFETTI }, (_, piece) => (
            <i
              key={piece}
              style={
                {
                  "--angle": `${(360 / CONFETTI) * piece + 8}deg`,
                  "--reach": `${44 + (piece % 3) * 14}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
