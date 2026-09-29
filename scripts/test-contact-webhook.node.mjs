import test from "node:test";
import assert from "node:assert/strict";
import { corsResult, redact, responseSignal, run, validateConfig } from "./test-contact-webhook.mjs";

const env = { N8N_CONTACT_WEBHOOK_URL: "https://example.test/private-token", N8N_TEST_EMAIL: "test@example.test" };
const corsHeaders = { "access-control-allow-origin": "https://unifotecweb.com", "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type" };
function mock(post, calls) {
  return async (_url, init) => {
    calls.push(init);
    return init.method === "OPTIONS" ? new Response(null, { status: 204, headers: corsHeaders }) : post;
  };
}

test("successful JSON response and exactly one POST", async () => {
  const calls = []; const logs = [];
  const result = await run(env, mock(new Response(JSON.stringify({ success: true, message: "Received" }), { headers: { "content-type": "application/json", ...corsHeaders } }), calls), (line) => logs.push(line));
  assert.equal(result.signal, "reliable success");
  assert.equal(result.validJson, true);
  assert.deepEqual(calls.map((call) => call.method), ["OPTIONS", "POST"]);
  const payload = JSON.parse(calls[1].body);
  assert.equal(payload.subject, "UNIFOTEC AUTOMATION TEST");
  assert.equal(payload.email, env.N8N_TEST_EMAIL);
  assert.equal(logs.join(" ").includes(env.N8N_CONTACT_WEBHOOK_URL), false);
  assert.equal(logs.join(" ").includes(env.N8N_TEST_EMAIL), false);
});

test("empty and plain text 2xx responses cannot confirm workflow success", async () => {
  for (const body of ["", "Accepted"]) {
    const result = await run(env, mock(new Response(body), []), () => {});
    assert.equal(result.validJson, false);
    assert.equal(result.signal, "HTTP success only; workflow outcome unconfirmed");
  }
});

test("non-2xx response fails", async () => {
  await assert.rejects(run(env, mock(new Response("Rejected", { status: 422 }), []), () => {}), /unsuccessful/);
});

test("network failure and timeout fail", async () => {
  await assert.rejects(run(env, async () => { throw new Error("network unavailable"); }, () => {}), /network unavailable/);
  await assert.rejects(run(env, (_url, init) => new Promise((_resolve, reject) => init.signal.addEventListener("abort", () => reject(new Error("aborted")))), () => {}, 5), /aborted/);
});

test("missing configuration fails before sending", async () => {
  assert.throws(() => validateConfig({}), /N8N_CONTACT_WEBHOOK_URL is missing/);
  assert.throws(() => validateConfig({ N8N_CONTACT_WEBHOOK_URL: env.N8N_CONTACT_WEBHOOK_URL }), /N8N_TEST_EMAIL is missing/);
});

test("redacts sensitive values and interprets CORS", () => {
  assert.equal(redact(`${env.N8N_CONTACT_WEBHOOK_URL} ${env.N8N_TEST_EMAIL}`, Object.values(env)), "[REDACTED] [REDACTED]");
  assert.equal(corsResult(new Headers(corsHeaders)).browserAllowed, true);
  assert.equal(corsResult(new Headers({ ...corsHeaders, "access-control-allow-origin": "https://other.test" })).browserAllowed, false);
  assert.equal(responseSignal(200, { success: false, message: "Rejected" }), "failure");
});
