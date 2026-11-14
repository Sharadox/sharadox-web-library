import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** Platforms: four layers of one system, turning slowly, with a signal lighting them in turn and a core through them. */
export function Platform() {
  return (
    <div className={styles.object}>
      <div className={styles.core} />
      {[0, 1, 2, 3].map((layer) => (
        <Cuboid
          key={layer}
          className={styles.slab}
          top={<span className={styles.signal} style={{ animationDelay: `${layer * -0.45}s` }} />}
        />
      ))}
    </div>
  );
}
