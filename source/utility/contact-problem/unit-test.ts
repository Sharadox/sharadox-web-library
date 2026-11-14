import { expect, test } from "vitest";
import { contactProblems } from "@sharadox/sharadox-web-library/utility/contact-problem";

const form = (fields: Record<string, string | string[]>) => {
  const data = new FormData();
  for (const [name, value] of Object.entries(fields)) for (const item of [value].flat()) data.append(name, item);
  return data;
};
const message = "We need a new website for our café.";

test("asks for everything on an empty form", () => {
  expect(contactProblems(new FormData())).toEqual(["name", "reach", "needs", "message"]);
});

test("accepts an email, a phone, or both, with one choice and a long enough message", () => {
  const reaches: Record<string, string>[] = [
    { email: "ana@example.com" },
    { phone: "+351 912 345 678" },
    { email: "a@b.pt", phone: "912345678" },
  ];
  for (const reach of reaches)
    expect(contactProblems(form({ name: "Ana", need: "website", message, ...reach }))).toEqual([]);
});

test("flags a wrong email or phone, a short message and blank answers", () => {
  expect(
    contactProblems(form({ name: "  ", email: "ana@", phone: "12", need: ["website", "unsure"], message: " Hi " })),
  ).toEqual(["name", "email", "phone", "message"]);
});
