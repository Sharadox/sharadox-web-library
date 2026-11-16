import { Mark } from "@sharadox/sharadox-web-library/component/service-object/mark";
import styles from "./index.module.scss";

/**
 * Branding: defining the brand. Its pieces settle onto a board one by one (who it speaks to, its voice, its colors
 * and its type), and once they are all in place the brand's mark rises from the middle.
 */
export function Branding() {
  return (
    <div className={styles.object}>
      <div className={styles.board}>
        <span className={styles.piece} style={{ animationDelay: "0s" }}>
          <i className={styles.audience} />
        </span>
        <span className={styles.piece} style={{ animationDelay: "0.5s" }}>
          <i className={styles.voice} />
        </span>
        <span className={styles.piece} style={{ animationDelay: "1s" }}>
          <i className={styles.colors} />
        </span>
        <span className={styles.piece} style={{ animationDelay: "1.5s" }}>
          <i className={styles.type}>Aa</i>
        </span>
      </div>
      <Mark className={styles.mark} />
    </div>
  );
}
