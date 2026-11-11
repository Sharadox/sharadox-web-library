import { classNames } from "@sharadox/web-library/class-name";
import styles from "./index.module.scss";
import type { CrossProperties } from "@sharadox/sharadox-web-library/component/cross/type";

/** The "+" that marks where grid lines meet, centred on a corner of its positioned parent. */
export function Cross({ corner, className }: CrossProperties) {
  return <span className={classNames(styles.cross, styles[corner], className)} aria-hidden />;
}
