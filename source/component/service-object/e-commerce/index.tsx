import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** E-commerce: a shopping bag, swaying, with products dropping into it one after another. */
export function ECommerce() {
  return (
    <div className={styles.object}>
      {[0, 1, 2].map((item) => (
        <div key={item} className={styles.drop} style={{ animationDelay: `${item * 1.1}s` }}>
          <Cuboid className={styles.item} />
        </div>
      ))}
      <div className={styles.handle} />
      <Cuboid className={styles.bag} front={<span className={styles.tag} />} />
    </div>
  );
}
