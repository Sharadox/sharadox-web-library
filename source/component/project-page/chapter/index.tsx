import { Reveal } from "@sharadox/animation-web-library/reveal";
import { Icon } from "@sharadox/icon-web-library/icon";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import styles from "./index.module.scss";
import type { ChapterProperties } from "@sharadox/sharadox-web-library/component/project-page/chapter/type";

/**
 * One part of a project we're proud of: its number and name, what it is, and a few details of how it works, then the
 * website's own component in a window running across the frame, a live dot and the site's address over it.
 */
export function Chapter({ number, title, text, points, detailsLabel, live, children }: ChapterProperties) {
  return (
    <Section padded={false}>
      <Reveal className={styles.copy}>
        <span className={`monospace ${styles.number}`}>{String(number).padStart(2, "0")}</span>
        <h2>{title}</h2>
        <div className={styles.about}>
          <p>{text}</p>
          <div className={styles.details}>
            <span className="monospace">{detailsLabel}</span>
            <ul>
              {points.map((point) => (
                <li key={point}>
                  <Icon name="check" strokeWidth={1.6} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
