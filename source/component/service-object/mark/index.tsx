import { classNames } from "@sharadox/web-library/class-name";
import styles from "./index.module.scss";
import type { MarkProperties } from "@sharadox/sharadox-web-library/component/service-object/mark/type";

/**
 * A client's brand mark as the services draw it: a solid diamond in a ring, centered where it is placed. Size it with
 * `--size` in `className`, which can also move and animate it.
 *
 * @example
 * <Mark className={styles.mark} />
 */
export function Mark({ className }: MarkProperties) {
  return <span className={classNames(styles.mark, className)} />;
}
