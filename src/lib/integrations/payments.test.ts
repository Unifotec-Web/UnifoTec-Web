import { describe, expect, it, vi } from "vitest";
import { createHostedCheckout, getPaymentAvailability, isValidHostedCheckoutUrl, redirectToHostedCheckout, validateCheckoutResponse } from "./payments";

const request = { invoiceReference: "INV-001", customerEmail: "buyer@example.test" };
const validResponse = { success: true, checkoutUrl: "https://checkout.example.test/session/abc", paymentReference: "PAY-001" };

describe("hosted payment boundary", () => {
  it("stays unavailable without a configured public API", async () => {
    const fetchImpl = vi.fn();
    expect(getPaymentAvailability("")).toEqual({ status: "unconfigured", message: "Online payment is not currently available" });
    expect(await createHostedCheckout(request, { apiUrl: "", fetchImpl })).toEqual({ status: "unconfigured", message: "Online payment is not currently available" });
    expect(fetchImpl).not.toHaveBeenCalled();
  });
  it("accepts only a valid HTTPS hosted checkout response", () => {
    expect(validateCheckoutResponse(validResponse)).toEqual(validResponse);
    for (const checkoutUrl of ["http://checkout.example.test/session", "javascript:alert(1)", "//checkout.example.test/session", "https://user:pass@checkout.example.test/session", "not a url"]) {
      expect(isValidHostedCheckoutUrl(checkoutUrl)).toBe(false);
      expect(validateCheckoutResponse({ ...validResponse, checkoutUrl })).toBeNull();
    }
    expect(validateCheckoutResponse({ ...validResponse, paymentReference: "" })).toBeNull();
  });
  it("sends only invoice reference and email, never a browser amount", async () => {
    let body = "";
    const fetchImpl = vi.fn(async (_url: string | URL | Request, init?: RequestInit) => { body = String(init?.body); return new Response(JSON.stringify(validResponse), { status: 200 }); });
    const result = await createHostedCheckout({ ...request, amount: 500 } as typeof request, { apiUrl: "https://api.example.test/checkout", fetchImpl });
    expect(result).toEqual({ status: "ready", response: validResponse });
    expect(JSON.parse(body)).toEqual(request);
  });
  it("rejects a non-HTTPS response without redirecting", async () => {
    const fetchImpl = async () => new Response(JSON.stringify({ ...validResponse, checkoutUrl: "http://checkout.example.test/session" }), { status: 200 });
    expect((await createHostedCheckout(request, { apiUrl: "https://api.example.test/checkout", fetchImpl })).status).toBe("error");
    const navigate = vi.fn();
    expect(redirectToHostedCheckout("http://checkout.example.test/session", navigate)).toBe(false);
    expect(navigate).not.toHaveBeenCalled();
    expect(redirectToHostedCheckout(validResponse.checkoutUrl, navigate)).toBe(true);
    expect(navigate).toHaveBeenCalledWith(validResponse.checkoutUrl);
  });
});
