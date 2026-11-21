// @vitest-environment happy-dom
import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";

vi.mock("@sharadox/pointer-web-library/cursor", () => ({ Cursor: () => <i data-testid="cursor" /> }));
vi.mock("@sharadox/sharadox-web-library/component/navigation", () => ({
  Navigation: ({ path }: { path?: string }) => <nav data-testid="navigation">{path ?? "home"}</nav>,
}));
vi.mock("@sharadox/sharadox-web-library/component/footer", () => ({
  Footer: ({ path }: { path?: string }) => <footer data-testid="footer">{path ?? "home"}</footer>,
}));
vi.mock("@sharadox/sharadox-web-library/component/consent", () => ({
  Consent: ({ locale }: { locale: string }) => <i data-testid="consent">{locale}</i>,
}));
vi.mock("@sharadox/animation-web-library/offscreen-loops", () => ({
  OffscreenLoops: () => <i data-testid="offscreen-loops" />,
}));
const { PageFrame } = await import("@sharadox/sharadox-web-library/component/page-frame");

afterEach(cleanup);

test("puts the page between the navigation and the footer, with every slot in its place", () => {
  const { container, getByTestId } = render(
    <PageFrame
      locale="en"
      path="/privacy"
      before={<i data-testid="before" />}
      aside={<i data-testid="aside" />}
      after={<i data-testid="after" />}
    >
      <p>Page</p>
    </PageFrame>,
  );
  const order = [...container.children].map(
    (element) => element.getAttribute("data-testid") ?? element.tagName.toLowerCase(),
  );
  expect(order).toEqual([
    "cursor",
    "before",
    "navigation",
    "aside",
    "main",
    "offscreen-loops",
    "footer",
    "after",
    "consent",
  ]);
  expect(container.querySelector("main")!.textContent).toBe("Page");
  expect(getByTestId("navigation").textContent).toBe("/privacy");
  expect(getByTestId("footer").textContent).toBe("/privacy");
});

test("leads the home page's navigation and footer home, and leaves out empty slots", () => {
  const { container, getByTestId } = render(
    <PageFrame locale="pt">
      <p>Início</p>
    </PageFrame>,
  );
  expect(container.children).toHaveLength(1 + 5);
  expect(getByTestId("navigation").textContent).toBe("home");
});
