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
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "Luis Pires Decor Website & RebrandingA craft of decades, now easy to find.",
  );
  expect(screen.getByText(/AI assistants/)).toBeDefined();
  // It says what follows: a few parts, each explained, then live.
  expect(screen.getByText(/A few of the parts we're proudest of/)).toBeDefined();
  expect(screen.getByText("Portfolio · 17 November 2026")).toBeDefined();
  // The six services, and how each chapter works (three points for the hero, four for the form).
  expect(screen.getAllByRole("listitem")).toHaveLength(6 + 3 + 4);
  expect(screen.getAllByText("How it works")).toHaveLength(2);
  expect(screen.getByText(/sending only tells you it's a demo/)).toBeDefined();
  // Only the chapters given are shown, numbered in turn.
  const chapters = screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent);
  expect(chapters).toEqual(["The monogram, in real 3D", "Booking a visit", "See it live"]);
  expect(screen.getByText("02")).toBeDefined();
  expect(screen.getByText("The hero, live")).toBeDefined();
  expect(screen.getAllByText("Live · luispiresdecor.com")).toHaveLength(2);
  const visit = screen.getByRole("link", { name: "Visit luispiresdecor.com" });
  expect(visit.getAttribute("href")).toBe("https://luispiresdecor.com");
  expect(visit.getAttribute("target")).toBe("_blank");
  expect(screen.getByRole("link", { name: "Back to the Portfolio" }).getAttribute("href")).toBe(
    "/en#see-luis-pires-decor-website-and-rebranding",
  );
});

test("speaks Portuguese", () => {
  render(<ProjectPage project={project} locale="pt" chapters={{ work: <p>O trabalho</p> }} />);
  expect(screen.getByRole("heading", { name: "O trabalho, numa parede editorial" })).toBeDefined();
  expect(screen.getByText("Ao vivo · luispiresdecor.com")).toBeDefined();
  expect(screen.getByText("Como funciona")).toBeDefined();
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "Luis Pires Decor Website & RebrandingUm ofício de décadas, agora fácil de encontrar.",
  );
  expect(screen.getByRole("heading", { level: 2, name: "Veja-o ao vivo" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Visitar luispiresdecor.com" })).toBeDefined();
});
