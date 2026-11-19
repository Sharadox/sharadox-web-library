import { Reveal } from "@sharadox/animation-web-library/reveal";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import styles from "./index.module.scss";
import type { ChapterProperties } from "@sharadox/sharadox-web-library/component/project-page/chapter/type";

/**
 * One part of a project, live: its number and name beside what to try, then the website's own component in a window
 * running across the frame, a live dot and the site's address over it.
 */
export function Chapter({ number, title, text, live, children }: ChapterProperties) {
  return (
    <Section padded={false}>
      <Reveal className={styles.copy}>
        <span className={`monospace ${styles.number}`}>{String(number).padStart(2, "0")}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </Reveal>
      <div className={styles.window}>
        <div className={`monospace ${styles.bar}`}>
          <span className={styles.dots} aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.live}>
            <i aria-hidden />
            {live}
          </span>
        </div>
        <div className={styles.stage}>{children}</div>
      </div>
    </Section>
  );
}
