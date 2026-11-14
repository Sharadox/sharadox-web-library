import styles from "./index.module.scss";
import type { ChipProperties } from "@sharadox/sharadox-web-library/component/contact/form/chip/type";

/** One "What do you need?" choice: a pill checkbox that fills when ticked and glows when a button elsewhere ticks it. */
export function Chip({ need, label }: ChipProperties) {
  return (
    <label className={styles.chip}>
      <input type="checkbox" name="need" value={need} />
      <span>{label}</span>
    </label>
  );
}
