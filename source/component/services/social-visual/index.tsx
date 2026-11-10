"use client";
import { useCountUp } from "@sharadox/web-library/animation/count-up";
import { useInView } from "@sharadox/web-library/animation/in-view";
import { languageTag } from "@sharadox/web-library/internationalization/locale";
import { translate } from "@sharadox/web-library/internationalization/translate";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import styles from "./index.module.scss";
import type { SocialVisualProperties } from "@sharadox/sharadox-web-library/component/services/social-visual/type";

const LINE = "M0 86 C 30 84, 46 74, 70 70 S 112 66, 132 52 S 170 40, 196 30 S 232 14, 260 8";
const POSTS = Array.from({ length: 9 }, (_, index) => index);

/** A growth chart drawing itself as the follower count climbs, beside a feed of posts filling in, in 3D. */
export function SocialVisual({ locale }: SocialVisualProperties) {
  const [container, on] = useInView<HTMLDivElement>();
  const followers = useCountUp(12480, on, 2200);
  return (
    <div ref={container} className={[styles.visual, on && styles.on].filter(Boolean).join(" ")} aria-hidden>
      <div className={styles.feed}>
        {POSTS.map((post) => (
          <span key={post} style={{ animationDelay: `${0.2 + post * 0.09}s` }} />
        ))}
      </div>
      <div className={styles.panel}>
        <div className={styles.header}>
          <span className={`${styles.label} monospace`}>{translate(SERVICES.visual.followers, locale)}</span>
          <span className={`${styles.growth} monospace`}>+38%</span>
        </div>
        <span className={styles.count}>{followers.toLocaleString(languageTag(locale))}</span>
        <svg viewBox="0 0 260 96" className={styles.chart}>
          <defs>
            <linearGradient id="social-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="var(--foreground)" stopOpacity="0.22" />
              <stop offset="1" stopColor="var(--foreground)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[24, 48, 72].map((y) => (
            <line key={y} x1="0" x2="260" y1={y} y2={y} className={styles.gridLine} />
          ))}
          <path d={`${LINE} L 260 96 L 0 96 Z`} className={styles.area} fill="url(#social-area)" />
          <path d={LINE} className={styles.line} pathLength={1} />
          <circle cx="260" cy="8" r="3.5" className={styles.dot} />
        </svg>
      </div>
    </div>
  );
}
