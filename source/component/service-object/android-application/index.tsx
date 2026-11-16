import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** The home screen's apps: round icons, four to a row. */
const APPS = 12;
/** The quick settings in the shade: rounded toggles, two to a row, switching on one after the other. */
const TOGGLES = 4;

/**
 * Android applications: an Android phone as people know it, with the camera in a hole in the screen, round app icons,
 * the search bar and the three buttons. The quick settings shade slides down from the top, its toggles switch on one
 * by one, and it slides back up.
 */
export function AndroidApplication() {
  return (
    <div className={styles.object}>
      <Cuboid
        className={styles.phone}
        front={
          <span className={styles.screen}>
            <span className={styles.status} />
            <span className={styles.apps}>
              {Array.from({ length: APPS }, (_, app) => (
                <i key={app} />
              ))}
            </span>
            <span className={styles.search} />
            <span className={styles.buttons}>
              <i className={styles.back} />
              <i className={styles.home} />
              <i className={styles.recent} />
            </span>
            <span className={styles.shade}>
              {Array.from({ length: TOGGLES }, (_, toggle) => (
                <i key={toggle} style={{ animationDelay: `${toggle * 0.25}s` }} />
              ))}
              <b />
            </span>
            <span className={styles.camera} />
          </span>
        }
      />
    </div>
  );
}
