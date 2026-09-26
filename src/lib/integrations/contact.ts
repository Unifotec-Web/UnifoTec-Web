export type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
  website: string;
};

export type ContactRequest = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  consent: boolean;
  website?: string;
  source: "unifotecweb.com";
};

export type ContactSuccessResponse = { success: true; message: string; enquiryId?: string };
export type ContactErrorResponse = { success: false; message: string; fieldErrors?: Record<string, string> };
export type ContactResponse = ContactSuccessResponse | ContactErrorResponse;
export type ContactSubmissionResult =
  | { status: "unconfigured" }
  | { status: "success"; response: ContactSuccessResponse }
  | { status: "error"; response: ContactErrorResponse };

const defaultTimeoutMs = 12000;
const genericError = "We could not send your enquiry. Please try again or use email.";

export function getContactMethod(apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL): "api" | "email-draft" {
  return apiUrl?.trim() ? "api" : "email-draft";
}

export function mapContactRequest(input: ContactFormInput): ContactRequest {
  const phone = input.phone.trim();
  const website = input.website.trim();
  return {
    name: input.name.trim(),
    email: input.email.trim(),
    ...(phone ? { phone } : {}),
    service: input.service.trim(),
    message: input.message.trim(),
    consent: input.consent,
    ...(website ? { website } : {}),
    source: "unifotecweb.com",
  };
}

export function validateContactInput(input: ContactFormInput): Record<string, string> {
  const errors: Record<string, string> = {};
  if (input.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) errors.email = "Enter a valid email address.";
  if (input.phone.trim() && !/^[+\d\s().-]{7,24}$/.test(input.phone.trim())) errors.phone = "Enter a valid phone number or leave this blank.";
  if (!input.service.trim()) errors.service = "Choose a service.";
  if (input.message.trim().length < 10) errors.message = "Tell us a little more about your project.";
  if (!input.consent) errors.consent = "Please agree to the privacy notice.";
  return errors;
}

export function createContactMailto(request: ContactRequest, emailHref: string): string {
  const subject = `Website inquiry: ${request.service}`;
  const body = [
    `Name: ${request.name}`,
    `Email: ${request.email}`,
    ...(request.phone ? [`Phone: ${request.phone}`] : []),
    `Service: ${request.service}`,
    "",
    request.message,
  ].join("\n");
  return `${emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function isPublicApiUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || (url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname));
  } catch { return false; }
}

function parseContactResponse(value: unknown): ContactResponse | null {
  if (!value || typeof value !== "object") return null;
  const data = value as Record<string, unknown>;
  if (typeof data.message !== "string" || !data.message.trim()) return null;
  if (data.success === true) {
    if (data.enquiryId !== undefined && typeof data.enquiryId !== "string") return null;
    return { success: true, message: data.message, ...(typeof data.enquiryId === "string" ? { enquiryId: data.enquiryId } : {}) };
  }
  if (data.success === false) {
    let fieldErrors: Record<string, string> | undefined;
    if (data.fieldErrors && typeof data.fieldErrors === "object" && !Array.isArray(data.fieldErrors)) {
      fieldErrors = Object.fromEntries(Object.entries(data.fieldErrors).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
    }
    return { success: false, message: data.message, ...(fieldErrors ? { fieldErrors } : {}) };
  }
  return null;
}

export async function submitContactRequest(request: ContactRequest, options: { apiUrl?: string; fetchImpl?: typeof fetch; timeoutMs?: number } = {}): Promise<ContactSubmissionResult> {
  const apiUrl = options.apiUrl ?? process.env.NEXT_PUBLIC_CONTACT_API_URL;
  if (!apiUrl?.trim()) return { status: "unconfigured" };
  if (!isPublicApiUrl(apiUrl)) return { status: "error", response: { success: false, message: "Contact service is not configured correctly. Please use email." } };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs ?? defaultTimeoutMs);
  try {
    const response = await (options.fetchImpl ?? fetch)(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
      signal: controller.signal,
    });
    const parsed = parseContactResponse(await response.json());
    if (response.ok && parsed?.success) return { status: "success", response: parsed };
    if (parsed && !parsed.success) return { status: "error", response: parsed };
    return { status: "error", response: { success: false, message: genericError } };
  } catch {
    return { status: "error", response: { success: false, message: controller.signal.aborted ? "The request timed out. Please try again or use email." : genericError } };
  } finally {
    clearTimeout(timeout);
  }
}
