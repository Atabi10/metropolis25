import type { Metadata } from 'next'
import { Calendar, MapPin, Trophy, Clock, Info } from 'lucide-react'
import { clsx } from 'clsx'

export const metadata: Metadata = {
  title: 'Testspiele & Spielbetrieb — SC Metropolis 25 Berlin',
  description: 'Alle Freundschaftsspiele, Community Matches und Spielergebnisse von SC Metropolis 25 Berlin e.V. Der offizielle BFV-Spielbetrieb startet Saison 2026/27.',
}

// ─── MATCH DATA ───────────────────────────────────────────────────────────────
// All matches are friendlies / community games — NOT official BFV league matches.

interface Match {
  id: string
  date: string          // ISO
  homeTeam: string
  awayTeam: string
  homeScore?: number
  awayScore?: number
  venue?: string
  type: 'Testspiel' | 'Community Match'
  location?: string     // short tag e.g. 'Poststadion'
  isHomeGame: boolean
  status: 'finished' | 'upcoming'
}

const matches: Match[] = [
  // ── Upcoming ──────────────────────────────────────────────────────────────
  {
    id: 'u1',
    date: '2026-06-14',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Lichtenberg Kmer',
    venue: 'Poststadion Berlin',
    location: 'Poststadion',
    type: 'Testspiel',
    isHomeGame: true,
    status: 'upcoming',
  },
  {
    id: 'u2',
    date: '2026-06-21',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'ARNDÉ FC',
    venue: 'Poststadion Berlin',
    location: 'Poststadion',
    type: 'Testspiel',
    isHomeGame: true,
    status: 'upcoming',
  },
  // ── Past results (newest first) ──────────────────────────────────────────
  {
    id: 'r1',
    date: '2026-05-17',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Flambeau FC',
    homeScore: 4,
    awayScore: 3,
    venue: 'Poststadion Berlin',
    location: 'Poststadion',
    type: 'Testspiel',
    isHomeGame: true,
    status: 'finished',
  },
  {
    id: 'r2',
    date: '2026-04-27',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'New Star Berlin SC',
    homeScore: 1,
    awayScore: 0,
    type: 'Community Match',
    isHomeGame: true,
    status: 'finished',
  },
  {
    id: 'r3',
    date: '2026-04-19',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Lichtenberg Kmer',
    homeScore: 4,
    awayScore: 2,
    venue: 'Hauffstraße 13–20, 10317 Berlin',
    location: 'Hauffstraße',
    type: 'Community Match',
    isHomeGame: true,
    status: 'finished',
  },
  {
    id: 'r4',
    date: '2026-03-15',
    homeTeam: 'Flambeau FC',
    awayTeam: 'SC Metropolis 25',
    homeScore: 2,
    awayScore: 2,
    venue: 'Poststadion Berlin',
    location: 'Poststadion',
    type: 'Testspiel',
    isHomeGame: false,
    status: 'finished',
  },
]

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function getResult(m: Match): 'win' | 'draw' | 'loss' | null {
  if (m.status !== 'finished' || m.homeScore === undefined || m.awayScore === undefined) return null
  const m25 = m.isHomeGame ? m.homeScore : m.awayScore
  const opp = m.isHomeGame ? m.awayScore : m.homeScore
  if (m25 > opp) return 'win'
  if (m25 < opp) return 'loss'
  return 'draw'
}

function MatchRow({ match }: { match: Match }) {
  const result = getResult(match)
  const finished = match.status === 'finished'
  const m25Goals = match.isHomeGame ? match.homeScore : match.awayScore
  const oppGoals = match.isHomeGame ? match.awayScore : match.homeScore

  return (
    <div className={clsx(
      'group relative bg-dark-card border transition-colors duration-200 overflow-hidden',
      result === 'win'  && 'border-l-[3px] border-l-gold border-dark-border hover:border-gold/40',
      result === 'draw' && 'border-l-[3px] border-l-text-muted border-dark-border hover:border-dark-muted',
      result === 'loss' && 'border-l-[3px] border-l-red-500/60 border-dark-border hover:border-red-500/30',
      !finished         && 'border-l-[3px] border-l-navy border-dark-border hover:border-gold/30',
    )}>
      <div className="p-5">
        {/* Top row: date + badges */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <Calendar className="w-3 h-3 text-gold" aria-hidden="true" />
            <span>{formatDate(match.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-heading uppercase tracking-wider border border-dark-border text-text-muted px-2 py-0.5">
              {match.type}
            </span>
            {!match.isHomeGame && (
              <span className="text-[10px] font-heading uppercase tracking-wider border border-navy text-gold/60 px-2 py-0.5">
                Auswärts
              </span>
            )}
            {finished && result && (
              <span className={clsx(
                'text-[10px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5',
                result === 'win'  && 'bg-gold/10 text-gold border border-gold/30',
                result === 'draw' && 'bg-dark-surface text-text-muted border border-dark-border',
                result === 'loss' && 'bg-red-500/10 text-red-400 border border-red-500/20',
              )}>
                {result === 'win' ? 'Sieg' : result === 'draw' ? 'Unentschieden' : 'Niederlage'}
              </span>
            )}
            {!finished && (
              <span className="text-[10px] font-heading uppercase tracking-wider bg-navy/60 text-ivory/60 border border-navy px-2 py-0.5">
                Bevorstehend
              </span>
            )}
          </div>
        </div>

        {/* Teams + Score */}
        <div className="flex items-center justify-between gap-4">
          <p className={clsx(
            'font-heading font-semibold text-sm uppercase tracking-wide flex-1 truncate',
            match.isHomeGame ? 'text-white' : 'text-text-secondary'
          )}>
            {match.homeTeam}
          </p>

          {finished ? (
            <div className="flex items-center gap-1 shrink-0">
              <span className={clsx(
                'font-display text-3xl w-8 text-center',
                result === 'win' && match.isHomeGame ? 'text-gold' :
                result === 'win' && !match.isHomeGame ? 'text-white' : 'text-white'
              )}>
                {match.homeScore}
              </span>
              <span className="text-text-muted font-bold text-lg mx-0.5">:</span>
              <span className="font-display text-3xl w-8 text-center text-white">
                {match.awayScore}
              </span>
            </div>
          ) : (
            <div className="shrink-0 flex flex-col items-center">
              <span className="text-gold font-heading font-bold text-xs uppercase tracking-widest">vs</span>
            </div>
          )}

          <p className={clsx(
            'font-heading font-semibold text-sm uppercase tracking-wide flex-1 truncate text-right',
            !match.isHomeGame ? 'text-white' : 'text-text-secondary'
          )}>
            {match.awayTeam}
          </p>
        </div>

        {/* Venue */}
        {match.venue && (
          <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-dark-border">
            <MapPin className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
            <span className="text-text-muted text-xs truncate">{match.venue}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SpielbetriebPage() {
  const past     = matches.filter(m => m.status === 'finished')
  const upcoming = matches.filter(m => m.status === 'upcoming')

  const wins   = past.filter(m => getResult(m) === 'win').length
  const draws  = past.filter(m => getResult(m) === 'draw').length
  const losses = past.filter(m => getResult(m) === 'loss').length
  const goalsFor     = past.reduce((s, m) => s + (m.isHomeGame ? (m.homeScore ?? 0) : (m.awayScore ?? 0)), 0)
  const goalsAgainst = past.reduce((s, m) => s + (m.isHomeGame ? (m.awayScore ?? 0) : (m.homeScore ?? 0)), 0)

  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Page Hero ─────────────────────────────────────────────── */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.4) 0, rgba(224,161,6,0.4) 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container-custom relative z-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Spielbetrieb</p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4 leading-none">
            Testspiele &{' '}
            <span className="text-gold-gradient">Community Matches</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="text-ivory/70 font-heading text-base max-w-2xl leading-relaxed">
            Bevor der offizielle BFV-Spielbetrieb beginnt, sammelt SC Metropolis 25 Berlin e.V.
            bereits Spielpraxis durch Freundschaftsspiele, Community Matches und lokale
            Fußballbegegnungen in Berlin.
          </p>
        </div>
      </section>

      {/* ── Status Banner ─────────────────────────────────────────── */}
      <section className="bg-dark-surface border-b border-dark-border py-5">
        <div className="container-custom">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-text-secondary text-sm leading-relaxed">
              <span className="text-white font-semibold">Hinweis:</span>{' '}
              Alle aufgeführten Spiele sind Freundschaftsspiele oder Community Matches —
              kein offizieller BFV-Ligabetrieb. Der Einstieg in den Berliner Ligabetrieb
              ist für Saison 2026/27 in Vorbereitung.
            </p>
          </div>
        </div>
      </section>

      {/* ── Season Summary ────────────────────────────────────────── */}
      {past.length > 0 && (
        <section className="py-10 bg-dark border-b border-dark-border">
          <div className="container-custom">
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-6">Bilanz 2025 / 2026</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { label: 'Spiele',       value: past.length },
                { label: 'Siege',        value: wins,         accent: true },
                { label: 'Unentschieden',value: draws },
                { label: 'Niederlagen',  value: losses },
                { label: 'Tore',         value: `${goalsFor}:${goalsAgainst}` },
              ].map(stat => (
                <div key={stat.label} className="card p-4 text-center">
                  <div className={clsx(
                    'font-display text-3xl leading-none mb-1',
                    stat.accent ? 'text-gold' : 'text-white'
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs font-heading uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* ── Kommende Spiele ─────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gold" aria-hidden="true" />
                <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                  Kommende Spiele
                </h2>
              </div>

              {upcoming.length > 0 ? (
                <div className="space-y-4">
                  {upcoming.map(m => <MatchRow key={m.id} match={m} />)}
                </div>
              ) : (
                <div className="card p-8 text-center">
                  <Calendar className="w-8 h-8 text-text-muted mx-auto mb-3" aria-hidden="true" />
                  <p className="text-text-muted text-sm">Keine anstehenden Spiele geplant.</p>
                </div>
              )}
            </div>

            {/* ── Vergangene Spiele ────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-dark-muted" aria-hidden="true" />
                <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                  Vergangene Spiele
                </h2>
              </div>

              <div className="space-y-4">
                {past.map(m => <MatchRow key={m.id} match={m} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BFV Preparation Banner ────────────────────────────────── */}
      <section className="py-16 bg-navy border-t border-dark-border">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <Trophy className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-4">
            BFV-Spielbetrieb{' '}
            <span className="text-gold-gradient">2026 / 27</span>
          </h2>
          <p className="text-ivory/70 text-sm leading-relaxed mb-6 font-heading">
            Wir bereiten uns aktiv auf den Einstieg in den Berliner Ligabetrieb vor.
            Strukturiertes Training, wachsende Mitgliederzahl und eine klare Perspektive —
            der nächste Schritt ist nah.
          </p>
          <a href="/mitmachen" className="btn-primary btn btn-lg inline-flex">
            Jetzt mitmachen & dabei sein →
          </a>
        </div>
      </section>
    </div>
  )
}
