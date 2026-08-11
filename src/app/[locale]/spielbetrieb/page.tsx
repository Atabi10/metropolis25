import type { Metadata } from 'next'
import { Info, Trophy, Star, Calendar } from 'lucide-react'
import { clsx } from 'clsx'
import { NextMatchCard } from '@/components/ui/NextMatchCard'
import { FixtureCard } from '@/components/ui/FixtureCard'
import { FixtureTabs } from '@/components/ui/FixtureTabs'
import { BrandWatermark } from '@/components/ui/BrandMark'
import {
  officialFixtures,
  getNextOfficialMatch,
  getOfficialResults,
  getFriendlies,
  getFriendlyRecord,
  tournaments,
  type TournamentMatch,
  CURRENT_SEASON,
  COMPETITIONS,
} from '@/data/fixtures'

type Locale = 'de' | 'en' | 'fr'

const META = {
  de: {
    title: `Spielplan & Ergebnisse ${CURRENT_SEASON} | SC Metropolis 25 Berlin`,
    description: `Offizieller Spielplan von SC Metropolis 25 Berlin e.V. — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) und ${COMPETITIONS.cup}. Erstes Pflichtspiel am 30. August 2026 gegen SG Prenzlauer Berg FZ Kunst.`,
  },
  en: {
    title: `Fixtures & Results ${CURRENT_SEASON} | SC Metropolis 25 Berlin`,
    description: `Official fixtures of SC Metropolis 25 Berlin e.V. — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) and the ${COMPETITIONS.cup}. First competitive match on 30 August 2026 against SG Prenzlauer Berg FZ Kunst.`,
  },
  fr: {
    title: `Calendrier & résultats ${CURRENT_SEASON} | SC Metropolis 25 Berlin`,
    description: `Calendrier officiel du SC Metropolis 25 Berlin e.V. — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) et ${COMPETITIONS.cup}. Premier match officiel le 30 août 2026 contre SG Prenzlauer Berg FZ Kunst.`,
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale = (['de', 'en', 'fr'].includes(raw) ? raw : 'de') as Locale
  return { title: META[locale].title, description: META[locale].description }
}

const COPY = {
  de: {
    label: 'Spielbetrieb',
    title: 'Spielplan &',
    titleHighlight: 'Ergebnisse',
    intro: `SC Metropolis 25 startet in der Saison ${CURRENT_SEASON} in den offiziellen Berliner Spielbetrieb. Die 1. Herrenmannschaft tritt im Berliner Freizeit- und Betriebsfußball an.`,
    notice:
      'Offizielle Pflichtspiele und historische Freundschafts- bzw. Turnierspiele werden auf dieser Seite getrennt ausgewiesen. Nicht bestätigte Anstoßzeiten oder Spielstätten werden als „noch offen“ gekennzeichnet.',
    nextMatch: 'Nächstes Pflichtspiel',
    officialTitle: `Offizieller Spielplan ${CURRENT_SEASON}`,
    officialNote: `Quelle für den offiziellen Spielbetrieb ist Fußball.de. Der Staffelplan der ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) wird ergänzt, sobald er veröffentlicht ist.`,
    resultsTitle: 'Offizielle Ergebnisse',
    resultsEmpty: 'Noch keine offiziellen Pflichtspiele absolviert.',
    friendliesTitle: 'Testspiele & Community Matches',
    friendliesNote:
      'Diese Spiele sind keine offiziellen Pflichtspiele. Sie dokumentieren die Vorbereitungs- und Gemeinschaftsphase des Vereins.',
    recordTitle: 'Bilanz Testspiele',
    recordNote: 'Gewertet werden ausschließlich Spiele mit dokumentiertem Ergebnis.',
    stats: { played: 'Spiele', wins: 'Siege', draws: 'Unentschieden', losses: 'Niederlagen', goals: 'Tore' },
    tournamentsTitle: 'Historische Turniere',
    group: 'Gruppenphase',
    outcome: { win: 'Sieg', draw: 'Unentschieden', loss: 'Niederlage', penalties: 'Elfmeter (ausgeschieden)' },
  },
  en: {
    label: 'Competition',
    title: 'Fixtures &',
    titleHighlight: 'results',
    intro: `SC Metropolis 25 enters official Berlin competition in the ${CURRENT_SEASON} season. The first men's team competes in Berlin recreational and works football.`,
    notice:
      'Official competitive fixtures and historic friendly or tournament matches are listed separately on this page. Unconfirmed kick-off times and venues are marked "TBC".',
    nextMatch: 'Next official match',
    officialTitle: `Official fixtures ${CURRENT_SEASON}`,
    officialNote: `Fußball.de is the authoritative source for official competition. The ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) schedule will be added as soon as it is published.`,
    resultsTitle: 'Official results',
    resultsEmpty: 'No official competitive matches played yet.',
    friendliesTitle: 'Friendlies & community matches',
    friendliesNote:
      'These are not official competitive fixtures. They document the club’s preparation and community phase.',
    recordTitle: 'Friendly record',
    recordNote: 'Only matches with a documented result are counted.',
    stats: { played: 'Played', wins: 'Wins', draws: 'Draws', losses: 'Losses', goals: 'Goals' },
    tournamentsTitle: 'Historic tournaments',
    group: 'Group stage',
    outcome: { win: 'Win', draw: 'Draw', loss: 'Loss', penalties: 'Penalties (eliminated)' },
  },
  fr: {
    label: 'Compétition',
    title: 'Calendrier &',
    titleHighlight: 'résultats',
    intro: `SC Metropolis 25 entre en compétition officielle berlinoise pour la saison ${CURRENT_SEASON}.`,
    notice:
      'Les matches officiels et les rencontres amicales historiques sont présentés séparément. Les horaires et stades non confirmés sont indiqués « à confirmer ».',
    nextMatch: 'Prochain match officiel',
    officialTitle: `Calendrier officiel ${CURRENT_SEASON}`,
    officialNote: `Fußball.de est la source de référence pour la compétition officielle.`,
    resultsTitle: 'Résultats officiels',
    resultsEmpty: 'Aucun match officiel disputé pour le moment.',
    friendliesTitle: 'Matches amicaux',
    friendliesNote: 'Ces matches ne sont pas des rencontres officielles.',
    recordTitle: 'Bilan amical',
    recordNote: 'Seuls les matches avec résultat documenté sont comptabilisés.',
    stats: { played: 'Matches', wins: 'Victoires', draws: 'Nuls', losses: 'Défaites', goals: 'Buts' },
    tournamentsTitle: 'Tournois historiques',
    group: 'Phase de groupes',
    outcome: { win: 'Victoire', draw: 'Nul', loss: 'Défaite', penalties: 'Tirs au but (éliminé)' },
  },
}

type Copy = (typeof COPY)[Locale]

// ─── Tournament row ───────────────────────────────────────────────────────────
function TournamentRow({ m, c }: { m: TournamentMatch; c: Copy }) {
  const isGroupSummary = m.scoreM25 === null && m.outcome !== 'penalties'

  return (
    <div
      className={clsx(
        'bg-dark-card border border-dark-border overflow-hidden',
        m.outcome === 'win'       && 'border-l-[3px] border-l-gold',
        m.outcome === 'draw'      && 'border-l-[3px] border-l-text-muted',
        m.outcome === 'loss'      && 'border-l-[3px] border-l-red-500/60',
        m.outcome === 'penalties' && 'border-l-[3px] border-l-ivory/30',
      )}
    >
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="text-[10px] font-heading uppercase tracking-wider text-gold border border-gold/30 px-2 py-0.5">
            {m.round}
          </span>
          <span
            className={clsx(
              'text-[10px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5 shrink-0',
              m.outcome === 'win'       && 'bg-gold/10 text-gold border border-gold/30',
              m.outcome === 'draw'      && 'bg-dark-surface text-text-muted border border-dark-border',
              m.outcome === 'loss'      && 'bg-red-500/10 text-red-400 border border-red-500/20',
              m.outcome === 'penalties' && 'bg-dark-surface text-ivory/50 border border-dark-border',
            )}
          >
            {c.outcome[m.outcome]}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="font-heading font-semibold text-sm uppercase tracking-wide text-white flex-1 min-w-0 truncate">
            SC Metropolis 25
          </p>
          {isGroupSummary ? (
            <span className="text-text-muted text-xs font-heading shrink-0 italic">{c.group}</span>
          ) : m.scoreM25 !== null ? (
            <div className="flex items-center gap-1 shrink-0">
              <span className="font-display text-3xl w-8 text-center text-gold">{m.scoreM25}</span>
              <span className="text-text-muted font-bold text-lg mx-0.5">:</span>
              <span className="font-display text-3xl w-8 text-center text-white">{m.scoreOpp}</span>
            </div>
          ) : (
            <span className="text-text-muted text-xs font-heading shrink-0">— : —</span>
          )}
          <p className="font-heading font-semibold text-sm uppercase tracking-wide text-text-secondary flex-1 min-w-0 truncate text-right">
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function SpielbetriebPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  const locale = (['de', 'en', 'fr'].includes(raw) ? raw : 'de') as Locale
  const c = COPY[locale]

  const nextMatch       = getNextOfficialMatch()
  const officialResults = getOfficialResults()
  const friendlies      = getFriendlies()
  const record          = getFriendlyRecord()

  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Page hero ───────────────────────────────────────────── */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(224,161,6,0.4) 0, rgba(224,161,6,0.4) 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
          }}
        />
        <BrandWatermark opacity={4} className="absolute -right-20 -top-10 w-[380px] h-[380px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container-custom relative z-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">{c.label}</p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4 leading-none">
            {c.title} <span className="text-gold-gradient">{c.titleHighlight}</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="text-ivory/70 font-heading text-base max-w-2xl leading-relaxed">
            {c.intro}
          </p>
        </div>
      </section>

      {/* ── Notice ──────────────────────────────────────────────── */}
      <section className="bg-dark-surface border-b border-dark-border py-5">
        <div className="container-custom">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-text-secondary text-sm leading-relaxed">{c.notice}</p>
          </div>
        </div>
      </section>

      {/* ── A. Next official match ──────────────────────────────── */}
      {nextMatch && (
        <section className="section-padding bg-dark border-b border-dark-border">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-gold" aria-hidden="true" />
              <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                {c.nextMatch}
              </h2>
            </div>
            <NextMatchCard fixture={nextMatch} locale={locale} variant="panel" />
          </div>
        </section>
      )}

      {/* ── B. Official fixtures, tabbed ────────────────────────── */}
      <section className="section-padding bg-dark-surface border-b border-dark-border">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-6 bg-gold" aria-hidden="true" />
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
              {c.officialTitle}
            </h2>
          </div>
          <p className="text-text-muted text-xs leading-relaxed max-w-2xl mb-7">
            {c.officialNote}
          </p>

          <FixtureTabs fixtures={officialFixtures} locale={locale} />
        </div>
      </section>

      {/* ── C. Official results ─────────────────────────────────── */}
      <section className="section-padding bg-dark border-b border-dark-border">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-1 h-6 bg-navy-400" aria-hidden="true" />
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
              {c.resultsTitle}
            </h2>
          </div>

          {officialResults.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {officialResults.map(f => (
                <FixtureCard key={f.id} fixture={f} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="card p-8 text-center">
              <Calendar className="w-8 h-8 text-text-muted mx-auto mb-3" aria-hidden="true" />
              <p className="text-text-muted text-sm">{c.resultsEmpty}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── D. Pre-season / friendlies ──────────────────────────── */}
      <section className="section-padding bg-dark-surface border-b border-dark-border">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-6 bg-dark-muted" aria-hidden="true" />
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
              {c.friendliesTitle}
            </h2>
          </div>
          <p className="text-text-muted text-xs leading-relaxed max-w-2xl mb-7">
            {c.friendliesNote}
          </p>

          {/* Record strip */}
          <div className="mb-7">
            <p className="text-gold font-heading text-[11px] uppercase tracking-[0.3em] mb-4">
              {c.recordTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { label: c.stats.played, value: record.played },
                { label: c.stats.wins,   value: record.wins, accent: true },
                { label: c.stats.draws,  value: record.draws },
                { label: c.stats.losses, value: record.losses },
                { label: c.stats.goals,  value: `${record.goalsFor}:${record.goalsAgainst}` },
              ].map(s => (
                <div key={s.label} className="card p-4 text-center">
                  <div
                    className={clsx(
                      'font-display text-3xl leading-none mb-1',
                      s.accent ? 'text-gold' : 'text-white',
                    )}
                  >
                    {s.value}
                  </div>
                  <div className="text-text-muted text-[10px] font-heading uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-[11px] mt-3 italic">{c.recordNote}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {friendlies.map(f => (
              <FixtureCard key={f.id} fixture={f} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* ── E. Historic tournaments ─────────────────────────────── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-6 bg-gold" aria-hidden="true" />
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
              {c.tournamentsTitle}
            </h2>
          </div>

          <div className="space-y-14">
            {tournaments.map(tourney => (
              <div key={tourney.id}>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-gold" aria-hidden="true" />
                      <p className="text-gold font-heading text-xs uppercase tracking-[0.3em]">
                        {tourney.dates}
                      </p>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-white uppercase leading-none">
                      {tourney.name}{' '}
                      <span className="text-gold-gradient">{tourney.year}</span>
                    </h3>
                    <div className="w-12 h-1 bg-gold mt-4" />
                  </div>
                  <div className="sm:text-right max-w-xs sm:ml-auto">
                    {tourney.placement && (
                      <p className="text-ivory/80 text-sm font-heading font-semibold mb-1">
                        {tourney.placement}
                      </p>
                    )}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {tourney.summary}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tourney.matches.map(m => (
                    <TournamentRow key={`${tourney.id}-${m.round}-${m.opponent}`} m={m} c={c} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing banner ──────────────────────────────────────── */}
      <section className="py-16 bg-navy border-t border-dark-border relative overflow-hidden">
        <BrandWatermark opacity={4} className="absolute -left-24 -bottom-24 w-[360px] h-[360px]" />
        <div className="container-custom text-center max-w-2xl mx-auto relative z-10">
          <Trophy className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-4">
            {locale === 'de' ? 'Offizieller Spielbetrieb' : locale === 'fr' ? 'Compétition officielle' : 'Official competition'}{' '}
            <span className="text-gold-gradient">{CURRENT_SEASON}</span>
          </h2>
          <p className="text-ivory/70 text-sm leading-relaxed mb-6 font-heading">
            {locale === 'de'
              ? `Die 1. Herrenmannschaft tritt in der Saison ${CURRENT_SEASON} im Berliner Freizeit- und Betriebsfußball an — in der ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) und im ${COMPETITIONS.cup}.`
              : locale === 'fr'
              ? `L'équipe première dispute la saison ${CURRENT_SEASON} en ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) et en ${COMPETITIONS.cup}.`
              : `The first men's team competes in the ${CURRENT_SEASON} season in the ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) and the ${COMPETITIONS.cup}.`}
          </p>
          <a href="/mitmachen" className="btn-primary btn btn-lg inline-flex">
            {locale === 'de' ? 'Jetzt mitmachen' : locale === 'fr' ? 'Nous rejoindre' : 'Join us'} →
          </a>
        </div>
      </section>
    </div>
  )
}
