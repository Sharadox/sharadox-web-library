import type { ReactNode } from "react";

export interface ChapterProperties {
  /** Its place on the page, shown as "01". */
  number: number;
  title: string;
  text: string;
  /** The label over the live part ("Live · luispiresdecor.com"). */
  live: string;
  children?: ReactNode;
}
