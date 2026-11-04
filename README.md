# 846 Autos Limited

Premium React/Vite website for 846 Autos Limited.

## Status

Production-ready frontend demo for owner review.

## Stack

React, Vite, Tailwind CSS v4, shadcn/ui conventions, Motion, Lucide icons and Cloudflare Workers Static Assets.

## Features

- Responsive premium automotive/lifestyle presentation
- Automatic hero image carousel with pause/resume controls
- Continuously cycling hero wording
- Mobile navigation with Escape-to-close and keyboard access
- Scroll-based reveal animations (respects reduced-motion)
- Service presentation (Lounge & Bar, Snooker, Car Wash, Vehicle Sales, Clearing & Forwarding)
- Inventory-ready vehicle section without fabricated listings
- Experience section for car wash, lounge and snooker
- Contact area with verified phone/WhatsApp channels and contact form
- Legal pages: Privacy Policy and Terms of Service
- SEO: per-route metadata, Open Graph tags, JSON-LD LocalBusiness schema, sitemap.xml
- Reduced-motion support
- Security headers and favicon/robots assets

## Contact

- Phone: 09075505454
- WhatsApp: 07033301798
- Email: enquiries@846autos.com

## Content rule

Business facts, inventory, prices, testimonials, contact channels and other operational details must be verified before being presented as real. Temporary visual assets are for the demo only.

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build to `dist`
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint on source
- `npm run lint:fix` — auto-fix ESLint issues
- `npm run format` — format code with Prettier
- `npm run test:smoke` — run smoke tests on production build
- `npm run deploy` — deploy to Cloudflare Workers

## Deployment

See docs/DEPLOYMENT.md. Cloudflare Workers uses `npm run build` and `dist` for this React/Vite project.
