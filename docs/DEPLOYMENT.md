# 846 Autos Limited — Deployment

Status: Living Draft

## Cloudflare Pages

- Framework/preset: React (Vite)
- Production branch: main
- Build command: npm run build
- Build directory: dist
- Root directory: /
- Environment variables: none required for the current demo

Cloudflare installs dependencies, runs the Vite build, and publishes dist.

## Git workflow

Connected Git integration can deploy pushes to main and provide preview deployments for branches or pull requests.

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
