import type { CSSProperties } from "react";
import { Mark } from "@sharadox/sharadox-web-library/component/service-object/mark";
import { Person } from "@sharadox/sharadox-web-library/component/service-object/person";
import styles from "./index.module.scss";

/** Where the brand is first seen: a billboard over the crowd. */
const BILLBOARD = { x: 110, y: 18 };
/** The crowd, in three rows (the front one lowest and largest), each row between the people of the one behind. */
const ROWS = [
  { y: 76, people: 3, spacing: 56, scale: 0.86 },
  { y: 120, people: 4, spacing: 56, scale: 0.93 },
  { y: 164, people: 3, spacing: 62, scale: 1 },
];
/** How many steps of word of mouth it takes to reach everyone: the nearest people first, the farthest last. */
const STEPS = 4;
/** Distance (on the stage) covered by one step. */
const STEP = 40;

const CROWD = ROWS.flatMap(({ y, people, spacing, scale }) =>
  Array.from({ length: people }, (_, index) => {
    const x = BILLBOARD.x + (index - (people - 1) / 2) * spacing;
    const distance = Math.hypot(x - BILLBOARD.x, y - BILLBOARD.y - 40);
    return { x, y, scale, step: Math.min(STEPS - 1, Math.floor(distance / STEP)) };
  }),
);

/**
 * Brand awareness: being the name people think of first. The brand appears on a billboard, then in the minds of the
 * people nearest, and spreads by word of mouth through the crowd until everyone has it in mind, all at once, before it
 * starts again. With reduced motion, the whole crowd has it in mind.
 */
export function BrandAwareness() {
  return (
    <div className={styles.object}>
      <div className={styles.scene}>
        <div className={styles.billboard} style={{ left: BILLBOARD.x, top: BILLBOARD.y }}>
          <Mark className={styles.advert} />
        </div>
        {CROWD.map(({ x, y, scale, step }, index) => (
          <span
            key={index}
            className={styles.someone}
            data-step={step}
            style={{ left: x, top: y, "--scale": scale } as CSSProperties}
          >
            <span className={styles.thought}>
              <Mark className={styles.recall} />
            </span>
            <Person className={styles.person} />
          </span>
        ))}
      </div>
    </div>
  );
}
