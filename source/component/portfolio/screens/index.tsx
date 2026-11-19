import Image from "next/image";
import styles from "./index.module.scss";
import type { ScreensProperties } from "@sharadox/sharadox-web-library/component/portfolio/screens/type";

/**
 * The project's first screen, on a computer and on a phone: a browser window, slightly turned, with a phone standing
 * in front of it; both face the visitor under the pointer.
 */
export function Screens({ project, label, priority }: ScreensProperties) {
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
            sizes="(min-width: 960px) 760px, 100vw"
            priority={priority}
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
