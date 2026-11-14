import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** Product launches: a product lifting off its pad with a trail, shock rings spreading over the pad, again and again. */
export function ProductLaunch() {
  return (
    <div className={styles.object}>
      <div className={styles.pad}>
        <i />
        <i />
      </div>
      <div className={styles.flight}>
        <span className={styles.trail} />
        <Cuboid className={styles.body} />
        <Cuboid className={styles.nose} />
      </div>
    </div>
  );
}
