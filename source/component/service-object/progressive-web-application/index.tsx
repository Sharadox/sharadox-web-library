import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** Progressive web applications: a website whose app icon lifts out of the page and turns, installed in one tap. */
export function ProgressiveWebApplication() {
  return (
    <div className={styles.object}>
      <div className={styles.window}>
        <span className={styles.bar}>
          <i />
        </span>
        <span className={styles.slot} />
      </div>
      <div className={styles.lift}>
        <Cuboid className={styles.icon} front={<span className={styles.plus} />} />
      </div>
    </div>
  );
}
