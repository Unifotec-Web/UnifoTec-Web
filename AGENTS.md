# UnifoTec-Web contributor guidance

## Scope and principles

- Preserve the existing visual system unless a task explicitly changes it.
- Keep public-site work separate from the future authenticated administration/API work.
- Do not add secrets, webhook URLs, personal data, or production credentials to the repository.
- Treat company claims, case studies, team biographies, testimonials, metrics, contact details, and legal copy as unverified until supplied or approved by Unifotec.

## Required checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Do not use `npm audit fix --force`. Dependency upgrades require a focused review and lockfile update.

## Review expectations

- Keep commits small and single-purpose.
- Verify routes and internal links when changing navigation or page structure.
- Add or update tests for stable business logic and regressions; avoid brittle animation snapshots.
- Keep accessibility semantics, keyboard behavior, focus visibility, and reduced-motion behavior intact.
- Document new environment variables in `.env.example` and deployment documentation.

## Deployment boundary

The public site is being prepared for static cPanel hosting and includes no public FastAPI/SQLite backend or dashboard. See `docs/SECURITY.md` and `docs/DEPLOYMENT.md` for future-service requirements.
