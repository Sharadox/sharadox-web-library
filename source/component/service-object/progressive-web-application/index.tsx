import type { CSSProperties } from "react";
import { Cuboid } from "@sharadox/sharadox-web-library/component/service-object/cuboid";
import styles from "./index.module.scss";

/** The same app on every screen: a header, a picture and two tiles. */
function Screen() {
  return (
    <span className={styles.app}>
      <i className={styles.header} />
      <i className={styles.picture} />
      <i className={styles.tile} />
      <i className={styles.tile} />
    </span>
  );
}

/** Where each device sits around the codebase, as the packet that reaches it flies there. */
const DEVICES = [
  { kind: "computer", x: 0, y: -50, z: -110 },
  { kind: "tablet", x: -148, y: 14, z: -6 },
  { kind: "phone", x: 148, y: 26, z: 4 },
] as const;

/**
 * Progressive web applications: one codebase in the middle sends the same app to a computer, a tablet and a phone at
 * once, and every screen lights up together. Built once, it runs everywhere.
 */
export function ProgressiveWebApplication() {
  return (
    <div className={styles.object}>
      <Cuboid
        className={styles.codebase}
        front={
          <span className={styles.code}>
            <i />
            <i />
            <i />
          </span>
        }
      />
      {DEVICES.map((device) => (
        <div
          key={device.kind}
          className={styles.place}
          style={{ transform: `translate3d(${device.x}px, ${device.y}px, ${device.z}px)` }}
        >
          <div className={styles.device} data-kind={device.kind}>
            <Screen />
          </div>
          {device.kind === "computer" && <span className={styles.stand} />}
        </div>
      ))}
      {DEVICES.map((device) => (
        <span
          key={device.kind}
          className={styles.packet}
          style={
            {
              "--to-x": `${device.x}px`,
              "--to-y": `${device.y}px`,
              "--to-z": `${device.z}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
