import { MotionGlobalConfig } from "motion/react";
import { vi } from "vitest";

/** Every IntersectionObserver created, so tests can report elements as visible. */
export const observers: { callback: IntersectionObserverCallback; elements: Element[] }[] = [];

/**
 * Gives happy-dom the browser features the site's components use: intersection and resize observers, media
 * queries (fine pointer, no reduced motion, dark scheme), scrolling, and animations that finish at once.
 */
export function installBrowser({ reducedMotion = false, finePointer = true } = {}): void {
  MotionGlobalConfig.skipAnimations = true;
  observers.length = 0;
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      callback: IntersectionObserverCallback;
      elements: Element[] = [];
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
        observers.push(this);
      }
      observe(element: Element) {
        this.elements.push(element);
      }
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    },
  );
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  vi.spyOn(window, "matchMedia").mockImplementation(
    (query: string) =>
      ({
        matches:
          (query.includes("reduce") && reducedMotion) ||
          (query.includes("pointer: fine") && finePointer) ||
          query.includes("dark"),
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
      }) as unknown as MediaQueryList,
  );
  window.scrollTo = vi.fn() as never;
}

/** Reports every observed element as visible. */
export function revealEverything(): void {
  for (const observer of observers) {
    observer.callback(
      observer.elements.map(
        (target) => ({ isIntersecting: true, target, intersectionRatio: 1 }) as unknown as IntersectionObserverEntry,
      ),
      observer as unknown as IntersectionObserver,
    );
  }
}
