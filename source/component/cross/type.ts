export interface CrossProperties {
  /** Which corner of the positioned parent the cross sits on (its center on the corner). */
  corner: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}
