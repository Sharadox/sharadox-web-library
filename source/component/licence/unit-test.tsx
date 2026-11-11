import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { installBrowserEnvironment } from "@sharadox/test-web-library/browser-environment";
import { Footer } from "@sharadox/sharadox-web-library/component/footer";
import { Licence } from "@sharadox/sharadox-web-library/component/licence";
import { Navigation } from "@sharadox/sharadox-web-library/component/navigation";

const MARKDOWN = "# Licença Sharadox\n\nVersão 0.1.0\n\n## 1. Definições\n\n1. **«Obra»** — o `programa`.\n";

beforeEach(() => installBrowserEnvironment());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("the licence page", () => {
  test("renders the licence from its Markdown, with its title as the page heading", () => {
    render(<Licence locale="pt" markdown={MARKDOWN} />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Licença Sharadox");
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("1. Definições");
    expect(screen.getByText("Código verificável")).toBeTruthy();
    expect(document.querySelector("strong")!.textContent).toBe("«Obra»");
  });

  test("its navigation and footer lead back to the home page's sections and keep the language links on the page", () => {
    render(
      <>
        <Navigation locale="en" path="/licence" />
        <Footer locale="en" path="/licence" />
      </>,
    );
    const hrefs = [...document.querySelectorAll("a")].map((link) => link.getAttribute("href"));
    expect(hrefs).toContain("/en#services");
    expect(hrefs).toContain("/en#contact");
    expect(hrefs).toContain("/pt/licence");
    expect(hrefs).not.toContain("#process");
    expect(screen.getByRole("link", { name: "Licence" }).getAttribute("aria-current")).toBe("page");
  });

  test("the home page's footer links to it", () => {
    render(<Footer locale="pt" />);
    const link = screen.getByRole("link", { name: "Licença" });
    expect(link.getAttribute("href")).toBe("/pt/licence");
    expect(link.getAttribute("aria-current")).toBeNull();
    expect(screen.getByRole("link", { name: "English" }).getAttribute("href")).toBe("/en");
  });
});
