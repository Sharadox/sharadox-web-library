import styles from "../index.module.scss";
import type { ToggleProperties } from "@sharadox/sharadox-web-library/component/consent/toggle/type";

/** One cookie category with its on/off switch. */
export function Toggle({ title, text, checked, locked, lockedLabel, onChange }: ToggleProperties) {
  return (
    <label className={styles.category}>
      <span className={styles.categoryCopy}>
        <b>{title}</b>
        <span>{text}</span>
      </span>
      {locked && <span className={`${styles.always} monospace`}>{lockedLabel}</span>}
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={locked}
        onChange={(event) => onChange(event.target.checked)}
        className={styles.switch}
      />
    </label>
  );
}
