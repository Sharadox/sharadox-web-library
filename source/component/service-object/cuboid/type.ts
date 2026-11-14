import type { ReactNode } from "react";

export interface CuboidProperties {
  /** Sets `--width`, `--height`, `--depth`, and may move it with `transform`. */
  className?: string;
  /** Drawn on the front face. */
  front?: ReactNode;
  /** Drawn on the top face. */
  top?: ReactNode;
}
