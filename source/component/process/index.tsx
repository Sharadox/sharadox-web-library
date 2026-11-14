"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type CSSProperties } from "react";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { PROCESS } from "@sharadox/sharadox-web-library/content/process";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import { Step } from "@sharadox/sharadox-web-library/component/process/step";
import type { ProcessProperties } from "@sharadox/sharadox-web-library/component/process/type";

/** Four steps on a line that draws itself as you scroll through the section. */
export function Process({ locale }: ProcessProperties) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start 75%", "end 55%"] });
  // How much of the line is drawn: across on wide screens, down on phones (see the styles).
  const drawn = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const steps = PROCESS.steps;
  return (
    <Section id={SECTION.process.id}>
      <SectionHeading eyebrow={translate(PROCESS.eyebrow, locale)} title={translate(PROCESS.title, locale)} />
      <div ref={container} className={styles.process}>
        <div className={styles.line} aria-hidden>
          <motion.span style={{ "--drawn": drawn } as CSSProperties} />
        </div>
        {steps.map((step, index) => (
          <Step
            key={step.number}
            index={index}
            count={steps.length}
            progress={scrollYProgress}
            number={step.number}
            title={translate(step.title, locale)}
            text={translate(step.text, locale)}
          />
        ))}
      </div>
    </Section>
  );
}
