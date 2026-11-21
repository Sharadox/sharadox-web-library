// @vitest-environment node
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
  test("emails contact@sharadox.com as Sharadox, in Sharadox's design, with the mark", async () => {
    expect(options).toMatchObject({ to: "contact@sharadox.com", company: "Sharadox", site: "sharadox.com" });
    expect(options.design).toMatchObject({ name: "Sharadox", wordmark: true, logo: { width: 30, height: 30 } });
    const logo = await options.logo!();
    const dark = await options.darkLogo!();
    expect(dark.filename).toMatch(/-dark\.png$/);
    expect([...dark.content.slice(1, 4)]).toEqual([0x50, 0x4e, 0x47]);
    expect(logo.contentType).toBe("image/png");
    expect([...logo.content.slice(1, 4)]).toEqual([0x50, 0x4e, 0x47]);
  });

  test("replies to the visitor automatically, in English or Portuguese", () => {
    const { en, pt } = options.acknowledgement!;
    expect(en!.subject).toBe("We received your message");
    expect(en!.heading(message.name)).toBe("Thank you, Ana.");
    expect(pt!.heading(message.name)).toBe("Obrigado, Ana.");
    expect(pt!.paragraphs).toHaveLength(2);
    expect(pt!.button).toEqual({ label: "Visitar sharadox.com", href: "https://sharadox.com/pt" });
  });

  test("names every 'What do you need?' choice in English and Portuguese, as the form shows it", () => {
    const choices = options.choices as Record<string, { en: string; pt: string }>;
    expect(Object.fromEntries(Object.entries(choices).map(([key, name]) => [key, name.en]))).toEqual({
      website: "Website",
      platform: "Platform",
      "e-commerce": "E-commerce",
      hosting: "Hosting",
      "professional-email": "Professional Email",
      "progressive-web-application": "PWA",
      "android-application": "Android App",
      "ios-application": "iOS App",
      branding: "Branding",
      rebranding: "Rebranding",
      "branding-design": "Branding Design",
      "print-design": "Printing",
      merchandise: "Merchandise",
      "product-launch": "Launch Campaign",
      "lead-generation": "Lead Generation",
      "sales-generation": "Sales Generation",
      "brand-awareness": "Brand Awareness",
      "social-media-strategy": "Social Media Strategy",
      unsure: "I don't know what I need",
      "not-listed": "What I need is not listed",
    });
    for (const name of Object.values(choices)) expect(name.pt).toBeTruthy();
  });

  test("needs an email or a phone, a choice and a message of 20 characters, like the form", () => {
    expect(options).toMatchObject({ reach: "email-or-phone", requireChoice: true, minimumMessageLength: 20 });
  });
});
