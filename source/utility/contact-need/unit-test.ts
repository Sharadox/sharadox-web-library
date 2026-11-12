// @vitest-environment happy-dom
import { expect, test, vi } from "vitest";
import { CONTACT_NEED_EVENT, requestContactNeeds } from "@sharadox/sharadox-web-library/utility/contact-need";

test("asks the contact form for choices through a window event", () => {
  const listener = vi.fn();
  addEventListener(CONTACT_NEED_EVENT, listener);
  requestContactNeeds(["website", "platform"]);
  expect((listener.mock.calls[0]![0] as CustomEvent).detail).toEqual(["website", "platform"]);
  removeEventListener(CONTACT_NEED_EVENT, listener);
});
