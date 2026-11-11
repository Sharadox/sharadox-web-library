"use client";
import { useEffect, useState } from "react";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { classNames } from "@sharadox/web-library/class-name";
import styles from "./index.module.scss";
import type { MobileVisualProperties } from "@sharadox/sharadox-web-library/component/services/mobile-visual/type";

/** A phone with business notifications sliding in. */
export function MobileVisual({ locale }: MobileVisualProperties) {
  const items = SERVICES.notifications[locale];
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTick((current) => current + 1), 1800);
    return () => clearInterval(timer);
  }, []);
  const shown = [0, 1, 2].map((slot) => items[(tick + slot) % items.length]!);
  return (
    <div className={styles.visual} aria-hidden>
      <div className={styles.phone}>
        <div className={styles.notch} />
        <div className={`${styles.time} monospace`}>9:41</div>
        <div className={styles.notes}>
          {shown.map(([title, detail], slot) => (
            <div
              key={`${tick}-${slot}`}
              className={classNames(styles.note, slot === 1 && styles.note1, slot === 2 && styles.note2)}
            >
              <span className={styles.icon} />
              <span className={styles.text}>
                <b>{title}</b>
                <em>{detail}</em>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
