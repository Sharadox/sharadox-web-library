import { STACK } from "@sharadox/sharadox-web-library/content/stack";
import styles from "./index.module.scss";

/** Times the list repeats inside one group, so a group is always wider than the widest screen. */
const REPEAT = 3;

/**
 * Endless strip of the technologies we work with. Two identical groups slide left by exactly one group's width, so
 * the second group lands where the first started and the loop has no gap or jump.
 */
export function Marquee() {
  const group = Array.from({ length: REPEAT }, () => STACK).flat();
  return (
    <div className={styles.marquee} aria-label={STACK.join(", ")}>
      <div className={styles.track} aria-hidden>
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.group}>
            {group.map((technology, index) => (
              <span key={index} className={`${styles.pill} monospace`}>
                {technology}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
