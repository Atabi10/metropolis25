import type { Metadata } from 'next'
import Link from 'next/link'
import { FixtureCard, type Fixture } from '@/components/ui/FixtureCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Trophy, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spielbetrieb — Spielplan & Ergebnisse | SC Metropolis 25 Berlin',
  description: 'Aktuelle Spielpläne, Ergebnisse und die Tabelle von SC Metropolis 25 Berlin in der Berliner Kreisliga.',
}

// Mock data — replace with Sanity/API
const allFixtures: Fixture[] = [
  { id: '1', homeTeam: 'SC Metropolis 25', awayTeam: 'BSV Al-Dersimspor', date: '2025-09-06', time: '15:00', venue: 'Sportplatz Lichtenberg', competition: 'Kreisliga B', status: 'upcoming', isHomeGame: true },
  { id: '2', homeTeam: 'FC Berlin-Ost', awayTeam: 'SC Metropolis 25', date: '2025-08-30', time: '13:00', venue: 'Sportpark Friedrichsfelde', competition: 'Kreisliga B', status: 'finished', homeScore: 1, awayScore: 2, isHomeGame: false },
  { id: '3', homeTeam: 'SC Metropolis 25', awayTeam: 'SV Lichtenberg 47', date: '2025-08-23', time: '16:00', venue: 'Sportplatz Lichtenberg', competition: 'Kreisliga B', status: 'finished', homeScore: 3, awayScore: 1, isHomeGame: true },
  { id: '4', homeTeam: 'SC Metropolis 25', awayTeam: 'Hertha 06 Berlin', date: '2025-09-13', time: '14:00', venue: 'Sportplatz Lichtenberg', competition: 'Kreisliga B', status: 'upcoming', isHomeGame: true },
  { id: '5', homeTeam: 'Tennis Borussia Berlin', awayTeam: 'SC Metropolis 25', date: '2025-09-20', time: '16:30', venue: 'TeBe-Sportplatz', competition: 'Kreisliga B', status: 'upcoming', isHomeGame: false },
]

const symposiumMboaFixtures: Fixture[] = [
  { id: 't1', homeTeam: 'SC Metropolis 25', awayTeam: 'Kenia', date: '2026-05-23', time: '', venue: 'Berlin', competition: 'Symposium Mboa Turnier 2026 — Gruppe C', status: 'finished', homeScore: 1, awayScore: 1, isHomeGame: true },
  { id: 't2', homeTeam: 'SC Metropolis 25', awayTeam: 'Zimbabwe', date: '2026-05-23', time: '', venue: 'Berlin', competition: 'Symposium Mboa Turnier 2026 — Gruppe C', status: 'finished', homeScore: 1, awayScore: 0, isHomeGame: true },
  { id: 't3', homeTeam: 'SC Metropolis 25', awayTeam: 'Guinée', date: '2026-05-24', time: '', venue: 'Berlin', competition: 'Symposium Mboa Turnier 2026 — Gruppe C', status: 'finished', homeScore: 2, awayScore: 1, isHomeGame: true },
]

const tableData = [
  { pos: 1, team: 'SV Lichtenberg 47',  p: 3, w: 3, d: 0, l: 0, gf: 9,  ga: 2, gd: '+7', pts: 9  },
  { pos: 2, team: 'SC Metropolis 25',   p: 2, w: 1, d: 0, l: 1, gf: 5,  ga: 3, gd: '+2', pts: 3, isOurs: true },
  { pos: 3, team: 'BSV Al-Dersimspor', p: 2, w: 1, d: 0, l: 1, gf: 4,  ga: 4, gd: '0',  pts: 3  },
  { pos: 4, team: 'FC Berlin-Ost',     p: 2, w: 1, d: 0, l: 1, gf: 3,  ga: 3, gd: '0',  pts: 3  },
  { pos: 5, team: 'Hertha 06 Berlin',  p: 2, w: 0, d: 1, l: 1, gf: 2,  ga: 4, gd: '-2', pts: 1  },
  { pos: 6, team: 'Tennis Borussia',   p: 1, w: 0, d: 1, l: 0, gf: 1,  ga: 1, gd: '0',  pts: 1  },
]

export default function SpielbetrIebPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero */}
      <section className="py-20 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Spielbetrieb</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            Spielplan & <span className="text-gold-gradient">Ergebnisse</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="section-subtitle text-ivory/70">Kreisliga B Berlin — Saison 2025/26</p>
        </div>
      </section>

      {/* Fixtures */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Upcoming */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gold" />
                <h2 className="font-heading font-semibold text-white uppercase tracking-widest">Nächste Spiele</h2>
              </div>
              <div className="space-y-3">
                {allFixtures.filter(f => f.status === 'upcoming').map(f => <FixtureCard key={f.id} fixture={f} />)}
              </div>
            </div>
            {/* Results */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-navy-400" />
                <h2 className="font-heading font-semibold text-white uppercase tracking-widest">Ergebnisse</h2>
              </div>
              <div className="space-y-3">
                {allFixtures.filter(f => f.status === 'finished').map(f => <FixtureCard key={f.id} fixture={f} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symposium Mboa Tournament */}
      <section className="section-padding bg-navy/20 border-y border-gold/10">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-5 h-5 text-gold" />
            <div className="section-label">Turnier</div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-1">
            Symposium Mboa <span className="text-gold-gradient">2026</span>
          </h2>
          <p className="text-text-muted text-sm mb-8">23.–24. Mai 2026 · Gruppe C · Berlin — Ungeschlagen durch die Gruppenphase 🏆</p>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
            {[
              { label: 'Siege', value: '2', color: 'text-green-400' },
              { label: 'Unentschieden', value: '1', color: 'text-gold' },
              { label: 'Niederlage', value: '0', color: 'text-text-muted' },
            ].map(s => (
              <div key={s.label} className="card p-4 text-center">
                <div className={`font-display text-3xl ${s.color}`}>{s.value}</div>
                <div className="text-text-muted text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3 max-w-lg">
            {symposiumMboaFixtures.map(f => <FixtureCard key={f.id} fixture={f} />)}
          </div>
        </div>
      </section>

      {/* League Table */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <SectionHeader
            label="Kreisliga B Berlin"
            title="Tabelle"
            titleHighlight="2025/26"
            subtitle="Aktuelle Tabellenstand der Kreisliga B Berlin."
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="Ligatabellle Kreisliga B Berlin">
              <thead>
                <tr className="border-b border-dark-border">
                  {['#', 'Verein', 'Sp', 'S', 'U', 'N', 'Tore', 'Diff', 'Pkt'].map(h => (
                    <th key={h} className="py-3 px-3 text-left text-text-muted text-xs font-heading uppercase tracking-wider first:w-8">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map(row => (
                  <tr
                    key={row.team}
                    className={`border-b border-dark-border transition-colors ${row.isOurs ? 'bg-navy/30 border-gold/20' : 'hover:bg-dark-card'}`}
                  >
                    <td className="py-3 px-3 text-text-muted font-mono text-xs">{row.pos}</td>
                    <td className="py-3 px-3">
                      <span className={`font-heading text-sm ${row.isOurs ? 'text-gold font-bold' : 'text-white'}`}>
                        {row.isOurs ? '★ ' : ''}{row.team}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-text-secondary text-xs text-center">{row.p}</td>
                    <td className="py-3 px-3 text-text-secondary text-xs text-center">{row.w}</td>
                    <td className="py-3 px-3 text-text-secondary text-xs text-center">{row.d}</td>
                    <td className="py-3 px-3 text-text-secondary text-xs text-center">{row.l}</td>
                    <td className="py-3 px-3 text-text-secondary text-xs text-center">{row.gf}:{row.ga}</td>
                    <td className="py-3 px-3 text-xs text-center font-mono">{row.gd}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`font-display text-lg ${row.isOurs ? 'text-gold' : 'text-white'}`}>{row.pts}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-muted text-xs mt-4 text-center">
            * Daten werden regelmäßig aktualisiert. Stand: Spieltag 3
          </p>
        </div>
      </section>
    </div>
  )
}
