// @vitest-environment node
import { SMTPServer } from "smtp-server";
import { afterAll, beforeAll, expect, test, vi } from "vitest";

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
  vi.stubEnv("EMAIL_SENDER_ADDRESS", "contact@web.sharadox.com");
});
afterAll(() => new Promise<void>((resolve) => server.close(resolve)));

test("sends one email as Sharadox to the visitor and the company, replies going to the company, in the visitor's language", async () => {
  const { sendContact } = await import("@sharadox/sharadox-web-library/action/send-contact");
  const form = new FormData();
  for (const [name, value] of Object.entries({
    name: "Ana Sá",
    email: "ana@example.pt",
    company: "Café Zé",
    message: "We need a website for our shop.",
    need: "website",
    "started-at": "1",
    locale: "pt",
  })) {
    form.set(name, value);
  }
  expect(await sendContact(form, "1.2.3.4")).toEqual({ status: "sent" });
  expect(received).toHaveLength(1);
  const message = received[0]!;
  expect(message).toMatch(/^From: Sharadox <contact@web\.sharadox\.com>$/m);
  expect(message).toMatch(/^To: =\?UTF-8\?Q\?Ana_S=C3=A1\?= <ana@example\.pt>, contact@sharadox\.com$/m);
  expect(message).toMatch(/^Reply-To: contact@sharadox\.com$/m);
  const subject = /^Subject: (.+(?:\r?\n .+)*)/m.exec(message)![1]!;
  const decoded = subject
    .replace(/\r?\n /g, " ")
    .replace(/=\?UTF-8\?Q\?(.*?)\?=\s*/g, (_, text: string) =>
      Buffer.from(text.replace(/_/g, " ").replace(/=([0-9A-F]{2})/g, "%$1"), "binary").toString(),
    );
  // The visitor used the form in Portuguese.
  expect(decodeURIComponent(decoded)).toMatch(
    /^Contacto · Ana Sá \(Café Zé\) · [0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
  );
  expect(message).toMatch(/^Content-ID: <logo>$/m);
  expect(message).toMatch(/^Content-ID: <logo-dark>$/m);
});
