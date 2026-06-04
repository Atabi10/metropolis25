'use client'

import { useInView } from 'react-intersection-observer'
import { Shield, Users, Zap, Heart, Target, Globe } from 'lucide-react'
import { clsx } from 'clsx'
import { Link } from '@/i18n/navigation'

const values = [
  { icon: Shield,  title: 'Fair Play',      desc: 'Respekt und Sportlichkeit — auf und neben dem Platz. Keine Ausnahmen.' },
  { icon: Users,   title: 'Gemeinschaft',   desc: 'Wir sind mehr als ein Verein. Wir sind eine Familie aus über 11 Nationen.' },
  { icon: Zap,     title: 'Ambition',       desc: 'Wir denken groß, trainieren hart und wachsen mit jedem Spieltag.' },
  { icon: Heart,   title: 'Inklusion',      desc: 'Fußball kennt keine Grenzen. Jeder ist willkommen — egal woher.' },
  { icon: Target,  title: 'Entwicklung',    desc: 'Sportliche und menschliche Entwicklung gehören für uns zusammen.' },
  { icon: Globe,   title: 'Berlin DNA',     desc: 'Verwurzelt in Lichtenberg. Inspiriert von der Energie der Hauptstadt.' },
]

export function ClubIdentitySection() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: valRef,  inView: valInView  } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section className="section-padding bg-dark-surface relative overflow-hidden" aria-labelledby="identity-title">

      {/* Berlin street-grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Fine grid — Lichtenberg street map feel */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(237,228,205,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(237,228,205,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-navy/50 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* Header */}
        <div
          ref={headRef}
          className={clsx(
            'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 transition-all duration-700',
            headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Left */}
          <div>
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Unser Verein</p>
            <h2
              id="identity-title"
              className="font-display text-4xl md:text-5xl text-white uppercase leading-none mb-4"
            >
              Mehr als<br />
              <span className="text-gold-gradient">Fußball</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-6" />
            <p className="text-ivory/75 text-base leading-relaxed mb-4">
              SC Metropolis 25 wurde 2025 in Berlin-Lichtenberg gegründet — aus einer Fußballgemeinschaft,
              die seit 2019 zusammen kickt, wächst und Freundschaften aufbaut.
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              Wir kombinieren urbane Berliner Fußballkultur mit echtem sportlichem Ehrgeiz.
              Für Spieler, Familien und alle, die Berlin bewegen wollen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/verein" className="btn-primary btn btn-sm">
                Mehr über uns
              </Link>
              <Link href="/mitmachen" className="btn-outline btn btn-sm">
                Jetzt mitmachen
              </Link>
            </div>
          </div>

          {/* Right — quote block with Berlin identity */}
          <div className="relative">
            <div className="relative bg-navy border border-gold/20 p-8 md:p-10">
              <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-gold -translate-x-2 -translate-y-2" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-gold translate-x-2 translate-y-2" aria-hidden="true" />

              <div className="font-display text-6xl text-gold/15 leading-none mb-3" aria-hidden="true">"</div>
              <blockquote className="font-heading text-xl md:text-2xl text-white font-medium uppercase tracking-wide leading-relaxed mb-4">
                Aus Freunden wurden Mitspieler.<br />
                Aus Mitspielern wurde ein Verein.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs font-heading uppercase tracking-widest">
                  Lichtenberg, Berlin — Seit 2019
                </span>
              </div>
            </div>

            {/* "Aus Berlin gewachsen" badge */}
            <div className="absolute -bottom-4 -right-4 bg-gold px-4 py-2">
              <span className="font-display text-navy text-xs tracking-widest uppercase">
                Aus Berlin gewachsen
              </span>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div ref={valRef}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-2">Was uns antreibt</p>
              <h3 className="font-display text-2xl md:text-3xl text-white uppercase">Unsere Werte</h3>
            </div>
            <div className="w-12 h-[2px] bg-gold hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={clsx(
                  'card p-6 group hover:border-gold/30 hover:-translate-y-1 transition-all duration-300',
                  valInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <value.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-2">
                  {value.title}
                </h4>
                <p className="text-text-muted text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
