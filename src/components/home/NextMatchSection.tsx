import { NextMatchCard } from '@/components/ui/NextMatchCard'
import { getNextOfficialMatch, CURRENT_SEASON } from '@/data/fixtures'

type Locale = 'de' | 'en' | 'fr'

const COPY = {
  de: {
    label: `Offizieller Spielbetrieb ${CURRENT_SEASON}`,
    title: 'Nächstes',
    titleHighlight: 'Spiel',
  },
  en: {
    label: `Official competition ${CURRENT_SEASON}`,
    title: 'Next',
    titleHighlight: 'match',
  },
  fr: {
    label: `Compétition officielle ${CURRENT_SEASON}`,
    title: 'Prochain',
    titleHighlight: 'match',
  },
}

/**
 * Homepage hero slot for the club's next official competitive fixture.
 * Renders nothing when no official fixture is scheduled — it never invents one.
 */
export function NextMatchSection({ locale = 'de' }: { locale?: Locale }) {
  const fixture = getNextOfficialMatch()
  if (!fixture) return null

  const c = COPY[locale]

  // SportsEvent structured data — only confirmed fields are emitted.
  const structuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${fixture.homeTeam} vs ${fixture.awayTeam}`,
    sport: 'Football',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    startDate: fixture.kickoff
      ? `${fixture.date}T${fixture.kickoff}:00+02:00`
      : fixture.date,
    competitor: [
      { '@type': 'SportsTeam', name: fixture.homeTeam },
      { '@type': 'SportsTeam', name: fixture.awayTeam },
    ],
    organizer: {
      '@type': 'SportsOrganization',
      name: 'SC Metropolis 25 Berlin e.V.',
      url: 'https://www.sc-metropolis25.de/',
    },
  }

  if (fixture.venue) {
    structuredData.location = {
      '@type': 'Place',
      name: fixture.pitch ? `${fixture.venue} — ${fixture.pitch}` : fixture.venue,
      ...(fixture.venueAddress
        ? {
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Siegfriedstraße 71',
              postalCode: '10365',
              addressLocality: 'Berlin',
              addressCountry: 'DE',
            },
          }
        : {}),
    }
  }

  return (
    <section
      className="section-padding bg-dark relative overflow-hidden"
      aria-labelledby="next-match-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-3">
            {c.label}
          </p>
          <h2
            id="next-match-title"
            className="font-display text-3xl md:text-5xl text-white uppercase"
          >
            {c.title} <span className="text-gold-gradient">{c.titleHighlight}</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-5" />
        </div>

        <NextMatchCard
          fixture={fixture}
          locale={locale}
          variant="hero"
          className="max-w-4xl mx-auto"
        />
      </div>
    </section>
  )
}
