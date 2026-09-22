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

The public site is intended to become a Next.js static export uploaded to cPanel's document root. Static export is **not enabled yet** because dynamic routes have no static parameter source.

Before enabling `output: "export"`, define canonical routes and approved content, implement static parameters for dynamic pages, verify asset paths, and test the exported `out/` directory on the target cPanel configuration.

## Backend boundary

No CMS/admin service is deployed with the public site. Any future backend requires a separate secured hosting environment, authentication, migrations, restricted CORS, audit logging, and documented operational ownership.
