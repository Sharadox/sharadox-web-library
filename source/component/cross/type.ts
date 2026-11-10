export interface CrossProperties {
  /** Which corner of the positioned parent the cross sits on (its centre on the corner). */
  corner: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}
