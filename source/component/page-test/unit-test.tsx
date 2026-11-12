import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { installBrowserEnvironment, reportIntersection } from "@sharadox/test-web-library/browser-environment";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: () => {} }) }));

vi.mock("@sharadox/globe-web-library/globe", () => ({ Globe: () => <div data-testid="globe" /> }));
const { Navigation } = await import("@sharadox/sharadox-web-library/component/navigation");
const { Hero } = await import("@sharadox/sharadox-web-library/component/hero");
const { ServiceIndex } = await import("@sharadox/sharadox-web-library/component/service-index");
const { Statement } = await import("@sharadox/sharadox-web-library/component/statement");
const { Services } = await import("@sharadox/sharadox-web-library/component/services");
const { Touchpoint } = await import("@sharadox/sharadox-web-library/component/touchpoint");
const { Capability } = await import("@sharadox/sharadox-web-library/component/capability");
const { Marquee } = await import("@sharadox/sharadox-web-library/component/marquee");
const { Process } = await import("@sharadox/sharadox-web-library/component/process");
const { Contact } = await import("@sharadox/sharadox-web-library/component/contact");
const { Footer } = await import("@sharadox/sharadox-web-library/component/footer");
const { SectionIndicator } = await import("@sharadox/sharadox-web-library/component/section-indicator");
const { StructuredData } = await import("@sharadox/sharadox-web-library/component/structured-data");
const { STATEMENT } = await import("@sharadox/sharadox-web-library/content/statement");

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["setInterval", "clearInterval", "setTimeout", "clearTimeout"] });
  installBrowserEnvironment();
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  localStorage.clear();
});

const action = vi.fn(async () => ({ status: "sent" as const }));

describe.each(["en", "pt"] as const)("the whole page in %s", (locale) => {
  test("renders every section, with the visuals running once in view", async () => {
    render(
      <>
        <Navigation locale={locale} />
        <SectionIndicator locale={locale} />
        <main>
          <Hero locale={locale} />
          <ServiceIndex locale={locale} />
          <Statement text={STATEMENT[locale]} />
          <Services locale={locale} />
          <Touchpoint locale={locale} />
          <Capability locale={locale} />
          <Marquee />
          <Process locale={locale} />
          <Contact locale={locale} action={action} />
        </main>
        <Footer locale={locale} />
        <StructuredData locale={locale} />
      </>,
    );
    await act(async () => reportIntersection());
    // The visuals start their timers once in view (score counter, notifications).
    await act(async () => vi.advanceTimersByTime(4000));
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      locale === "en" ? /Technologies/ : /Tecnologias/,
    );
    expect(document.querySelectorAll("section").length).toBeGreaterThan(5);
    expect(document.querySelector('script[type="application/ld+json"]')).not.toBeNull();
    await act(async () => {
      await vi.dynamicImportSettled();
    });
  });
});
