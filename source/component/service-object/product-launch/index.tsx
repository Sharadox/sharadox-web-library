import type { CSSProperties } from "react";
import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** The countdown before the reveal. */
const COUNTDOWN = ["3", "2", "1"];
/** Sparks flying out as the product appears, evenly around it. */
const SPARKS = 10;

/**
 * Product launches: the build-up and the big day. A countdown runs over a covered product on its stage; at zero the
 * cover lifts away, the product rises into the light and sparks fly. With reduced motion, the product stands
 * revealed.
 */
export function ProductLaunch() {
  return (
    <div className={styles.object}>
      <div className={styles.glow} />
      <Cuboid className={styles.stage} />
      <Cuboid className={styles.product} front={<span className={styles.screen} />} />
      <Cuboid className={styles.cover} />
      <div className={styles.sparks}>
        {Array.from({ length: SPARKS }, (_, spark) => (
          <i key={spark} style={{ "--angle": `${(360 / SPARKS) * spark}deg` } as CSSProperties} />
        ))}
      </div>
      <div className={styles.countdown}>
        {COUNTDOWN.map((number, index) => (
          <span key={number} style={{ animationDelay: `${index * 0.8}s` }}>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
}
