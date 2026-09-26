# Public UI audit — 2026-09-26

## Method

Built the Next.js static export and served `out/` locally. Headless Chromium opened every exported HTML route at mobile (390 × 844), tablet (768 × 1024), and desktop (1440 × 900) viewport sizes. The audit checked HTTP status, one H1, horizontal document overflow, and local image loading after forcing lazy images to load. It also checked exported internal links and image targets. Key routes were captured as full-page screenshots; the homepage hero was visually inspected at desktop and mobile sizes.

## Coverage and result

25 HTML routes × 3 viewports = 75 checks. All passed: no HTTP errors, missing images, missing or duplicate H1s, or horizontal overflow. Exported internal links and image targets also had no missing files.

| Route group | Routes | Responsive review |
| --- | --- | --- |
| Primary | `/`, `/about/`, `/services/`, `/process/`, `/projects/`, `/team/`, `/contact/`, `/start-project/` | New split heroes stack on narrow screens; cards use 1/2/3 column breakpoints; imagery has fixed aspect ratios; CTAs remain reachable. |
| Service detail | `/services/web-development/`, `/services/mobile-app/`, `/services/custom-software/`, `/services/ecommerce/`, `/services/api-payment/`, `/services/business-automation/`, `/services/maintenance/`, `/services/cloud-hosting/`, `/services/digital-transformation/` | Existing content and responsive layouts retained; shared navigation, footer, and dark surface treatment updated. |
| Other public | `/solutions/`, `/industries/`, `/industries/business/`, `/faq/`, `/search/`, `/privacy/`, `/terms/`, `/404/` | Existing responsive layouts retained; shared site chrome updated. |

## Interaction and accessibility notes

Service cards are links with visible focus treatment and hover feedback. Mobile navigation retains its toggle, labels, and keyboard behavior. New scroll reveals run once; reduced-motion preference removes their movement. Hero and photo containers reserve aspect ratio before loading. Concept projects remain labelled as illustrative work. Team cards retain optional image, name, role, and biography fields, with role-only publication until approval.

## Limits

This automated pass checks layout geometry and image loading. It does not replace device testing or business-owner approval of copy and contact information. Full-page screenshots were captured to `/tmp` for local review and are not deployment assets.
