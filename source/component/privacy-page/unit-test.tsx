import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { installBrowserEnvironment } from "@sharadox/test-web-library/browser-environment";
import { Footer } from "@sharadox/sharadox-web-library/component/footer";
import { PrivacyPage } from "@sharadox/sharadox-web-library/component/privacy-page";

// The footer's language links switch with the app router.
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: () => {} }) }));

beforeEach(() => installBrowserEnvironment());
afterEach(cleanup);

test.each([
  ["en", "Privacy Policy", "Proton: hosts the mailbox the messages arrive in (Switzerland)"],
  ["pt", "Política de Privacidade", "Proton: aloja a caixa de correio onde chegam as mensagens (Suíça)"],
] as const)("shows the policy in %s", (locale, title, recipient) => {
  render(<PrivacyPage locale={locale} />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(title);
  expect(document.body.textContent).toContain(recipient);
  expect(document.body.textContent).toContain("contact@sharadox.com");
});

test("the footer marks the privacy policy as the current page there", () => {
  render(<Footer locale="en" path="/privacy" />);
  expect(screen.getByRole("link", { name: "Privacy Policy" }).getAttribute("aria-current")).toBe("page");
  expect(screen.getByRole("link", { name: "License" }).getAttribute("aria-current")).toBeNull();
});
