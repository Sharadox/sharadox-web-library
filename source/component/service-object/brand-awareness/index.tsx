import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** Brand awareness: a beacon sending waves across a crowd, each person lighting up as a wave reaches them. */
export function BrandAwareness() {
  return (
    <div className={styles.object}>
      <div className={styles.floor}>
        <i />
        <i />
        <i />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((person) => (
          <b key={person} data-person={person} />
        ))}
      </div>
      <Cuboid className={styles.beacon} top={<span className={styles.light} />} />
    </div>
  );
}
