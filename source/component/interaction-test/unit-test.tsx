import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import type React from "react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { CONTACT_NEED_EVENT } from "@sharadox/sharadox-web-library/utility/contact-need";
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

describe("service card buttons", () => {
  test("lead to the contact form and tick their choice, with a glow", async () => {
    const { Services } = await import("@sharadox/sharadox-web-library/component/services");
    const { ContactForm } = await import("@sharadox/sharadox-web-library/component/contact/form");
    render(
      <>
        <Services locale="en" />
        <ContactForm locale="en" action={async () => ({ status: "idle" as const })} />
      </>,
    );
    // Every card has its own button, and each ticks its own choice.
    expect(screen.getAllByRole("article")).toHaveLength(14);
    const platform = screen.getByRole("link", { name: "Build a Platform" });
    expect(platform.getAttribute("href")).toBe("#contact");
    fireEvent.click(platform);
    fireEvent.click(screen.getByRole("link", { name: /Get a Website/ }));
    fireEvent.click(screen.getByRole("link", { name: /Get a Website/ }));
    fireEvent.click(screen.getByRole("link", { name: "Plan My Growth" }));
    const checked = [...document.querySelectorAll<HTMLInputElement>('input[name="need"]:checked')].map(
      (input) => input.value,
    );
    expect(checked).toEqual(["website", "platform", "social-media-strategy"]);
    // The choices are grouped like the services.
    expect(screen.getByRole("group", { name: "Marketing" }).querySelectorAll("input")).toHaveLength(5);
    expect(
      document.querySelector('input[name="need"][value="website"]')!.closest("label")!.hasAttribute("data-requested"),
    ).toBe(true);
    dispatchEvent(new CustomEvent(CONTACT_NEED_EVENT, { detail: ["unknown"] }));
  });
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

describe("Navigation menu", () => {
  test("opens under the bar with every section and Start a Project, and closes on a link, Escape or a wider screen", async () => {
    let widen = () => {};
    let wide = false;
    vi.spyOn(window, "matchMedia").mockImplementation(
      (query: string) =>
        ({
          get matches() {
            return query.includes("min-width") && wide;
          },
          addEventListener: (_: string, listener: () => void) => void (widen = listener),
          removeEventListener: () => {},
        }) as unknown as MediaQueryList,
    );
    const { container } = render(<Navigation locale="en" path="/license" />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(container.querySelector("header")!.className).toContain("scrolled");
    expect(document.documentElement.style.overflow).toBe("hidden");
    const menu = document.getElementById("menu")!;
    expect(menu.hasAttribute("data-lenis-prevent")).toBe(true);
    const names = [...menu.querySelectorAll("a")].map((link) => link.textContent);
    expect(names).toEqual([
      "01Services",
      "02One System",
      "03Capabilities",
      "04Process",
      "05Contact",
      "Start a Project",
    ]);
    expect(menu.querySelector("a")!.getAttribute("href")).toBe("/en#services");
    await act(async () => fireEvent.click(menu.querySelector("a")!));
    expect(screen.getByRole("button", { name: "Open menu" }).getAttribute("aria-expanded")).toBe("false");
    expect(document.documentElement.style.overflow).toBe("");

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    await act(async () => fireEvent.click(document.getElementById("menu")!.querySelector("div a")!));
    expect(screen.getByRole("button", { name: "Open menu" }).getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    act(() => void dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" })));
    expect(screen.getByRole("button", { name: "Close menu" })).toBeTruthy();
    act(() => void dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })));
    expect(screen.getByRole("button", { name: "Open menu" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    act(() => widen());
    expect(screen.getByRole("button", { name: "Close menu" })).toBeTruthy();
    wide = true;
    act(() => widen());
    expect(screen.getByRole("button", { name: "Open menu" })).toBeTruthy();

    // The logo closes it too.
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    fireEvent.click(container.querySelector("header a")!);
    expect(screen.getByRole("button", { name: "Open menu" }).getAttribute("aria-expanded")).toBe("false");
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

  test("thanks the visitor once sent, having told the server when the form appeared", async () => {
    const action = await submit({ status: "sent" });
    expect(screen.getByRole("status").textContent).toContain("Thank you");
    const form = (action.mock.calls[0] as unknown as [ContactState, FormData])[1];
    expect(Number(form.get("started-at"))).toBeGreaterThan(0);
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
