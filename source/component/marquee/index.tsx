"use client";
import { useMarquee } from "@sharadox/animation-web-library/marquee";
import { STACK } from "@sharadox/sharadox-web-library/content/stack";
import styles from "./index.module.scss";

/** Times the list repeats inside one group, so a group is always wider than the widest screen. */
const REPEAT = 3;

/**
 * Technologies and tools sliding endlessly between the grid's side rails. It can be grabbed and flung by hand; two
 * identical groups let it loop without a seam.
 */
export function Marquee() {
  const track = useMarquee<HTMLDivElement>({ speed: 36 });
  const group = Array.from({ length: REPEAT }, () => STACK).flat();
  return (
    <div className={styles.frame}>
      <div className={styles.marquee} aria-label={STACK.join(", ")} role="img">
        <div ref={track} className={styles.track} data-grab aria-hidden>
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
    </div>
  );
}
