import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { FixtureCard, type Fixture } from '@/components/ui/FixtureCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

// ─── MOCK DATA — Replace with Sanity CMS data ────────────────────────────────
const mockFixtures: Fixture[] = [
  {
    id: '1',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'BSV Al-Dersimspor',
    date: '2025-09-06',
    time: '15:00',
    venue: 'Sportplatz Lichtenberg',
    competition: 'Kreisliga B',
    status: 'upcoming',
    isHomeGame: true,
  },
  {
    id: '2',
    homeTeam: 'FC Berlin-Ost',
    awayTeam: 'SC Metropolis 25',
    date: '2025-08-30',
    time: '13:00',
    venue: 'Sportpark Friedrichsfelde',
    competition: 'Kreisliga B',
    status: 'finished',
    homeScore: 1,
    awayScore: 2,
    isHomeGame: false,
  },
  {
    id: '3',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'SV Lichtenberg 47',
    date: '2025-08-23',
    time: '16:00',
    venue: 'Sportplatz Lichtenberg',
    competition: 'Kreisliga B',
    status: 'finished',
    homeScore: 3,
    awayScore: 1,
    isHomeGame: true,
  },
]

export function FixturesPreview() {
  const upcoming = mockFixtures.filter(f => f.status === 'upcoming')
  const recent   = mockFixtures.filter(f => f.status === 'finished').slice(0, 2)

  return (
    <section className="section-padding bg-dark" aria-labelledby="fixtures-title">
      <div className="container-custom">

        <SectionHeader
          label="Spielbetrieb"
          title="Spieltage &"
          titleHighlight="Ergebnisse"
          subtitle="Aktuelle Spielpläne, Ergebnisse und Tabellen — immer auf dem neuesten Stand."
          id="fixtures-title"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {/* Upcoming */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-gold" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                Nächste Spiele
              </h3>
            </div>
            <div className="space-y-3">
              {upcoming.length > 0 ? (
                upcoming.map(fixture => (
                  <FixtureCard key={fixture.id} fixture={fixture} />
                ))
              ) : (
                <div className="card p-6 text-center">
                  <Calendar className="w-8 h-8 text-text-muted mx-auto mb-2" />
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
            Gesamten Spielplan ansehen
            <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
