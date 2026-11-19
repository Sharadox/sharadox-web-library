import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { installBrowserEnvironment } from "@sharadox/test-web-library/browser-environment";
import { Portfolio } from "@sharadox/sharadox-web-library/component/portfolio";
import { launchDate } from "@sharadox/sharadox-web-library/component/portfolio/launch-date";
import { serviceName } from "@sharadox/sharadox-web-library/component/portfolio/service-name";

beforeEach(() => installBrowserEnvironment());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

test("shows each project's first screen, its details with the launch day, its services, and the way to its page", () => {
  render(<Portfolio locale="en" />);
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading.textContent).toBe("Work that\nspeaks for itself.");
  expect(heading.hasAttribute("data-lines")).toBe(true);
  expect(screen.getByText(/with what we made for it/)).toBeDefined();
  const project = screen.getByRole("article", { name: /Luis Pires Decor/ });
  expect(within(project).getByRole("img", { name: "Luis Pires Decor on a computer and on a phone" })).toBeDefined();
  expect(within(project).getAllByText("17 November 2026")).toHaveLength(2);
  expect(
    within(project)
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual(["Rebranding", "Branding Design", "Website", "Hosting", "Professional Email", "PWA"]);
  expect(within(project).getByRole("link", { name: "See the Project" }).getAttribute("href")).toBe(
    "/en/portfolio/luis-pires-decor-website-and-rebranding",
  );
  expect(screen.queryByRole("link", { name: /Visit/ })).toBeNull();
});

test("speaks Portuguese, and names an unknown service by its key", () => {
  render(<Portfolio locale="pt" />);
  expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("Trabalho que\nfala por si.");
  expect(screen.getAllByText("17 de novembro de 2026")).toHaveLength(2);
  expect(screen.getByText("Design de Marca")).toBeDefined();
  expect(serviceName("something-else", "en")).toBe("something-else");
  expect(launchDate("2027-01-04", "en")).toBe("4 January 2027");
});
