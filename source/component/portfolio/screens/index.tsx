import Image from "next/image";
import styles from "./index.module.scss";
import type { ScreensProperties } from "@sharadox/sharadox-web-library/component/portfolio/screens/type";

/**
 * The project live, on a computer and on a phone: a browser window and a phone in front of it, each scrolling slowly
 * through the whole page and back (paused while pointed at, and still for visitors who prefer less motion).
 */
export function Screens({ project, label }: ScreensProperties) {
  const { computer, phone } = project.screens;
  const domain = new URL(project.url).host;
  return (
    <div className={styles.stage} role="img" aria-label={label}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.browser} aria-hidden>
        <div className={styles.bar}>
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={`monospace ${styles.address}`}>{domain}</span>
        </div>
        <div className={styles.viewport}>
          <Image
            src={computer.src}
            width={computer.width}
            height={computer.height}
            alt=""
            sizes="(min-width: 960px) 720px, 100vw"
            className={styles.page}
          />
        </div>
      </div>
      <div className={styles.phone} aria-hidden>
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
  );
}
