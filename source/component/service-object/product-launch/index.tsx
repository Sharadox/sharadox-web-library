import type { CSSProperties } from "react";
import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** The countdown, one number a second, each flowing into the next. */
const COUNTDOWN = ["3", "2", "1"];
/** The rocket's round body is made of this many flat panels around its axis, like a lathe. */
const SIDES = 8;
/** How far each panel stands from the axis, and its width, so the panels close into a ring. */
const APOTHEM = 13;
const PANEL = 2 * APOTHEM * Math.tan(Math.PI / SIDES);
/** The nose cone: its height, and the length and lean of each of its panels. */
const NOSE = 26;
const SLANT = Math.hypot(NOSE, APOTHEM);
const LEAN = (Math.atan(APOTHEM / NOSE) * 180) / Math.PI;
/** Fins around the base, evenly spaced. */
const FINS = 4;
/** Puffs of smoke spreading over the pad at lift-off, all the way round. */
const SMOKE = 8;

/** How lit a panel facing this way is (a light from the front left), as a share of the foreground color. */
const light = (angle: number) => `${Math.round(18 + 30 * (0.5 + 0.5 * Math.cos(((angle + 40) * Math.PI) / 180)))}%`;
const sides = Array.from({ length: SIDES }, (_, side) => (360 / SIDES) * side);

/**
 * Product launches: the countdown and the lift-off, in 3D. Numbers count down from 3, each flowing smoothly into the
 * next inside a ring that runs out, beside a round rocket (a body of panels, a nose cone, fins and a window) turning
 * slowly on its pad. At zero its engine lights, smoke rolls out all around the pad and the rocket rises, faster and
 * faster, out of sight, before the next one stands ready. With reduced motion, the rocket stands on its pad.
 */
export function ProductLaunch() {
  return (
    <div className={styles.object}>
      <Cuboid className={styles.pad} />
      <div className={styles.smoke}>
        {Array.from({ length: SMOKE }, (_, puff) => (
          <i key={puff} style={{ "--angle": `${(360 / SMOKE) * puff}deg` } as CSSProperties} />
        ))}
      </div>
      <div className={styles.rocket}>
        <div className={styles.spin}>
          {sides.map((angle) => (
            <span
              key={angle}
              className={styles.panel}
              style={
                {
                  left: -PANEL / 2,
                  width: PANEL,
                  transform: `rotateY(${angle}deg) translateZ(${APOTHEM}px)`,
                  "--light": light(angle),
                } as CSSProperties
              }
            >
              {angle === 0 && <i className={styles.window} />}
            </span>
          ))}
          {sides.map((angle) => (
            <span
              key={angle}
              className={styles.nose}
              style={
                {
                  left: -PANEL / 2,
                  width: PANEL,
                  height: SLANT,
                  transform: `rotateY(${angle}deg) translateZ(${APOTHEM}px) rotateX(${LEAN}deg)`,
                  "--light": light(angle),
                } as CSSProperties
              }
            />
          ))}
          {Array.from({ length: FINS }, (_, fin) => (
            <span
              key={fin}
              className={styles.fin}
              style={{ transform: `rotateY(${(360 / FINS) * fin + 45}deg) translateX(${APOTHEM + 8}px)` }}
            />
          ))}
          <span className={styles.flame} />
          <span className={styles.flame} style={{ transform: "rotateY(90deg)" }} />
        </div>
        <span className={styles.trail} />
      </div>
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
    </div>
  );
}
