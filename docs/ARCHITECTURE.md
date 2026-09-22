# Architecture

## Current implementation

The public site is a Next.js 15 App Router application using React, TypeScript, Tailwind CSS, Framer Motion, and Lenis. Pages live in `src/app`; reusable visual sections live in `src/components`; shared browser API helpers are in `src/lib`.

`backend/main.py` is a separate FastAPI service backed by a local SQLite database. The dashboard calls it from the browser through `src/lib/api.ts`. Public contact and assistant components currently post directly to third-party n8n webhooks.

## Target direction

The intended production shape is a static-first public marketing site deployed to cPanel, with reviewed repository-managed content. If an admin system is retained, it must be a separate authenticated deployment with a managed database and API; it must not be exposed as the current public dashboard.

## Known blockers

- Static export is not yet configured.
- Dynamic blog and project routes need an approved static-content model and static parameters before static export can be enabled.
- The dashboard depends on an unauthenticated FastAPI/SQLite service.
- Browser-side webhook integrations must be moved behind an approved, protected integration boundary.
