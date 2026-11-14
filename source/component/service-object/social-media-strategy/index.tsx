import styles from "./index.module.scss";

/** A post in the feed: who posted it, its picture, and the like, comment and share buttons. */
function Post({ className }: { className: string | undefined }) {
  return (
    <div className={`${styles.post} ${className}`}>
      <span className={styles.author}>
        <i />
        <i />
      </span>
      <span className={styles.picture} />
      <span className={styles.actions}>
        <i className={styles.like} />
        <i className={styles.comment} />
        <i className={styles.share} />
      </span>
    </div>
  );
}

/**
 * Social media growth strategy: a feed of posts with likes floating off the newest one, the planned posting calendar
 * ticking off beside it, and the followers chart climbing.
 */
export function SocialMediaStrategy() {
  return (
    <div className={styles.object}>
      <div className={styles.calendar}>
        {Array.from({ length: 12 }, (_, day) => (
          <i key={day} style={{ animationDelay: `${day * 0.35}s` }} />
        ))}
      </div>
      <Post className={styles.older} />
      <Post className={styles.newest} />
      {Array.from({ length: 5 }, (_, heart) => (
        <span
          key={heart}
          className={styles.heart}
          style={{ animationDelay: `${heart * 0.7}s`, left: `${[-6, 10, -14, 4, 16][heart]}px` }}
        />
      ))}
      <div className={styles.growth}>
        {[0, 1, 2, 3].map((bar) => (
          <i key={bar} style={{ animationDelay: `${bar * 0.25}s` }} />
        ))}
      </div>
    </div>
  );
}
