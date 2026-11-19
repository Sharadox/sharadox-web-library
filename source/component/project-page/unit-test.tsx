import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { installBrowserEnvironment } from "@sharadox/test-web-library/browser-environment";
import { ProjectPage } from "@sharadox/sharadox-web-library/component/project-page";
import { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";

beforeEach(() => installBrowserEnvironment());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

const project = PORTFOLIO.projects[0];

test("opens with the story, then numbers the chapters it is given, live, and ends with the site and the way back", () => {
  render(
    <ProjectPage
      project={project}
      locale="en"
      chapters={{ hero: <p>The hero, live</p>, booking: <p>The form, live</p> }}
    />,
  );
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Luis Pires DecorMade by hand, now online.");
  expect(screen.getByText(/nothing is a picture/)).toBeDefined();
  expect(screen.getByText("Portfolio · 17 November 2026")).toBeDefined();
  expect(screen.getAllByRole("listitem")).toHaveLength(6);
  // Only the chapters given are shown, numbered in turn.
  const chapters = screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent);
  expect(chapters).toEqual(["A first screen in 3D", "Booking a visit", "See it all on its own site."]);
  expect(screen.getByText("02")).toBeDefined();
  expect(screen.getByText("The hero, live")).toBeDefined();
  expect(screen.getAllByText("Live · luispiresdecor.com")).toHaveLength(2);
  expect(screen.getByRole("link", { name: "Visit luispiresdecor.com" }).getAttribute("href")).toBe(
    "https://luispiresdecor.com",
  );
  expect(screen.getByRole("link", { name: "Back to the Portfolio" }).getAttribute("href")).toBe("/en#portfolio");
});

test("speaks Portuguese", () => {
  render(<ProjectPage project={project} locale="pt" chapters={{ work: <p>O trabalho</p> }} />);
  expect(screen.getByRole("heading", { name: "O trabalho, numa parede editorial" })).toBeDefined();
  expect(screen.getByText("Ao vivo · luispiresdecor.com")).toBeDefined();
  expect(screen.getByRole("link", { name: "Visitar luispiresdecor.com" })).toBeDefined();
});
