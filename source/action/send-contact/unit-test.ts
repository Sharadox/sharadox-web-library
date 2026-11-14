import { describe, expect, test, vi } from "vitest";
import type { ContactActionOptions } from "@sharadox/form-web-library/contact-action/type";

const createContactAction = vi.fn<(options: ContactActionOptions) => unknown>(() => vi.fn());
vi.mock("@sharadox/form-web-library/contact-action", () => ({ createContactAction }));
await import("@sharadox/sharadox-web-library/action/send-contact");
const options = createContactAction.mock.calls[0]![0];
const message = {
  name: "Ana",
  email: "ana@example.com",
  phone: "",
  company: "",
  message: "Hi",
  locale: "pt",
  choices: [],
  fields: {},
};

describe("sendContact", () => {
  test("emails contact@sharadox.com as Sharadox Web Application", () => {
    expect(options).toMatchObject({
      to: "contact@sharadox.com",
      senderName: "Sharadox Web Application",
      site: "sharadox.com",
    });
  });

  test("subjects read 'Contact · Name (Company)', without the company when there is none", () => {
    expect(options.subject({ ...message, company: "Café" })).toBe("Contact · Ana (Café)");
    expect(options.subject(message)).toBe("Contact · Ana");
  });

  test("names every 'What do you need?' choice in English", () => {
    expect(options.choices).toEqual({
      website: "Website",
      platform: "Platform",
      "e-commerce": "E-commerce",
      "content-management-system": "CMS",
      "application-programming-interface": "API",
      "progressive-web-application": "PWA",
      branding: "Branding",
      rebranding: "Rebranding",
      "branding-design": "Branding Design",
      "product-launch": "Product Launch",
      "lead-generation": "Lead Generation",
      "sales-generation": "Sales Generation",
      "brand-awareness": "Brand Awareness",
      "social-media-strategy": "Social Media Strategy",
      unsure: "I don't know what I need",
      "not-listed": "What I need is not listed",
    });
  });

  test("needs an email or a phone, a choice and a message of 20 characters, like the form", () => {
    expect(options).toMatchObject({ reach: "email-or-phone", requireChoice: true, minimumMessageLength: 20 });
  });
});
