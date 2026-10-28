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

## Phase 4 — Polish
Mobile refinement, animation refinement, accessibility, performance, image optimization, SEO metadata, empty/error states, and cross-browser checks.

## Phase 5 — Deployment
Target: Cloudflare Workers Static Assets, configured in `wrangler.jsonc` with `dist` output and SPA fallback for direct route refreshes. No backend infrastructure is required for the initial demo.

## Implementation rule
Do not begin with a large amount of generated code. Establish the foundation and visual system first, then implement incrementally.

## Agent rule
Treat repository documentation as the current source of truth, while recognizing that it is a living draft. New decisions should be discussed and reflected in documentation before becoming implementation assumptions.