# 846 Autos Limited — Deployment

Status: Living Draft

## Cloudflare Workers

This project is deployed as a Vite-built React SPA using **Cloudflare Workers Static Assets**.

- Provider: Cloudflare Workers
- Production branch: main
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Static asset directory: `dist`
- Root directory: `/`
- Environment variables: none required for the current demo

`wrangler.jsonc` is the source of truth for the Worker deployment. It points Cloudflare to the Vite output in `dist` and enables SPA fallback so client-side routes resolve to `index.html`.

## Git workflow

Workers Builds can connect this GitHub repository and run:

1. `npm install --no-audit --no-fund`
2. `npm run build`
3. `npm run test:smoke`
4. `npx wrangler deploy`

Pushes to the configured production branch can build and deploy the site automatically when Workers Builds is connected and configured. The GitHub Actions workflow currently builds and smoke-tests only; it does not deploy to Cloudflare itself.

## Verification boundary

The CI smoke test checks the built asset, SPA fallback responses for the site routes, route metadata declarations, mobile navigation keyboard support, carousel controls, and the Cloudflare `dist`/SPA settings. It does not replace a real browser check or confirm that a Cloudflare deployment has completed.

## Current demo boundary

No database, API, authentication, payment, CMS, admin dashboard or private credentials are required.

The frontend uses structured local data and temporary visual assets. Replace demo imagery and unverified business details with owner-approved content before production use.

## Future production connection

1. Verified vehicle inventory
2. Owner-approved phone, WhatsApp, email and social links
3. CMS or admin-managed content
4. Backend/API services
5. Analytics and SEO verification
6. Production domain and business email
