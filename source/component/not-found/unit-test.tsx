import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { installBrowserEnvironment } from "@sharadox/test-web-library/browser-environment";
import { beginSoftNavigation } from "@sharadox/web-library/navigation/soft-navigation";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: () => {} }) }));

vi.mock("@sharadox/globe-web-library/globe", () => ({ Globe: () => <div data-testid="globe" /> }));
const { NotFound } = await import("@sharadox/sharadox-web-library/component/not-found");
const { ServiceIndex } = await import("@sharadox/sharadox-web-library/component/service-index");

beforeEach(() => installBrowserEnvironment());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("the 404 page", () => {
  test.each([
    ["en", "This page is off the map.", "Back to Home", "Error • 404"],
    ["pt", "Esta página está fora do mapa.", "Voltar ao Início", "Erro • 404"],
  ] as const)(
    "in %s: the heading, the failed request, the way back and the globe as the zero",
    async (locale, heading, home, eyebrow) => {
      render(<NotFound locale={locale} path={`/${locale}/old-page`} />);
      expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(heading);
      expect(screen.getByText(eyebrow)).toBeTruthy();
      expect(screen.getByText(`/${locale}/old-page`)).toBeTruthy();
      expect(screen.getByRole("link", { name: home }).getAttribute("href")).toBe(`/${locale}`);
      expect(screen.getByRole("link", { name: /Start a Project|Iniciar Projeto/ }).getAttribute("href")).toBe(
        `/${locale}#contact`,
      );
      await waitFor(() => expect(screen.getByTestId("globe")).toBeTruthy());
    },
  );

  test("after a language switch it shows at once, without replaying its entrance", async () => {
    beginSoftNavigation();
    const { Hero } = await import("@sharadox/sharadox-web-library/component/hero");
    render(
      <>
        <Hero locale="pt" />
        <NotFound locale="pt" path="/pt/x" />
      </>,
    );
    beginSoftNavigation(0);
    for (const heading of screen.getAllByRole("heading", { level: 1 })) {
      expect((heading.firstElementChild!.firstElementChild as HTMLElement).style.transform).not.toContain("110%");
    }
  });

  test("its service shortcuts lead to the home page's sections", () => {
    render(<ServiceIndex locale="en" base="/en" />);
    expect(screen.getByRole("link", { name: /Web Applications/ }).getAttribute("href")).toBe("/en#web-application");
  });
});
