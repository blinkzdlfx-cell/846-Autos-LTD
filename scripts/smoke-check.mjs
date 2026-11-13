import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { access, readFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';

const host = 'http://127.0.0.1:4173';
const server = spawn(
  process.execPath,
  [
    'node_modules/vite/bin/vite.js',
    'preview',
    '--host',
    '127.0.0.1',
    '--port',
    '4173',
    '--strictPort',
  ],
  {
    stdio: 'ignore',
    env: process.env,
  }
);

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    if (server.exitCode !== null)
      throw new Error(`Vite preview exited with code ${server.exitCode}`);
    try {
      const response = await fetch(host);
      if (response.ok) return response;
    } catch {
      // Vite may still be starting.
    }
    await delay(200);
  }
  throw new Error('Vite preview did not become ready within 10 seconds');
}

try {
  const homeResponse = await waitForServer();
  const homeHtml = await homeResponse.text();
  assert.match(
    homeHtml,
    /<div id="root"><\/div>/,
    'production HTML should include the React mount point'
  );

  const jsAsset = homeHtml.match(/src="([^"]+\.js)"/)?.[1];
  assert.ok(jsAsset, 'production HTML should reference a built JavaScript asset');
  const assetResponse = await fetch(new URL(jsAsset, host));
  assert.equal(assetResponse.status, 200, 'the built JavaScript asset should load');

  for (const route of [
    '/',
    '/about',
    '/services',
    '/vehicles',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/this-route-should-404',
  ]) {
    const response = await fetch(new URL(route, host));
    assert.equal(response.status, 200, `SPA fallback should serve the app shell for ${route}`);
    const html = await response.text();
    assert.match(html, /<div id="root"><\/div>/, `route ${route} should return the app shell`);
  }

  const appSource = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
  for (const route of [
    '/about',
    '/services',
    '/vehicles',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ]) {
    assert.match(
      appSource,
      new RegExp(`['"]${route}['"]`),
      `application should include route metadata for ${route}`
    );
  }
  assert.match(
    appSource,
    /event\.key === ["']Escape["']/,
    'Escape should close the mobile navigation'
  );
  assert.match(
    appSource,
    /aria-controls=["']mobile-navigation["']/,
    'mobile menu button should identify its controlled panel'
  );
  assert.match(
    appSource,
    /application\/ld\+json/,
    'application should include JSON-LD structured data'
  );
  assert.match(appSource, /LocalBusiness/, 'JSON-LD should declare LocalBusiness schema');

  const carouselSource = await readFile(
    new URL('../src/components/HeroCarousel.jsx', import.meta.url),
    'utf8'
  );
  assert.match(
    carouselSource,
    /Pause automatic image rotation/,
    'carousel should offer a pause control'
  );
  assert.match(
    carouselSource,
    /onClick=\{\(\) => setIsPlaying\(playing => !playing\)\}/,
    'pause control should toggle autoplay state'
  );
  assert.match(
    carouselSource,
    /z-30/,
    'carousel controls should stack above hero content and remain clickable'
  );
  assert.match(
    carouselSource,
    /\[isPlaying, reduceMotion, slides\.length\]/,
    'autoplay timer should respond to the playing state'
  );
  assert.match(
    carouselSource,
    /useReducedMotion/,
    'carousel should respect reduced-motion preferences'
  );

  assert.doesNotMatch(
    carouselSource,
    /String\(active \+ 1\).*slides\.length/s,
    'hero carousel should not display the current image count'
  );

  const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  assert.match(packageJson.scripts.build, /images:webp/, 'production build should convert local images to WebP before bundling');
  const conversionScript = await readFile(new URL('./convert-images-to-webp.mjs', import.meta.url), 'utf8');
  assert.match(conversionScript, /sharp-cli@6\.1\.0/, 'image conversion should use a pinned sharp-cli version');
  const appSourceForImages = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
  assert.ok(appSourceForImages.includes('846-logo.webp'), 'the shared site logo should use its generated WebP asset');
  assert.ok(!appSourceForImages.includes('846-logo.jpg'), 'the shared site logo should not load the original JPEG');
  const logoProcessor = await readFile(new URL('./remove-logo-background.py', import.meta.url), 'utf8');
  assert.match(logoProcessor, /ImageDraw\.floodfill/, 'logo processing should remove only the edge-connected background');
  assert.match(logoProcessor, /assets\/source\/846-logo-original\.jpg/, 'the original logo should be retained only as a processing source');
  assert.match(logoProcessor, /real_images\/846-logo\.webp/, 'logo processing should generate the transparent WebP used by the site');
  await access(new URL('../real_images/846-logo.webp', import.meta.url));
  await access(new URL('../assets/source/846-logo-original.jpg', import.meta.url));
  await access(new URL('../real_images/846-logo.jpg', import.meta.url)).then(
    () => { throw new Error('the old black-background logo file should be removed'); },
    error => { if (error.code !== 'ENOENT') throw error; }
  );
  const siteDataSource = await readFile(new URL('../src/data/site.js', import.meta.url), 'utf8');
  assert.match(siteDataSource, /AI-\*-16x9\.webp/, 'AI hero images should use generated WebP files');
  assert.doesNotMatch(siteDataSource, /from ['\"][^'\"]+\.jpg['\"]/, 'site data should not import original JPEG files directly');
  assert.ok(siteDataSource.includes("path.endsWith('-16x9.webp')"), 'AI image matching should recognize generated WebP filenames');
  assert.match(siteDataSource, /caption: aiGalleryCaptions/, 'AI gallery images should use customer-friendly captions');
  assert.doesNotMatch(siteDataSource, /caption:\s*`AI landscape|alt:\s*`846 Autos AI landscape/, 'technical image labels must not appear in customer-facing captions or alt text');
  assert.match(
    siteDataSource,
    /export const heroSlides[\s\S]*?\.slice\(0, 20\)/,
    'homepage hero carousel should be capped at 20 slides'
  );
  const localImages = [
    ...new Set(siteDataSource.match(/\/images\/[A-Za-z0-9/_-]+\.(?:webp|jpe?g|png)/g) ?? []),
  ];
  assert.ok(localImages.length > 0, 'site data should reference local event images');
  for (const image of localImages) {
    await access(new URL(`../dist${image}`, import.meta.url)).catch(() => {
      throw new Error(`referenced image ${image} is missing from the production build`);
    });
  }

  const wrangler = JSON.parse(
    await readFile(new URL('../wrangler.jsonc', import.meta.url), 'utf8').then(value =>
      value.replace(/\/\/.*$/gm, '')
    )
  );
  assert.equal(
    wrangler.assets?.directory,
    './dist',
    'Cloudflare should serve the Vite dist directory'
  );
  assert.equal(
    wrangler.assets?.not_found_handling,
    'single-page-application',
    'Cloudflare should enable SPA fallback'
  );

  // Maintenance-mode Worker behaviour and dashboard-controlled runtime flag.
  const { default: maintenanceWorker } = await import('../src/worker.js');
  const maintenanceRoutes = ['/', '/about', '/services', '/contact', '/favicon.svg', '/assets/site.css'];
  let assetFetches = 0;
  const assetBinding = {
    fetch: async request => {
      assetFetches += 1;
      return new Response(`served:${new URL(request.url).pathname}`, { status: 200 });
    },
  };

  for (const route of maintenanceRoutes) {
    const response = await maintenanceWorker.fetch(
      new Request(`https://846autos.com${route}`),
      { MAINTENANCE_MODE: 'true', ASSETS: assetBinding }
    );
    const body = await response.text();
    assert.equal(response.status, 503, `maintenance mode should return 503 for ${route}`);
    assert.match(response.headers.get('cache-control') ?? '', /no-store/, 'maintenance response should not be cached');
    assert.match(response.headers.get('x-robots-tag') ?? '', /noindex/, 'maintenance response should not be indexed');
    assert.match(body, /846 Autos Limited/, `maintenance response should use 846 Autos branding for ${route}`);
  }
  assert.equal(assetFetches, 0, 'maintenance mode should intercept before static asset handling');

  const headResponse = await maintenanceWorker.fetch(
    new Request('https://846autos.com/contact', { method: 'HEAD' }),
    { MAINTENANCE_MODE: 'true', ASSETS: assetBinding }
  );
  assert.equal(headResponse.status, 503, 'maintenance mode should handle HEAD requests');
  assert.equal(await headResponse.text(), '', 'HEAD maintenance response should not contain a body');

  const restoredResponse = await maintenanceWorker.fetch(
    new Request('https://846autos.com/about'),
    { MAINTENANCE_MODE: 'false', ASSETS: assetBinding }
  );
  assert.equal(restoredResponse.status, 200, 'maintenance mode off should restore normal asset handling');
  assert.equal(await restoredResponse.text(), 'served:/about', 'normal requests should be forwarded to Workers Static Assets');

  assert.equal(wrangler.main, 'src/worker.js', 'Cloudflare should use the maintenance-aware Worker entry point');
  assert.equal(wrangler.assets?.binding, 'ASSETS', 'Worker should have a named static asset binding');
  assert.equal(wrangler.keep_vars, true, 'Wrangler should preserve dashboard-managed variables');
  assert.equal(wrangler.assets?.run_worker_first, true, 'Cloudflare should invoke the Worker before serving every static asset');
  await access(new URL('../src/worker.js', import.meta.url));
  await access(new URL('../docs/MAINTENANCE_MODE.md', import.meta.url));

  console.log(
    'Smoke checks passed: production bundle, direct route fallback, mobile keyboard access, clickable carousel controls, local image assets, and Cloudflare SPA configuration.'
  );
} finally {
  server.kill('SIGTERM');
}
