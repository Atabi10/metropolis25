import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vereinsausstattung — SC Metropolis 25 Berlin',
  description:
    'Die offizielle Vereinskollektion von SC Metropolis 25 Berlin e.V. in Vorbereitung — Navy, Gold und Ivory. Heimtrikot, Auswärtstrikot und Third Kit.',
}

// ─── CLUB PALETTE ─────────────────────────────────────────────────────────────
const colors = [
  {
    name: 'Navy',
    hex: '#002855',
    role: 'Primärfarbe',
    meaning: 'Stabilität, Zusammenhalt, Identität',
    textClass: 'text-white',
  },
  {
    name: 'Gold',
    hex: '#E0A106',
    role: 'Akzentfarbe',
    meaning: 'Ambition, Entwicklung, sportlicher Anspruch',
    textClass: 'text-navy',
  },
  {
    name: 'Ivory',
    hex: '#F5F0E8',
    role: 'Kontrastfarbe',
    meaning: 'Fairness, Offenheit, Respekt',
    textClass: 'text-navy',
  },
]

// ─── KIT DATA ─────────────────────────────────────────────────────────────────
const kits = [
  {
    id: 'home',
    label: 'Heimtrikot',
    tag: 'Home',
    description:
      'Der klassische Metropolis-Look für Heimspiele und Vereinsidentität.',
    // shirt, collar, sleeve stripe, number
    shirt:  '#002855',
    collar: '#E0A106',
    stripe: '#E0A106',
    number: '#F5F0E8',
    badge:  '#E0A106',
    detail: 'Navy · Gold · Ivory',
  },
  {
    id: 'away',
    label: 'Auswärtstrikot',
    tag: 'Away',
    description:
      'Ein klarer und moderner Auftritt für Auswärtsspiele.',
    shirt:  '#F5F0E8',
    collar: '#002855',
    stripe: '#002855',
    number: '#E0A106',
    badge:  '#002855',
    detail: 'Ivory · Navy · Gold',
  },
  {
    id: 'third',
    label: 'Third Kit',
    tag: 'Third',
    description:
      'Ein mutiger Look für besondere Spiele und Vereinsmomente.',
    shirt:  '#E0A106',
    collar: '#002855',
    stripe: '#002855',
    number: '#002855',
    badge:  '#002855',
    detail: 'Gold · Navy',
  },
]

// ─── SVG SHIRT ────────────────────────────────────────────────────────────────
function KitShirt({
  shirt, collar, stripe, number, badge, label,
}: {
  shirt: string; collar: string; stripe: string
  number: string; badge: string; label: string
}) {
  // Darken shirt slightly for shadow areas
  const isDark = shirt === '#002855'
  const shadow = isDark ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.10)'

  return (
    <svg
      viewBox="0 0 220 240"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${label} Trikot`}
      role="img"
      className="w-full max-w-[200px] mx-auto drop-shadow-xl"
    >
      <defs>
        <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={shirt} stopOpacity="1" />
          <stop offset="100%" stopColor={shirt} stopOpacity="0.85" />
        </linearGradient>
        <filter id={`shadow-${label}`}>
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={shadow} />
        </filter>
      </defs>

      {/* ── Main shirt body ── */}
      <path
        d="
          M 68 28
          C 78 28, 88 22, 110 22
          C 132 22, 142 28, 152 28
          L 195 52
          L 178 78
          L 162 66
          L 162 218
          L 58 218
          L 58 66
          L 42 78
          L 25 52
          Z
        "
        fill={`url(#grad-${label})`}
        filter={`url(#shadow-${label})`}
        stroke={shadow}
        strokeWidth="0.5"
      />

      {/* ── Sleeve accent stripe (left) ── */}
      <path
        d="M 58 66 L 42 78 L 25 52 L 68 28 L 74 42 Z"
        fill={stripe}
        opacity="0.55"
      />

      {/* ── Sleeve accent stripe (right) ── */}
      <path
        d="M 162 66 L 178 78 L 195 52 L 152 28 L 146 42 Z"
        fill={stripe}
        opacity="0.55"
      />

      {/* ── Collar (V-neck) ── */}
      <path
        d="M 88 26 L 110 58 L 132 26"
        fill="none"
        stroke={collar}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Collar inner highlight ── */}
      <path
        d="M 88 26 L 110 58 L 132 26"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* ── Shoulder seam lines ── */}
      <line x1="68" y1="28" x2="58" y2="66" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <line x1="152" y1="28" x2="162" y2="66" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />

      {/* ── Badge placeholder (left chest) ── */}
      <rect x="74" y="76" width="24" height="24" rx="2"
        fill={badge} opacity="0.9" />
      <text x="86" y="93" textAnchor="middle"
        fontFamily="serif" fontSize="10" fontWeight="bold"
        fill={shirt === '#F5F0E8' ? '#F5F0E8' : '#002855'}
        opacity="0.9">
        M
      </text>

      {/* ── Squad number ── */}
      <text
        x="124" y="168"
        textAnchor="middle"
        fontFamily="'Bebas Neue', 'Arial Narrow', Arial, sans-serif"
        fontSize="72"
        fontWeight="bold"
        fill={number}
        opacity="0.85"
        letterSpacing="-2"
      >
        25
      </text>

      {/* ── Bottom hem stripe ── */}
      <rect x="58" y="208" width="104" height="10" rx="0"
        fill={stripe} opacity="0.4" />
    </svg>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AusstattungPage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.4) 0, rgba(224,161,6,0.4) 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container-custom relative z-10">
          {/* Coming soon badge */}
          <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/5 px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold font-heading text-xs uppercase tracking-[0.25em]">
              Offizielle Vereinskollektion in Vorbereitung
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            Unsere<br />
            <span className="text-gold-gradient">Vereinsausstattung</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-8" />

          <p className="text-ivory/75 font-heading text-base md:text-lg leading-relaxed max-w-2xl mb-3">
            Die erste offizielle Vereinskollektion des SC Metropolis 25 Berlin e.V. befindet
            sich aktuell in Vorbereitung.
          </p>
          <p className="text-ivory/60 text-sm leading-relaxed max-w-xl mb-3">
            Die Gestaltung orientiert sich an unseren Vereinsfarben Navy, Gold und Ivory
            und soll die Werte unseres Vereins widerspiegeln: Zusammenhalt, Ambition
            und Fairness.
          </p>
          <p className="text-ivory/60 text-sm leading-relaxed max-w-xl">
            Die Kollektion wird rechtzeitig vor dem geplanten Einstieg in den organisierten
            Spielbetrieb vorgestellt.
          </p>
        </div>
      </section>

      {/* ── Club Colors ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-dark border-b border-dark-border">
        <div className="container-custom">
          <div className="mb-10">
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-3">
              Vereinsfarben
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white uppercase">
              Navy · Gold · Ivory
            </h2>
            <div className="w-12 h-1 bg-gold mt-4" />
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {colors.map((c) => (
              <div key={c.name} className="group overflow-hidden border border-dark-border hover:border-gold/30 transition-colors duration-300">
                {/* Color block */}
                <div
                  className="h-32 md:h-40 w-full relative"
                  style={{ backgroundColor: c.hex }}
                >
                  {/* Hex label */}
                  <span
                    className={`absolute bottom-3 right-4 font-mono text-xs uppercase tracking-wider opacity-60 ${c.textClass}`}
                  >
                    {c.hex}
                  </span>
                </div>

                {/* Info */}
                <div className="bg-dark-card p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-2xl text-white uppercase leading-none">
                      {c.name}
                    </h3>
                    <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5 shrink-0">
                      {c.role}
                    </span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {c.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kit Concepts ──────────────────────────────────────── */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <div className="mb-12">
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-3">
              Trikot-Konzepte
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white uppercase">
              Die drei Kits
            </h2>
            <div className="w-12 h-1 bg-gold mt-4" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {kits.map((kit, i) => (
              <div key={kit.id} className="group">
                {/* Kit card */}
                <div className="relative bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-300 overflow-hidden hover:-translate-y-1">

                  {/* Top accent line */}
                  <div
                    className="h-[3px] w-full"
                    style={{ backgroundColor: kit.collar }}
                  />

                  {/* Shirt display area */}
                  <div
                    className="relative flex items-center justify-center py-10 px-6"
                    style={{
                      background: kit.id === 'home'
                        ? 'linear-gradient(135deg, #001a3a 0%, #002855 100%)'
                        : kit.id === 'away'
                        ? 'linear-gradient(135deg, #1a1a1a 0%, #0a0d14 100%)'
                        : 'linear-gradient(135deg, #1a1400 0%, #0a0d14 100%)',
                    }}
                  >
                    {/* Kit number badge */}
                    <div className="absolute top-3 left-4">
                      <span className="font-display text-5xl leading-none"
                        style={{ color: kit.shirt === '#F5F0E8' ? 'rgba(245,240,232,0.08)' : 'rgba(255,255,255,0.04)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <KitShirt
                      shirt={kit.shirt}
                      collar={kit.collar}
                      stripe={kit.stripe}
                      number={kit.number}
                      badge={kit.badge}
                      label={kit.label}
                    />
                  </div>

                  {/* Kit info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                        {kit.label}
                      </h3>
                      <span className="text-[10px] font-heading uppercase tracking-wider border px-2 py-0.5"
                        style={{ borderColor: kit.collar + '60', color: kit.collar }}>
                        {kit.tag}
                      </span>
                    </div>

                    {/* Color palette dots */}
                    <div className="flex items-center gap-2 mb-4">
                      {[kit.shirt, kit.collar, kit.number].filter((v, i, a) => a.indexOf(v) === i).map((hex) => (
                        <div
                          key={hex}
                          className="w-4 h-4 rounded-full border border-dark-border"
                          style={{ backgroundColor: hex }}
                          title={hex}
                        />
                      ))}
                      <span className="text-text-muted text-xs ml-1">{kit.detail}</span>
                    </div>

                    <p className="text-text-muted text-xs leading-relaxed italic">
                      &ldquo;{kit.description}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="mt-12 p-6 border border-gold/20 bg-navy/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse mt-1 shrink-0" />
              <div>
                <p className="text-white font-heading text-sm font-semibold uppercase tracking-wide mb-1">
                  Kollektion in Vorbereitung
                </p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Die offiziellen Trikots und Vereinskleidung werden rechtzeitig
                  vor dem BFV-Ligastart Saison 2026/27 vorgestellt.
                  Halte unsere sozialen Kanäle im Blick für erste Einblicke.
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/metropolis25_berlin/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn btn-sm text-xs shrink-0"
            >
              Instagram folgen →
            </a>
          </div>
        </div>
      </section>

      {/* ── Identity statement ────────────────────────────────── */}
      <section className="py-16 bg-navy border-t border-dark-border">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#002855] border border-dark-border" />
            <div className="w-3 h-3 rounded-full bg-gold" />
            <div className="w-3 h-3 rounded-full bg-ivory" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-4">
            Eine Farbe. Eine Identität.{' '}
            <span className="text-gold-gradient">Ein Verein.</span>
          </h2>
          <p className="text-ivory/65 text-sm leading-relaxed mb-8 max-w-xl mx-auto font-heading">
            Navy für Stabilität und Zusammenhalt. Gold für Ambition und Entwicklung.
            Ivory für Fairness und Offenheit. Diese drei Farben sind mehr als ein
            Design — sie sind das Fundament unserer Vereinsidentität.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/verein" className="btn-primary btn">
              Über den Verein
            </Link>
            <Link href="/mitmachen" className="btn-outline btn">
              Jetzt mitmachen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
