import styles from "./index.module.scss";

/**
 * Print design: a flyer standing behind a stack of business cards; the top card lifts off the stack and flips over to
 * show the brand's mark on its back, then settles again.
 */
export function PrintDesign() {
  return (
    <div className={styles.object}>
      <div className={styles.flyer}>
        <span className={styles.picture} />
        <span className={styles.heading} />
        <span className={styles.lines}>
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className={styles.stack}>
        {[0, 1, 2, 3].map((card) => (
          <span key={card} className={styles.card} style={{ transform: `translateY(${-card * 3}px)` }} />
        ))}
        <div className={styles.top}>
          <div className={styles.front}>
            <i className={styles.name} />
            <i className={styles.detail} />
            <i className={styles.detail} />
          </div>
          <div className={styles.back}>
            <i className={styles.mark} />
          </div>
        </div>
      </div>
    </div>
  );
}
