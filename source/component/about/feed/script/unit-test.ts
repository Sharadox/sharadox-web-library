import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { pause, playFeed } from "@sharadox/sharadox-web-library/component/about/feed/script";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

/** A stage that writes down every move, in order. */
const recorder = () => {
  const moves: string[] = [];
  const record = (name: string) => (value: unknown) => void moves.push(`${name} ${String(value)}`);
  return {
    moves,
    stage: {
      tab: record("tab"),
      show: record("show"),
      tick: record("tick"),
      point: record("point"),
      press: record("press"),
      tip: record("tip"),
    },
  };
};

test("plays the activity, the project and the client in turn, and starts again", async () => {
  const { moves, stage } = recorder();
  const stop = new AbortController();
  const played = playFeed(stage, 3, stop.signal).catch((reason: unknown) => reason);
  await vi.advanceTimersByTimeAsync(30_000);
  const round = moves.slice(0, moves.lastIndexOf("tab 0") + 1);
  expect(round.slice(0, 7)).toEqual(["tab 0", "tick false", "show 0", "point null", "show 1", "show 2", "show 3"]);
  expect(round).toEqual(
    expect.arrayContaining(["tip event-2", "tab 1", "tip budget", "tick true", "tab 2", "tip donut", "tip tasks"]),
  );
  // Each click presses and lets go.
  expect(round.filter((move) => move === "press true")).toHaveLength(4);
  expect(round.indexOf("tick true")).toBeGreaterThan(round.indexOf("tab 1"));
  expect(moves.filter((move) => move === "show 1").length).toBeGreaterThan(1);
  stop.abort("out of view");
  expect(await played).toBe("out of view");
});

test("a pause ends early, with the reason, when the script is stopped", async () => {
  const stop = new AbortController();
  const waiting = pause(5000, stop.signal).catch((reason: unknown) => reason);
  stop.abort("stopped");
  expect(await waiting).toBe("stopped");
  const finished = pause(10, new AbortController().signal);
  await vi.advanceTimersByTimeAsync(10);
  await expect(finished).resolves.toBeUndefined();
});
