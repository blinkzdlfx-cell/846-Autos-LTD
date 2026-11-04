# Deployment and Release Checks

## Current status

The repository contains a deployable React/Vite frontend and Cloudflare Workers Static Assets configuration. A successful local build or CI run does not, by itself, prove that the production Worker, custom domain, or owner-approved business content has been verified.

Treat the site as ready for owner review, not as fully production-approved, until the live checks below are completed.

## Cloudflare Workers configuration

- Provider: Cloudflare Workers
- Production branch: `main`
- Root directory: repository root (`/`)
- Build command: `npm run build`
- Deploy command: `npm run deploy` (equivalent to `wrangler deploy`)
- Static asset output: `dist`
- Wrangler configuration: `wrangler.jsonc`
- Runtime environment variables: none required by the current frontend

`wrangler.jsonc` is the source of truth for the Worker name, static asset directory, and SPA fallback. Do not create a second Wrangler configuration file or change the Worker name without checking the existing Cloudflare Worker and its domain bindings first.

### Cloudflare Workers Builds dashboard

For the connected Worker, verify these settings under **Workers & Pages → 846-autos-ltd → Settings → Build**:

1. Git repository: `blinkzdlfx-cell/846-Autos-LTD`
2. Production branch: `main`
3. Root directory: `/` (repository root)
4. Build command: `npm run build`
5. Deploy command: `npm run deploy`

Workers Builds performs the repository dependency installation as part of its build process. Do not put `npm install` or `npm ci` into the build command; keep the build command focused on compiling the application.

## Dependency installation: important root-cause note

A previous Cloudflare build failed during npm dependency resolution because Babel 8 packages were declared alongside dependencies that require Babel 7, including the Babel ESLint parser and the Babel packages used by the project's tooling.

The temporary `--legacy-peer-deps` workaround hid the peer-dependency conflict instead of correcting it. The November 4, 2026 dependency fix moved the Babel parser and presets back to compatible 7.x releases and regenerated `package-lock.json`.

**Do not reintroduce Babel 8 into this dependency set or add `--legacy-peer-deps` as a permanent build workaround.** The repository must install cleanly from its committed lockfile.

The GitHub Actions workflow intentionally uses:

```bash
npm ci --no-audit --no-fund
npm run build
npm run test:smoke
```

If `npm ci` fails, fix the dependency declarations and regenerate the lockfile using the project's supported Node/npm toolchain. Commit `package.json` and `package-lock.json` together. Do not delete the lockfile, switch to an unpinned install, or bypass peer-dependency validation just to make CI pass.

## Git and CI workflow

The GitHub Actions workflow at `.github/workflows/build.yml` runs on pull requests targeting `main`, pushes to `main`, and manual dispatch.

It performs a clean lockfile-based install, builds the production bundle, and runs the smoke test. It does not deploy to Cloudflare.

Recommended workflow:

1. Make changes on a feature branch.
2. Run `npm ci`, `npm run build`, and `npm run test:smoke`.
3. Open a pull request to `main`.
4. Wait for the Build and Smoke Test workflow to pass.
5. Merge the reviewed changes.
6. Cloudflare Workers Builds deploys the new `main` commit if the Git integration is connected and enabled.
7. Verify the actual deployment in Cloudflare and in a browser.

Do not treat a successful GitHub Actions run as proof that Cloudflare deployed the commit. The two systems report separate results.

## Smoke-test coverage and limitations

The smoke test checks:

- The production HTML shell and generated JavaScript asset.
- SPA fallback responses for the known routes.
- Route metadata declarations.
- Mobile navigation keyboard support.
- Hero carousel controls and reduced-motion handling.
- LocalBusiness JSON-LD.
- The Cloudflare `dist` asset directory and SPA fallback settings.

It is a structural smoke test, not a full browser or end-to-end test. It does not verify image availability, external links, contact form delivery, mobile rendering on real devices, or Cloudflare production deployment.

## Post-deployment verification

After Cloudflare reports a successful deployment, verify:

- Homepage loads without a blank screen or browser console errors.
- `/about`, `/services`, `/vehicles`, `/contact`, `/privacy-policy`, and `/terms-of-service` load directly and survive refresh.
- Unknown routes display the app's not-found page.
- Images load on mobile and desktop.
- Mobile navigation opens, closes, and responds to Escape.
- Hero carousel arrows, slide selectors, and pause/resume controls work.
- Phone, WhatsApp, email, and contact form behavior are correct.
- The production domain and HTTPS work.

## Content and production boundary

The current frontend uses structured local data and some temporary visual assets. The README's business details and contact channels must be confirmed by the owner before final publication. Replace temporary imagery and any unverified address, inventory, prices, testimonials, and operational claims with owner-approved information.

This repository currently has no database, API, authentication, payment, CMS, or admin dashboard. Do not describe those features as implemented.

## Future enhancements

1. Owner-verified vehicle inventory and vehicle detail pages.
2. Owner-approved business photos and final contact information.
3. CMS or admin-managed content, if requested.
4. Backend/API services, if required by future business workflows.
5. Analytics and SEO verification.
6. Production domain and business email verification.
