/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH — SC METROPOLIS 25 BERLIN e.V. FIXTURES
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Every fixture displayed anywhere on this website MUST come from this file.
 * Do not hard-code match data in components or pages.
 *
 * Authoritative external reference: Fußball.de
 * Update workflow: see HOW_TO_UPDATE_FIXTURES.md in the project root.
 *
 * RULES — read before editing:
 *   1. Never invent a date, kick-off time, venue, opponent name or result.
 *   2. Copy team names EXACTLY as published (including "FZ", "SG", suffixes).
 *   3. If Fußball.de marks a fixture provisional  → status: 'provisional'
 *   4. If kick-off or venue is not published yet  → leave the field undefined.
 *      The UI renders "noch offen" / "TBC" automatically.
 *   5. `status` is set MANUALLY. It is never derived from the current date,
 *      so the site never silently reclassifies a match it has no result for.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type CompetitionType = 'league' | 'cup' | 'friendly' | 'tournament'

export type FixtureStatus =
  | 'scheduled'    // confirmed date, confirmed by club or Fußball.de
  | 'provisional'  // published but marked provisional ("Vorläufig")
  | 'finished'     // played, result confirmed and recorded below
  | 'unconfirmed'  // date has passed, no published/confirmed result available

export interface FixtureResult {
  homeScore: number
  awayScore: number
}

export interface Fixture {
  id: string
  /** ISO date, YYYY-MM-DD */
  date: string
  /** 24h local kick-off, "HH:MM". Undefined = not yet published. */
  kickoff?: string
  /** Full competition name exactly as published. */
  competition: string
  competitionType: CompetitionType
  /** Optional round/stage, e.g. "Qualifikationsrunde". */
  round?: string
  homeTeam: string
  awayTeam: string
  /** Venue name. Undefined = not yet confirmed. */
  venue?: string
  /** Pitch designation, e.g. "Kunstrasen 2". */
  pitch?: string
  /** Street address of the venue, if confirmed. */
  venueAddress?: string
  /**
   * Explicit map link. Only set this when the generated search URL resolves to
   * the wrong place — otherwise leave it undefined and let getMapsUrl() build
   * one from the venue and address.
   */
  mapsUrl?: string
  status: FixtureStatus
  /** Only present when status === 'finished'. */
  result?: FixtureResult
  /** Free-text note rendered under the fixture (e.g. why no result exists). */
  note?: string
  /** Where this row's data came from. */
  source: string
  sourceUrl?: string
  /** Marks the club's first ever official competitive fixture. */
  milestone?: boolean
}

export const CLUB_NAME = 'SC Metropolis 25'

/** Official competition names — use these constants, never free-text. */
export const COMPETITIONS = {
  league: 'Bezirksliga Betrieb',
  leagueShort: 'Bezirksliga FZ',
  cup: 'Yec-Sports-Pokal',
} as const

export const CURRENT_SEASON = '2026/27'

// ─────────────────────────────────────────────────────────────────────────────
// OFFICIAL FIXTURES — SEASON 2026/27
// ─────────────────────────────────────────────────────────────────────────────

export const officialFixtures: Fixture[] = [
  {
    id: 'cup-2026-08-30-prenzlauer-berg',
    date: '2026-08-30',
    kickoff: '12:00',
    competition: COMPETITIONS.cup,
    competitionType: 'cup',
    round: 'Qualifikationsrunde',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'SG Prenzlauer Berg FZ Kunst',
    venue: 'BVB-Stadion',
    pitch: 'Kunstrasen 2',
    venueAddress: 'Siegfriedstraße 71, 10365 Berlin',
    status: 'scheduled',
    milestone: true,
    source: 'Vereinsangabe · Sportstättenüberlassung Bezirksamt Lichtenberg',
  },

  // ── Bezirksliga Betrieb (Bezirksliga FZ) 2026/27 ───────────────────────────
  // No league fixtures have been entered here yet.
  // Add them from Fußball.de as soon as the Staffelplan is published.
  // Do NOT invent placeholder league matches.
]

// ─────────────────────────────────────────────────────────────────────────────
// PRE-SEASON / FRIENDLIES — kept strictly separate from official competition
// ─────────────────────────────────────────────────────────────────────────────

export const friendlyFixtures: Fixture[] = [
  {
    id: 'f-2026-06-21-arnde',
    date: '2026-06-21',
    competition: 'Testspiel',
    competitionType: 'friendly',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'ARNDÉ FC',
    status: 'unconfirmed',
    note: 'Ergebnis nicht dokumentiert.',
    source: 'Vereinsarchiv',
  },
  {
    id: 'f-2026-06-14-kmer',
    date: '2026-06-14',
    competition: 'Testspiel',
    competitionType: 'friendly',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Lichtenberg Kmer',
    status: 'unconfirmed',
    note: 'Ergebnis nicht dokumentiert.',
    source: 'Vereinsarchiv',
  },
  {
    id: 'f-2026-05-17-flambeau',
    date: '2026-05-17',
    competition: 'Testspiel',
    competitionType: 'friendly',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Flambeau FC',
    venue: 'Poststadion Berlin',
    status: 'finished',
    result: { homeScore: 4, awayScore: 3 },
    source: 'Vereinsarchiv',
  },
  {
    id: 'f-2026-04-27-newstar',
    date: '2026-04-27',
    competition: 'Community Match',
    competitionType: 'friendly',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'New Star Berlin SC',
    status: 'finished',
    result: { homeScore: 1, awayScore: 0 },
    source: 'Vereinsarchiv',
  },
  {
    id: 'f-2026-04-19-kmer',
    date: '2026-04-19',
    competition: 'Community Match',
    competitionType: 'friendly',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Lichtenberg Kmer',
    venue: 'Hauffstraße 13–20, 10317 Berlin',
    status: 'finished',
    result: { homeScore: 4, awayScore: 2 },
    source: 'Vereinsarchiv',
  },
  {
    id: 'f-2026-03-15-flambeau',
    date: '2026-03-15',
    competition: 'Testspiel',
    competitionType: 'friendly',
    homeTeam: 'Flambeau FC',
    awayTeam: 'SC Metropolis 25',
    venue: 'Poststadion Berlin',
    status: 'finished',
    result: { homeScore: 2, awayScore: 2 },
    source: 'Vereinsarchiv',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// HISTORIC TOURNAMENTS
// ─────────────────────────────────────────────────────────────────────────────

export interface TournamentMatch {
  round: string
  opponent: string
  scoreM25: number | null
  scoreOpp: number | null
  outcome: 'win' | 'draw' | 'loss' | 'penalties'
  note?: string
}

export interface Tournament {
  id: string
  name: string
  year: string
  dates: string
  summary: string
  placement?: string
  matches: TournamentMatch[]
}

export const tournaments: Tournament[] = [
  {
    id: 'mboa-2026',
    name: 'Symposium Mboa',
    year: '2026',
    dates: '23. – 24. Mai 2026 · Berlin',
    summary:
      'Ungeschlagen durch die Gruppenphase. Viertelfinalsieg. Im Halbfinale erst im Elfmeterschießen ausgeschieden.',
    matches: [
      { round: 'Gruppenphase',  opponent: '(3 Spiele)', scoreM25: null, scoreOpp: null, outcome: 'win',       note: '2 Siege, 1 Unentschieden — ungeschlagen' },
      { round: 'Viertelfinale', opponent: 'FÉE-FÉE FC', scoreM25: 1,    scoreOpp: 0,    outcome: 'win' },
      { round: 'Halbfinale',    opponent: 'Gambia',     scoreM25: null, scoreOpp: null, outcome: 'penalties', note: 'Ausgeschieden im Elfmeterschießen' },
    ],
  },
  {
    id: 'mboa-2024',
    name: 'Symposium Mboa',
    year: '2024',
    dates: 'Berlin 2024',
    placement: 'Finalist — Silber',
    summary:
      '5 Siege, 1 Unentschieden, 1 Niederlage im Finale. Der Moment, der die Vereinsgründung auslöste.',
    matches: [
      { round: 'Gruppenphase',  opponent: 'Santé Biesdorf', scoreM25: 1, scoreOpp: 0, outcome: 'win' },
      { round: 'Gruppenphase',  opponent: 'Benin',          scoreM25: 1, scoreOpp: 1, outcome: 'draw' },
      { round: 'Gruppenphase',  opponent: 'Leipzig',        scoreM25: 2, scoreOpp: 1, outcome: 'win' },
      { round: 'Viertelfinale', opponent: 'Ghana',          scoreM25: 2, scoreOpp: 0, outcome: 'win' },
      { round: 'Halbfinale',    opponent: 'Algeria',        scoreM25: 1, scoreOpp: 0, outcome: 'win' },
      { round: 'Finale',        opponent: 'Flambeau FC',    scoreM25: 0, scoreOpp: 1, outcome: 'loss',
        note: 'Finalist — Silber. Der Moment, der die Vereinsgründung auslöste.' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// SELECTORS — the only sanctioned way for components to read fixture data
// ─────────────────────────────────────────────────────────────────────────────

export const allFixtures: Fixture[] = [...officialFixtures, ...friendlyFixtures]

const byDateAsc  = (a: Fixture, b: Fixture) => a.date.localeCompare(b.date)
const byDateDesc = (a: Fixture, b: Fixture) => b.date.localeCompare(a.date)

/** Official (league + cup) matches that have not been played yet. */
export function getUpcomingOfficial(): Fixture[] {
  return officialFixtures
    .filter(f => f.status === 'scheduled' || f.status === 'provisional')
    .sort(byDateAsc)
}

/** The single next official competitive fixture, or null. */
export function getNextOfficialMatch(): Fixture | null {
  return getUpcomingOfficial()[0] ?? null
}

/** Official matches with a confirmed result. */
export function getOfficialResults(): Fixture[] {
  return officialFixtures.filter(f => f.status === 'finished').sort(byDateDesc)
}

export function getOfficialByType(type: CompetitionType): Fixture[] {
  return officialFixtures.filter(f => f.competitionType === type).sort(byDateAsc)
}

/** Friendlies and community matches, newest first. */
export function getFriendlies(): Fixture[] {
  return [...friendlyFixtures].sort(byDateDesc)
}

export function isHomeGame(f: Fixture): boolean {
  return f.homeTeam === CLUB_NAME
}

/** Win / draw / loss from SC Metropolis 25's perspective. Null if no result. */
export function getOutcome(f: Fixture): 'win' | 'draw' | 'loss' | null {
  if (f.status !== 'finished' || !f.result) return null
  const own = isHomeGame(f) ? f.result.homeScore : f.result.awayScore
  const opp = isHomeGame(f) ? f.result.awayScore : f.result.homeScore
  if (own > opp) return 'win'
  if (own < opp) return 'loss'
  return 'draw'
}

export function getOpponent(f: Fixture): string {
  return isHomeGame(f) ? f.awayTeam : f.homeTeam
}

/** Human-readable venue line, or a locale-appropriate "not yet confirmed". */
export function formatVenue(f: Fixture, locale: 'de' | 'en' | 'fr' = 'de'): string {
  if (!f.venue) {
    return locale === 'de' ? 'noch offen' : locale === 'fr' ? 'à confirmer' : 'TBC'
  }
  return f.pitch ? `${f.venue} · ${f.pitch}` : f.venue
}

/**
 * Google Maps link for a fixture's venue, or undefined when no venue is
 * confirmed. Built from the venue name plus street address — the pitch
 * designation is deliberately left out, since "Kunstrasen 2" is not an address
 * component and only degrades the geocoding result.
 */
export function getMapsUrl(f: Fixture): string | undefined {
  if (f.mapsUrl) return f.mapsUrl
  if (!f.venue) return undefined
  const query = [f.venue, f.venueAddress].filter(Boolean).join(', ')
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function formatKickoff(f: Fixture, locale: 'de' | 'en' | 'fr' = 'de'): string {
  if (!f.kickoff) {
    return locale === 'de' ? 'noch offen' : locale === 'fr' ? 'à confirmer' : 'TBC'
  }
  return locale === 'de' ? `${f.kickoff} Uhr` : f.kickoff
}

/** Friendlies bilan — only counts matches with a confirmed result. */
export function getFriendlyRecord() {
  const played = friendlyFixtures.filter(f => f.status === 'finished')
  const wins   = played.filter(f => getOutcome(f) === 'win').length
  const draws  = played.filter(f => getOutcome(f) === 'draw').length
  const losses = played.filter(f => getOutcome(f) === 'loss').length
  const goalsFor = played.reduce(
    (s, f) => s + (isHomeGame(f) ? f.result!.homeScore : f.result!.awayScore), 0)
  const goalsAgainst = played.reduce(
    (s, f) => s + (isHomeGame(f) ? f.result!.awayScore : f.result!.homeScore), 0)
  return { played: played.length, wins, draws, losses, goalsFor, goalsAgainst }
}
