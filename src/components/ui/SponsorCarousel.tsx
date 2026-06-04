'use client'

import Image from 'next/image'
import Link from 'next/link'
import { clsx } from 'clsx'

export interface Sponsor {
  name: string
  logo?: string
  website?: string
  tier: 'hauptsponsor' | 'gold' | 'silber' | 'partner'
}

const sponsors: Sponsor[] = [
  { name: 'Intarp GmbH', tier: 'hauptsponsor', website: '#' },
  // Add more sponsors here as the club grows
]

interface SponsorCarouselProps {
  minimal?: boolean
}

export function SponsorCarousel({ minimal = false }: SponsorCarouselProps) {
  if (minimal) {
    return (
      <div className="flex items-center justify-center flex-wrap gap-8">
        {sponsors.map((sponsor) => (
          <SponsorLogo key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 bg-dark-surface border-y border-dark-border" aria-label="Unsere Gründungspartner">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center">Unsere Partner</div>
          <h2 className="section-title text-3xl mb-4">
            Gründungspartner & Partner
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="section-subtitle mx-auto mt-4">
            Unternehmen, die den Fußball in Berlin fördern und an die Zukunft unseres Vereins glauben.
          </p>
        </div>

        {/* Main Sponsor */}
        <div className="mb-12">
          <p className="text-center text-text-muted text-xs font-heading uppercase tracking-widest mb-6">
            Hauptsponsor
          </p>
          <div className="flex justify-center">
            {sponsors
              .filter(s => s.tier === 'hauptsponsor')
              .map(sponsor => (
                <SponsorLogo key={sponsor.name} sponsor={sponsor} featured />
              ))}
          </div>
        </div>

        {/* Other sponsors would appear here */}
        <div className="text-center mt-12">
          <div className="card p-8 max-w-md mx-auto">
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              Werden Sie Teil unseres Erfolgs. Als Gründungspartner von SC Metropolis 25 Berlin
              erreichen Sie eine junge, urbane und engagierte Community.
            </p>
            <Link href="/sponsoren#interesse" className="btn-outline btn text-xs">
              Sponsor werden
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function SponsorLogo({
  sponsor,
  featured = false,
}: {
  sponsor: Sponsor
  featured?: boolean
}) {
  const content = (
    <div
      className={clsx(
        'group relative flex items-center justify-center bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-300',
        'filter grayscale hover:grayscale-0 hover:-translate-y-1',
        featured
          ? 'w-64 h-24 md:w-80 md:h-28 shadow-dark-card hover:shadow-gold-md'
          : 'w-40 h-16 md:w-48 md:h-20 hover:shadow-gold-sm'
      )}
    >
      {sponsor.logo ? (
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} Logo`}
          fill
          className="object-contain p-4"
        />
      ) : (
        <div className="text-center px-4">
          <span
            className={clsx(
              'font-heading font-bold uppercase tracking-wider text-text-secondary group-hover:text-gold transition-colors',
              featured ? 'text-lg' : 'text-sm'
            )}
          >
            {sponsor.name}
          </span>
          {featured && (
            <p className="text-xs text-text-muted mt-1 group-hover:text-gold/60 transition-colors">
              Hauptsponsor
            </p>
          )}
        </div>
      )}
    </div>
  )

  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${sponsor.name} Website besuchen`}
      >
        {content}
      </a>
    )
  }

  return content
}
