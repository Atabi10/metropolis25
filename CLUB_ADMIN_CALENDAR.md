# Club administration — recurring obligations

Internal notes for whoever maintains the club's institutional records. None of
this belongs on the public website; it is kept here so it isn't lost.

The website's institutional facts live in `src/data/club.ts`. That file is the
single source of truth — update it there, not in individual components.

---

## LSB Berlin — annual statistics (Bestandserhebung)

| | |
| --- | --- |
| **Window** | **01 December – 15 January** |
| Filed via | LSB-Service-Portal |
| Purpose | Annual statistical report to the relevant sports federation |
| Owner | Vorstand / Schatzmeister |

Missing this window can affect the club's standing with the Landessportbund, so
put it in the board calendar with a reminder in late November.

**Portal access is not yet active.** The club is registered in the portal and
holds LSB club number **13429**, but the individual login credentials are still
being created following return of the required form. Make sure access works
well before the December window opens — do not leave it until the deadline.

When credentials arrive, set `LSB.portalAccessActive = true` in
`src/data/club.ts`.

---

## Current institutional status

| Item | Status | Evidence |
| --- | --- | --- |
| Eingetragener Verein | ✅ | Amtsgericht Berlin-Charlottenburg, 22.12.2025 |
| Gemeinnützigkeit § 60a AO | ✅ | Finanzamt, 30.04.2026 (vorläufig) |
| Sportliche Förderungswürdigkeit | ✅ | Senatsverwaltung für Inneres und Sport, Bescheid 29.08.2026 (elektronisch; Original folgt per Post) |
| LSB-Registrierung | ✅ | LSB-Service-Portal, Vereinsnummer 13429 |
| LSB-Portalzugang | ⏳ | Einrichtung läuft |
| Offizieller Spielbetrieb | ✅ | Saison 2026/27, Bezirksliga Betrieb (FZ) + Yec-Sports-Pokal |
| Dauerhafte Sportstätte | ⏳ | Antrag beim Bezirksamt Lichtenberg |
| Hauptsponsor | ⏳ | Akquise läuft |

**Important distinction:** the Bezirksamt Lichtenberg approval of BVB-Stadion
covers the single fixture on 30.08.2026. It is **not** a permanent allocation.
The permanent venue application is separate and still open. Nothing on the
website may suggest otherwise.

---

## Document retention

Keep the original Anerkennungsbescheid (arriving by post) with the club's
permanent records alongside the Vereinsregister extract and the § 60a notice.
These three documents are what funders, the BFV and the Finanzamt will ask for.
