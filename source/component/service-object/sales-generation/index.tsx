import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** Sales generation: a bar chart in 3D, its bars climbing one after another, the last the tallest. */
export function SalesGeneration() {
  return (
    <div className={styles.object}>
      <div className={styles.base} />
      {[0, 1, 2, 3, 4].map((bar) => (
        <div key={bar} className={styles.column} data-bar={bar}>
          <Cuboid className={styles.bar} />
        </div>
      ))}
    </div>
  );
}
