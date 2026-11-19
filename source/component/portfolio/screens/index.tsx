"use client";
import Image from "next/image";
import { useParallax } from "@sharadox/pointer-web-library/parallax";
import styles from "./index.module.scss";
import type { ScreensProperties } from "@sharadox/sharadox-web-library/component/portfolio/screens/type";

/**
 * The project's first screen, on a computer and on a phone: a browser window, slightly turned, with a phone standing
 * in front of it. Under the pointer the whole scene turns to face it and follows it in depth: the phone, nearer,
 * moves more than the window, the glow behind moves the other way, and a soft glare slides across both screens. The
 * window keeps the screenshot's own proportions, so it is never taller than the page it shows.
 */
export function Screens({ project, label, priority }: ScreensProperties) {
  const { computer, phone } = project.screens;
  const domain = new URL(project.url).host;
  const stage = useParallax<HTMLDivElement>(0.08);
  return (
    <div ref={stage} className={styles.stage} role="img" aria-label={label}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.scene} aria-hidden>
        <div className={styles.browser}>
          <div className={styles.bar}>
            <span className={styles.dots}>
              <i />
              <i />
              <i />
            </span>
            <span className={`monospace ${styles.address}`}>{domain}</span>
          </div>
          <div className={styles.viewport} style={{ aspectRatio: `${computer.width} / ${computer.height}` }}>
            <Image
              src={computer.src}
              width={computer.width}
              height={computer.height}
              alt=""
              sizes="(min-width: 960px) 760px, 100vw"
              priority={priority}
              className={styles.page}
            />
          </div>
        </div>
        <div className={styles.phone}>
          <div className={styles.viewport}>
            <Image
              src={phone.src}
              width={phone.width}
              height={phone.height}
              alt=""
              sizes="220px"
              className={styles.page}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
