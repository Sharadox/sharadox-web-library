import styles from "./index.module.scss";

/** Websites: three browser windows floating in depth, drifting apart and back together. */
export function Website() {
  return (
    <div className={styles.object}>
      {[-1, 0, 1].map((layer) => (
        <div key={layer} className={styles.pane} data-layer={layer}>
          <div className={styles.bar}>
            <i />
            <i />
            <i />
          </div>
          <div className={styles.hero} />
          <div className={styles.lines}>
            <i />
            <i />
            <i />
          </div>
        </div>
      ))}
    </div>
  );
}
