# Maintenance mode — 846 Autos Limited

## Control

Maintenance mode is controlled independently on the Cloudflare Worker named `846-autos-ltd`.

1. Open Cloudflare Dashboard → **Workers & Pages** → **846-autos-ltd**.
2. Open **Settings** → **Variables and Secrets**.
3. Add or edit a **Text** variable named `MAINTENANCE_MODE`.
4. Set its value to `true` to show the 846 Autos maintenance page, or `false` to restore the full website.
5. Save and deploy the Worker configuration.

If the variable is absent, maintenance mode is off. The setting is case-insensitive, but use lowercase `true` and `false` for clarity.

## Behaviour

- The static-assets configuration sets `run_worker_first: true`, so a small Cloudflare Worker checks the setting before forwarding requests to Workers Static Assets for every request.
- While enabled, every request—including the homepage, nested routes, and static assets—receives the 846 Autos-branded maintenance page.
- Responses use HTTP `503 Service Unavailable`, `Cache-Control: no-store`, and `X-Robots-Tag: noindex, nofollow, noarchive`.
- A `HEAD` request receives the same status and headers without a response body.
- When the setting is false, the Worker forwards requests to the existing `dist` asset directory and preserves the configured single-page-app fallback.

## Persistence

`wrangler.jsonc` sets `keep_vars: true` so a dashboard-managed maintenance setting is retained by later Wrangler deployments. This is a plain configuration value, not a secret.

This control affects only the `846-autos-ltd` Worker. It does not change Bukana Brilliant Schools.
