import type { NeedKey } from "@sharadox/sharadox-web-library/content/contact";

/** The window event that asks the contact form to tick some choices. */
export const CONTACT_NEED_EVENT = "sharadox:contact-need";

/**
 * Asks the contact form to tick these choices (choices already ticked stay ticked), for buttons that lead to the
 * form, such as the ones on the service cards.
 *
 * @example
 * requestContactNeeds(["website"]);
 */
export function requestContactNeeds(needs: readonly NeedKey[]): void {
  dispatchEvent(new CustomEvent<readonly NeedKey[]>(CONTACT_NEED_EVENT, { detail: needs }));
}
