import type { MotionValue } from "motion/react";

export interface StepProperties {
  /** How far along the line this step's dot sits, from 0 (its start) to 1 (its end). */
  at: number;
  progress: MotionValue<number>;
  number: string;
  title: string;
  text: string;
}
