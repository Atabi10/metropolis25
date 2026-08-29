/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH — INSTITUTIONAL CLUB FACTS
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Anything on the website that states the club's official status reads from
 * here. Do not restate these facts inline in components.
 *
 * Rule: only record what the club actually holds in writing. A status that is
 * expected, promised by telephone, or "in the post" is not `true` here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const CLUB_LEGAL_NAME = 'SC Metropolis 25 Berlin e.V.'

/** Registered association — Amtsgericht Charlottenburg. */
export const REGISTRATION = {
  confirmed: true,
  date: '2025-12-22',
  court: 'Amtsgericht Berlin-Charlottenburg',
} as const

/** Charitable status under § 60a AO. */
export const CHARITABLE_STATUS = {
  confirmed: true,
  date: '2026-04-30',
  note: 'Vorläufig anerkannt',
} as const

/**
 * Sportliche Förderungswürdigkeit.
 * Anerkennungsbescheid transmitted electronically on 29 August 2026; the
 * original follows by post. The electronic notice is the operative document,
 * so this is recorded as confirmed.
 */
export const SPORTING_ELIGIBILITY = {
  confirmed: true,
  date: '2026-08-29',
  authority: 'Senatsverwaltung für Inneres und Sport',
  department: 'Abteilung Sport',
} as const

/**
 * Landessportbund Berlin.
 *
 * `registered` — the club has been entered in the LSB-Service-Portal. Confirmed.
 *
 * `portalAccessActive` — individual login credentials are still being set up
 *   following return of the required form. NOT confirmed. Do not publish any
 *   wording suggesting the portal is fully set up until this flips to true.
 *
 * `clubNumber` — 13429. This is the authoritative LSB Vereinsnummer for
 *   SC Metropolis 25 Berlin e.V. and the single source of truth for it.
 *   Consumers still guard for null so the UI degrades safely if it is cleared.
 */
export const LSB = {
  registered: true,
  registeredDate: '2026-08',
  portalAccessActive: false,
  clubNumber: '13429' as string | null,
  /** Annual statistics are filed through the portal in this window. */
  annualReportWindow: '01.12. – 15.01.',
} as const

/**
 * Permanent training and home venue.
 *
 * Still open. The Bezirksamt Lichtenberg approval of BVB-Stadion covers the
 * single fixture on 30.08.2026 and is NOT a permanent allocation. This must
 * never be shown as resolved on the strength of that approval.
 */
export const PERMANENT_VENUE = {
  confirmed: false,
  authority: 'Bezirksamt Lichtenberg',
} as const

/** No main sponsor is under contract. */
export const MAIN_SPONSOR = { confirmed: false } as const

/** Formats an ISO date for display, without timezone drift. */
export function formatClubDate(iso: string, locale: 'de' | 'en' | 'fr' = 'de'): string {
  const map = { de: 'de-DE', en: 'en-GB', fr: 'fr-FR' } as const
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(map[locale], {
    day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC',
  })
}
