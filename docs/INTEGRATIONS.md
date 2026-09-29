# Frontend integration boundaries

The public Next.js site is a static export. Both public API URLs are optional **build-time** values; a cPanel upload cannot change them without rebuilding `out/`. The URLs must identify public HTTPS endpoints on a separately hosted Node.js API, never a private automation endpoint or gateway secret endpoint. Local development may use HTTP on `localhost` or `127.0.0.1` for API testing. No server, payment gateway, or automation webhook is deployed by this repository.

## Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_API_URL` | blank | Public Node.js contact intake endpoint. Blank keeps the email-draft method. |
| `NEXT_PUBLIC_PAYMENTS_API_URL` | blank | Future public Node.js hosted-checkout creation endpoint. Blank reports that online payment is unavailable. |

These values are visible in browser code. Never put shared secrets, email credentials, private automation URLs, or gateway keys in `NEXT_PUBLIC_` variables. Configure allowed origins, abuse protection, request validation, storage, and private downstream integrations on the Node.js service. The endpoint URL is public build-time configuration; credentials and workflow secrets must remain server-side. Review the Privacy Policy and operational contact process before enabling contact intake.

The CI static artifact reads `NEXT_PUBLIC_CONTACT_API_URL` from the GitHub Actions repository variable of the same name during `npm run build`. An absent or blank variable builds the email-draft fallback. The endpoint currently allows only the production origin `https://unifotecweb.com`. Preview and localhost browser submissions require the endpoint owner to explicitly allow those origins. A successful command-line request does not prove browser CORS access.

## Contact

`src/lib/integrations/contact.ts` maps and validates the client request. The browser sends only the following JSON to the configured public endpoint:

```ts
{
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  consent: boolean;
  website?: string; // visually hidden honeypot
  source: "unifotecweb.com";
}
```

A successful response must be HTTP 2xx with `{ success: true, message: string, enquiryId?: string }`. A rejected request may return `{ success: false, message: string, fieldErrors?: Record<string, string> }`. The UI displays a received/submitted state only after a valid successful response. A timeout, invalid response, or network error shows a general error without claiming receipt. The frontend timeout is 20 seconds (`CONTACT_REQUEST_TIMEOUT_MS`) to allow the observed approximately 11.5-second workflow to complete. A timeout is uncertain delivery: the automation may still finish after the browser stops waiting. The form asks visitors to wait before trying again or contact us directly; it never retries a POST automatically. A rejected response confirms the service did not accept the request; invalid JSON and network errors do not establish receipt. The Node.js service must validate all fields again, reject or safely handle honeypot submissions, store consent evidence according to approved policy, and control the private automation handoff.

When the URL is blank, the same validated form opens a prefilled `mailto:` draft. The visitor must review and send it in their email application. The UI explicitly says the website has not sent the message.

## Hosted payment preparation

`src/lib/integrations/payments.ts` defines the future checkout boundary. The frontend may ask the public Node.js service to create a hosted checkout using **only**:

```ts
{ invoiceReference: string; customerEmail: string }
```

The expected successful response is:

```ts
{ success: true; checkoutUrl: string; paymentReference: string }
```

The frontend validates that `checkoutUrl` is HTTPS before redirecting. This is a safety check, not proof of payment or endpoint authenticity. The backend must authenticate or otherwise securely resolve the invoice, determine the payable amount, create the gateway session, and allowlist/validate checkout destinations. It must verify gateway webhooks before recording final payment status. The browser must never choose an amount, handle raw card data, carry gateway secrets, or verify final payment status.

`PaymentAvailability` is a reusable, unmounted UI primitive. It renders “Online payment is not currently available” when the feature is disabled or the API URL is blank. There is no public checkout route, button, or gateway SDK in this pass. A later approved launch needs a gateway choice, billing policy review, backend implementation, and dedicated end-to-end testing.
