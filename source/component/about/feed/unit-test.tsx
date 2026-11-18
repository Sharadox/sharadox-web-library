import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { installBrowserEnvironment, reportIntersection } from "@sharadox/test-web-library/browser-environment";
import { Feed } from "@sharadox/sharadox-web-library/component/about/feed";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

const panel = () => document.querySelector<HTMLElement>("[data-target='tab-0']")!.closest("[aria-hidden]")!;
const activeTab = () => document.querySelector("[data-target^='tab-'][data-active]")!.textContent;
const tip = () => [...panel().children].find((element) => element.className.includes("tip"))?.textContent;
const later = (milliseconds: number) => act(() => vi.advanceTimersByTimeAsync(milliseconds));

beforeEach(() => vi.useFakeTimers());

test("waits to be seen, then plays: the log, a click on Project and a tick, a click on Client, and back", async () => {
  installBrowserEnvironment();
  render(<Feed locale="en" />);
  expect(panel().hasAttribute("data-playing")).toBe(false);
  expect(screen.getAllByRole("listitem", { hidden: true })[0]!.textContent).toContain("Ana paid €7,500");
  await act(async () => reportIntersection());
  expect(panel().hasAttribute("data-playing")).toBe(true);
  await later(550);
  expect(document.querySelectorAll("[data-target^='event-']")).toHaveLength(1);
  await later(6000);
  expect(document.querySelectorAll("[data-target^='event-']")).toHaveLength(6);
  await later(900);
  expect(tip()).toBe("Arrives Thursday");
  expect(document.querySelector("[data-target='event-2']")!.hasAttribute("data-pointed")).toBe(true);
  await later(3000);
  expect(activeTab()).toBe("Project");
  expect(screen.getByText("68%")).toBeDefined();
  await later(1800);
  expect(tip()).toBe("68% paid · €5,900");
  await later(3000);
  expect(screen.getByText("72%")).toBeDefined();
  expect(screen.getByText("18/25 tasks")).toBeDefined();
  await later(2600);
  expect(activeTab()).toBe("Client");
  await later(1800);
  expect(tip()).toBe("Paid €36,900");
  await later(2700);
  expect(tip()).toBe("Bathroom 2024 · €14,900");
  await later(2400);
  expect(tip()).toBe("64/71 done");
  await later(3000);
  expect(activeTab()).toBe("Activity");
  // Out of view it stops, and rests on the whole log.
  await act(async () => reportIntersection(false));
  expect(panel().hasAttribute("data-playing")).toBe(false);
  expect(document.querySelectorAll("[data-target^='event-']")).toHaveLength(6);
});

test("with less motion asked for, it rests on the whole log, in Portuguese too", async () => {
  installBrowserEnvironment({ reducedMotion: true });
  render(<Feed locale="pt" />);
  await act(async () => reportIntersection());
  expect(panel().hasAttribute("data-playing")).toBe(false);
  expect(activeTab()).toBe("Atividade");
  expect(screen.getByText("O Rui encomendou a bancada de carvalho")).toBeDefined();
  expect(screen.getByText("12 500 €")).toBeDefined();
});
