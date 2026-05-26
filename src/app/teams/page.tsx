import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teams — SC Metropolis 25 Berlin',
  description: 'Alle Mannschaften von SC Metropolis 25 Berlin — 1. Herren aktiv, 2. Herren und Frauenfußball im Aufbau.',
}

const comingSoon = [
  {
    name: '2. Herren-Mannschaft',
    badge: '2. Herren',
    description: 'Im Aufbau. Der Entwicklungspool für die Erste Mannschaft — für Spieler, die regelmäßig Spielpraxis sammeln und sich beweisen wollen. Interesse jetzt anmelden.',
    href: '/mitmachen?team=2herren',
  },
  {
    name: 'Frauenfußball',
    badge: 'Frauen',
    description: 'Perspektivisch im Aufbau. Wir planen ein eigenständiges Frauenteam. Interesse? Meld dich jetzt vor — du formst, wie dieses Team aussieht.',
    href: '/mitmachen?team=frauen',
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

          {/* 1. Mannschaft — active */}
          <Link
            href="/teams/erste-mannschaft"
            className="group card p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 block border-gold/30 mb-6"
          >
            <div className="flex items-start gap-6">
              <div className="font-display text-6xl text-gold/30 leading-none w-12 shrink-0 group-hover:text-gold/60 transition-colors">
                01
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-heading font-bold text-white text-2xl uppercase tracking-wide group-hover:text-gold transition-colors">
                    1. Mannschaft
                  </h2>
                  <span className="badge-gold text-xs">Aktiv</span>
                </div>
                <p className="text-gold text-xs font-heading uppercase tracking-widest mb-3">Aufbau für BFV-Spielbetrieb · Saison 2026/27</p>
                <p className="text-text-muted text-sm leading-relaxed max-w-xl">
                  Die Erste Herrenmannschaft ist das Herzstück des Vereins. Wir bereiten uns
                  aktiv auf den regulären BFV-Spielbetrieb ab Saison 2026/27 vor — mit
                  lizenzierten Trainern, strukturiertem Training und klarer Entwicklungsperspektive.
                </p>
                <div className="flex flex-wrap gap-6 mt-4">
                  {[['Trainer', 'Makendi Amos'], ['Spieler', '23 aktiv'], ['Ziel', 'BFV 2026/27']].map(([k, v]) => (
                    <div key={k}>
                      <span className="text-text-muted text-xs uppercase tracking-wider">{k}: </span>
                      <span className="text-white text-xs font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gold text-xs font-heading font-semibold uppercase tracking-widest shrink-0">
              <span>Team ansehen</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </div>
          </Link>

          {/* Coming Soon */}
          <div className="grid sm:grid-cols-2 gap-4">
            {comingSoon.map((team, i) => (
              <div key={team.name} className="card border-dashed border-dark-muted p-6 flex flex-col justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="font-display text-4xl text-dark-muted leading-none w-10 shrink-0">
                    {String(i + 2).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-bold text-text-secondary text-base uppercase tracking-wide">{team.name}</h3>
                      <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">Bald</span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{team.description}</p>
                  </div>
                </div>
                <div className="pl-14">
                  <Link href={team.href} className="btn-outline btn btn-sm text-xs">
                    Interesse anmelden
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
