const MAINTENANCE_HTML = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"robots\" content=\"noindex, nofollow, noarchive\">\n  <meta name=\"theme-color\" content=\"#090909\">\n  <title>Temporarily Unavailable | 846 Autos Limited</title>\n  <style>\n    :root{color-scheme:dark;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif}\n    *{box-sizing:border-box}\n    body{margin:0;min-height:100vh;display:grid;place-items:center;padding:28px;background:radial-gradient(ellipse at 50% 0%,rgba(190,157,91,.13),transparent 56%),#090909;color:#f5f2eb}\n    main{width:min(100%,700px);text-align:center;padding:clamp(32px,7vw,72px);background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));border:1px solid rgba(205,177,119,.24);border-radius:26px;box-shadow:0 28px 90px rgba(0,0,0,.4)}\n    .brand{display:inline-flex;align-items:center;gap:12px;margin:0;color:#f6f2e9;font-size:13px;font-weight:800;letter-spacing:.2em;text-transform:uppercase}\n    .brand-mark{display:grid;place-items:center;width:48px;height:48px;border:1px solid rgba(205,177,119,.6);border-radius:14px;color:#d7bc83;font-size:17px;letter-spacing:-.08em}\n    .eyebrow{margin:34px 0 0;color:#c9ad75;font-size:11px;font-weight:700;letter-spacing:.24em;text-transform:uppercase}\n    h1{max-width:560px;margin:16px auto;color:#fff;font-size:clamp(34px,6vw,52px);line-height:1.06;letter-spacing:-.05em}\n    .message{max-width:490px;margin:0 auto;color:#aaa69d;font-size:16px;line-height:1.85}\n    .divider{width:54px;height:1px;margin:32px auto;background:#b99b61}\n    .foot{margin:0;color:#827e75;font-size:13px;letter-spacing:.02em}\n  </style>\n</head>\n<body>\n  <main aria-labelledby=\"maintenance-title\">\n    <p class=\"brand\"><span class=\"brand-mark\" aria-hidden=\"true\">846</span><span>Autos Limited</span></p>\n    <p class=\"eyebrow\">A short pause while we improve</p>\n    <h1 id=\"maintenance-title\">We’ll be back shortly.</h1>\n    <p class=\"message\">The 846 Autos website is temporarily unavailable while we make a few improvements. Please check back soon.</p>\n    <div class=\"divider\" aria-hidden=\"true\"></div>\n    <p class=\"foot\">Thank you for your understanding.</p>\n  </main>\n</body>\n</html>";

function isMaintenanceEnabled(env) {
  return String(env.MAINTENANCE_MODE ?? '').trim().toLowerCase() === 'true';
}

function maintenanceResponse(request) {
  const headers = {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': 'no-store, no-cache, must-revalidate',
    'x-robots-tag': 'noindex, nofollow, noarchive',
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'strict-origin-when-cross-origin',
  };

  return new Response(request.method === 'HEAD' ? null : MAINTENANCE_HTML, {
    status: 503,
    statusText: 'Service Unavailable',
    headers,
  });
}

export default {
  async fetch(request, env) {
    // Run before static asset handling so every route and asset is covered.
    if (isMaintenanceEnabled(env)) {
      return maintenanceResponse(request);
    }

    return env.ASSETS.fetch(request);
  },
};
