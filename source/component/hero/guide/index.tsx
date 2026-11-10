import styles from "./index.module.scss";

const COLUMNS = [1, 2, 3, 4, 5];
const ROWS = [1, 2, 3];

/**
 * The hero's blueprint: dashed column and row guides that draw themselves in, with beams of light running along
 * a few of them.
 */
export function HeroGuide() {
  return (
    <div className={styles.guide} aria-hidden>
      {COLUMNS.map((column) => (
        <span
          key={`column${column}`}
          className={styles.column}
          style={{ left: `${(column / 6) * 100}%`, animationDelay: `${column * 0.08}s` }}
        />
      ))}
      {ROWS.map((row) => (
        <span
          key={`row${row}`}
          className={styles.row}
          style={{ top: `${(row / 4) * 100}%`, animationDelay: `${0.3 + row * 0.1}s` }}
        />
      ))}
      <span className={`${styles.beam} ${styles.down}`} style={{ left: `${(2 / 6) * 100}%` }} />
      <span className={`${styles.beam} ${styles.down} ${styles.late}`} style={{ left: `${(5 / 6) * 100}%` }} />
      <span className={`${styles.beam} ${styles.across}`} style={{ top: "75%" }} />
      <span className={`${styles.beam} ${styles.across} ${styles.late}`} style={{ top: "25%" }} />
    </div>
  );
}
