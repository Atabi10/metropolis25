# How to update fixtures

Everything the website shows about matches — the homepage next-match card, the
Spielbetrieb page, the first-team page, the season record — comes from **one file**:

```
src/data/fixtures.ts
```

Nothing else in the codebase contains match data. If you change that file, every
page updates together. If you hard-code a match anywhere else, the pages will
start contradicting each other again.

---

## The golden rule

**The website never invents schedule data.**

Fußball.de is the authoritative public source for official competition. This
repository holds a hand-maintained copy of it. Where Fußball.de is silent, the
website says "noch offen" — it does not guess.

That means:

- Never invent a date, kick-off time, venue, opponent name or result.
- Copy team names character for character, including `FZ`, `SG` and any suffix.
  `SG Prenzlauer Berg FZ Kunst` is not `SG Prenzlauer Berg`.
- Never convert a provisional fixture into a confirmed one.
- Never fill in a result you have not seen published or recorded by the club.

---

## The update workflow

### 1. Open the club's team page on Fußball.de

Search for **SC Metropolis 25**, season **2026/27**, **Herren Freizeit/Betrieb**.
Open the fixture list (Spielplan) for the team.

### 2. Compare against the current dataset

Open `src/data/fixtures.ts` and compare, fixture by fixture:

- date
- kick-off time
- home team and away team (and which is which)
- competition and round
- venue and pitch
- result, once the match has been played

### 3. Edit the dataset

Add, amend or remove entries in `officialFixtures`.

A complete entry looks like this:

```ts
{
  id: 'cup-2026-08-30-prenzlauer-berg',   // stable, unique, human-readable
  date: '2026-08-30',                     // ISO, always YYYY-MM-DD
  kickoff: '12:00',                       // omit entirely if not published
  competition: COMPETITIONS.cup,          // use the constants, not free text
  competitionType: 'cup',                 // 'league' | 'cup' | 'friendly' | 'tournament'
  round: 'Qualifikationsrunde',           // optional
  homeTeam: 'SC Metropolis 25',
  awayTeam: 'SG Prenzlauer Berg FZ Kunst',
  venue: 'BVB-Stadion',                   // omit entirely if not confirmed
  pitch: 'Kunstrasen 2',                  // optional
  venueAddress: 'Siegfriedstraße 71, 10365 Berlin',
  status: 'scheduled',
  source: 'Fußball.de',
  sourceUrl: 'https://www.fussball.de/...',
}
```

**Fields you leave out matter.** If `kickoff` is missing, the UI prints
"noch offen" / "TBC". If `venue` is missing, same. Do not write `'TBD'` or
`'?'` into the field — omit the field.

### 4. Pick the right `status`

| status         | when to use it                                                        |
| -------------- | --------------------------------------------------------------------- |
| `scheduled`    | Date confirmed by Fußball.de or by the club.                           |
| `provisional`  | Fußball.de marks it provisional. The UI shows a "Vorläufig" badge.     |
| `finished`     | Played, and you have the confirmed result. Add the `result` object.    |
| `unconfirmed`  | The date has passed but no result is published or recorded.            |

`status` is set by hand on purpose. It is **never** derived from today's date,
so the site can never silently reclassify a match it has no result for.

### 5. Record a result

```ts
status: 'finished',
result: { homeScore: 2, awayScore: 1 },
```

`homeScore` and `awayScore` are always from the *fixture's* perspective, not the
club's. The helpers work out win/draw/loss for SC Metropolis 25 automatically
from `homeTeam`.

### 6. Verify home vs away

`isHomeGame()` decides this by comparing `homeTeam` against the `CLUB_NAME`
constant (`'SC Metropolis 25'`). If the club's name is ever written differently
in an entry, the fixture will be treated as an away game and the record will be
wrong. Keep the club's name spelled exactly `SC Metropolis 25`.

### 7. Build and test

```bash
npm run build
npm run dev
```

### 8. Check the pages that consume the data

Confirm these stay consistent with each other:

- `/` — homepage next-match card and fixtures preview
- `/spielbetrieb` — next match, tabbed fixtures, results, friendlies
- `/teams/erste-mannschaft` — next match and recent friendlies
- `/en/…` and `/fr/…` equivalents of all of the above

If the homepage and Spielbetrieb page disagree, something was hard-coded
outside `fixtures.ts`. Find it and move it into the dataset.

---

## Adding league fixtures

`officialFixtures` currently contains only the cup fixture. The
Bezirksliga Betrieb (Bezirksliga FZ) schedule has not been published at the time
of writing.

When the Staffelplan appears on Fußball.de, add each match with
`competitionType: 'league'` and `competition: COMPETITIONS.league`. The
Spielbetrieb page's "Bezirksliga" tab and its counter fill themselves in — no
component changes required.

---

## Why there is no scraper

Fußball.de does not offer a stable, permitted public API or feed for club
fixture data. A scraper would break on markup changes, would risk serving stale
or malformed data silently, and would sit on unclear terms of use.

A hand-maintained dataset is slower but honest: nothing appears on the website
that a human has not checked against the official source. If a licensed feed
becomes available later, it can populate the same `Fixture[]` shape and every
consuming component keeps working unchanged.

---

## Related constants

Defined once in `src/data/fixtures.ts`, used everywhere:

```ts
CLUB_NAME       // 'SC Metropolis 25'
CURRENT_SEASON  // '2026/27'
COMPETITIONS.league       // 'Bezirksliga Betrieb'
COMPETITIONS.leagueShort  // 'Bezirksliga FZ'
COMPETITIONS.cup          // 'Yec-Sports-Pokal'
```

Change the season here at the season rollover and every page follows.
