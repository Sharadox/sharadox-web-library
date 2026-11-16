import styles from "./index.module.scss";

/** The names before the @ that take turns in the address. */
const NAMES = ["hello", "team", "you"];

/**
 * Professional email: an envelope opens and its letter rises, while the address in front of it changes name after
 * name, always at your own domain.
 */
export function ProfessionalEmail() {
  return (
    <div className={styles.object}>
      <div className={styles.envelope}>
        <span className={styles.letter}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.pocket} />
        <span className={styles.flap} />
      </div>
      <div className={styles.address}>
        <span className={styles.names}>
          {NAMES.map((name, index) => (
            <span key={name} style={{ animationDelay: `${index * 3}s` }}>
              {name}
            </span>
          ))}
        </span>
        <b>@yourdomain.com</b>
      </div>
    </div>
  );
}
