import { classNames } from "@sharadox/web-library/class-name";
import styles from "./index.module.scss";
import type { CuboidProperties } from "@sharadox/sharadox-web-library/component/service-object/cuboid/type";

/**
 * A solid box in CSS 3D, centered where it is placed: six faces in the style's colors. Size it with `--width`,
 * `--height` and `--depth` (lengths) in `className`, which can also move it with `transform`. `front` and `top` are
 * drawn on those faces.
 *
 * @example
 * <Cuboid className={styles.slab} top={<span className={styles.glow} />} />
 */
export function Cuboid({ className, front, top }: CuboidProperties) {
  return (
    <div className={classNames(styles.cuboid, className)}>
      <div className={classNames(styles.face, styles.front)}>{front}</div>
      <div className={classNames(styles.face, styles.back)} />
      <div className={classNames(styles.face, styles.right)} />
      <div className={classNames(styles.face, styles.left)} />
      <div className={classNames(styles.face, styles.top)}>{top}</div>
      <div className={classNames(styles.face, styles.bottom)} />
    </div>
  );
}
