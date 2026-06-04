import Link from 'next/link'

export function JoinCTASection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-navy"
      aria-labelledby="join-cta-title"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(224,161,6,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(224,161,6,0.08) 0%, transparent 50%)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(237,228,205,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(237,228,205,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/20" />
      </div>

      <div className="container-custom relative z-10 text-center">
        {/* Label */}
        <div className="section-label justify-center mb-6">
          Werde Teil der Bewegung
        </div>

        {/* Headline */}
        <h2
          id="join-cta-title"
          className="font-display uppercase text-white mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          Berlin spielt.
          <br />
          <span className="text-gold">Du auch?</span>
        </h2>

        {/* Divider */}
        <div className="w-16 h-1 bg-gold mx-auto mb-6" />

        {/* Subtext */}
        <p className="section-subtitle mx-auto mb-10 text-ivory/70">
          Ob als Spieler, Elternteil, Gründungspartner oder Fan — bei SC Metropolis 25 Berlin
          ist Platz für alle, die Fußball lieben und Berlin bewegen wollen.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/mitmachen" className="btn-primary btn btn-lg">
            Jetzt Mitmachen
          </Link>
          <Link href="/kontakt" className="btn-outline btn btn-lg">
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Quick paths */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { label: 'Spieler werden',     href: '/mitmachen?role=spieler' },
            { label: 'Gründungspartner werden', href: '/sponsoren#interesse' },
            { label: 'Mitglied werden',    href: '/mitgliedschaft' },
            { label: 'Probetraining',      href: '/mitmachen?type=probetraining' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ivory/50 hover:text-gold text-sm font-heading uppercase tracking-wider transition-colors duration-250 flex items-center gap-1"
            >
              <span className="w-3 h-px bg-current" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
