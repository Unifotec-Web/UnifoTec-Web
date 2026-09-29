import { describe, expect, it, vi } from "vitest";
import { createContactMailto, getContactMethod, mapContactRequest, submitContactRequest, validateContactInput, type ContactFormInput } from "./contact";

const form: ContactFormInput = {
  name: " Ada Example ", email: " ada@example.test ", phone: " ", service: " Web Development ",
  message: " A website for our business. ", consent: true, website: "",
};
const request = mapContactRequest(form);

function jsonResponse(value: unknown, status = 200) { return new Response(JSON.stringify(value), { status, headers: { "Content-Type": "application/json" } }); }

describe("contact integration", () => {
  it("maps only contract fields and trims the optional values", () => {
    expect(request).toEqual({ name: "Ada Example", email: "ada@example.test", service: "Web Development", message: "A website for our business.", consent: true, source: "unifotecweb.com" });
    expect(mapContactRequest({ ...form, phone: " +233 24 000 0000 ", website: " filled " })).toMatchObject({ phone: "+233 24 000 0000", website: "filled" });
  });
  it("validates required contact fields and consent", () => {
    expect(validateContactInput({ ...form, name: " ", email: "bad", message: "short", consent: false })).toMatchObject({ name: expect.any(String), email: expect.any(String), message: expect.any(String), consent: expect.any(String) });
    expect(validateContactInput(form)).toEqual({});
  });
  it("uses an email draft without making a network request when unconfigured", async () => {
    const fetchImpl = vi.fn();
    expect(getContactMethod("")).toBe("email-draft");
    expect(await submitContactRequest(request, { apiUrl: "", fetchImpl })).toEqual({ status: "unconfigured" });
    expect(fetchImpl).not.toHaveBeenCalled();
    expect(createContactMailto(request, "mailto:info@unifotecweb.com")).toContain("body=Name%3A%20Ada%20Example");
  });
  it("accepts only a successful 2xx response as receipt", async () => {
    const success = await submitContactRequest(request, { apiUrl: "https://api.example.test/contact", fetchImpl: async () => jsonResponse({ success: true, message: "Received", enquiryId: "E-1" }) });
    expect(success).toEqual({ status: "success", response: { success: true, message: "Received", enquiryId: "E-1" } });
    const invalid = await submitContactRequest(request, { apiUrl: "https://api.example.test/contact", fetchImpl: async () => jsonResponse({ success: true, message: "Received" }, 500) });
    expect(invalid.status).toBe("error");
  });
  it("preserves API field errors and handles invalid responses safely", async () => {
    const failure = await submitContactRequest(request, { apiUrl: "https://api.example.test/contact", fetchImpl: async () => jsonResponse({ success: false, message: "Check your email", fieldErrors: { email: "Invalid email" } }, 422) });
    expect(failure).toEqual({ status: "error", response: { success: false, message: "Check your email", fieldErrors: { email: "Invalid email" } } });
    const malformed = await submitContactRequest(request, { apiUrl: "https://api.example.test/contact", fetchImpl: async () => jsonResponse({ success: true }) });
    expect(malformed.status).toBe("error");
  });
});

describe("contact response and timing", () => {
  const url = "https://api.example.test/contact";
  it("ignores unknown response fields and sends only the mapped payload", async () => {
    const fetchImpl = vi.fn<typeof fetch>(async () => jsonResponse({ success: true, message: "Received", myField: "value" }));
    expect(await submitContactRequest(request, { apiUrl: url, fetchImpl })).toEqual({ status: "success", response: { success: true, message: "Received" } });
    expect(JSON.parse(String(fetchImpl.mock.calls[0]?.[1]?.body))).toEqual(request);
  });
  it("rejects unsuccessful 200, invalid JSON, and non-2xx responses", async () => {
    for (const response of [
      jsonResponse({ success: false, message: "Rejected" }),
      new Response("not JSON", { status: 200 }),
      jsonResponse({ success: true, message: "Received" }, 503),
    ]) {
      expect((await submitContactRequest(request, { apiUrl: url, fetchImpl: async () => response })).status).toBe("error");
    }
  });
  it("accepts an 11.5-second response before the 20-second timeout", async () => {
    vi.useFakeTimers();
    try {
      const pending = submitContactRequest(request, { apiUrl: url, fetchImpl: async () => {
        await new Promise((resolve) => setTimeout(resolve, 11500));
        return jsonResponse({ success: true, message: "Received" });
      } });
      await vi.advanceTimersByTimeAsync(11500);
      expect((await pending).status).toBe("success");
    } finally { vi.useRealTimers(); }
  });
  it("treats a 20-second abort as uncertain and never retries", async () => {
    vi.useFakeTimers();
    try {
      const fetchImpl = vi.fn((_url: string, init?: RequestInit) => new Promise<Response>((_resolve, reject) => {
        init?.signal?.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
      }));
      const pending = submitContactRequest(request, { apiUrl: url, fetchImpl: fetchImpl as typeof fetch });
      await vi.advanceTimersByTimeAsync(20001);
      expect(await pending).toEqual({ status: "timeout" });
      expect(fetchImpl).toHaveBeenCalledTimes(1);
    } finally { vi.useRealTimers(); }
  });
});
