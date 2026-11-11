"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@sharadox/animation-web-library/reveal";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { useTilt } from "@sharadox/pointer-web-library/tilt";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { SectionHeading } from "@sharadox/sharadox-web-library/component/section-heading";
import { Plate } from "@sharadox/sharadox-web-library/component/touchpoint/plate";
import { TOUCHPOINT } from "@sharadox/sharadox-web-library/content/touchpoint";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import styles from "./index.module.scss";
import type { TouchpointProperties } from "@sharadox/sharadox-web-library/component/touchpoint/type";

/**
 * "One brand. Every touchpoint.": the brand's layers stacked in 3D on one identity, separating as the section
 * scrolls through, and tilting towards the pointer.
 */
export function Touchpoint({ locale }: TouchpointProperties) {
  const container = useRef<HTMLDivElement>(null);
  const tilt = useTilt<HTMLDivElement>(6);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "center center"] });
  const spread = useTransform(scrollYProgress, [0, 1], [10, 52]);
  const turn = useTransform(scrollYProgress, [0, 1], [-52, -38]);
  return (
    <Section id={SECTION.touchpoints.id} className={styles.touchpoint}>
      <div className={styles.copy}>
        <SectionHeading eyebrow={translate(TOUCHPOINT.eyebrow, locale)} title={translate(TOUCHPOINT.title, locale)} />
        <Reveal delay={0.1}>
          <p className={styles.text}>{translate(TOUCHPOINT.text, locale)}</p>
        </Reveal>
        <ol className={styles.layers}>
          {[...TOUCHPOINT.layers].reverse().map((layer, index) => (
            <Reveal key={layer.key} delay={0.15 + index * 0.06} y={10} blur={0}>
              <li>
                <span className="monospace">{String(TOUCHPOINT.layers.length - index).padStart(2, "0")}</span>
                {layer[locale]}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
      <div ref={container} className={styles.stage} aria-hidden>
        <div ref={tilt} className={styles.tilt}>
          <motion.div className={styles.stack} style={{ "--spread": spread, "--turn": turn } as never}>
            {TOUCHPOINT.layers.map((layer, index) => (
              <Plate key={layer.key} layer={layer.key} label={layer[locale]} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
