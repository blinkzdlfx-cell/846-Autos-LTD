# Implementation Plan — 846 Autos Demo

**Status: Living Draft**

## Phase 0 — Planning
Refine scope, confirm services and assets, confirm branding, refine page architecture, visual direction, and motion language.

## Phase 1 — Foundation
Initialize React/Vite; configure Tailwind and shadcn/ui; add Motion and Lucide; establish project structure, design tokens, reusable components, and local data model.

## Phase 2 — Homepage
Navigation, hero, animated text, image transitions, introduction, services preview, vehicle preview, lifestyle/service sections, gallery preview, contact CTA, footer.

## Phase 3 — Supporting experience
Separate routes are now established for Home, About, Services, Vehicles, and Contact. The homepage and Services page prioritize Lounge & Bar and Snooker; the homepage also previews vehicle sales, car wash, and clearing & forwarding.

## Phase 4 — Polish (Batch 2)
- Added Escape-key support for closing the mobile navigation and linked the menu toggle to its panel with `aria-controls`.
- Added a pause/resume control and accessible region/active-slide state to the hero carousel; reduced-motion preferences continue to disable autoplay.
- Added a built-bundle smoke test for direct route fallback, the JavaScript asset, navigation accessibility, carousel controls, and Cloudflare SPA settings.
- Added asynchronous decoding to lazy-loaded content images and preconnect hints for the two remote image hosts.

## Phase 5 — Production readiness (Batch 3)
- CI now runs both the production build and `npm run test:smoke`.
- Cloudflare static asset directory and SPA fallback are asserted by the smoke test.
- Owner-approved phone/WhatsApp, address, email, logo, inventory and photos remain intentionally deferred until the final content stage.
- Real browser/device testing and a live deployment smoke test are still required; CI route checks verify the served SPA shell, not visual behavior in a browser.

## Phase 6 — Deployment
Target: Cloudflare Workers Static Assets, configured in `wrangler.jsonc` with `dist` output and SPA fallback for direct route refreshes. No backend infrastructure is required for the initial demo.

## Implementation rule
Do not begin with a large amount of generated code. Establish the foundation and visual system first, then implement incrementally.

## Agent rule
Treat repository documentation as the current source of truth, while recognizing that it is a living draft. New decisions should be discussed and reflected in documentation before becoming implementation assumptions.
## Verification
- Install dependencies with `npm install --no-audit --no-fund`.
- Run `npm run build` and `npm run test:smoke` before deploying.
- GitHub Actions runs the production build and smoke checks on branch pushes.
- Manual browser checks remain required for responsive layout, actual keyboard behavior, image loading, all CTAs, and live deployment.
