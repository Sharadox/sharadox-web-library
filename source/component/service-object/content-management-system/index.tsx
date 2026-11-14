import styles from "./index.module.scss";

/**
 * Content management systems: a web page with an editing panel floating in front of it. As a field is typed in the
 * panel, the same words appear on the page and its picture changes, with no code in sight.
 */
export function ContentManagementSystem() {
  return (
    <div className={styles.object}>
      <div className={styles.page}>
        <span className={styles.bar}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.title} />
        <span className={styles.picture} />
        <span className={styles.lines}>
          <i />
          <i />
        </span>
      </div>
      <div className={styles.panel}>
        <span className={styles.label} />
        <span className={styles.field}>
          <i className={styles.typed} />
          <i className={styles.caret} />
        </span>
        <span className={styles.label} />
        <span className={styles.swatches}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.save} />
      </div>
    </div>
  );
}
