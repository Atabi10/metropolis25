'use client'

import { useInView } from 'react-intersection-observer'
import { Shield, Users, Zap, Heart, Target, Globe } from 'lucide-react'
import { clsx } from 'clsx'

const values = [
  { icon: Shield,  title: 'Fair Play',       desc: 'Respekt und Sportlichkeit sind die Grundlage unseres Vereins — auf und neben dem Platz.' },
  { icon: Users,   title: 'Gemeinschaft',    desc: 'Wir sind mehr als ein Verein. Wir sind eine Familie, die Berlin vereint.' },
  { icon: Zap,     title: 'Ambition',        desc: 'Wir denken groß, trainieren hart und wachsen gemeinsam mit jedem Spieltag.' },
  { icon: Heart,   title: 'Inklusion',       desc: 'Fußball kennt keine Grenzen. Jeder ist willkommen, unabhängig von Herkunft oder Hintergrund.' },
  { icon: Target,  title: 'Jugendförderung', desc: 'Die nächste Generation verdient die beste Ausbildung — fußballerisch und menschlich.' },
  { icon: Globe,   title: 'Berlin DNA',      desc: 'Verwurzelt in Lichtenberg, inspiriert von der Energie der Hauptstadt.' },
]

export function ClubIdentitySection() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: valRef, inView: valInView }   = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-dark relative overflow-hidden" aria-labelledby="identity-title">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-navy/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div
          ref={headRef}
          className={clsx(
            'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 transition-all duration-700',
            headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Left — Mission */}
          <div>
            <div className="section-label">Unser Verein</div>
            <h2
              id="identity-title"
              className="section-title mb-6"
            >
              Mehr als nur
              <br />
              <span className="text-gold-gradient">Fußball</span>
            </h2>
            <div className="w-16 h-1 bg-gold mb-6" />
            <p className="section-subtitle leading-relaxed mb-6">
              SC Metropolis 25 Berlin wurde 2025 mit einer klaren Mission gegründet:
              Fußball zugänglich machen, Berliner Talente fördern und eine
              Gemeinschaft aufbauen, die über den Sport hinausgeht.
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              In Lichtenberg verwurzelt, aber mit dem Blick auf ganz Berlin und
              darüber hinaus. Wir kombinieren urbane Fußballkultur mit echtem
              sportlichem Ehrgeiz — für Spieler, Familien und die Hauptstadt.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/verein" className="btn-primary btn btn-sm">
                Mehr über uns
              </a>
              <a href="/mitmachen" className="btn-outline btn btn-sm">
                Jetzt mitmachen
              </a>
            </div>
          </div>

          {/* Right — Visual Block */}
          <div className="relative">
            {/* Main quote block */}
            <div className="relative bg-navy border border-gold/20 p-8 md:p-10">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold -translate-x-2 -translate-y-2" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold translate-x-2 translate-y-2" aria-hidden="true" />

              <div className="font-display text-7xl text-gold/20 leading-none mb-4" aria-hidden="true">"</div>
              <blockquote className="font-heading text-xl md:text-2xl text-white font-medium uppercase tracking-wide leading-relaxed">
                Wo Berlin pulsiert, wächst unsere Stärke
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs font-heading uppercase tracking-widest">
                  SC Metropolis 25 Berlin
                </span>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -bottom-4 -right-4 bg-gold px-4 py-2 shadow-gold-md">
              <span className="font-display text-navy-900 text-sm tracking-widest uppercase">
                Berlin · 2025
              </span>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div ref={valRef}>
          <div className="text-center mb-10">
            <div className="section-label justify-center">Was uns antreibt</div>
            <h3 className="section-title text-3xl mb-2">
              Unsere Werte
            </h3>
            <div className="w-12 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={clsx(
                  'card p-6 group hover:border-gold/30 hover:-translate-y-1 transition-all duration-300',
                  valInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <value.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>

                {/* Content */}
                <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-2">
                  {value.title}
                </h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
