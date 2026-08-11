import { Calendar, MapPin, Clock } from 'lucide-react'
import { clsx } from 'clsx'
import {
  type Fixture,
  getOutcome,
  isHomeGame,
  formatVenue,
} from '@/data/fixtures'

type Locale = 'de' | 'en' | 'fr'

const COPY = {
  de: {
    win: 'Sieg', draw: 'Unentschieden', loss: 'Niederlage',
    upcoming: 'Bevorstehend', provisional: 'Vorläufig',
    noResult: 'Ergebnis offen', away: 'Auswärts', home: 'Heimspiel',
    vs: 'VS', tbc: 'noch offen',
  },
  en: {
    win: 'Win', draw: 'Draw', loss: 'Loss',
    upcoming: 'Upcoming', provisional: 'Provisional',
    noResult: 'No result', away: 'Away', home: 'Home',
    vs: 'VS', tbc: 'TBC',
  },
  fr: {
    win: 'Victoire', draw: 'Nul', loss: 'Défaite',
    upcoming: 'À venir', provisional: 'Provisoire',
    noResult: 'Résultat inconnu', away: 'Extérieur', home: 'Domicile',
    vs: 'VS', tbc: 'à confirmer',
  },
}

const DATE_LOCALE: Record<Locale, string> = { de: 'de-DE', en: 'en-GB', fr: 'fr-FR' }

/** Deterministic UTC formatting — identical on server and client. */
function formatDate(iso: string, locale: Locale) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(DATE_LOCALE[locale], {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

interface FixtureCardProps {
  fixture: Fixture
  locale?: Locale
  compact?: boolean
}

export function FixtureCard({ fixture, locale = 'de', compact = false }: FixtureCardProps) {
  const c = COPY[locale]
  const outcome = getOutcome(fixture)
  const home = isHomeGame(fixture)
  const finished = fixture.status === 'finished'
  const unconfirmed = fixture.status === 'unconfirmed'
  const provisional = fixture.status === 'provisional'
  const isOfficial = fixture.competitionType === 'league' || fixture.competitionType === 'cup'

  return (
    <div
      className={clsx(
        'relative overflow-hidden bg-dark-card border border-dark-border transition-colors duration-200',
        outcome === 'win'  && 'border-l-[3px] border-l-gold hover:border-gold/40',
        outcome === 'draw' && 'border-l-[3px] border-l-text-muted',
        outcome === 'loss' && 'border-l-[3px] border-l-red-500/60',
        !outcome && unconfirmed && 'border-l-[3px] border-l-dark-muted',
        !outcome && !unconfirmed && 'border-l-[3px] border-l-navy hover:border-gold/30',
        compact ? 'p-4' : 'p-5',
      )}
    >
      {/* ── Top row: competition + status ─────────────────────────── */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={clsx(
              'text-[10px] font-heading uppercase tracking-wider px-2 py-0.5',
              isOfficial
                ? 'bg-gold/10 text-gold border border-gold/30'
                : 'text-text-muted border border-dark-border',
            )}
          >
            {fixture.competition}
          </span>
          {fixture.round && (
            <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">
              {fixture.round}
            </span>
          )}
          <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">
            {home ? c.home : c.away}
          </span>
        </div>

        <div className="shrink-0">
          {finished && outcome && (
            <span
              className={clsx(
                'text-[10px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5',
                outcome === 'win'  && 'bg-gold/10 text-gold border border-gold/30',
                outcome === 'draw' && 'bg-dark-surface text-text-muted border border-dark-border',
                outcome === 'loss' && 'bg-red-500/10 text-red-400 border border-red-500/20',
              )}
            >
              {c[outcome]}
            </span>
          )}
          {provisional && (
            <span className="text-[10px] font-heading uppercase tracking-wider bg-white/5 text-ivory/60 border border-white/10 px-2 py-0.5">
              {c.provisional}
            </span>
          )}
          {fixture.status === 'scheduled' && (
            <span className="text-[10px] font-heading uppercase tracking-wider bg-navy/60 text-ivory/70 border border-navy px-2 py-0.5">
              {c.upcoming}
            </span>
          )}
          {unconfirmed && (
            <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">
              {c.noResult}
            </span>
          )}
        </div>
      </div>

      {/* ── Teams + score ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-4">
        <p
          className={clsx(
            'font-heading font-semibold text-sm uppercase tracking-wide flex-1 min-w-0 truncate',
            home ? 'text-white' : 'text-text-secondary',
          )}
        >
          {fixture.homeTeam}
        </p>

        <div className="flex items-center gap-1 shrink-0">
          {finished && fixture.result ? (
            <>
              <span className="font-display text-3xl w-8 text-center text-white">
                {fixture.result.homeScore}
              </span>
              <span className="text-text-muted font-bold text-lg mx-0.5">:</span>
              <span className="font-display text-3xl w-8 text-center text-white">
                {fixture.result.awayScore}
              </span>
            </>
          ) : unconfirmed ? (
            <span className="text-text-muted text-xs font-heading">— : —</span>
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-gold font-heading font-bold text-xs uppercase tracking-widest">
                {c.vs}
              </span>
              {fixture.kickoff && (
                <span className="text-text-muted text-[11px] mt-0.5">{fixture.kickoff}</span>
              )}
            </div>
          )}
        </div>

        <p
          className={clsx(
            'font-heading font-semibold text-sm uppercase tracking-wide flex-1 min-w-0 truncate text-right',
            !home ? 'text-white' : 'text-text-secondary',
          )}
        >
          {fixture.awayTeam}
        </p>
      </div>

      {/* ── Meta ──────────────────────────────────────────────────── */}
      {!compact && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 pt-3 border-t border-dark-border">
          <span className="flex items-center gap-1.5 text-text-muted text-xs">
            <Calendar className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
            {formatDate(fixture.date, locale)}
          </span>

          {!finished && !unconfirmed && (
            <span className="flex items-center gap-1.5 text-text-muted text-xs">
              <Clock className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
              {fixture.kickoff ?? c.tbc}
            </span>
          )}

          <span className="flex items-center gap-1.5 text-text-muted text-xs min-w-0">
            <MapPin className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
            <span className="truncate">{formatVenue(fixture, locale)}</span>
          </span>
        </div>
      )}

      {fixture.note && (
        <p className="text-text-muted text-[11px] italic mt-2">{fixture.note}</p>
      )}
    </div>
  )
}
