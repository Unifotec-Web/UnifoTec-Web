# n8n contact webhook verification

This local utility does not connect the production contact form. It sends one `OPTIONS` preflight and exactly one real JSON `POST` per run. **Do not rerun casually:** each POST may send an internal notification and a customer acknowledgement.

Set `N8N_CONTACT_WEBHOOK_URL` to Earnest's production HTTPS webhook and `N8N_TEST_EMAIL` to a controlled inbox that you own. Keep them in your shell or an ignored `.env.local`; Node does not load the file automatically. Never use a customer address. Do not put the webhook in any `NEXT_PUBLIC_` variable. `.env.example` has empty placeholders only.

Run from the repository root after exporting both variables:

```bash
node scripts/test-contact-webhook.mjs
```

Run local mocks without contacting n8n:

```bash
node --test scripts/test-contact-webhook.node.mjs
```

Check the internal notification in Unifotec's intended inbox or n8n execution history. Check the acknowledgement in `N8N_TEST_EMAIL`, including Spam/Junk. The utility cannot prove email delivery.

Output records status, all response headers, CORS headers, content type, body, timing, JSON validity, and whether the body provides the frontend's expected `{ success: true, message: string }` signal. The URL and controlled email are redacted from output. A 2xx with an empty, plain-text, or other JSON body shows only HTTP acceptance; it does not establish workflow success. The preflight `browserAllowed` value checks origin, `POST`, and `content-type`; the POST response must also allow the website origin for browser access.

The current form sends `name`, `email`, optional `phone`, `service`, `message`, `consent`, optional `website` honeypot, and `source`. The test adds `subject` (the form has a Subject / Service selection but sends it as `service`) and `submittedAt`. It sends `service` and `consent` to represent the existing contract. Earnest should explicitly map these fields in n8n; accepting arbitrary fields does not confirm that either email uses them correctly. The `website` honeypot is intentionally omitted because its valid value is empty. No malformed production POSTs are sent.

The static site currently expects a separately hosted public contact API and a specific JSON response; the private n8n URL must not be embedded in browser code. A public API would need validation, abuse protection, a private handoff to n8n, and a stable response contract before integration.
