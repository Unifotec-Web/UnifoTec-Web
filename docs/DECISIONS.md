# Architecture decisions

## 2026-09-22 — Stabilize before redesign

The existing visual work will be preserved. Stabilization proceeds through focused commits rather than a rewrite.

## 2026-09-22 — Static-first public deployment target

The public company site targets static cPanel hosting. Runtime administration and content mutation are a separate concern and require a secure deployment boundary.

## 2026-09-22 — Tooling baseline before functional change

Linting, TypeScript checks, lightweight unit tests, CI, contributor guidance, and release documentation are established before route, security, dependency, or content remediation. The known blockers remain unresolved in this commit.
