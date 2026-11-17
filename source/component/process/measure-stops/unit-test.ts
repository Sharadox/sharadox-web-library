import { expect, test } from "vitest";
import { measureStops } from "@sharadox/sharadox-web-library/component/process/measure-stops";

/** A line and its dots, each at the given box. */
function layout(line: DOMRectInit, dots: DOMRectInit[]) {
  const parent = document.createElement("div");
  const element = document.createElement("div");
  element.getBoundingClientRect = () => DOMRect.fromRect(line);
  parent.append(element);
  for (const box of dots) {
    const dot = document.createElement("span");
    dot.setAttribute("data-dot", "");
    dot.getBoundingClientRect = () => DOMRect.fromRect(box);
    parent.append(dot);
  }
  return element;
}

test("finds each dot's place across a wide line, from its center", () => {
  const line = layout({ x: 100, y: 10, width: 1000, height: 1 }, [
    { x: 100, y: 5, width: 10, height: 10 },
    { x: 355, y: 5, width: 10, height: 10 },
    { x: 1200, y: 5, width: 10, height: 10 },
  ]);
  expect(measureStops(line)).toEqual([0.005, 0.26, 1]);
});

test("finds each dot's place down a tall line, as on phones", () => {
  const line = layout({ x: 5, y: 0, width: 1, height: 800 }, [
    { x: 0, y: -20, width: 10, height: 10 },
    { x: 0, y: 395, width: 10, height: 10 },
  ]);
  expect(measureStops(line)).toEqual([0, 0.5]);
});

test("has nothing to say while the line has no size", () => {
  expect(measureStops(layout({ x: 0, y: 0, width: 0, height: 0 }, []))).toBeNull();
});
