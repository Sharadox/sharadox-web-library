import { Mark } from "@sharadox/sharadox-web-library/component/service-object/mark";
import styles from "./index.module.scss";

/**
 * Branding: defining who the brand is, drawn as its identity card being filled in. Its mark appears, its name is
 * written, then who it speaks to, its voice, its colors and its type; once the card is complete it lifts, and the
 * round starts again with a blank card.
 */
export function Branding() {
  return (
    <div className={styles.object}>
      <div className={styles.card}>
        <span className={styles.portrait} data-step="0">
          <Mark className={styles.mark} />
        </span>
        <span className={styles.name} data-step="1" />
        <span className={styles.tagline} data-step="1" />
        <span className={styles.row} data-step="2">
          <i className={styles.audience} />
          <b />
        </span>
        <span className={styles.row} data-step="3">
          <i className={styles.voice} />
          <b />
        </span>
        <span className={styles.row} data-step="4">
          <i className={styles.colors} />
        </span>
        <span className={styles.row} data-step="5">
          <i className={styles.type}>Aa</i>
        </span>
      </div>
    </div>
  );
}
