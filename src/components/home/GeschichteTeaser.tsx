'use client'

import { ArrowRight, Clock } from 'lucide-react'
import { Link } from '@/i18n/navigation'

const milestones = [
  { year: '2019', text: 'Erste Ballkontakte auf Berliner Bolzplätzen' },
  { year: '2022', text: 'Gewinn des Symposium Mboa Turniers — der Kern wächst zusammen' },
  { year: '2025', text: 'Vereinsgründung: SC Metropolis 25 Berlin e.V.' },
  { year: '2026', text: 'Gemeinnützigkeit §60a AO · 37+ Mitglieder · BFV in Vorbereitung' },
]

export function GeschichteTeaser() {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      aria-labelledby="geschichte-teaser-title"
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.4) 0, rgba(224,161,6,0.4) 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
      />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Story copy */}
          <div>
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">
              Unsere Geschichte
            </p>
            <h2
              id="geschichte-teaser-title"
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.95] mb-6"
            >
              Aus einer Idee<br />
              <span className="text-gold-gradient">wurde ein Verein</span>
            </h2>

            <div className="w-12 h-1 bg-gold mb-8" />

            <p className="text-ivory/75 text-base md:text-lg leading-relaxed mb-5 font-heading">
              Es begann ohne Platz, ohne Trikots, ohne Verein — nur mit Menschen,
              die Fußball liebten und merkten, dass sie mehr wollten.
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-10">
              Sechs Jahre Gemeinschaft, Turniere, Leidenschaft und eine Stadt,
              die uns geprägt hat. Heute tragen wir das offiziell: als eingetragener,
              gemeinnütziger Verein aus Berlin-Lichtenberg.
            </p>

            <Link
              href="/verein/geschichte"
              className="group inline-flex items-center gap-3 btn-primary btn btn-lg"
            >
              <span>Die ganze Geschichte lesen</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Right — Mini timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" aria-hidden="true" />

            <ol className="space-y-8" aria-label="Vereins-Meilensteine">
              {milestones.map((m, i) => (
                <li key={m.year} className="flex items-start gap-5">
                  {/* Dot */}
                  <div
                    className="w-9 h-9 shrink-0 border border-gold/40 bg-dark-surface flex items-center justify-center relative z-10"
                    aria-hidden="true"
                  >
                    <div className={`w-2 h-2 rounded-full ${i === milestones.length - 1 ? 'bg-gold' : 'bg-gold/50'}`} />
                  </div>

                  <div className="pt-1.5">
                    <div className="font-display text-gold text-lg leading-none mb-1">{m.year}</div>
                    <p className="text-text-secondary text-sm leading-relaxed">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* "More" nudge */}
            <div className="flex items-center gap-3 mt-10 pl-14">
              <Clock className="w-4 h-4 text-gold/40" aria-hidden="true" />
              <span className="text-text-muted text-xs font-heading uppercase tracking-wider">
                Mehr erfahren auf der Vereinsseite
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
