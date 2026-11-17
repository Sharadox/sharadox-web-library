import styles from "./index.module.scss";

/** Where the brand shows, besides its main sign: a business card and an app icon, updated after it in turn. */
const TOUCHPOINTS = ["card", "icon"] as const;

/**
 * Rebranding: the same brand, brought up to date. The dated mark (a heavy, double-ringed badge with a band across it
 * and a chunky name) turns and reshapes into the fresh one (a clean diamond and a fine name), keeping its center and
 * its place, and the change rolls out to the business card and the app icon behind it. Then it starts over.
 */
export function Rebranding() {
  return (
    <div className={styles.object}>
      {TOUCHPOINTS.map((touchpoint) => (
        <div key={touchpoint} className={styles.touchpoint} data-touchpoint={touchpoint}>
          <i className={styles.mark} />
          <i className={styles.name} />
        </div>
      ))}
      <div className={styles.sign}>
        <i className={styles.mark} />
        <i className={styles.name} />
      </div>
    </div>
  );
}
