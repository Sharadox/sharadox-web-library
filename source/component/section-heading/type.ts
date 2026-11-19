export interface SectionHeadProperties {
  eyebrow: string;
  /** The title; a line break ("\n") in it is kept, and then it isn't narrowed. */
  title: string;
  /** A sentence or two under the title. */
  text?: string;
}
