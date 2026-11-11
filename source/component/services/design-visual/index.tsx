"use client";
import { classNames } from "@sharadox/web-library/class-name";
import { useInView } from "@sharadox/animation-web-library/in-view";
import styles from "./index.module.scss";

const SWATCHES = ["var(--foreground)", "var(--foreground-2)", "var(--foreground-3)", "var(--surface)"];

/**
 * Brand assets floating in 3D: a logo being constructed on its guides, the color palette and a type specimen.
 */
export function DesignVisual() {
  const [container, on] = useInView<HTMLDivElement>();
  return (
    <div ref={container} className={classNames(styles.visual, on && styles.on)} aria-hidden>
      <div className={styles.scene}>
        <div className={`${styles.card} ${styles.palette}`}>
          {SWATCHES.map((color, index) => (
            <span key={color} style={{ background: color, animationDelay: `${0.3 + index * 0.1}s` }} />
          ))}
        </div>
        <div className={`${styles.card} ${styles.type}`}>
          <span className={styles.specimen}>Aa</span>
          <span className={`${styles.caption} monospace`}>Geist</span>
          <span className={`${styles.glyphs} monospace`}>Rr Gg 01</span>
        </div>
        <div className={`${styles.card} ${styles.mark}`}>
          <svg viewBox="0 0 120 120">
            <g className={styles.guides}>
              <line x1="0" y1="60" x2="120" y2="60" />
              <line x1="60" y1="0" x2="60" y2="120" />
              <circle cx="60" cy="60" r="46" />
              <circle cx="60" cy="60" r="28" />
              <line x1="14" y1="14" x2="106" y2="106" />
              <line x1="106" y1="14" x2="14" y2="106" />
            </g>
            <circle cx="60" cy="60" r="34" className={styles.outer} pathLength={1} />
            <ellipse cx="60" cy="60" rx="18" ry="34" className={styles.inner} pathLength={1} />
            {[
              [60, 26],
              [94, 60],
              [60, 94],
              [26, 60],
              [42, 60],
              [78, 60],
            ].map(([x, y]) => (
              <rect key={`${x}-${y}`} x={x! - 2.5} y={y! - 2.5} width="5" height="5" className={styles.anchor} />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
