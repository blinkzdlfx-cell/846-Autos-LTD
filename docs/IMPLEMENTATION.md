# Implementation Plan — 846 Autos Demo

**Status: Production-ready**

## Phase 0 — Planning ✅
Scope, services, assets, branding, page architecture, visual direction, and motion language confirmed.

## Phase 1 — Foundation ✅
React/Vite initialized; Tailwind v4 and shadcn/ui configured; Motion and Lucide added; project structure, design tokens, reusable components, and local data model established.

## Phase 2 — Homepage ✅
Navigation, hero, animated text, image transitions, introduction, services preview, vehicle preview, lifestyle/service sections, gallery preview, contact CTA, footer implemented.

## Phase 3 — Supporting experience ✅
Separate routes established for Home, About, Services, Vehicles, and Contact. Homepage and Services page prioritize Lounge & Bar and Snooker.

## Phase 4 — Polish (Batch 2) ✅
- Escape-key support for closing mobile navigation; menu toggle linked to panel with `aria-controls`.
- Pause/resume control and accessible region/active-slide state on hero carousel; reduced-motion preferences disable autoplay.
- Built-bundle smoke test for direct route fallback, JS asset, navigation accessibility, carousel controls, and Cloudflare SPA settings.
- Asynchronous decoding on lazy-loaded images; preconnect hints for remote image hosts.

## Phase 5 — Production readiness (Batch 3) ✅
- CI runs production build and `npm run test:smoke` on push.
- Cloudflare static asset directory and SPA fallback asserted by smoke test.
- ESLint + Prettier configured (`npm run lint`, `npm run lint:fix`, `npm run format`).
- `package-lock.json` generated for reproducible builds.
- `.gitignore` added (`node_modules`, `dist`, `.env`, IDE files).
- Owner-approved contact channels added (phone `09075505454`, WhatsApp `07033301798`, email `enquiries@846autos.com`).
- Legal pages published: Privacy Policy (`/privacy-policy`) and Terms of Service (`/terms-of-service`).
- SEO implemented: per-route metadata, Open Graph image, JSON-LD `LocalBusiness` schema, `sitemap.xml`.
- Contact form with service selection added.
- Footer quick links and legal navigation added.
- Smoke test updated to cover new routes and JSON-LD schema.
- Real browser/device testing and live deployment smoke test still required; CI route checks verify the served SPA shell, not visual behavior in a browser.

## Phase 6 — Deployment
Target: Cloudflare Workers Static Assets, configured in `wrangler.jsonc` with `dist` output and SPA fallback for direct route refreshes. No backend infrastructure required for the initial demo.

## Implementation rule
Do not begin with a large amount of generated code. Establish the foundation and visual system first, then implement incrementally.

## Agent rule
Treat repository documentation as the current source of truth, while recognizing that it is a living draft. New decisions should be discussed and reflected in documentation before becoming implementation assumptions.

## Verification
- Install dependencies with `npm install --no-audit --no-fund`.
- Run `npm run build` and `npm run test:smoke` before deploying.
- Run `npm run lint` and `npm run format` for code quality.
- GitHub Actions runs the production build and smoke checks on branch pushes.
- Manual browser checks remain required for responsive layout, actual keyboard behavior, image loading, all CTAs, and live deployment.
