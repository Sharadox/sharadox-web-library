import styles from "./index.module.scss";

/** Faces around the bottle; the label shows on these. */
const SIDES = 14;
const LABEL = [0, 1, 2, 3];

/**
 * Merchandise: a T-shirt with the brand's mark on its chest, swaying beside a branded bottle turning on the spot, so
 * the label comes round again and again.
 */
export function Merchandise() {
  return (
    <div className={styles.object}>
      <div className={styles.shirt}>
        <i className={styles.collar} />
        <i className={styles.mark} />
      </div>
      <div className={styles.bottle}>
        {Array.from({ length: SIDES }, (_, side) => (
          <span
            key={side}
            className={styles.side}
            data-label={LABEL.includes(side) || undefined}
            style={{ transform: `rotateY(${(side * 360) / SIDES}deg) translateZ(23px)` }}
          />
        ))}
        {Array.from({ length: 8 }, (_, side) => (
          <span
            key={side}
            className={styles.cap}
            style={{ transform: `translateY(-66px) rotateY(${side * 45}deg) translateZ(13px)` }}
          />
        ))}
      </div>
    </div>
  );
}
