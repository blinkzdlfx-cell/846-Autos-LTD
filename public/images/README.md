# Image assets

## Event photography (`public/images/event/`)

Real 846 Lounge imagery taken from the Official Opening video (Saturday 26th September). Frames were selected so that no individual guest is the subject of any image, and were exported as optimised WebP.

| Prefix | Used for | Size |
| --- | --- | --- |
| `hero-*.webp` | Homepage hero carousel (`heroSlides` in `src/data/site.js`) | 1600×2844 (full 9:16 frame) |
| `service-*.webp` | Lounge & Bar and Drinks & Refreshments cards (`services`) | 1200×2133 (full 9:16 frame) |
| `gallery-*.webp` | "The official opening" gallery (`eventGallery`) | 900×1600 |

The hero and service assets are the **full 9:16 source frames**, not crops. The layout is wider than the photo, so `BlurredFrame` (`src/components/BlurredFrame.jsx`) renders the photo sharp in the centre and extends its edges into a blurred backdrop — the sides are never cut off.

Notes:

- Source frames are 1080×1920. The hero/service WebPs are downscaled to the widths above; replace them with the original high-resolution photographs when available (keep the same filenames, or update `src/data/site.js`).
- Several frames carry the videographer's watermark ("Shot by Teedee"). Keep it unless the videographer agrees to a clean copy, and confirm usage permission with them.
- The blurred backdrop brings the edges of frames 006 (signboard phone strip) and 010 (outdoor sign address block) into view. They are illegible, but present. Frame 013, where the address is fully legible, is excluded entirely. Confirm with the owner before launch (see `AGENTS.md`).
- Owner approval is still required before launch (see `AGENTS.md`).

## Still using temporary stock imagery

These have no matching real photo yet: DJ & Entertainment, Snooker, Car Wash, Vehicle Sales and Clearing & Forwarding service cards, and the Vehicles page. Replace them with owner-approved photography of the real snooker tables, car wash, vehicles and logistics work.

The UI intentionally does not invent company imagery.
