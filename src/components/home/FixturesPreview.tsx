import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { FixtureCard, type Fixture } from '@/components/ui/FixtureCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

// ─── REAL MATCH DATA ─────────────────────────────────────────────────────────
// All matches are friendlies / community games.
// Official BFV Spielbetrieb begins season 2026/27.
const fixtures: Fixture[] = [
  // ── Upcoming ──────────────────────────────────────────────────────────────
  {
    id: 'u1',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Lichtenberg Kmer',
    date: '2026-06-14',
    venue: 'Poststadion Berlin',
    competition: 'Testspiel',
    tag: 'Heimspiel',
    status: 'upcoming',
    isHomeGame: true,
  },
  {
    id: 'u2',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'ARNDÉ FC',
    date: '2026-06-21',
    venue: 'Poststadion Berlin',
    competition: 'Testspiel',
    tag: 'Heimspiel',
    status: 'upcoming',
    isHomeGame: true,
  },
  // ── Past results ──────────────────────────────────────────────────────────
  {
    id: 'r1',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Flambeau FC',
    date: '2026-05-17',
    venue: 'Poststadion Berlin',
    competition: 'Testspiel',
    tag: 'Heimspiel',
    status: 'finished',
    homeScore: 4,
    awayScore: 3,
    isHomeGame: true,
  },
  {
    id: 'r2',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'New Star Berlin SC',
    date: '2026-04-27',
    competition: 'Community Match',
    status: 'finished',
    homeScore: 1,
    awayScore: 0,
    isHomeGame: true,
  },
  {
    id: 'r3',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Lichtenberg Kmer',
    date: '2026-04-19',
    venue: 'Hauffstraße 13–20, 10317 Berlin',
    competition: 'Community Match',
    tag: 'Heimspiel',
    status: 'finished',
    homeScore: 4,
    awayScore: 2,
    isHomeGame: true,
  },
  {
    id: 'r4',
    homeTeam: 'Flambeau FC',
    awayTeam: 'SC Metropolis 25',
    date: '2026-03-15',
    venue: 'Poststadion Berlin',
    competition: 'Testspiel',
    tag: 'Auswärtsspiel',
    status: 'finished',
    homeScore: 2,
    awayScore: 2,
    isHomeGame: false,
  },
]

export function FixturesPreview() {
  const upcoming = fixtures.filter(f => f.status === 'upcoming')
  const recent   = fixtures.filter(f => f.status === 'finished').slice(0, 3)

  return (
    <section className="section-padding bg-dark" aria-labelledby="fixtures-title">
      <div className="container-custom">

        <SectionHeader
          label="Testspiele & Community Matches"
          title="Spielpraxis vor dem"
          titleHighlight="Ligastart"
          subtitle="Bevor der offizielle BFV-Spielbetrieb beginnt, sammeln wir bereits Spielpraxis durch Freundschaftsspiele und Community Matches in Berlin."
          id="fixtures-title"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {/* Upcoming */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-gold" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                Kommende Spiele
              </h3>
            </div>
            <div className="space-y-3">
              {upcoming.length > 0 ? (
                upcoming.map(fixture => (
                  <FixtureCard key={fixture.id} fixture={fixture} />
                ))
              ) : (
                <div className="card p-6 text-center">
                  <Calendar className="w-8 h-8 text-text-muted mx-auto mb-2" aria-hidden="true" />
                  <p className="text-text-muted text-sm">Keine anstehenden Spiele</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-navy-400" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                Letzte Ergebnisse
              </h3>
            </div>
            <div className="space-y-3">
              {recent.map(fixture => (
                <FixtureCard key={fixture.id} fixture={fixture} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/spielbetrieb"
            className="btn-outline btn group inline-flex items-center gap-2"
          >
            Alle Spiele & Ergebnisse
            <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
