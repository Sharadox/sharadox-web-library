import { classNames } from "@sharadox/web-library/class-name";
import styles from "./index.module.scss";
import type { EyebrowProperties } from "@sharadox/sharadox-web-library/component/eyebrow/type";

/** Small uppercase monospace label above a heading. */
export function Eyebrow({ children, className }: EyebrowProperties) {
  return <p className={classNames(styles.eyebrow, "monospace", className)}>{children}</p>;
}
