import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/**
 * APIs: a database and an app talking through a gateway in between. Requests travel one way and answers come back
 * the other, along the same line, without anyone in the middle.
 */
export function ApplicationProgrammingInterface() {
  return (
    <div className={styles.object}>
      <div className={styles.database}>
        {Array.from({ length: 3 }, (_, disc) => (
          <span key={disc} className={styles.disc} style={{ transform: `translateY(${disc * 26 - 26}px)` }}>
            {Array.from({ length: 6 }, (_, layer) => (
              <i key={layer} style={{ transform: `rotateX(90deg) translateZ(${layer * 3 - 7.5}px)` }} />
            ))}
          </span>
        ))}
      </div>
      <span className={styles.line} />
      <Cuboid className={styles.gateway} front={<span className={styles.braces} />} />
      <div className={styles.application}>
        <span className={styles.row} />
        <span className={styles.row} />
        <span className={styles.row} />
      </div>
      <span className={`${styles.packet} ${styles.request}`} />
      <span className={`${styles.packet} ${styles.answer}`} />
    </div>
  );
}
