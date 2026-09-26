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

The public site uses Next.js static export and uploads the generated `out/` directory to cPanel's document root. Rebuild the artifact for any content or public integration-URL change, then verify its routes and asset paths before upload.

## Static export artifact

`npm run build` now creates and verifies `out/`. CI uploads it as the `cpanel-static-site` artifact. Upload the artifact contents, including `.htaccess`, to the cPanel document root. The tracked `public/.htaccess` supplies directory indexes, disabled listings, a custom 404, baseline headers, compression, and asset caching.

Do not force HTTPS or www/non-www redirects in this artifact. Configure those choices in the target cPanel/domain settings. HSTS and a strict CSP remain deliberately deferred pending final external-resource inventory.

Old paths (`/start-a-project`, `/services/website-dev`, and removed dynamic/sample content routes) need optional `.htaccess` redirects only after the static launch is verified; Next.js redirects are not used because cPanel static files do not emit them.

## Optional public API configuration

`NEXT_PUBLIC_CONTACT_API_URL` and `NEXT_PUBLIC_PAYMENTS_API_URL` are documented in `.env.example` and `docs/INTEGRATIONS.md`. They are embedded at build time in the static export. Leave both blank for the current cPanel artifact: contact opens an email draft and online payment is unavailable. Set a variable only for an approved public Node.js endpoint, rebuild and reverify `out/`, then upload the new artifact. Never put private automation URLs or credentials in public variables.

## Backend boundary

No CMS/admin service is deployed with the public site. Any future backend requires a separate secured hosting environment, authentication, migrations, restricted CORS, audit logging, and documented operational ownership.
# Launch checklist

Before upload, record the artifact commit/SHA, take a cPanel backup, and upload the contents of `out/` including `.htaccess`. After upload, verify SSL, the canonical hostname, a 404 response, the configured contact method (email draft or public API), responsive layouts, `sitemap.xml`, `robots.txt`, and cache clearing. Keep the prior artifact available for rollback.
