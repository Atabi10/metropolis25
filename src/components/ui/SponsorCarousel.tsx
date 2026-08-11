'use client'

import Link from 'next/link'
import Image from 'next/image'
import { clsx } from 'clsx'
import { ArrowRight, Heart, Users, Trophy, MapPin } from 'lucide-react'
import { CURRENT_SEASON, COMPETITIONS } from '@/data/fixtures'

export interface Sponsor {
  name: string
  logo?: string          // path to logo in /public
  website?: string
  tier: 'hauptsponsor' | 'gold' | 'silber' | 'partner'
  tagline?: string       // short one-liner shown beneath logo
}

// ─── CONFIRMED SPONSORS ───────────────────────────────────────────────────────
// SC Metropolis 25 currently has NO official main sponsor.
// Only add a company here once a partnership is contractually confirmed.
// Never add placeholder or fictional sponsors.
const sponsors: Sponsor[] = []

const whyReasons = [
  { icon: Trophy,      label: 'Offizieller Spielbetrieb', desc: `Ab Saison ${CURRENT_SEASON} in der ${COMPETITIONS.league} und im ${COMPETITIONS.cup}` },
  { icon: MapPin,      label: 'Matchday-Sichtbarkeit',    desc: 'Präsenz an offiziellen Spieltagen in Berlin' },
  { icon: Users,       label: 'Diverse Community',        desc: '133+ Menschen in der Community aus über 11 Nationen' },
  { icon: Heart,       label: 'Gründungskapitel',         desc: 'Erste offizielle Saison — Ihr Logo von Anfang an dabei' },
]

interface SponsorCarouselProps { minimal?: boolean }

export function SponsorCarousel({ minimal = false }: SponsorCarouselProps) {
  // Minimal embed mode — just logos, no section chrome
  if (minimal) {
    return (
      <div className="flex items-center justify-center flex-wrap gap-8">
        {sponsors.map(s => <SponsorLogo key={s.name} sponsor={s} />)}
      </div>
    )
  }

  const hauptsponsoren = sponsors.filter(s => s.tier === 'hauptsponsor')
  const weitere        = sponsors.filter(s => s.tier !== 'hauptsponsor')
  const hasSponsors    = sponsors.length > 0
  const singleSponsor  = sponsors.length === 1

  return (
    <section
      className="py-20 md:py-24 bg-navy relative overflow-hidden"
      aria-labelledby="partner-title"
    >
      {/* Background texture */}
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
            SC Metropolis 25 startet in der Saison {CURRENT_SEASON} in den offiziellen
            Berliner Spielbetrieb. Werden Sie Teil des Gründungskapitels — als erster
            offizieller Partner eines Vereins mit Pflichtspielbetrieb.
          </p>
        </div>

        {/* ── Sponsor display ─────────────────────────────────────────── */}
        {hasSponsors ? (
          <div className="mb-14">
            {/* Hauptsponsoren */}
            {hauptsponsoren.length > 0 && (
              <div className="mb-8">
                <p className="text-center text-text-muted text-[10px] font-heading uppercase tracking-widest mb-6">
                  Hauptsponsor
                </p>
                <div className="flex justify-center">
                  {hauptsponsoren.map(s => <SponsorLogo key={s.name} sponsor={s} featured />)}
                </div>
              </div>
            )}

            {/* Weitere Sponsoren */}
            {weitere.length > 0 && (
              <div>
                <p className="text-center text-text-muted text-[10px] font-heading uppercase tracking-widest mb-6">
                  Partner
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  {weitere.map(s => <SponsorLogo key={s.name} sponsor={s} />)}
                </div>
              </div>
            )}

            {/* Single-sponsor fallback — extra pitch card */}
            {singleSponsor && (
              <div className="mt-10 border border-dashed border-gold/20 p-6 max-w-md mx-auto text-center">
                <p className="text-text-muted text-xs font-heading uppercase tracking-wider mb-3">
                  Werden Sie unser nächster Partner
                </p>
                <p className="text-ivory/55 text-xs leading-relaxed mb-4">
                  Dieser Platz wartet auf Ihr Unternehmen — als Teil unserer Vereinsgeschichte.
                </p>
                <Link href="/partner-werden" className="btn-outline btn btn-sm text-xs">
                  Partnerschaft anfragen →
                </Link>
              </div>
            )}
          </div>
        ) : (
          /* No sponsor yet — a single, tasteful opportunity card. */
          <div className="mb-14 max-w-2xl mx-auto">
            <div className="relative border border-gold/25 bg-dark-card/60 p-8 md:p-10 text-center overflow-hidden">
              <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold/40" aria-hidden="true" />
              <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold/40" aria-hidden="true" />

              <p className="text-gold font-heading text-[10px] uppercase tracking-[0.3em] mb-4">
                Hauptpartner
              </p>
              <p className="font-display text-white text-xl md:text-2xl uppercase leading-tight mb-4">
                Unser Platz für den ersten<br className="hidden sm:block" />{' '}
                offiziellen Hauptpartner
              </p>
              <p className="text-ivory/60 text-sm leading-relaxed max-w-md mx-auto">
                SC Metropolis 25 hat derzeit keinen Hauptsponsor. Dieser Platz ist für
                das Unternehmen reserviert, das den Verein in seine erste offizielle
                Saison begleitet.
              </p>
            </div>
          </div>
        )}

        {/* ── Why partner — 4 reason cards ─────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {whyReasons.map(r => (
            <div key={r.label} className="bg-dark-card border border-dark-border p-5 group hover:border-gold/30 transition-colors duration-200">
              <r.icon className="w-5 h-5 text-gold mb-3" aria-hidden="true" />
              <p className="font-heading font-semibold text-white text-xs uppercase tracking-wider mb-1">{r.label}</p>
              <p className="text-text-muted text-xs leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ──────────────────────────────────────────────────── */}
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

// ─── SPONSOR LOGO COMPONENT ───────────────────────────────────────────────────
function SponsorLogo({ sponsor, featured = false }: { sponsor: Sponsor; featured?: boolean }) {
  const box = (
    <div className={clsx(
      'group relative flex flex-col items-center justify-center gap-2 bg-dark-card border border-dark-border',
      'hover:border-gold/40 hover:-translate-y-1 transition-all duration-300',
      featured ? 'w-64 h-28 md:w-80 md:h-32 shadow-lg' : 'w-44 h-20 md:w-52 md:h-24',
    )}>
      {sponsor.logo ? (
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} Logo`}
          fill
          className="object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <div className="text-center px-4">
          <span className={clsx(
            'font-heading font-bold uppercase tracking-wider text-text-secondary group-hover:text-gold transition-colors',
            featured ? 'text-lg' : 'text-sm'
          )}>
            {sponsor.name}
          </span>
          {sponsor.tagline && (
            <p className="text-[10px] text-text-muted mt-1 group-hover:text-gold/60 transition-colors uppercase tracking-wider">
              {sponsor.tagline}
            </p>
          )}
        </div>
      )}
    </div>
  )

  return sponsor.website ? (
    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" aria-label={`${sponsor.name} Website besuchen`}>
      {box}
    </a>
  ) : box
}
