import type { CSSProperties } from "react";
import { Person } from "@sharadox/sharadox-web-library/component/service-object/person";
import styles from "./index.module.scss";

/** The system's screen sits in the middle of the board; its row is where every line meets. */
const HUB = { x: 100, y: 75 };
/** The people around it: the team and the clients, one at each corner of the board. */
const PEOPLE = [
  { x: 28, y: 26 },
  { x: 172, y: 26 },
  { x: 172, y: 124 },
  { x: 28, y: 124 },
];
/** Who sends to whom, in turn: each message goes through the system, which passes it on by itself. */
const ROUTES = [
  [0, 2],
  [2, 1],
  [1, 3],
  [3, 0],
] as const;
/** Seconds each message takes; the routes follow one another, so a round lasts four of them. */
const TRIP = 2;

/** The line from a person into the system: down (or up) from them, then across into the screen's side. */
const line = ({ x, y }: { x: number; y: number }) => `M${x} ${y} Q${x} ${HUB.y} ${HUB.x} ${HUB.y}`;
/** A message's way: from the sender into the system, then out along the receiver's line. */
const route = (from: number, to: number) => {
  const sender = PEOPLE[from]!;
  const receiver = PEOPLE[to]!;
  return `path("${line(sender)} Q${receiver.x} ${HUB.y} ${receiver.x} ${receiver.y}")`;
};

/**
 * Platforms: a company's way of working, made digital. Its people sit around one system, joined to it by lines; a
 * message leaves one person, goes through the system (whose gear keeps turning and whose tasks tick themselves off)
 * and reaches the next person, who lights up, then that person sends the next one.
 */
export function Platform() {
  return (
    <div className={styles.object}>
      <div className={styles.board}>
        <svg className={styles.lines} viewBox="0 0 200 150">
          {PEOPLE.map((person, index) => (
            <path key={index} d={line(person)} />
          ))}
        </svg>
        {ROUTES.map(([from, to], index) => (
          <i
            key={index}
            className={styles.message}
            style={{ offsetPath: route(from, to), animationDelay: `${index * TRIP}s` }}
          />
        ))}
        {PEOPLE.map(({ x, y }, index) => {
          const received = ROUTES.findIndex(([, to]) => to === index);
          return (
            <span
              key={index}
              className={styles.seat}
              style={{ left: x, top: y, "--received": `${received * TRIP + TRIP * 0.86}s` } as CSSProperties}
            >
              <Person className={styles.person} />
            </span>
          );
        })}
        <div className={styles.system}>
          <span className={styles.gear} />
          {[0, 1, 2].map((task) => (
            <span key={task} className={styles.task} style={{ animationDelay: `${task * TRIP + TRIP / 2}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
