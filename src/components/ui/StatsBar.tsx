'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
  separator?: string
}

const stats: Stat[] = [
  { value: 2025,  label: 'Gegründet',        description: 'Berlins neueste Fußball-Institution', separator: '' },
  { value: 60,    suffix: '+', label: 'Mitglieder',     description: 'Und wachsend',              separator: '' },
  { value: 3,     label: 'Teams',            description: 'Erste Mannschaft & Jugend',            separator: '' },
  { value: 11,    label: 'Nationalitäten',   description: 'Multikulturelle Gemeinschaft',         separator: '' },
]

export function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="bg-navy border-y border-gold/20 py-12 md:py-16 overflow-hidden relative"
      aria-label="Vereinsstatistiken"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gold/20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center px-6 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <div className="font-display text-5xl md:text-6xl text-gold mb-1 transition-transform duration-300 group-hover:scale-105">
                {stat.prefix}
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    delay={i * 0.15}
                    separator={stat.separator ?? ''}
                  />
                ) : (
                  '0'
                )}
                {stat.suffix}
              </div>

              {/* Label */}
              <div className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-1">
                {stat.label}
              </div>

              {/* Description */}
              {stat.description && (
                <p className="text-ivory/50 text-xs">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
