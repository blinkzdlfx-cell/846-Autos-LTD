import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";

const host = "http://127.0.0.1:4173";
const server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", "4173", "--strictPort"], {
  stdio: "ignore",
  env: process.env
});

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`Vite preview exited with code ${server.exitCode}`);
    try {
      const response = await fetch(host);
      if (response.ok) return response;
    } catch {
      // Vite may still be starting.
    }
    await delay(200);
  }
  throw new Error("Vite preview did not become ready within 10 seconds");
}

try {
  const homeResponse = await waitForServer();
  const homeHtml = await homeResponse.text();
  assert.match(homeHtml, /<div id="root"><\/div>/, "production HTML should include the React mount point");

  const jsAsset = homeHtml.match(/src="([^"]+\.js)"/)?.[1];
  assert.ok(jsAsset, "production HTML should reference a built JavaScript asset");
  const assetResponse = await fetch(new URL(jsAsset, host));
  assert.equal(assetResponse.status, 200, "the built JavaScript asset should load");

  for (const route of ["/", "/about", "/services", "/vehicles", "/contact", "/this-route-should-404"]) {
    const response = await fetch(new URL(route, host));
    assert.equal(response.status, 200, `SPA fallback should serve the app shell for ${route}`);
    const html = await response.text();
    assert.match(html, /<div id="root"><\/div>/, `route ${route} should return the app shell`);
  }

  const appSource = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  for (const route of ["/about", "/services", "/vehicles", "/contact"]) {
    assert.ok(appSource.includes(`"${route}"`), `application should include route metadata for ${route}`);
  }
  assert.match(appSource, /event\.key === "Escape"/, "Escape should close the mobile navigation");
  assert.match(appSource, /aria-controls="mobile-navigation"/, "mobile menu button should identify its controlled panel");

  const carouselSource = await readFile(new URL("../src/components/HeroCarousel.jsx", import.meta.url), "utf8");
  assert.match(carouselSource, /Pause automatic image rotation/, "carousel should offer a pause control");
  assert.match(carouselSource, /useReducedMotion/, "carousel should respect reduced-motion preferences");

  const wrangler = JSON.parse(await readFile(new URL("../wrangler.jsonc", import.meta.url), "utf8").then((value) => value.replace(/\/\/.*$/gm, "")));
  assert.equal(wrangler.assets?.directory, "./dist", "Cloudflare should serve the Vite dist directory");
  assert.equal(wrangler.assets?.not_found_handling, "single-page-application", "Cloudflare should enable SPA fallback");

  console.log("Smoke checks passed: production bundle, direct route fallback, mobile keyboard access, carousel controls, and Cloudflare SPA configuration.");
} finally {
  server.kill("SIGTERM");
}
