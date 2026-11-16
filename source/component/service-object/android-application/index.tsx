import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** Android applications: a phone turning in the hand, its app tiles rising off the screen in a wave, the three-button bar below. */
export function AndroidApplication() {
  return (
    <div className={styles.object}>
      <Cuboid
        className={styles.phone}
        front={
          <>
            <span className={styles.camera} />
            <span className={styles.tiles}>
              {Array.from({ length: 12 }, (_, tile) => (
                <i key={tile} style={{ animationDelay: `${(tile % 3) * 0.15 + Math.floor(tile / 3) * 0.2}s` }} />
              ))}
            </span>
            <span className={styles.buttons}>
              <i className={styles.back} />
              <i className={styles.home} />
              <i className={styles.recent} />
            </span>
          </>
        }
      />
    </div>
  );
}
