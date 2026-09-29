export type CheckoutRequest = {
  invoiceReference: string;
  customerEmail: string;
};

export type CheckoutResponse = {
  success: true;
  checkoutUrl: string;
  paymentReference: string;
};

export type CheckoutResult =
  | { status: "unconfigured"; message: "Online payment is not currently available" }
  | { status: "ready"; response: CheckoutResponse }
  | { status: "error"; message: string };

const unavailableMessage = "Online payment is not currently available" as const;
const genericError = "Checkout could not be started. Please try again later.";

export function getPaymentAvailability(apiUrl = process.env.NEXT_PUBLIC_PAYMENTS_API_URL) {
  return apiUrl?.trim() ? { status: "configured" as const } : { status: "unconfigured" as const, message: unavailableMessage };
}

export function isValidHostedCheckoutUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !!url.hostname && !url.username && !url.password;
  } catch { return false; }
}

function isPublicApiUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || (url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname));
  } catch { return false; }
}

export function validateCheckoutResponse(value: unknown): CheckoutResponse | null {
  if (!value || typeof value !== "object") return null;
  const data = value as Record<string, unknown>;
  if (data.success !== true || !isValidHostedCheckoutUrl(data.checkoutUrl) || typeof data.paymentReference !== "string" || !data.paymentReference.trim()) return null;
  return { success: true, checkoutUrl: data.checkoutUrl, paymentReference: data.paymentReference };
}

export async function createHostedCheckout(request: CheckoutRequest, options: { apiUrl?: string; fetchImpl?: typeof fetch; timeoutMs?: number } = {}): Promise<CheckoutResult> {
  const apiUrl = options.apiUrl ?? process.env.NEXT_PUBLIC_PAYMENTS_API_URL;
  if (!apiUrl?.trim()) return { status: "unconfigured", message: unavailableMessage };
  if (!isPublicApiUrl(apiUrl)) return { status: "error", message: "Payment service is not configured correctly." };
  if (!request.invoiceReference.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.customerEmail.trim())) return { status: "error", message: "Enter an invoice reference and valid email address." };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs ?? 12000);
  try {
    const response = await (options.fetchImpl ?? fetch)(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ invoiceReference: request.invoiceReference.trim(), customerEmail: request.customerEmail.trim() }),
      signal: controller.signal,
    });
    if (!response.ok) return { status: "error", message: genericError };
    const checkout = validateCheckoutResponse(await response.json());
    return checkout ? { status: "ready", response: checkout } : { status: "error", message: genericError };
  } catch {
    return { status: "error", message: controller.signal.aborted ? "Checkout request timed out. Please try again later." : genericError };
  } finally {
    clearTimeout(timeout);
  }
}

export function redirectToHostedCheckout(checkoutUrl: string, navigate: (url: string) => void = (url) => window.location.assign(url)): boolean {
  if (!isValidHostedCheckoutUrl(checkoutUrl)) return false;
  navigate(checkoutUrl);
  return true;
}
