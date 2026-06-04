import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'

export function JoinCTASection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-navy"
      aria-labelledby="join-cta-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(224,161,6,0.10) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(224,161,6,0.06) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(rgba(237,228,205,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(237,228,205,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/20" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <p className="text-gold font-heading text-xs uppercase tracking-[0.35em] mb-6">
          Werde Teil der Bewegung
        </p>

        <h2
          id="join-cta-title"
          className="font-display uppercase text-white mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          Berlin spielt.
          <br />
          <span className="text-gold-gradient">Du auch?</span>
        </h2>

        <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />

        <p className="text-ivory/65 font-heading text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Ob als Spieler, Elternteil, Gründungspartner oder Fan —
          bei SC Metropolis 25 Berlin ist Platz für alle, die Fußball
          lieben und diese Stadt bewegen wollen.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href="/mitmachen" className="btn-primary btn btn-lg group inline-flex items-center gap-2">
            <span>Probetraining anfragen</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link href="/kontakt" className="btn-outline btn btn-lg">
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Secondary paths */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {[
            { label: 'Spieler werden',              href: '/mitmachen' },
            { label: 'Gründungspartner werden',     href: '/partner-werden' },
            { label: 'Mitglied werden',             href: '/mitgliedschaft' },
            { label: 'Unsere Geschichte lesen',     href: '/verein/geschichte' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ivory/45 hover:text-gold text-xs font-heading uppercase tracking-wider transition-colors duration-200 flex items-center gap-2"
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
