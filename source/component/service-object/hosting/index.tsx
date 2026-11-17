import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** The servers in the rack, top to bottom; the middle one is the one that has the incident. */
const SERVERS = 3;
/**
 * Hosting: what we build, kept running. A rack of servers, their lights blinking. Then one server has an incident and
 * its lights go out; it is looked after at once and comes back on with a glow.
 */
export function Hosting() {
  return (
    <div className={styles.object}>
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
    </div>
  );
}
