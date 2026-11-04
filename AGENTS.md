# AI Coding Instructions

## Project overview

This repository is a React 19 + Vite 7 single-page frontend deployed to Cloudflare Workers using Workers Static Assets. Tailwind CSS v4 is integrated through the Vite plugin. The Cloudflare configuration is `wrangler.jsonc`; the Vite production output is `dist/`.

## Required workflow

Before changing deployment, dependency, or build configuration:

1. Read `docs/DEPLOYMENT.md`.
2. Treat `package.json` and `package-lock.json` as one dependency contract.
3. Preserve the existing Worker name and static asset settings unless the task explicitly requires changing them.
4. Run the clean install, production build, and smoke test commands below.

## Required verification

```bash
npm ci --no-audit --no-fund
npm run build
npm run test:smoke
```

All three commands must pass before declaring a build/deployment fix complete.

## Dependency conflict history — do not repeat

The November 4, 2026 Cloudflare build failure was caused by Babel major-version incompatibility: Babel 8 parser/preset packages were declared alongside tooling that requires Babel 7, including `@babel/eslint-parser` and the Babel core dependency used by the project.

The dependency declarations were corrected to compatible Babel 7.x packages and the lockfile was regenerated.

- Do not upgrade the Babel parser or presets to 8.x unless the full toolchain is deliberately migrated and verified.
- Do not add `--legacy-peer-deps` to hide peer-dependency errors.
- Do not replace `npm ci` with an unpinned `npm install` in CI.
- When dependencies change, regenerate and commit `package-lock.json` together with `package.json`.
- If a clean install fails, diagnose the exact peer-dependency chain instead of bypassing npm validation.

## Deployment boundaries

- GitHub Actions builds and smoke-tests; it does not deploy.
- Cloudflare Workers Builds is responsible for deployment from `main` when its Git integration is connected.
- The Cloudflare Workers Builds build command is `npm run build`.
- The deploy command is `npm run deploy`.
- Do not put dependency installation commands inside the Cloudflare build command; Workers Builds manages dependency installation.
- Do not claim production deployment succeeded without checking Cloudflare's deployment result.

## Application boundaries

The current project is a frontend-only site. Do not invent backend, database, authentication, payment, CMS, admin-dashboard, inventory, business-address, or testimonial functionality. Business facts and final imagery must be owner-approved.

Keep changes focused, preserve existing design behavior, and update the relevant documentation when a root cause or deployment rule changes.
