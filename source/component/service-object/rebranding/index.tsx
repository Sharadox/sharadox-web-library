import styles from "./index.module.scss";

/** A five-pointed star around (50, 46) of the drawing, from each point's reach and the dents' between them. */
function star(outer: readonly number[], inner: readonly number[], turn: number) {
  const corners = outer.flatMap((reach, index) => {
    const at = (angle: number, radius: number) => {
      const radians = ((angle + turn - 90) * Math.PI) / 180;
      return `${(50 + radius * Math.cos(radians)).toFixed(1)} ${(46 + radius * Math.sin(radians)).toFixed(1)}`;
    };
    return [at(index * 72, reach), at(index * 72 + 36, inner[index]!)];
  });
  return `M${corners.join(" L")}Z`;
}

/** The dated star: lopsided points, tilted, as if drawn by hand. */
const BEFORE = star([37, 30, 40, 28, 35], [19, 15, 21, 14, 18], -9);
/** The same star, reimagined: even, balanced, upright. */
const AFTER = star([37, 37, 37, 37, 37], [15, 15, 15, 15, 15], 0);

/**
 * Rebranding: one logo, before and after. A divider sways gently left and right across it: on its left the dated
 * version (a lopsided star with a gradient, a hard drop shadow, a gloss and a chunky name), on its right the same
 * star reimagined (even, crisp, in a fine ring, with a light name).
 */
export function Rebranding() {
  return (
    <div className={styles.object}>
      <div className={styles.tile}>
        <svg className={styles.before} viewBox="0 0 100 100">
          <defs>
            <linearGradient id="rebranding-bevel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" className={styles.light} />
              <stop offset="0.55" className={styles.middle} />
              <stop offset="1" className={styles.dark} />
            </linearGradient>
          </defs>
          <path className={styles.shadow} d={BEFORE} transform="translate(5 5)" />
          <path className={styles.dated} d={BEFORE} fill="url(#rebranding-bevel)" />
          <ellipse className={styles.gloss} cx="40" cy="34" rx="9" ry="4" transform="rotate(-25 40 34)" />
          <rect className={styles.chunky} x="24" y="86" width="52" height="8" rx="1" />
        </svg>
        <svg className={styles.after} viewBox="0 0 100 100">
          <circle className={styles.ring} cx="50" cy="46" r="42" />
          <path className={styles.fresh} d={AFTER} />
          <rect className={styles.name} x="34" y="94" width="32" height="2" rx="1" />
        </svg>
        <span className={styles.divider} />
      </div>
    </div>
  );
}
