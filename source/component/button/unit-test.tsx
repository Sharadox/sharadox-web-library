import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button } from "@sharadox/sharadox-web-library/component/button";

test("renders a link with href and a button without", () => {
  render(
    <>
      <Button href="#contact">Go</Button>
      <Button disabled>Send</Button>
    </>,
  );
  expect(screen.getByRole("link", { name: "Go" }).getAttribute("href")).toBe("#contact");
  expect((screen.getByRole("button", { name: "Send" }) as HTMLButtonElement).disabled).toBe(true);
});
