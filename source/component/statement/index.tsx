"use client";
import { ScrollWords } from "@sharadox/web-library/animation/scroll-word";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import type { StatementProperties } from "@sharadox/sharadox-web-library/component/statement/type";
import styles from "./index.module.scss";

/** A large sentence that lights up word by word as it scrolls through the viewport. */
export function Statement({ text }: StatementProperties) {
  return (
    <Section className={styles.wrapper} crosses={false}>
      <ScrollWords text={text} className={styles.statement} />
    </Section>
  );
}
