# Security status

This document records known risks; it does not claim they are resolved.

## Current blockers

- No public CMS/admin, FastAPI runtime, SQLite store, or third-party lead/chat webhook is included in the launch site.
- Third-party lead or chat webhooks are prohibited unless explicitly approved and placed behind an appropriate protected integration boundary.
- The contact page opens a visitor-controlled email draft and does not transmit visitor data from the website.

## Required remediation sequence

1. Any future CMS/admin must be separately deployed with authentication, authorization, migrations, restricted CORS, and audit logging.
2. A future contact handler must be same-origin or explicitly approved, with input validation, abuse controls, and privacy review.
3. Establish secret management, backups, monitoring, and an incident-response owner before deploying any backend.
