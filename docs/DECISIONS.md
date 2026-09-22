# Architecture decisions

## 2026-09-22 — Stabilize before redesign

The existing visual work will be preserved. Stabilization proceeds through focused commits rather than a rewrite.

## 2026-09-22 — Static-first public deployment target

The public company site targets static cPanel hosting. Runtime administration and content mutation are a separate concern and require a secure deployment boundary.

## 2026-09-22 — Tooling baseline before functional change

Linting, TypeScript checks, lightweight unit tests, CI, contributor guidance, and release documentation are established before route, security, dependency, or content remediation. The known blockers remain unresolved in this commit.

## 2026-09-22 — No public admin or third-party intake at launch

The launch site contains no public dashboard, CMS, FastAPI runtime, SQLite database, AI assistant, or third-party lead/chat webhook. Contact uses a clearly disclosed email-client fallback. Any future CMS/admin must be separately authenticated and deployed with migrations, restricted CORS, and audit logging.

## 2026-09-22 — Canonical static routes

`/start-project` and `/services/web-development` are canonical. Dynamic and sample blog/project detail routes are removed; `/projects` is an honest static landing page until verified case studies are approved.
