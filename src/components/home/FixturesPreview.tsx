import { Link } from '@/i18n/navigation'
import { ArrowRight, Calendar } from 'lucide-react'
import { FixtureCard } from '@/components/ui/FixtureCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  getUpcomingOfficial,
  getOfficialResults,
  getFriendlies,
  CURRENT_SEASON,
  COMPETITIONS,
} from '@/data/fixtures'

type Locale = 'de' | 'en' | 'fr'

const COPY = {
  de: {
    label: `Offizieller Spielbetrieb ${CURRENT_SEASON}`,
    title: 'Spielplan &',
    titleHighlight: 'Ergebnisse',
    subtitle: `SC Metropolis 25 startet in der Saison ${CURRENT_SEASON} in den offiziellen Berliner Spielbetrieb — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) und ${COMPETITIONS.cup}.`,
    officialUpcoming: 'Offizielle Spiele',
    results: 'Letzte Ergebnisse',
    friendlies: 'Testspiele & Community Matches',
    empty: 'Der Staffelplan der Liga ist noch nicht veröffentlicht.',
    cta: 'Kompletter Spielplan',
  },
  en: {
    label: `Official competition ${CURRENT_SEASON}`,
    title: 'Fixtures &',
    titleHighlight: 'results',
    subtitle: `SC Metropolis 25 enters official Berlin competition in the ${CURRENT_SEASON} season — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) and the ${COMPETITIONS.cup}.`,
    officialUpcoming: 'Official fixtures',
    results: 'Latest results',
    friendlies: 'Friendlies & community matches',
    empty: 'The league schedule has not been published yet.',
    cta: 'Full fixture list',
  },
  fr: {
    label: `Compétition officielle ${CURRENT_SEASON}`,
    title: 'Calendrier &',
    titleHighlight: 'résultats',
    subtitle: `SC Metropolis 25 entre en compétition officielle berlinoise pour la saison ${CURRENT_SEASON} — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) et ${COMPETITIONS.cup}.`,
    officialUpcoming: 'Matches officiels',
    results: 'Derniers résultats',
    friendlies: 'Matches amicaux',
    empty: "Le calendrier de la ligue n'est pas encore publié.",
    cta: 'Calendrier complet',
  },
}

export function FixturesPreview({ locale = 'de' }: { locale?: Locale }) {
  const c = COPY[locale]

  const upcoming = getUpcomingOfficial()
  const officialResults = getOfficialResults()
  // Only surface friendlies with a confirmed result on the homepage.
  const recentFriendlies = getFriendlies()
    .filter(f => f.status === 'finished')
    .slice(0, 3)

  const rightColumn = officialResults.length > 0 ? officialResults.slice(0, 3) : recentFriendlies
  const rightHeading = officialResults.length > 0 ? c.results : c.friendlies

  return (
    <section className="section-padding bg-dark" aria-labelledby="fixtures-title">
      <div className="container-custom">

        <SectionHeader
          label={c.label}
          title={c.title}
          titleHighlight={c.titleHighlight}
          subtitle={c.subtitle}
          id="fixtures-title"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {/* Upcoming official fixtures */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-gold" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                {c.officialUpcoming}
              </h3>
            </div>
            <div className="space-y-3">
              {upcoming.length > 0 ? (
                upcoming.map(f => (
                  <FixtureCard key={f.id} fixture={f} locale={locale} />
                ))
              ) : (
                <div className="card p-6 text-center">
                  <Calendar className="w-8 h-8 text-text-muted mx-auto mb-2" aria-hidden="true" />
                  <p className="text-text-muted text-sm">{c.empty}</p>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-navy-400" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                {rightHeading}
              </h3>
            </div>
            <div className="space-y-3">
              {rightColumn.map(f => (
                <FixtureCard key={f.id} fixture={f} locale={locale} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/spielbetrieb"
            className="btn-outline btn group inline-flex items-center gap-2"
          >
            {c.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
