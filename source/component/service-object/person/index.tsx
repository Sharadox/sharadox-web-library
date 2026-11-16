import { classNames } from "@sharadox/web-library/class-name";
import styles from "./index.module.scss";
import type { PersonProperties } from "@sharadox/sharadox-web-library/component/service-object/person/type";

/**
 * A person, flat and facing out: a head over a pair of shoulders, centered where it is placed, in the style's colors.
 * Size it with `--size` (its width) and tint it with `--person` (a color) in `className`.
 *
 * @example
 * <Person className={styles.client} />
 */
export function Person({ className }: PersonProperties) {
  return <span className={classNames(styles.person, className)} />;
}
