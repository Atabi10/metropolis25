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
  | 'unscheduled'  // fixture is known to exist but has no published date yet

export interface FixtureResult {
  homeScore: number
  awayScore: number
}

export interface Fixture {
  id: string
  /**
   * ISO date, YYYY-MM-DD. `null` only for `status: 'unscheduled'` — a fixture
   * the club knows will be played but for which no date has been published.
   * Never fabricate a date to fill this in.
   */
  date: string | null
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
  /** Half-time score, when published. */
  halfTime?: FixtureResult
  /** Fußball.de Spielnummer — the stable identifier for verification. */
  matchNumber?: string
  /** Fußball.de Staffel-ID the fixture belongs to. */
  staffelId?: string
  /** ISO date on which this row was last checked against the source. */
  lastVerified?: string
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

/** Fußball.de Staffel-IDs for the club's 2026/27 competitions. */
export const STAFFEL = { league: '667003', cup: '760059' } as const

/**
 * Fußball.de displays this notice on the 2026/27 Mannschaftsspielplan:
 *
 *   "Wichtiger Hinweis zum Spielplan — Dieser Spielplan enthält vorläufige
 *    Spiele, die noch nicht vom Staffelleiter freigegeben worden sind."
 *
 * The published Staffelplan therefore has no final release. The Spielbetrieb
 * page carries a matching "Vorläufiger Spielplan" note.
 *
 * Individual rows stay `scheduled` rather than `provisional`: the warning
 * applies to the schedule as a whole, and Fußball.de does not mark which
 * specific fixtures are unreleased. Flagging every row would wrongly imply
 * each one is expected to move. If the Staffelleiter later identifies
 * particular fixtures, switch those rows to `provisional` — the UI already
 * renders a "Vorläufig" badge for that status.
 */
export const SCHEDULE_IS_PROVISIONAL = true

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
    status: 'finished',
    result: { homeScore: 9, awayScore: 1 },
    halfTime: { homeScore: 4, awayScore: 0 },
    milestone: true,
    matchNumber: '760059022',
    staffelId: STAFFEL.cup,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sc-metropolis-25-sg-prenzlauer-berg-fz-kunst/-/spiel/031I9RFUTK000000VS5489BUVVKNMR0J',
    lastVerified: '2026-08-31',
    // Fußball.de renders the final score as images, so the numeric result is
    // not machine-readable there. It is corroborated by the published half-time
    // score of 4:0 and by nine goal minutes for M25 (3', 7', 13', 30', 51',
    // 70', 80', 84', 89') against one for the opponent (71'). The club's own
    // record of 9:1 therefore stands and takes precedence.
  },

  // ── Bezirksliga Betrieb (Bezirksliga FZ) 2026/27 ───────────────────────────
  // Staffel 667003. Eleven first-round fixtures in total. Ten are fully
  // published on Fußball.de; the tie against Aimnation is known to the club but
  // its date, kick-off and Spielnummer are not yet published, so it is recorded
  // below as `unscheduled` rather than given invented values.
  // Venues are recorded ONLY where Fußball.de publishes them — three are still
  // blank and must stay blank until confirmed.
  {
    id: 'liga-2026-09-06-kontinental',
    date: '2026-09-06', kickoff: '10:00',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'FC Kontinental', awayTeam: 'SC Metropolis 25',
    venue: 'Adlergestell NR1', pitch: 'Rasenplatz',
    venueAddress: 'Adlergestell 103, 12439 Berlin',
    status: 'scheduled', matchNumber: '667003005', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/fc-kontinental-sc-metropolis-25/-/spiel/031FVLLTAO000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-09-14-sfc-stern',
    date: '2026-09-14', kickoff: '19:45',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'SFC Stern 1900', awayTeam: 'SC Metropolis 25',
    venue: 'Schildhornstraße KR1', pitch: 'Kunstrasenplatz',
    venueAddress: 'Paulsenstr. / Eing. Kreuznacher Str. 29, 12163 Berlin',
    status: 'scheduled', matchNumber: '667003016', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sfc-stern-1900-sc-metropolis-25/-/spiel/031FVLLSOK000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-09-28-prenzlauer-berg',
    date: '2026-09-28', kickoff: '19:30',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'SG Prenzlauer Berg FZ Kunst', awayTeam: 'SC Metropolis 25',
    venue: 'Hanns-Eisler-Straße KR1', pitch: 'Kunstrasenplatz',
    venueAddress: 'Hanns-Eisler-Str. 91, 10409 Berlin',
    status: 'scheduled', matchNumber: '667003022', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sg-prenzlauer-berg-fz-kunst-sc-metropolis-25/-/spiel/031FVLLTP8000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-10-11-roter-sterni',
    date: '2026-10-11', kickoff: '12:00',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'SC Metropolis 25', awayTeam: 'Roter Sterni/Pfeffersport FZ',
    // Venue not published by Fußball.de as at 31.08.2026 — do not infer one.
    status: 'scheduled', matchNumber: '667003032', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sc-metropolis-25-roter-sterni-pfeffersport-fz/-/spiel/031FVLLS8S000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-10-25-goalgetters',
    date: '2026-10-25', kickoff: '12:00',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'SC Metropolis 25', awayTeam: 'Goalgetters / BSC Rehberge',
    venue: 'BVB-Stadion', pitch: 'Kunstrasen 2',
    venueAddress: 'Siegfriedstraße 71, 10365 Berlin',
    status: 'scheduled', matchNumber: '667003048', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sc-metropolis-25-goalgetters-bsc-rehberge/-/spiel/031FVLLUJC000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-11-01-welt-verein',
    date: '2026-11-01', kickoff: '12:30',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'Welt-Verein', awayTeam: 'SC Metropolis 25',
    venue: 'Hauffstraße KR1', pitch: 'Kunstrasenplatz',
    venueAddress: 'Hauffstr. 13–20, 10317 Berlin',
    status: 'scheduled', matchNumber: '667003054', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/welt-verein-sc-metropolis-25/-/spiel/031FVLLUA8000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-11-08-berliner-star',
    date: '2026-11-08', kickoff: '12:00',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'SC Berliner Star', awayTeam: 'SC Metropolis 25',
    venue: 'Adlergestell NR1', pitch: 'Rasenplatz',
    venueAddress: 'Adlergestell 103, 12439 Berlin',
    status: 'scheduled', matchNumber: '667003061', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sc-berliner-star-sc-metropolis-25/-/spiel/031FVLLS00000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-11-22-marzahn',
    date: '2026-11-22', kickoff: '12:00',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'SC Metropolis 25', awayTeam: '1.FC Marzahn 94/KYN',
    // Venue not published by Fußball.de as at 31.08.2026 — do not infer one.
    status: 'scheduled', matchNumber: '667003069', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sc-metropolis-25-1fc-marzahn-94-kyn/-/spiel/031FVLLRRK000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-11-29-falco-subbuteo',
    date: '2026-11-29', kickoff: '13:30',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'SC Falco Subbuteo II', awayTeam: 'SC Metropolis 25',
    venue: 'Poststadion KR2 (Dalia-Eiyakim-Platz)', pitch: 'Kunstrasenplatz',
    venueAddress: 'Lehrter Str. 59, 10557 Berlin',
    status: 'scheduled', matchNumber: '667003075', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sc-falco-subbuteo-ii-sc-metropolis-25/-/spiel/031FVLLRIS000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },
  {
    id: 'liga-2026-12-06-stella-rossa',
    date: '2026-12-06', kickoff: '12:00',
    competition: COMPETITIONS.league, competitionType: 'league',
    homeTeam: 'SC Metropolis 25', awayTeam: 'Stella Rossa/Roter Stern Berlin',
    venue: 'BVB-Stadion', pitch: 'Kunstrasen 2',
    venueAddress: 'Siegfriedstraße 71, 10365 Berlin',
    status: 'scheduled', matchNumber: '667003081', staffelId: STAFFEL.league,
    source: 'fussball.de',
    sourceUrl: 'https://www.fussball.de/spiel/sc-metropolis-25-stella-rossa-roter-stern-berlin/-/spiel/031FVLLSLK000000VS5489BTVVG7L386',
    lastVerified: '2026-08-31',
  },

  // ── Known fixture, not yet scheduled ──────────────────────────────────────
  // The club has confirmed this Bezirksliga FZ tie exists. Fußball.de has not
  // published a date, kick-off time, Spielnummer or venue for it. Those fields
  // are therefore deliberately absent — do NOT fill them in from inference.
  // When Fußball.de publishes the full fixture, UPDATE THIS ENTRY in place
  // (set date / kickoff / matchNumber / venue and change status to 'scheduled').
  // Do not create a second row for the same match.
  {
    id: 'liga-2026-aimnation',
    date: null,
    competition: COMPETITIONS.league,
    competitionType: 'league',
    homeTeam: 'SC Metropolis 25',
    awayTeam: 'Aimnation',
    status: 'unscheduled',
    staffelId: STAFFEL.league,
    source: 'Vorstand SC Metropolis 25',
    lastVerified: '2026-08-31',
  },
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

const byDateAsc  = (a: Fixture, b: Fixture) =>
  (a.date ?? '9999').localeCompare(b.date ?? '9999')
const byDateDesc = (a: Fixture, b: Fixture) =>
  (b.date ?? '0000').localeCompare(a.date ?? '0000')

/** Official (league + cup) matches that have not been played yet. */
export function getUpcomingOfficial(): Fixture[] {
  return officialFixtures
    .filter(f => (f.status === 'scheduled' || f.status === 'provisional') && f.date)
    .sort(byDateAsc)
}

/**
 * Official fixtures that are known to exist but have no published date.
 * Listed separately so they never distort the calendar or the next-match slot.
 */
export function getUnscheduledOfficial(): Fixture[] {
  return officialFixtures.filter(f => f.status === 'unscheduled')
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
    return locale === 'de' ? 'Spielstätte noch offen'
         : locale === 'fr' ? 'Lieu à confirmer'
         : 'Venue TBC'
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

/**
 * Season record across official competition (league + cup).
 * Counts only fixtures with a confirmed result, so scheduled matches never
 * inflate the numbers.
 */
export function getOfficialRecord() {
  const played = officialFixtures.filter(f => f.status === 'finished' && f.result)
  const wins   = played.filter(f => getOutcome(f) === 'win').length
  const draws  = played.filter(f => getOutcome(f) === 'draw').length
  const losses = played.filter(f => getOutcome(f) === 'loss').length
  const goalsFor = played.reduce(
    (s, f) => s + (isHomeGame(f) ? f.result!.homeScore : f.result!.awayScore), 0)
  const goalsAgainst = played.reduce(
    (s, f) => s + (isHomeGame(f) ? f.result!.awayScore : f.result!.homeScore), 0)
  return { played: played.length, wins, draws, losses, goalsFor, goalsAgainst }
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
