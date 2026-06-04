'use client'

import { useInView } from 'react-intersection-observer'
import { clsx } from 'clsx'
import { Link } from '@/i18n/navigation'

const lines = [
  { de: 'Wir sind kein Verein von der Stange.',  accent: false },
  { de: 'Wir sind eine Bewegung aus Berlin.',     accent: true  },
  { de: 'Gegründet auf einem Bolzplatz.',         accent: false },
  { de: 'Gewachsen durch Freundschaft.',          accent: false },
  { de: 'Getragen von Disziplin und Respekt.',    accent: false },
  { de: 'Offen für jeden.',                       accent: true  },
  { de: 'Geerdet in Lichtenberg.',                accent: false },
  { de: 'Mit dem Blick auf ganz Berlin.',         accent: false },
]

const pillars = [
  { label: 'Disziplin',   en: 'Discipline' },
  { label: 'Vielfalt',    en: 'Diversity'  },
  { label: 'Respekt',     en: 'Respect'    },
  { label: 'Ambition',    en: 'Ambition'   },
  { label: 'Gemeinschaft',en: 'Community'  },
]

export function ManifestoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-dark py-24 md:py-32"
      aria-labelledby="manifesto-title"
    >
      {/* Berlin grid motif — street-map inspired */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224,161,6,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224,161,6,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Diagonal accent — urban dynamism */}
        <div
          className="absolute -right-40 top-0 bottom-0 w-[600px] opacity-[0.03]"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(224,161,6,0.15) 50%, transparent 60%)',
          }}
        />
        {/* Gold glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — manifesto text */}
          <div>
            <p className="text-gold font-heading text-xs uppercase tracking-[0.35em] mb-4">
              Das M25 Manifest
            </p>
            <h2
              id="manifesto-title"
              className={clsx(
                'font-display text-4xl md:text-5xl text-white uppercase leading-none mb-8 transition-all duration-700',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              Mehr als<br />
              <span className="text-gold-gradient">Fußball.</span>
            </h2>

            <div className="space-y-3">
              {lines.map((line, i) => (
                <p
                  key={i}
                  className={clsx(
                    'font-heading transition-all duration-500',
                    line.accent
                      ? 'text-gold text-lg md:text-xl font-semibold'
                      : 'text-ivory/70 text-base',
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  )}
                  style={{ transitionDelay: `${100 + i * 60}ms` }}
                >
                  {line.de}
                </p>
              ))}
            </div>

            <div className={clsx(
              'mt-10 transition-all duration-700 delay-700',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              <Link href="/verein" className="btn-outline btn btn-sm group inline-flex items-center gap-2">
                <span>Den Verein entdecken</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right — pillars + quote */}
          <div className={clsx(
            'transition-all duration-700 delay-300',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            {/* Pillars */}
            <p className="text-text-muted font-heading text-xs uppercase tracking-widest mb-6">
              Unsere Grundsätze
            </p>
            <div className="grid grid-cols-1 gap-3 mb-12">
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between border border-dark-border p-4 group hover:border-gold/40 transition-colors duration-200"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-gold/30 text-2xl leading-none w-8 group-hover:text-gold/60 transition-colors duration-200">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-heading font-semibold text-white text-sm uppercase tracking-widest group-hover:text-gold transition-colors duration-200">
                      {p.label}
                    </span>
                  </div>
                  <span className="text-text-muted text-xs font-heading uppercase tracking-wider group-hover:text-gold/60 transition-colors duration-200">
                    {p.en}
                  </span>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="relative border-l-2 border-gold pl-6 py-2">
              <p className="font-display text-xl md:text-2xl text-white uppercase leading-snug mb-3">
                &ldquo;Wo Berlin pulsiert,<br />
                wächst unsere Stärke.&rdquo;
              </p>
              <p className="text-gold text-xs font-heading uppercase tracking-widest">
                SC Metropolis 25 Berlin e.V.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
