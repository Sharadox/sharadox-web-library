import type { CSSProperties } from "react";
import styles from "./index.module.scss";
import type { PlateProperties } from "@sharadox/sharadox-web-library/component/touchpoint/plate/type";

const SQUARES = Array.from({ length: 9 }, (_, index) => index);
const BARS = [38, 54, 46, 72, 64, 90];

/** One layer of the brand stack, drawn as a miniature of that touchpoint. */
export function Plate({ layer, label, index }: PlateProperties) {
  return (
    <div className={styles.plate} style={{ "--index": index } as CSSProperties}>
      <span className={`${styles.label} monospace`}>{label}</span>
      {layer === "identity" && (
        <div className={styles.identity}>
          <span className={styles.mark} />
          <span className={styles.swatches}>
            <i />
            <i />
            <i />
          </span>
        </div>
      )}
      {layer === "website" && (
        <div className={styles.website}>
          <span className={styles.bar} />
          <span className={styles.block} />
          <span className={styles.row}>
            <i />
            <i />
            <i />
          </span>
        </div>
      )}
      {layer === "application" && (
        <div className={styles.application}>
          <span />
          <span />
        </div>
      )}
      {layer === "social" && (
        <div className={styles.social}>
          {SQUARES.map((square) => (
            <i key={square} />
          ))}
        </div>
      )}
      {layer === "campaign" && (
        <div className={styles.campaign}>
          {BARS.map((height, bar) => (
            <i key={bar} style={{ height: `${height}%` }} />
          ))}
        </div>
      )}
    </div>
  );
}
