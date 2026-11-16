import type { CSSProperties } from "react";
import styles from "./index.module.scss";

/** The countdown, one number a second, each flowing into the next. */
const COUNTDOWN = ["3", "2", "1"];
/** Puffs of smoke spreading over the pad at lift-off, to either side. */
const SMOKE = [-1, 1, -0.6, 0.6];

/**
 * Product launches: the countdown and the lift-off. Numbers count down from 3, each one flowing smoothly into the
 * next while a ring around them runs out; at zero the rocket's engine lights, smoke spreads over the pad and the
 * rocket rises, faster and faster, out of sight, before the next one stands ready. With reduced motion, the rocket
 * stands on its pad.
 */
export function ProductLaunch() {
  return (
    <div className={styles.object}>
      <div className={styles.countdown}>
        <svg className={styles.ring} viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="27" pathLength={100} />
          <circle className={styles.time} cx="30" cy="30" r="27" pathLength={100} />
        </svg>
        {COUNTDOWN.map((number, index) => (
          <span key={number} className={styles.number} style={{ animationDelay: `${index * 1.2}s` }}>
            {number}
          </span>
        ))}
      </div>
      <div className={styles.pad}>
        {SMOKE.map((side, index) => (
          <i key={index} style={{ "--side": side } as CSSProperties} />
        ))}
      </div>
      <div className={styles.rocket}>
        <span className={styles.trail} />
        <svg viewBox="0 0 40 92">
          <path className={styles.flame} d="M14 70 Q20 96 26 70 Z" />
          <path className={styles.fin} d="M12 52 L3 70 L12 66 Z M28 52 L37 70 L28 66 Z" />
          <path className={styles.body} d="M20 2 C31 14 30 40 28 68 L12 68 C10 40 9 14 20 2 Z" />
          <circle className={styles.window} cx="20" cy="30" r="5" />
        </svg>
      </div>
    </div>
  );
}
