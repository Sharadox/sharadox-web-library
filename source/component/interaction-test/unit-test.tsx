import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import type React from "react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { installBrowserEnvironment } from "@sharadox/test-web-library/browser-environment";
import type { ContactState } from "@sharadox/sharadox-web-library/action/send-contact/type";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: () => {} }) }));

const Globe = vi.fn<(properties: { palette: { dark: boolean } }) => React.ReactNode>(() => <div data-testid="globe" />);
vi.mock("@sharadox/globe-web-library/globe", () => ({ Globe }));
const { Navigation } = await import("@sharadox/sharadox-web-library/component/navigation");
const { StyleSwitch } = await import("@sharadox/sharadox-web-library/component/style-switch");
const { ContactForm } = await import("@sharadox/sharadox-web-library/component/contact/form");
const { Button } = await import("@sharadox/sharadox-web-library/component/button");
const { default: SharadoxGlobe } = await import("@sharadox/sharadox-web-library/component/globe");

beforeEach(() => installBrowserEnvironment());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  localStorage.clear();
  for (const attribute of [...document.documentElement.getAttributeNames()]) {
    if (attribute.startsWith("data-style")) document.documentElement.removeAttribute(attribute);
  }
});

describe("Navigation", () => {
  test("frosts once the page scrolls, and clears again at the top", () => {
    const { container } = render(<Navigation locale="en" />);
    const header = container.querySelector("header")!;
    vi.stubGlobal("scrollY", 200);
    act(() => void dispatchEvent(new Event("scroll")));
    expect(header.className).toContain("scrolled");
    vi.stubGlobal("scrollY", 0);
    act(() => void dispatchEvent(new Event("scroll")));
    expect(header.className).not.toContain("scrolled");
  });
});

describe("StyleSwitch", () => {
  test("lists White, System and Black and applies the choice", async () => {
    render(<StyleSwitch locale="pt" />);
    const radios = screen.getAllByRole("radio");
    expect(radios.map((radio) => radio.getAttribute("aria-label"))).toEqual(["White", "Sistema", "Black"]);
    // The switch learns about the change from <html> (a MutationObserver), after the click.
    await act(async () => fireEvent.click(screen.getByRole("radio", { name: "White" })));
    expect(document.documentElement.getAttribute("data-style-color")).toBe("white");
    expect(screen.getByRole("radio", { name: "White" }).getAttribute("aria-checked")).toBe("true");
  });
});

describe("Globe", () => {
  test("draws in the colors of the style in use, falling back to the default for unknown styles", () => {
    document.documentElement.setAttribute("data-style-color", "white");
    render(<SharadoxGlobe />);
    expect(Globe.mock.lastCall![0].palette.dark).toBe(false);
    cleanup();
    document.documentElement.setAttribute("data-style-color", "sepia");
    render(<SharadoxGlobe />);
    expect(Globe.mock.lastCall![0].palette.dark).toBe(true);
  });
});

describe("Button", () => {
  test("is a link with a ghost look, or a disabled button", () => {
    render(
      <>
        <Button href="#contact" variant="ghost" size="small" className="extra" arrow>
          Go
        </Button>
        <Button disabled>Wait</Button>
      </>,
    );
    expect(screen.getByRole("link", { name: /Go/ }).className).toContain("ghost");
    expect((screen.getByRole("button", { name: "Wait" }) as HTMLButtonElement).disabled).toBe(true);
  });
});

describe("ContactForm", () => {
  const submit = async (state: ContactState) => {
    const action = vi.fn(async () => state);
    render(<ContactForm locale="en" action={action} />);
    await act(async () => fireEvent.submit(document.querySelector("form")!));
    return action;
  };

  test("thanks the visitor once sent", async () => {
    await submit({ status: "sent" });
    expect(screen.getByRole("status").textContent).toContain("Thank you");
  });

  test.each([
    ["invalid", "valid email"],
    ["rate-limited", "Too many messages"],
    ["failed", "contact@sharadox.com"],
  ] as const)("explains %s", async (status, text) => {
    await submit({ status });
    expect(screen.getByRole("alert").textContent).toContain(text);
  });

  test("shows that it is sending", async () => {
    let finish: (state: ContactState) => void = () => {};
    const action = vi.fn(() => new Promise<ContactState>((resolve) => (finish = resolve)));
    render(<ContactForm locale="pt" action={action} />);
    await act(async () => fireEvent.submit(document.querySelector("form")!));
    expect(screen.getByRole("button", { name: /A enviar/ })).toBeTruthy();
    await act(async () => finish({ status: "idle" }));
  });
});
