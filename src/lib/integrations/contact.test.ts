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
