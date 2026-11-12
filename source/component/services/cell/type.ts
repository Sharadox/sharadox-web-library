import type { ReactNode } from "react";

export interface CellProperties {
  /** Anchor id, so the service index can jump here. */
  id: string;
  /** The live visual on top. */
  visual: ReactNode;
  number: string;
  kinds: readonly string[];
  title: string;
  lead: string;
  text: string;
  /** Calls to action under the copy. */
  actions?: ReactNode;
  className?: string;
}
