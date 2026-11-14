import styles from "./index.module.scss";

/** Social media growth strategy: an audience in orbit around the brand, on paths planned at different angles. */
export function SocialMediaStrategy() {
  return (
    <div className={styles.object}>
      <span className={styles.center} />
      {[0, 1, 2].map((orbit) => (
        <span key={orbit} className={styles.plane} data-orbit={orbit}>
          <span className={styles.orbit}>
            <i />
            <i />
          </span>
        </span>
      ))}
    </div>
  );
}
