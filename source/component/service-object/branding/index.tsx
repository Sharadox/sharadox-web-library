import styles from "./index.module.scss";

/** Branding: a solid seal with the brand's mark, spinning like a coin. */
export function Branding() {
  return (
    <div className={styles.object}>
      <div className={styles.seal}>
        {Array.from({ length: 12 }, (_, layer) => (
          <span key={layer} className={styles.layer} style={{ transform: `translateZ(${layer - 5.5}px)` }}>
            {(layer === 0 || layer === 11) && <i className={styles.mark} />}
          </span>
        ))}
      </div>
    </div>
  );
}
