# Deployment

## Current release checks

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

GitHub Actions runs these checks for pushes and pull requests.

## cPanel static hosting target

The public site is intended to become a Next.js static export uploaded to cPanel's document root. Static export is **not enabled yet** because dynamic routes have no static parameter source and the public site currently depends on browser calls to FastAPI/webhooks.

Before enabling `output: "export"`, define canonical routes and approved content, implement static parameters for dynamic pages, remove public runtime API dependencies, verify asset paths, and test the exported `out/` directory on the target cPanel configuration.

## Backend boundary

cPanel static hosting must not be treated as a deployment target for the current FastAPI/SQLite dashboard. Any retained backend requires a separate secured hosting environment and documented operational ownership.
