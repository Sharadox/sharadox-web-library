import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** The servers in the rack, top to bottom; the middle one is the one that has the incident. */
const SERVERS = 3;
/** The uptime line: steady beats, a dip where the incident happens, and steady again once it is fixed. */
const PULSE =
  "M0 30 L22 30 L28 18 L34 42 L40 30 L70 30 L76 18 L82 42 L88 30 L104 30 L110 52 L132 52 L138 30 L160 30 L166 18 L172 42 L178 30 L200 30";

/**
 * Hosting: what we build, kept running. A rack of servers, their lights blinking, watched by an uptime line that beats
 * steadily. Then one server has an incident: its lights go out and the line dips. It is looked after at once: the
 * server comes back with a ring of light and a tick, and the line beats steadily again.
 */
export function Hosting() {
  return (
    <div className={styles.object}>
      <svg className={styles.monitor} viewBox="0 0 200 60" preserveAspectRatio="none">
        <path className={styles.track} d={PULSE} />
        <path className={styles.beat} d={PULSE} pathLength={100} />
      </svg>
      {Array.from({ length: SERVERS }, (_, server) => (
        <Cuboid
          key={server}
          className={styles.server}
          front={
            <span className={styles.panel} data-incident={server === 1 || undefined}>
              {[0, 1, 2].map((light) => (
                <i key={light} style={{ animationDelay: `${(server * 3 + light) * -0.37}s` }} />
              ))}
              <b />
            </span>
          }
        />
      ))}
      <span className={styles.fixed} />
    </div>
  );
}
