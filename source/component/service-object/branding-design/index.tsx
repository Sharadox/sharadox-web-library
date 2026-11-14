import styles from "./index.module.scss";

/** Branding design: a swatch book of the brand's colors and type, fanning open and closing. */
export function BrandingDesign() {
  return (
    <div className={styles.object}>
      {[0, 1, 2, 3, 4, 5].map((swatch) => (
        <div key={swatch} className={styles.swatch} data-swatch={swatch}>
          <span className={styles.color} />
          <span className={styles.type}>Aa</span>
          <span className={styles.line} />
        </div>
      ))}
    </div>
  );
}
