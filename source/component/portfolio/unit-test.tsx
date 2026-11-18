import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { installBrowserEnvironment } from "@sharadox/test-web-library/browser-environment";

// A second, made-up project, so the filters and the order have something to choose between.
vi.mock("@sharadox/sharadox-web-library/content/portfolio", async (original) => {
  const { PORTFOLIO } = await original<typeof import("@sharadox/sharadox-web-library/content/portfolio")>();
  const second = {
    ...PORTFOLIO.projects[0],
    key: "atelier",
    client: "Atelier Azul",
    name: { en: "A brand for the coast.", pt: "Uma marca para a costa." },
    date: "2025-06-02",
    url: "https://atelier.example",
    services: ["branding", "website"],
  };
  return { PORTFOLIO: { ...PORTFOLIO, projects: [...PORTFOLIO.projects, second] } };
});
const { Portfolio } = await import("@sharadox/sharadox-web-library/component/portfolio");
const { filterOptions, selectProjects, serviceName } =
  await import("@sharadox/sharadox-web-library/component/portfolio/select-projects");
const { PORTFOLIO } = await import("@sharadox/sharadox-web-library/content/portfolio");

beforeEach(() => installBrowserEnvironment());
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

/** The projects' headings, in the order shown. */
const shown = () => screen.queryAllByRole("article").map((article) => within(article).getByRole("heading").textContent);
const select = (name: string, value: string) =>
  act(() => fireEvent.change(screen.getByRole("combobox", { name }), { target: { value } }));

test("shows each project live on a computer and a phone, with its story, details and services", () => {
  render(<Portfolio locale="en" />);
  const project = screen.getByRole("article", { name: /Luis Pires Decor/ });
  expect(within(project).getByRole("img", { name: "Luis Pires Decor on a computer and on a phone" })).toBeDefined();
  expect(within(project).getByText("luispiresdecor.com")).toBeDefined();
  expect(within(project).getAllByText("November 2026")).toHaveLength(2);
  expect(within(project).getByText("01")).toBeDefined();
  expect(
    within(project)
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual(["Website", "Hosting", "Professional Email", "PWA"]);
  expect(within(project).getByRole("link", { name: "Visit the Site" }).getAttribute("href")).toBe(
    "https://luispiresdecor.com",
  );
  expect(screen.getByText("2 projects")).toBeDefined();
});

test("filters by service, client and year, sorts four ways, and offers to show all when nothing matches", async () => {
  render(<Portfolio locale="en" />);
  await waitFor(() =>
    expect(shown()).toEqual(["Luis Pires DecorMade by hand, now online.", "Atelier AzulA brand for the coast."]),
  );
  const services = screen.getByRole("group", { name: "Service" });
  expect(
    within(services)
      .getAllByRole("button")
      .map((button) => button.textContent),
  ).toEqual(["All", "Website", "Hosting", "Professional Email", "PWA", "Branding"]);
  act(() => within(services).getByRole("button", { name: "Branding" }).click());
  expect(within(services).getByRole("button", { name: "Branding" }).getAttribute("aria-pressed")).toBe("true");
  await waitFor(() => expect(shown()).toEqual(["Atelier AzulA brand for the coast."]));
  expect(screen.getByText("1 project")).toBeDefined();
  act(() => within(services).getByRole("button", { name: "All" }).click());
  select("Sort", "oldest");
  expect(shown()[0]).toMatch(/^Atelier/);
  select("Sort", "name");
  expect(shown()[0]).toMatch(/^Atelier/);
  select("Sort", "client");
  expect(shown()[0]).toMatch(/^Atelier/);
  select("Year", "2026");
  await waitFor(() => expect(shown()).toEqual(["Luis Pires DecorMade by hand, now online."]));
  select("Client", "Atelier Azul");
  await waitFor(() => expect(shown()).toEqual([]));
  expect(screen.getByText("0 projects")).toBeDefined();
  act(() => screen.getByRole("button", { name: "Show all" }).click());
  await waitFor(() => expect(shown()).toHaveLength(2));
});

test("speaks Portuguese, with the services' Portuguese names", () => {
  render(<Portfolio locale="pt" />);
  expect(screen.getByRole("heading", { name: "Trabalho que fala por si." })).toBeDefined();
  expect(screen.getAllByText("novembro de 2026")).toHaveLength(2);
  expect(screen.getAllByText("Alojamento").length).toBeGreaterThan(0);
  expect(screen.getByRole("option", { name: "Projeto, de A a Z" })).toBeDefined();
});

test("selecting works on its own: options, filters and the fallback name", () => {
  expect(filterOptions(PORTFOLIO.projects)).toEqual({
    services: ["website", "hosting", "professional-email", "progressive-web-application", "branding"],
    clients: ["Atelier Azul", "Luis Pires Decor"],
    years: ["2026", "2025"],
  });
  const choice = { service: "hosting", client: "", year: "", sort: "newest" } as const;
  expect(selectProjects(PORTFOLIO.projects, choice, "pt").map((project) => project.key)).toEqual(["luis-pires-decor"]);
  expect(serviceName("something-else", "en")).toBe("something-else");
});
