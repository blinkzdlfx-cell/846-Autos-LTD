# Design System — 846 Autos Demo

**Status: Living Draft**

## Core principle
Use one coherent styling system rather than combining competing UI frameworks.

### Current decision
- Tailwind CSS — primary styling/layout system
- shadcn/ui — reusable UI components
- Motion — animation system
- Lucide — icon system
- Bootstrap — intentionally not used

This avoids duplicated components, conflicting defaults, and unnecessary overrides.

## Visual direction
Working direction: premium automotive + modern lifestyle + entertainment. The design should move naturally between vehicles, logistics, car care, lounge, and snooker without feeling like separate websites.

## Hero
Expected to be the strongest visual element. Potential characteristics: large/full-bleed imagery, automatic image transitions, dark overlays where needed, animated headline, controlled word rotation, letter/character transitions, supporting copy, CTAs, and responsive mobile composition.

Animation should feel intentional rather than chaotic.

## Motion principles
Possible techniques include fade, slide, scale, blur-to-sharp, clip/reveal, stagger, character/word transitions, image zoom, hover transitions, and scroll-triggered reveals. Avoid animating everything; establish a consistent motion language.

## UI principles
Strong typography hierarchy, generous spacing, high-quality imagery, consistent radii and elevation, clear hover/focus states, intentional responsive behavior, and minimal decorative UI.

Exact colors, typography, radii, shadows, and tokens remain open until visual exploration is refined.

## Component philosophy
Prefer reusable components and variants: navigation, mobile navigation sheet, hero, section heading, service card, vehicle card, gallery item, CTA, buttons, footer, image carousel, and animated text. Use shadcn/ui where appropriate; do not force every element into a prebuilt component.

## Responsive principle
Mobile is a first-class layout, not desktop compressed to a small screen.