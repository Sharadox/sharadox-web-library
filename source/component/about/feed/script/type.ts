/** What the script moves on the stage. Targets are the `data-target` names of the things in the panel. */
export interface FeedStage {
  /** Shows the tab with this index. */
  tab: (index: number) => void;
  /** How many log entries have come in. */
  show: (count: number) => void;
  /** Whether the pointer has ticked the next task. */
  tick: (ticked: boolean) => void;
  /** Moves the pointer onto a target, or hides it. */
  point: (target: string | null) => void;
  /** Presses or releases the pointer's button. */
  press: (pressed: boolean) => void;
  /** Shows the label of a target, or hides it. */
  tip: (target: string | null) => void;
}
