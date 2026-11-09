"use client";
import { ScrollWords } from "@sharadox/web-library/animation/scroll-word";
import type { StatementProperties } from "@sharadox/sharadox-web-library/component/statement/type";
import styles from "./index.module.scss";

/** A large sentence that lights up word by word as it scrolls through the viewport. */
export function Statement({ text }: StatementProperties) {
  return (
    <section className={styles.wrapper}>
      <ScrollWords text={text} className={styles.statement} />
    </section>
  );
}
