import type { FeedStage } from "@sharadox/sharadox-web-library/component/about/feed/script/type";

/** Waits, unless the script is stopped first: then it throws, ending the script where it is. */
export const pause = (milliseconds: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timer = setTimeout(resolve, milliseconds);
    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(signal.reason);
    });
  });

/**
 * The panel's little film, over and over until stopped: the activity log fills one entry at a time and the pointer
 * hovers one to read its detail; it clicks Project, reads the budget, ticks the next task (the progress goes up);
 * it clicks Client, reads the paid share and a past project; then it clicks Activity, and it starts again.
 *
 * @example
 * const stop = new AbortController();
 * playFeed(stage, 6, stop.signal).catch(() => {});
 */
export async function playFeed(stage: FeedStage, events: number, signal: AbortSignal) {
  const wait = (milliseconds: number) => pause(milliseconds, signal);
  const read = async (target: string, milliseconds = 1800) => {
    stage.point(target);
    await wait(850);
    stage.tip(target);
    await wait(milliseconds);
    stage.tip(null);
  };
  const click = async (target: string, then: () => void) => {
    stage.point(target);
    await wait(850);
    stage.press(true);
    then();
    await wait(220);
    stage.press(false);
  };
  for (;;) {
    stage.tab(0);
    stage.tick(false);
    stage.show(0);
    stage.point(null);
    await wait(500);
    for (let count = 1; count <= events; count++) {
      stage.show(count);
      await wait(1000);
    }
    await read("event-2");
    await click("tab-1", () => stage.tab(1));
    await wait(900);
    await read("budget");
    await click("task-3", () => stage.tick(true));
    await wait(1500);
    await click("tab-2", () => stage.tab(2));
    await wait(900);
    await read("donut");
    await read("project-0", 1500);
    await read("tasks", 1500);
    await click("tab-0", () => stage.tab(0));
    await wait(400);
  }
}
