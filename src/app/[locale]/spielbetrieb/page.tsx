import type { Metadata } from 'next'
import { Calendar, MapPin, Trophy, Info, Star } from 'lucide-react'
import { clsx } from 'clsx'

export const metadata: Metadata = {
  title: 'Testspiele & Spielbetrieb — SC Metropolis 25 Berlin',
  description:
    'Alle Freundschaftsspiele, Turniere und Spielergebnisse von SC Metropolis 25 Berlin e.V. — inkl. Symposium Mboa 2026. Der offizielle BFV-Spielbetrieb startet Saison 2026/27.',
}

// ─── FRIENDLY / COMMUNITY MATCH DATA ─────────────────────────────────────────
interface Match {
  id: string
  date: string
  homeTeam: string
  awayTeam: string
  homeScore?: number
  awayScore?: number
  venue?: string
  type: 'Testspiel' | 'Community Match'
  isHomeGame: boolean
  status: 'finished' | 'upcoming'
}

const matches: Match[] = [
  // Upcoming
  {
    id: 'u1',
    date: '2026-06-14',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Lichtenberg Kmer',
    venue: 'Poststadion Berlin',
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
    type: 'Testspiel',
    isHomeGame: true,
    status: 'upcoming',
  },
  // Past results (newest first)
  {
    id: 'r1',
    date: '2026-05-17',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Flambeau FC',
    homeScore: 4,
    awayScore: 3,
    venue: 'Poststadion Berlin',
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
    type: 'Testspiel',
    isHomeGame: false,
    status: 'finished',
  },
]

// ─── SYMPOSIUM MBOA 2026 TOURNAMENT DATA ──────────────────────────────────────
interface TournamentMatch {
  round: string
  opponent: string
  scoreM25: number | null
  scoreOpp: number | null
  result: 'win' | 'draw' | 'loss' | 'penalties'
  note?: string
}

const mboa2026: TournamentMatch[] = [
  { round: 'Gruppenphase',  opponent: '(3 Spiele)',      scoreM25: null, scoreOpp: null, result: 'win',      note: '2 Siege, 1 Unentschieden — ungeschlagen' },
  { round: 'Viertelfinale', opponent: 'FÉE-FÉE FC',      scoreM25: 1,    scoreOpp: 0,    result: 'win' },
  { round: 'Halbfinale',    opponent: 'Gambia',           scoreM25: null, scoreOpp: null, result: 'penalties', note: 'Ausgeschieden im Elfmeterschießen' },
]

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  })
}

function getResult(m: Match): 'win' | 'draw' | 'loss' | null {
  if (m.status !== 'finished' || m.homeScore === undefined || m.awayScore === undefined) return null
  const m25 = m.isHomeGame ? m.homeScore : m.awayScore
  const opp = m.isHomeGame ? m.awayScore : m.homeScore
  if (m25 > opp) return 'win'
  if (m25 < opp) return 'loss'
  return 'draw'
}

// ─── MATCH ROW ────────────────────────────────────────────────────────────────
function MatchRow({ match }: { match: Match }) {
  const result   = getResult(match)
  const finished = match.status === 'finished'

  return (
    <div className={clsx(
      'bg-dark-card border overflow-hidden transition-colors duration-200',
      result === 'win'  && 'border-l-[3px] border-l-gold border-dark-border hover:border-gold/40',
      result === 'draw' && 'border-l-[3px] border-l-text-muted border-dark-border',
      result === 'loss' && 'border-l-[3px] border-l-red-500/60 border-dark-border',
      !finished         && 'border-l-[3px] border-l-navy border-dark-border hover:border-gold/30',
    )}>
      <div className="p-5">
        {/* Top: date + tags */}
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
              <span className="font-display text-3xl w-8 text-center text-white">{match.homeScore}</span>
              <span className="text-text-muted font-bold text-lg mx-0.5">:</span>
              <span className="font-display text-3xl w-8 text-center text-white">{match.awayScore}</span>
            </div>
          ) : (
            <span className="text-gold font-heading font-bold text-xs uppercase tracking-widest shrink-0">vs</span>
          )}
          <p className={clsx(
            'font-heading font-semibold text-sm uppercase tracking-wide flex-1 truncate text-right',
            !match.isHomeGame ? 'text-white' : 'text-text-secondary'
          )}>
            {match.awayTeam}
          </p>
        </div>

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

// ─── TOURNAMENT MATCH ROW ─────────────────────────────────────────────────────
function TournamentRow({ m }: { m: TournamentMatch }) {
  const isGroupSummary = m.scoreM25 === null && m.result !== 'penalties'

  return (
    <div className={clsx(
      'bg-dark-card border overflow-hidden',
      (m.result === 'win')      && 'border-l-[3px] border-l-gold border-dark-border',
      (m.result === 'draw')     && 'border-l-[3px] border-l-text-muted border-dark-border',
      (m.result === 'penalties')&& 'border-l-[3px] border-l-ivory/30 border-dark-border',
    )}>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-heading uppercase tracking-wider text-gold border border-gold/30 px-2 py-0.5">
            {m.round}
          </span>
          <span className={clsx(
            'text-[10px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5',
            m.result === 'win'       && 'bg-gold/10 text-gold border border-gold/30',
            m.result === 'draw'      && 'bg-dark-surface text-text-muted border border-dark-border',
            m.result === 'penalties' && 'bg-dark-surface text-ivory/50 border border-dark-border',
          )}>
            {m.result === 'win'       ? 'Sieg'
           : m.result === 'draw'      ? 'Unentschieden'
           : m.result === 'penalties' ? 'Elfmeter (ausgeschieden)'
           : ''}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="font-heading font-semibold text-sm uppercase tracking-wide text-white flex-1 truncate">
            SC Metropolis 25
          </p>
          {isGroupSummary ? (
            <span className="text-text-muted text-xs font-heading shrink-0 italic">
              Gruppenphase
            </span>
          ) : m.scoreM25 !== null ? (
            <div className="flex items-center gap-1 shrink-0">
              <span className="font-display text-3xl w-8 text-center text-gold">{m.scoreM25}</span>
              <span className="text-text-muted font-bold text-lg mx-0.5">:</span>
              <span className="font-display text-3xl w-8 text-center text-white">{m.scoreOpp}</span>
            </div>
          ) : (
            <span className="text-text-muted text-xs font-heading shrink-0">— : —</span>
          )}
          <p className="font-heading font-semibold text-sm uppercase tracking-wide text-text-secondary flex-1 truncate text-right">
            {m.opponent}
          </p>
        </div>

        {m.note && (
          <p className="text-text-muted text-xs mt-3 pt-3 border-t border-dark-border italic">
            {m.note}
          </p>
        )}
      </div>
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
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

      {/* ── Page Hero ────────────────────────────── */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.4) 0, rgba(224,161,6,0.4) 1px, transparent 0, transparent 50%)',
          backgroundSize: '10px 10px',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container-custom relative z-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Spielbetrieb</p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4 leading-none">
            Spiele &{' '}
            <span className="text-gold-gradient">Ergebnisse</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="text-ivory/70 font-heading text-base max-w-2xl leading-relaxed">
            Testspiele, Community Matches und Turnierteilnahmen — SC Metropolis 25 Berlin
            ist bereits aktiv auf dem Platz. Der offizielle BFV-Ligabetrieb startet Saison 2026/27.
          </p>
        </div>
      </section>

      {/* ── Info Banner ──────────────────────────── */}
      <section className="bg-dark-surface border-b border-dark-border py-5">
        <div className="container-custom">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-text-secondary text-sm leading-relaxed">
              <span className="text-white font-semibold">Hinweis:</span>{' '}
              Alle aufgeführten Spiele sind Freundschaftsspiele, Community Matches oder
              Turnierspiele — kein offizieller BFV-Ligabetrieb. Der Einstieg in den
              Berliner Ligabetrieb ist für Saison 2026/27 in Vorbereitung.
            </p>
          </div>
        </div>
      </section>

      {/* ── Season Stats ─────────────────────────── */}
      <section className="py-10 bg-dark border-b border-dark-border">
        <div className="container-custom">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-6">
            Bilanz Testspiele 2025 / 2026
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              { label: 'Spiele',        value: past.length },
              { label: 'Siege',         value: wins,   accent: true },
              { label: 'Unentschieden', value: draws },
              { label: 'Niederlagen',   value: losses },
              { label: 'Tore',          value: `${goalsFor}:${goalsAgainst}` },
            ].map(s => (
              <div key={s.label} className="card p-4 text-center">
                <div className={clsx('font-display text-3xl leading-none mb-1', s.accent ? 'text-gold' : 'text-white')}>
                  {s.value}
                </div>
                <div className="text-text-muted text-xs font-heading uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Symposium Mboa 2026 ──────────────────── */}
      <section className="section-padding bg-dark-surface border-b border-dark-border">
        <div className="container-custom">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-gold" aria-hidden="true" />
                <p className="text-gold font-heading text-xs uppercase tracking-[0.3em]">
                  Turnier
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white uppercase leading-none">
                Symposium Mboa{' '}
                <span className="text-gold-gradient">2026</span>
              </h2>
              <div className="w-12 h-1 bg-gold mt-4" />
            </div>
            <div className="sm:text-right">
              <p className="text-text-muted text-xs font-heading uppercase tracking-wider mb-1">
                23. – 24. Mai 2026 · Berlin
              </p>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs sm:ml-auto">
                Ungeschlagen durch die Gruppenphase. Viertelfinalsieg.
                Im Halbfinale erst im Elfmeterschießen ausgeschieden.
              </p>
            </div>
          </div>

          {/* Match cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {mboa2026.map(m => (
              <TournamentRow key={m.round} m={m} />
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-text-muted text-xs mt-6 leading-relaxed">
            Das Symposium Mboa ist eines der bedeutendsten afrikanischen Kulturfestivals
            Berlins. SC Metropolis 25 nahm 2026 erstmals als eingetragener Verein teil —
            und erreichte das Halbfinale.
          </p>
        </div>
      </section>

      {/* ── Testspiele & Community Matches ──────── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Kommende Spiele */}
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
                  <p className="text-text-muted text-sm">Keine anstehenden Spiele.</p>
                </div>
              )}
            </div>

            {/* Vergangene Spiele */}
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

      {/* ── BFV Banner ───────────────────────────── */}
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
