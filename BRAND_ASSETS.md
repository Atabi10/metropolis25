# Brand assets

## The approved artwork

There is **one** approved SC Metropolis 25 crest. Two files of it exist, for two
different background situations:

| File | Background | Use |
| --- | --- | --- |
| `public/images/logo.png` | transparent | **The crest.** Every on-screen appearance across the dark navy UI. |
| `public/logo.png` | baked-in light | Light surfaces only — SEO structured data, PWA app icon, print exports. Never on dark. |
| `public/images/m25-logo-legacy.png` | transparent | Superseded. Same artwork, looser padding. Kept as the rollback path. |

## Filename convention

All asset filenames are lowercase kebab-case with no spaces. This is not
cosmetic: `next/image` encodes the `src` itself, so a space in a path must
never be pre-encoded as `%20` (that produces `%2520` and a 404), and Linux
build hosts are case-sensitive where macOS is not — a capitalised filename
that works locally will 404 on deploy.

The paths are declared once, in `src/components/ui/BrandMark.tsx`:

```ts
export const CREST_TRANSPARENT = '/images/logo.png'
export const CREST_ON_LIGHT    = '/logo.png'
```

If the artwork is ever replaced, change those two constants and nothing else.

`public/logo.png` is additionally referenced by two files that need an **opaque**
image and therefore must not use the transparent asset:

- `src/app/layout.tsx` — `SportsOrganization` JSON-LD `logo` field. Search engines
  expect a logo on a plain background.
- `public/manifest.json` — PWA icon. Transparent PNGs render as black tiles on
  Android and iOS home screens.

Both are absolute references, not routed through `BrandMark`, because they are
metadata rather than UI.

## The two roles

The crest is applied in two roles. This is a placement system, not two different
logos — the artwork is never recoloured, cropped, redrawn or distorted.

**CREST** — the official club badge.
Navigation, footer, Verein pages, team identity, the home badge on match cards.
Full colour, full opacity, aspect ratio preserved via `object-contain`.

**WATERMARK** — the graphic signature.
Oversized, 4–5 % opacity, sitting behind matchday and editorial sections. Purely
decorative and always `aria-hidden`.

## Components

```tsx
import { BrandMark, BrandWatermark, BrandLockup } from '@/components/ui/BrandMark'

<BrandMark size="lg" glow />           // the badge
<BrandLockup size="sm" priority />     // badge + "SC METROPOLIS / 25 Berlin e.V."
<BrandWatermark opacity={5} />         // oversized decorative signature
```

`size`: `xs` `sm` `md` `lg` `xl`.
`decorative`: hides the mark from assistive technology when it sits next to a
text label that already names the club.
`onLight`: switches to `CREST_ON_LIGHT`. Only use on genuinely light surfaces.

**Do not** import the logo path directly into a page or component. Always go
through these components, so future branding changes stay a one-file edit.

## Where it appears

| Surface | Treatment |
| --- | --- |
| Navbar | `BrandLockup size="sm"`, priority-loaded |
| Mobile menu header | `BrandMark size="xs"` |
| Footer | `BrandLockup size="md"` |
| Next-match card | `BrandMark size="lg" glow` as the home badge, plus `BrandWatermark` behind |
| First-team hero | `BrandMark size="lg" glow` |
| Manifesto block | `BrandMark size="lg" glow` plus watermark |
| Spielbetrieb hero and closing banner | `BrandWatermark` only |

Restraint is deliberate. The crest should feel like a signature, not wallpaper.
