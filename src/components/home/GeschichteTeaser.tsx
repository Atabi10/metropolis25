'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

const milestones = [
  { year: '2019', text: 'Erste Ballkontakte auf Berliner Bolzplätzen — sieben Studenten, ein Samstag' },
  { year: '2024', text: 'Finale beim Symposium Mboa — Silber. Der Moment, der alles veränderte.' },
  { year: '2025', text: 'Vereinsgründung: SC Metropolis 25 Berlin e.V.' },
  { year: '2026', text: 'Gemeinnützigkeit §60a AO · BFV-Antrag · Förderungswürdigkeit beantragt' },
]

export function GeschichteTeaser() {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      aria-labelledby="geschichte-teaser-title"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

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

          {/* Right — Photo + mini timeline */}
          <div className="relative">
            {/* Real club photo */}
            <div className="relative mb-6 overflow-hidden border border-gold/20">
              <div className="relative h-64 md:h-72">
                <Image
                  src="/images/medals after Symposium final.jpeg"
                  alt="SC Metropolis 25 — Medaillen beim Symposium Mboa"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs font-heading italic leading-relaxed">
                    &ldquo;Was 2019 mit sieben Studenten begann, ist heute eine wachsende Berliner Fußballgemeinschaft.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Mini timeline */}
            <div className="relative pl-4 border-l border-gold/30">
              <ol className="space-y-5" aria-label="Vereins-Meilensteine">
                {milestones.map((m, i) => (
                  <li key={m.year} className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0 -ml-5"
                      style={{ background: i === milestones.length - 1 ? 'rgba(224,161,6,0.6)' : '#E0A106' }}
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-display text-gold text-sm leading-none block mb-0.5">{m.year}</span>
                      <p className="text-text-secondary text-xs leading-relaxed">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
