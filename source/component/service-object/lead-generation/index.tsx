import styles from "./index.module.scss";

/** Lead generation: a funnel of rings turning slowly, with people dropping in at the top and coming out as leads. */
export function LeadGeneration() {
  return (
    <div className={styles.object}>
      {[0, 1, 2, 3, 4].map((ring) => (
        <span key={ring} className={styles.ring} data-ring={ring} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((dot) => (
        <span key={dot} className={styles.path} style={{ transform: `rotateY(${dot * 60}deg)` }}>
          <i style={{ animationDelay: `${dot * 0.5}s` }} />
        </span>
      ))}
      <span className={styles.lead} />
    </div>
  );
}
