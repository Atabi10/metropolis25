'use client'

import Link from 'next/link'
import Image from 'next/image'
import { clsx } from 'clsx'
import { ArrowRight, Heart, Users, TrendingUp, MapPin } from 'lucide-react'

export interface Sponsor {
  name: string
  logo?: string
  website?: string
  tier: 'hauptsponsor' | 'gold' | 'silber' | 'partner'
}

const sponsors: Sponsor[] = [
  // Add sponsors here as the club grows
]

const reasons = [
  { icon: MapPin,       label: 'Lokaler Impact',    desc: 'Direkte Sichtbarkeit in der Berliner Fußball-Community' },
  { icon: Users,        label: 'Diverse Community', desc: '133+ Mitglieder aus über 11 Nationen' },
  { icon: TrendingUp,   label: 'Wachstum',          desc: 'Ein Verein im Aufbau — Ihr Logo ist von Anfang an dabei' },
  { icon: Heart,        label: 'Authentizität',      desc: 'Keine Marketingfassade — echter Berliner Grassroots-Fußball' },
]

interface SponsorCarouselProps { minimal?: boolean }

export function SponsorCarousel({ minimal = false }: SponsorCarouselProps) {
  if (minimal) {
    return (
      <div className="flex items-center justify-center flex-wrap gap-8">
        {sponsors.map(s => <SponsorLogo key={s.name} sponsor={s} />)}
      </div>
    )
  }

  const hasSponsors = sponsors.length > 0

  return (
    <section
      className="py-20 md:py-24 bg-navy relative overflow-hidden"
      aria-labelledby="partner-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(224,161,6,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(224,161,6,0.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Partnerschaft</p>
          <h2
            id="partner-title"
            className="font-display text-3xl md:text-5xl text-white uppercase mb-4"
          >
            Partner der{' '}
            <span className="text-gold-gradient">Bewegung</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-ivory/65 text-sm leading-relaxed max-w-xl mx-auto">
            Unterstützen Sie einen Verein, der Berliner Fußball authentisch,
            inklusiv und ambitioniert lebt — und werden Sie Teil der Gründungsgeschichte.
          </p>
        </div>

        {/* Current sponsors OR pitch */}
        {hasSponsors ? (
          <div className="mb-12">
            <p className="text-center text-text-muted text-xs font-heading uppercase tracking-widest mb-8">
              Unsere Gründungspartner
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsors.map(s => <SponsorLogo key={s.name} sponsor={s} />)}
            </div>
          </div>
        ) : (
          /* Placeholder slots */
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="border border-dashed border-gold/20 p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 border border-dashed border-dark-border flex items-center justify-center mb-3">
                  <span className="text-text-muted text-xl font-display">?</span>
                </div>
                <p className="text-text-muted text-xs font-heading uppercase tracking-wider mb-1">
                  Ihr Unternehmen
                </p>
                <p className="text-text-muted text-[10px]">Dieser Platz wartet auf Sie</p>
              </div>
            ))}
          </div>
        )}

        {/* Why partner */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {reasons.map(r => (
            <div key={r.label} className="bg-dark-card border border-dark-border p-5 group hover:border-gold/30 transition-colors duration-200">
              <r.icon className="w-5 h-5 text-gold mb-3" aria-hidden="true" />
              <p className="font-heading font-semibold text-white text-xs uppercase tracking-wider mb-1">{r.label}</p>
              <p className="text-text-muted text-xs leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/partner-werden"
            className="btn-primary btn btn-lg group inline-flex items-center gap-2"
          >
            <span>Gründungspartner werden</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <p className="text-text-muted text-xs mt-4">
            Individuelle Partnerschaften möglich · Pakete ab 300 €/Jahr
          </p>
        </div>
      </div>
    </section>
  )
}

function SponsorLogo({ sponsor, featured = false }: { sponsor: Sponsor; featured?: boolean }) {
  const content = (
    <div className={clsx(
      'group relative flex items-center justify-center bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-300',
      'filter grayscale hover:grayscale-0 hover:-translate-y-1',
      featured ? 'w-64 h-24 md:w-80 md:h-28' : 'w-40 h-16 md:w-48 md:h-20'
    )}>
      {sponsor.logo ? (
        <Image src={sponsor.logo} alt={`${sponsor.name} Logo`} fill className="object-contain p-4" />
      ) : (
        <span className={clsx('font-heading font-bold uppercase tracking-wider text-text-secondary group-hover:text-gold transition-colors', featured ? 'text-lg' : 'text-sm')}>
          {sponsor.name}
        </span>
      )}
    </div>
  )
  return sponsor.website
    ? <a href={sponsor.website} target="_blank" rel="noopener noreferrer" aria-label={`${sponsor.name} Website`}>{content}</a>
    : content
}
