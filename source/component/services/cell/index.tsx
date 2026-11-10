"use client";
import { useSpotlight } from "@sharadox/web-library/pointer/spotlight";
import { useTilt } from "@sharadox/web-library/pointer/tilt";
import styles from "./index.module.scss";
import type { CellProperties } from "@sharadox/sharadox-web-library/component/services/cell/type";

/**
 * One discipline in the services grid: its live visual (which tilts in 3D towards the pointer), number, kinds and
 * copy, with a light that follows the pointer.
 */
export function Cell({ id, visual, number, kinds, title, lead, text, className }: CellProperties) {
  const spotlight = useSpotlight<HTMLElement>();
  const tilt = useTilt<HTMLDivElement>(5);
  return (
    <article id={id} ref={spotlight} className={[styles.cell, className].filter(Boolean).join(" ")}>
      <div ref={tilt} className={styles.visual}>
        <div className={styles.stage}>{visual}</div>
      </div>
      <div className={styles.copy}>
        <div className={styles.meta}>
          <span className={`monospace ${styles.number}`}>{number}</span>
          <ul className={styles.kinds}>
            {kinds.map((kind) => (
              <li key={kind} className="monospace">
                {kind}
              </li>
            ))}
          </ul>
        </div>
        <h3>{title}</h3>
        <p className={styles.lead}>{lead}</p>
        <p>{text}</p>
      </div>
    </article>
  );
}
