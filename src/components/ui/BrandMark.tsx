import Image from 'next/image'
import { clsx } from 'clsx'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SC METROPOLIS 25 — BRAND MARK SYSTEM
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * One approved crest artwork, applied in two roles:
 *
 *   BrandMark      the official club badge — navigation, footer, team identity,
 *                  matchday cards. Full colour, full opacity.
 *   BrandWatermark the same artwork oversized at low opacity, as a graphic
 *                  signature behind matchday and editorial sections.
 *
 * The artwork is never cropped, recoloured or redrawn. Only scale, position
 * and opacity are ever adjusted.
 *
 * Asset paths are declared once, below. To replace the crest, change only
 * those constants — nothing else in the codebase references a logo path.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── ASSETS ──────────────────────────────────────────────────────────────────

/**
 * The official club crest — genuine alpha channel, verified transparent
 * (~34% of pixels fully transparent, clean edges). Used for every on-screen
 * appearance of the badge across the dark navy UI.
 *
 * Any replacement MUST have a real alpha channel. A PNG saved in RGBA mode is
 * not enough: an opaque image can still be RGBA with alpha 255 everywhere,
 * which renders as a white rectangle on the navy background. Verify with:
 *
 *   python3 -c "from PIL import Image; \
 *     print(Image.open('public/images/crest.png').convert('RGBA') \
 *     .getchannel('A').getextrema())"
 *
 * Expect (0, 255). If it prints (255, 255), the file is opaque — do not use it
 * here; it belongs at CREST_ON_LIGHT instead.
 */
export const CREST_TRANSPARENT = '/images/crest.png'

/**
 * Official crest with a baked-in light background (opaque, alpha 255 across).
 * LIGHT SURFACES ONLY — on the dark navy UI this renders as a white box.
 * Also referenced directly (not via this module) by the SEO structured data in
 * app/layout.tsx and by manifest.json, both of which require an opaque image.
 */
export const CREST_ON_LIGHT = '/images/crest-on-light.png'

export const CREST_ALT = 'SC Metropolis 25 Berlin e.V. — Vereinswappen'

// ─── SIZING ──────────────────────────────────────────────────────────────────

type BrandMarkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const SIZE_CLASSES: Record<BrandMarkSize, string> = {
  xs: 'w-8 h-8',
  sm: 'w-10 h-10 md:w-12 md:h-12',
  md: 'w-14 h-14',
  lg: 'w-20 h-20 md:w-24 md:h-24',
  xl: 'w-28 h-28 md:w-36 md:h-36',
}

/**
 * Rendered width at the largest breakpoint, so next/image picks a sensible
 * source. The browser still upgrades to a 2x candidate on retina displays.
 */
const SIZE_HINTS: Record<BrandMarkSize, string> = {
  xs: '32px',
  sm: '48px',
  md: '56px',
  lg: '96px',
  xl: '144px',
}

// ─── CREST ───────────────────────────────────────────────────────────────────

interface BrandMarkProps {
  size?: BrandMarkSize
  /** Use the light-background artwork. Light surfaces only. */
  onLight?: boolean
  /** Soft gold glow — for hero and matchday contexts. */
  glow?: boolean
  priority?: boolean
  className?: string
  /**
   * Decorative usage: the crest sits next to a text label that already names
   * the club, so it is hidden from assistive technology to avoid repetition.
   */
  decorative?: boolean
}

/**
 * The official club crest. Aspect ratio is always preserved via object-contain.
 *
 * The root is a <span class="block">, not a <div>: BrandLockup nests this
 * inside a <span> inside an <a>, and a block element there is invalid HTML
 * that trips React's DOM-nesting validation.
 */
export function BrandMark({
  size = 'sm',
  onLight = false,
  glow = false,
  priority = false,
  className,
  decorative = false,
}: BrandMarkProps) {
  return (
    <span className={clsx('relative block shrink-0', SIZE_CLASSES[size], className)}>
      <Image
        src={onLight ? CREST_ON_LIGHT : CREST_TRANSPARENT}
        // An empty alt already removes the image from the accessibility tree.
        alt={decorative ? '' : CREST_ALT}
        fill
        sizes={SIZE_HINTS[size]}
        priority={priority}
        className={clsx(
          'object-contain',
          glow ? 'drop-shadow-[0_0_24px_rgba(224,161,6,0.35)]' : 'drop-shadow-md',
        )}
      />
    </span>
  )
}

// ─── WATERMARK ───────────────────────────────────────────────────────────────

const ALIGN_CLASSES: Record<'left' | 'center' | 'right', string> = {
  left: 'object-left',
  center: 'object-center',
  right: 'object-right',
}

/** Callers that pass no className get a half-width mark on the right edge. */
const WATERMARK_DEFAULT_BOX = 'inset-y-0 right-0 w-1/2'

interface BrandWatermarkProps {
  /** 0–100. Kept deliberately low so the mark never competes with content. */
  opacity?: number
  /** Horizontal anchor of the artwork inside the watermark box. */
  align?: 'left' | 'center' | 'right'
  /**
   * Positioning and dimensions of the watermark box. Must establish a size,
   * either explicitly (w-/h-) or by filling the parent (inset-0).
   */
  className?: string
  /**
   * Overrides the `sizes` hint. Worth setting when the box is much smaller
   * than the default assumption, to avoid fetching an oversized source.
   */
  sizes?: string
}

/**
 * Oversized, low-opacity crest used as a graphic signature behind matchday
 * and editorial sections. Purely decorative — always hidden from assistive
 * technology.
 */
export function BrandWatermark({
  opacity = 4,
  align = 'center',
  className,
  sizes = '(max-width: 768px) 60vw, 450px',
}: BrandWatermarkProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'pointer-events-none absolute select-none',
        className ?? WATERMARK_DEFAULT_BOX,
      )}
      style={{ opacity: opacity / 100 }}
    >
      <Image
        src={CREST_TRANSPARENT}
        alt=""
        fill
        sizes={sizes}
        className={clsx('object-contain', ALIGN_CLASSES[align])}
      />
    </div>
  )
}

// ─── LOCKUP ──────────────────────────────────────────────────────────────────

interface BrandLockupProps {
  /** Renders the wordmark next to the crest. */
  showWordmark?: boolean
  /**
   * Hides the wordmark below the `xs` breakpoint (480px), leaving just the
   * crest. Used in the navbar, where horizontal space is contested. The footer
   * has room, so it keeps the wordmark at every width.
   */
  hideWordmarkOnMobile?: boolean
  size?: BrandMarkSize
  priority?: boolean
  className?: string
}

/**
 * Crest + wordmark lockup used in the navigation bar and footer.
 * Renders as phrasing content throughout so it can sit inside an <a>.
 */
export function BrandLockup({
  showWordmark = true,
  hideWordmarkOnMobile = false,
  size = 'sm',
  priority = false,
  className,
}: BrandLockupProps) {
  return (
    <span className={clsx('flex items-center gap-3', className)}>
      <BrandMark
        size={size}
        priority={priority}
        decorative
        className="transition-transform duration-300 group-hover:scale-105"
      />
      {showWordmark && (
        <span className={clsx('block', hideWordmarkOnMobile && 'hidden xs:block')}>
          <span className="block font-display text-white text-lg leading-none tracking-wide">
            SC METROPOLIS
          </span>
          <span className="block text-gold text-xs font-heading font-semibold tracking-[0.2em] uppercase mt-0.5">
            25 Berlin e.V.
          </span>
        </span>
      )}
    </span>
  )
}
