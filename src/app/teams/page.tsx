import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teams — SC Metropolis 25 Berlin',
  description: 'Alle Mannschaften von SC Metropolis 25 Berlin — Erste Mannschaft, U23, Jugend und Akademie.',
}

const teams = [
  {
    slug: 'erste-mannschaft',
    name: '1. Mannschaft',
    competition: 'Kreisliga B Berlin',
    badge: 'Senioren',
    description: 'Die repräsentative Spielfläche des Vereins. Die Erste Mannschaft verkörpert alles, wofür SC Metropolis 25 steht: Ehrgeiz, Teamgeist und Berliner DNA.',
    players: '~18 Spieler',
    trainer: 'N.N.',
    founded: '2025',
  },
  {
    slug: 'u23',
    name: 'U23 / Zweite Mannschaft',
    competition: 'Kreisliga C Berlin',
    badge: 'U23',
    description: 'Der Entwicklungspool für die Erste Mannschaft. Junge Talente bekommen hier Wettkampfpraxis auf hohem Niveau.',
    players: '~16 Spieler',
    trainer: 'N.N.',
    founded: '2025',
  },
  {
    slug: 'jugend',
    name: 'Jugend & Akademie',
    competition: 'Berliner Jugendliga',
    badge: 'Jugend',
    description: 'U8 bis U18 — Wo die nächste Generation von Metropolis 25 heranwächst. Professionelle Betreuung, modernes Training, Berliner Identität.',
    players: 'U8 – U18',
    trainer: 'Mehrere Trainer',
    founded: '2025',
  },
]

export default function TeamsPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="py-20 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Mannschaften</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            Unsere <span className="text-gold-gradient">Teams</span>
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="space-y-6">
            {teams.map((team, i) => (
              <Link
                key={team.slug}
                href={`/teams/${team.slug}`}
                className="group card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="flex items-start gap-6">
                  {/* Number */}
                  <div className="font-display text-6xl text-gold/20 leading-none w-12 shrink-0 group-hover:text-gold/40 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-heading font-bold text-white text-xl uppercase tracking-wide group-hover:text-gold transition-colors">
                        {team.name}
                      </h2>
                      <span className="badge-gold text-xs">{team.badge}</span>
                    </div>
                    <p className="text-gold text-xs font-heading uppercase tracking-widest mb-3">{team.competition}</p>
                    <p className="text-text-muted text-sm leading-relaxed max-w-xl">{team.description}</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {[['Spieler', team.players], ['Trainer', team.trainer], ['Seit', team.founded]].map(([k, v]) => (
                        <div key={k}>
                          <span className="text-text-muted text-xs uppercase tracking-wider">{k}: </span>
                          <span className="text-white text-xs font-semibold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gold text-xs font-heading uppercase tracking-widest shrink-0">
                  <span>Team ansehen</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>

          {/* Women's Teaser */}
          <div className="mt-6 card border-dashed border-dark-muted p-6 text-center">
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-2">
              Damen-Team — In Planung
            </h3>
            <p className="text-text-muted text-xs mb-4">
              Wir arbeiten am Aufbau eines Damen-Teams. Interesse? Meld dich!
            </p>
            <Link href="/mitmachen?team=frauen" className="btn-outline btn btn-sm">
              Interesse anmelden
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
