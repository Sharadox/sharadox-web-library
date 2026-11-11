import { classNames } from "@sharadox/web-library/class-name";
import { Cross } from "@sharadox/sharadox-web-library/component/cross";
import styles from "./index.module.scss";
import type { SectionProperties } from "@sharadox/sharadox-web-library/component/section/type";

/**
 * A page section inside the grid frame: the side rails every section shares, a line on top that draws itself in,
 * and "+" marks where they meet.
 */
export function Section({ id, className, padded = true, crosses = true, children }: SectionProperties) {
  return (
    <section id={id} className={classNames(styles.section, padded && styles.padded, className)}>
      <span className={styles.line} aria-hidden />
      {crosses && (
        <>
          <Cross corner="top-left" />
          <Cross corner="top-right" />
        </>
      )}
      {children}
    </section>
  );
}
