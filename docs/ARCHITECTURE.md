# Architecture

## Current implementation

The public site is a Next.js 15 App Router application using React, TypeScript, Tailwind CSS, Framer Motion, and Lenis. Pages live in `src/app`; reusable visual sections live in `src/components`; shared browser API helpers are in `src/lib`.

The launch site has no dashboard, CMS, FastAPI runtime, or third-party lead/chat webhook. Its public content is repository-managed and static-first.

## Target direction

The intended production shape is a static-first public marketing site deployed to cPanel, with reviewed repository-managed content. Any future CMS or admin service must be separately deployed, authenticated, migration-backed, restricted by CORS, and audit logged.

## Known blockers

- Static export is not yet configured.
- Dynamic blog and project routes need an approved static-content model and static parameters before static export can be enabled.
- A future same-origin cPanel form handler has not yet been designed or deployed; contact currently uses an explicit email-client fallback.
