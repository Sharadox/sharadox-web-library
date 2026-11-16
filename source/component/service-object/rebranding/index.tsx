import styles from "./index.module.scss";

/**
 * Rebranding: a before and after. A divider sweeps across the dated mark, revealing the fresh one underneath, holds,
 * and sweeps back.
 */
export function Rebranding() {
  return (
    <div className={styles.object}>
      <div className={styles.tile}>
        <div className={styles.before}>
          <i className={styles.badge} />
          <i className={styles.wordmark} />
        </div>
        <div className={styles.after}>
          <i className={styles.mark} />
          <i className={styles.name} />
        </div>
        <span className={styles.divider} />
      </div>
    </div>
  );
}
