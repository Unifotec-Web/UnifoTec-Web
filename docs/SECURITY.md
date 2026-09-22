# Security status

This document records known risks; it does not claim they are resolved.

## Current blockers

- `next@15.1.0` has reported critical and high vulnerabilities. A framework upgrade is deliberately outside this tooling-only commit.
- `backend/main.py` exposes unauthenticated create, update, and delete operations for public content.
- The FastAPI CORS policy permits every origin while credentials are enabled.
- Dashboard routes have no authentication or authorization gate.
- The contact form and AI assistant contain browser-visible n8n webhook URLs, creating spam and abuse exposure.
- SQLite storage is local to the process and has no migration, backup, access-control, or audit-log strategy.

## Required remediation sequence

1. Upgrade dependencies in a dedicated security commit.
2. Remove public access to the dashboard and require authentication, authorization, and audit logging before any admin deployment.
3. Restrict CORS to trusted origins and validate, rate-limit, and log API input.
4. Move webhook access to a server-side or vetted form-provider integration with abuse controls.
5. Establish secret management, backups, monitoring, and an incident-response owner before deploying a backend.
