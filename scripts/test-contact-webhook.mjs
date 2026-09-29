import { pathToFileURL } from "node:url";

export const ORIGIN = "https://unifotecweb.com";
const LABEL = "UNIFOTEC AUTOMATION TEST";
const TIMEOUT_MS = 12000;

export function validateConfig(env) {
  if (!env.N8N_CONTACT_WEBHOOK_URL?.trim()) throw new Error("N8N_CONTACT_WEBHOOK_URL is missing");
  if (!env.N8N_TEST_EMAIL?.trim()) throw new Error("N8N_TEST_EMAIL is missing");
  let url;
  try { url = new URL(env.N8N_CONTACT_WEBHOOK_URL); } catch { throw new Error("N8N_CONTACT_WEBHOOK_URL is invalid"); }
  if (url.protocol !== "https:") throw new Error("N8N_CONTACT_WEBHOOK_URL must use HTTPS");
  const email = env.N8N_TEST_EMAIL.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("N8N_TEST_EMAIL is invalid");
  return { url: url.href, email };
}

export function redact(value, secrets) {
  let output = String(value);
  for (const secret of secrets.filter(Boolean).sort((a, b) => b.length - a.length)) output = output.split(secret).join("[REDACTED]");
  return output;
}

export function corsResult(headers, origin = ORIGIN) {
  const allowOrigin = headers.get("access-control-allow-origin");
  const allowMethods = headers.get("access-control-allow-methods") ?? "";
  const allowHeaders = headers.get("access-control-allow-headers") ?? "";
  return {
    allowOrigin, allowMethods, allowHeaders,
    browserAllowed: (allowOrigin === origin || allowOrigin === "*") &&
      allowMethods.split(",").some((method) => method.trim().toUpperCase() === "POST") &&
      allowHeaders.split(",").some((header) => header.trim().toLowerCase() === "content-type"),
  };
}

export function responseSignal(status, json) {
  if (status < 200 || status >= 300) return "failure";
  if (json && typeof json === "object" && json.success === true && typeof json.message === "string" && json.message.trim()) return "reliable success";
  if (json && typeof json === "object" && json.success === false) return "failure";
  return "HTTP success only; workflow outcome unconfirmed";
}

async function timedFetch(fetchImpl, url, init, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const start = performance.now();
  try {
    const response = await fetchImpl(url, { ...init, signal: controller.signal });
    const body = await response.text();
    return { status: response.status, headers: Object.fromEntries(response.headers), contentType: response.headers.get("content-type"), body, responseTimeMs: Math.round(performance.now() - start) };
  } finally { clearTimeout(timer); }
}

export async function run(env, fetchImpl = fetch, log = console.log, timeoutMs = TIMEOUT_MS) {
  const { url, email } = validateConfig(env);
  const secrets = [url, email];
  const print = (label, data) => log(redact(`${label}: ${JSON.stringify(data)}`, secrets));
  const preflight = await timedFetch(fetchImpl, url, {
    method: "OPTIONS", headers: { Origin: ORIGIN, "Access-Control-Request-Method": "POST", "Access-Control-Request-Headers": "content-type" },
  }, timeoutMs);
  print("Preflight", { ...preflight, cors: corsResult(new Headers(preflight.headers)) });

  const payload = {
    name: LABEL, email, phone: "+1 555 010 0000", subject: LABEL,
    service: "Web Development", message: `${LABEL}: controlled webhook verification; please ignore this enquiry.`,
    consent: true, source: "unifotecweb.com", submittedAt: new Date().toISOString(),
  };
  const post = await timedFetch(fetchImpl, url, {
    method: "POST", headers: { "Content-Type": "application/json", Origin: ORIGIN }, body: JSON.stringify(payload),
  }, timeoutMs);
  let json = null;
  let validJson = false;
  try { json = JSON.parse(post.body); validJson = true; } catch { /* Plain text and empty responses are recorded. */ }
  const signal = responseSignal(post.status, json);
  print("POST", { ...post, validJson, cors: { allowOrigin: new Headers(post.headers).get("access-control-allow-origin") }, frontendSignal: signal });
  if (post.status < 200 || post.status >= 300 || signal === "failure") throw new Error("Webhook returned an unsuccessful response");
  return { preflight, post, validJson, signal };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run(process.env).catch((error) => {
    console.error(redact(`Webhook test failed: ${error.message}`, [process.env.N8N_CONTACT_WEBHOOK_URL, process.env.N8N_TEST_EMAIL]));
    process.exitCode = 1;
  });
}
