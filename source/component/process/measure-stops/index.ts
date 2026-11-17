/**
 * Where each dot sits along the line, from 0 to 1: across on wide screens, down on phones. The dots are the elements
 * marked `data-dot` beside the line, in its parent. Null where nothing has a size yet, so the steps fall back to even
 * spacing.
 *
 * @example
 * setStops(measureStops(line)); // [0, 0.26, 0.51, 0.77] across a four-column row
 */
export function measureStops(line: HTMLElement): number[] | null {
  const box = line.getBoundingClientRect();
  const across = box.width >= box.height;
  const length = across ? box.width : box.height;
  if (!length) return null;
  return [...line.parentElement!.querySelectorAll<HTMLElement>("[data-dot]")].map((dot) => {
    const place = dot.getBoundingClientRect();
    const center = across ? place.left + place.width / 2 - box.left : place.top + place.height / 2 - box.top;
    return Math.min(1, Math.max(0, center / length));
  });
}
