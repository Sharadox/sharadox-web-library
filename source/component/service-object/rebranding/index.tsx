import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** Rebranding: a tile that turns over from the old mark to the new one and back, over the old outline. */
export function Rebranding() {
  return (
    <div className={styles.object}>
      <div className={styles.outline} />
      <div className={styles.turn}>
        <Cuboid className={styles.tile} front={<span className={styles.before} />} />
        <span className={styles.after} />
      </div>
    </div>
  );
}
