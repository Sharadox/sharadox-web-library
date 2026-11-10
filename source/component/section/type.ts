import type { ReactNode } from "react";

export interface SectionProperties {
  id?: string;
  className?: string;
  /** Inner padding; off for sections whose cells run edge to edge. */
  padded?: boolean;
  /** "+" marks on the top corners, where the section's line meets the side rails. */
  crosses?: boolean;
  children?: ReactNode;
}
