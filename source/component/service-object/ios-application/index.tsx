import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** iOS applications: a phone with its island opening up, and widgets floating off the screen towards you. */
export function IosApplication() {
  return (
    <div className={styles.object}>
      <Cuboid
        className={styles.phone}
        front={
          <>
            <span className={styles.island} />
            <span className={styles.widgets}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.indicator} />
          </>
        }
      />
    </div>
  );
}
