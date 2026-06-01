import Link from 'next/link'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

export interface Fixture {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time?: string
  venue?: string
  competition: string
  tag?: string          // e.g. 'Testspiel', 'Community Match', 'Auswärtsspiel'
  status: 'upcoming' | 'live' | 'finished'
  homeScore?: number
  awayScore?: number
  isHomeGame: boolean
}

interface FixtureCardProps {
  fixture: Fixture
  compact?: boolean
}

export function FixtureCard({ fixture, compact = false }: FixtureCardProps) {
  const isFinished = fixture.status === 'finished'
  const isLive = fixture.status === 'live'
  const hasScore = isFinished || isLive

  const dateObj = new Date(fixture.date)
  const formattedDate = format(dateObj, 'dd. MMM yyyy', { locale: de })
  const formattedDay  = format(dateObj, 'EEE', { locale: de })

  // Determine result for SC Metropolis 25
  const getResult = () => {
    if (!hasScore) return null
    const homeGoals = fixture.homeScore ?? 0
    const awayGoals = fixture.awayScore ?? 0
    if (fixture.isHomeGame) {
      if (homeGoals > awayGoals) return 'win'
      if (homeGoals < awayGoals) return 'loss'
      return 'draw'
    } else {
      if (awayGoals > homeGoals) return 'win'
      if (awayGoals < homeGoals) return 'loss'
      return 'draw'
    }
  }

  const result = getResult()

  return (
    <div
      className={clsx(
        'card-hover relative overflow-hidden group',
        compact ? 'p-4' : 'p-5 md:p-6'
      )}
    >
      {/* Left accent bar based on result */}
      <div
        className={clsx(
          'absolute left-0 top-0 bottom-0 w-1',
          result === 'win'  && 'bg-green-500',
          result === 'loss' && 'bg-red-500',
          result === 'draw' && 'bg-gray-500',
          !result && isLive && 'bg-gold animate-pulse',
          !result && !isLive && 'bg-navy-600'
        )}
      />

      <div className="pl-3">
        {/* Competition + Status */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="badge-gold text-xs">{fixture.competition}</span>
            {fixture.tag && (
              <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">
                {fixture.tag}
              </span>
            )}
          </div>
          {isLive && (
            <span className="flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-wider animate-pulse">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Live
            </span>
          )}
          {isFinished && result && (
            <span className={clsx(
              'badge text-xs',
              result === 'win'  && 'badge-win',
              result === 'loss' && 'badge-loss',
              result === 'draw' && 'badge-draw',
            )}>
              {result === 'win' ? 'Sieg' : result === 'loss' ? 'Niederlage' : 'Unentschieden'}
            </span>
          )}
        </div>

        {/* Teams & Score */}
        <div className="flex items-center justify-between gap-4">
          {/* Home Team */}
          <div className="flex-1 min-w-0">
            <p className={clsx(
              'font-heading font-semibold text-sm uppercase tracking-wide truncate',
              fixture.isHomeGame ? 'text-white' : 'text-text-secondary'
            )}>
              {fixture.homeTeam}
            </p>
          </div>

          {/* Score or VS */}
          <div className="flex items-center gap-1 shrink-0">
            {hasScore ? (
              <>
                <span className={clsx(
                  'font-display text-3xl w-8 text-center',
                  result === 'win' ? 'text-gold' : 'text-white'
                )}>
                  {fixture.homeScore}
                </span>
                <span className="text-text-muted font-bold text-lg">:</span>
                <span className={clsx(
                  'font-display text-3xl w-8 text-center',
                  result === 'loss' ? 'text-red-400' : 'text-white'
                )}>
                  {fixture.awayScore}
                </span>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-gold font-heading font-bold text-sm">VS</span>
                {fixture.time && (
                  <span className="text-text-muted text-xs">{fixture.time}</span>
                )}
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="flex-1 min-w-0 text-right">
            <p className={clsx(
              'font-heading font-semibold text-sm uppercase tracking-wide truncate',
              !fixture.isHomeGame ? 'text-white' : 'text-text-secondary'
            )}>
              {fixture.awayTeam}
            </p>
          </div>
        </div>

        {/* Meta Info */}
        {!compact && (
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-dark-border">
            <div className="flex items-center gap-1.5 text-text-muted text-xs">
              <Calendar className="w-3 h-3 text-gold" aria-hidden="true" />
              <span>{formattedDay}, {formattedDate}</span>
            </div>
            {fixture.venue && (
              <div className="flex items-center gap-1.5 text-text-muted text-xs">
                <MapPin className="w-3 h-3 text-gold" aria-hidden="true" />
                <span className="truncate">{fixture.venue}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
