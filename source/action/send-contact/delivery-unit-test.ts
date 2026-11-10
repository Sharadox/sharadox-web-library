import { SMTPServer } from "smtp-server";
import { afterAll, beforeAll, expect, it, vi } from "vitest";

/** A local SMTP server that accepts any login and keeps the raw messages, to check the real headers. */
const received: string[] = [];
const server = new SMTPServer({
  disabledCommands: ["STARTTLS"],
  allowInsecureAuth: true,
  onAuth: (_authentication, _session, callback) => callback(null, { user: "test" }),
  onData(stream, _session, callback) {
    let data = "";
    stream.on("data", (chunk: Buffer) => (data += chunk.toString()));
    stream.on("end", () => {
      received.push(data);
      callback();
    });
  },
});

beforeAll(async () => {
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.server.address() as { port: number };
  vi.stubEnv("EMAIL_SERVER_HOST", "127.0.0.1");
  vi.stubEnv("EMAIL_SERVER_PORT", String(port));
  vi.stubEnv("EMAIL_SERVER_SECURITY", "none");
  vi.stubEnv("EMAIL_SERVER_USERNAME", "smtp-user");
  vi.stubEnv("EMAIL_SERVER_PASSWORD", "smtp-password");
  vi.stubEnv("EMAIL_SENDER_ADDRESS", "web@email.sharadox.com");
});
afterAll(() => new Promise<void>((resolve) => server.close(resolve)));

it("sends as Sharadox Web Application and replying answers the visitor", async () => {
  const { sendContact } = await import("@sharadox/sharadox-web-library/action/send-contact");
  const form = new FormData();
  for (const [name, value] of Object.entries({
    name: "Ana Sá",
    email: "ana@example.pt",
    company: "Café Zé",
    message: "We need a website.",
    "started-at": "1",
    locale: "pt",
  })) {
    form.set(name, value);
  }
  expect(await sendContact(form, "1.2.3.4")).toEqual({ status: "sent" });
  const message = received.at(-1)!;
  expect(message).toMatch(/^From: Sharadox Web Application <web@email\.sharadox\.com>$/m);
  expect(message).toMatch(/^Reply-To: =\?UTF-8\?Q\?Ana_S=C3=A1\?= <ana@example\.pt>$/m);
  expect(message).toMatch(/^To: email@sharadox\.com$/m);
});
