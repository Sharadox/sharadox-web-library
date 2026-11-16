import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** The home screen's apps: rounded squares, four to a row. */
const APPS = 12;
/** The apps in the dock. */
const DOCK = 4;

/**
 * iOS applications: an iPhone as people know it, with the Dynamic Island, rounded-square app icons, the page dots, the
 * dock and the home bar. The island opens into a live activity, then the icons jiggle, ready to be arranged.
 */
export function IosApplication() {
  return (
    <div className={styles.object}>
      <Cuboid
        className={styles.phone}
        front={
          <span className={styles.screen}>
            <span className={styles.island}>
              <i />
            </span>
            <span className={styles.apps}>
              {Array.from({ length: APPS }, (_, app) => (
                <i key={app} />
              ))}
            </span>
            <span className={styles.dots}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.dock}>
              {Array.from({ length: DOCK }, (_, app) => (
                <i key={app} />
              ))}
            </span>
            <span className={styles.indicator} />
          </span>
        }
      />
    </div>
  );
}
