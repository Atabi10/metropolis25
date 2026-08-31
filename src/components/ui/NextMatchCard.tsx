import { Link } from '@/i18n/navigation'
import { clsx } from 'clsx'
import { MapPin, Clock, CalendarDays, ArrowRight, ExternalLink } from 'lucide-react'
import { BrandMark, BrandWatermark } from '@/components/ui/BrandMark'
import {
  type Fixture,
  formatKickoff,
  formatVenue,
  getMapsUrl,
  getOutcome,
} from '@/data/fixtures'

type Locale = 'de' | 'en' | 'fr'

const COPY = {
  de: {
    badge: 'Erstes offizielles Pflichtspiel',
    provisional: 'Vorläufig',
    headline: 'Jetzt wird es offiziell.',
    body: (d: string) =>
      `Am ${d} beginnt ein neues Kapitel unserer Geschichte. SC Metropolis 25 bestreitet sein erstes offizielles Pflichtspiel im Berliner Fußball.`,
    cta: 'Zum Spiel',
    ctaSecondary: 'Spielplan ansehen',
    kickoff: 'Anstoß',
    venue: 'Spielstätte',
    date: 'Datum',
    vs: 'gegen',
    directions: 'Route in Google Maps öffnen',
    mapsAria: 'Spielstätte in Google Maps öffnen',
    resultBadge: 'Erstes offizielles Pflichtspiel',
    resultHeadline: 'Angekommen.',
    resultBody: (d: string) =>
      `Am ${d} hat SC Metropolis 25 sein erstes offizielles Pflichtspiel bestritten — und gewonnen.`,
    finalLabel: 'Endstand',
    resultCta: 'Alle Ergebnisse',
    venueNote:
      'Die Spielstätte wurde vom Bezirksamt Lichtenberg für dieses Spiel überlassen. Der Antrag auf eine dauerhafte Trainings- und Spielstätte läuft weiter.',
  },
  en: {
    badge: 'First official competitive match',
    provisional: 'Provisional',
    headline: 'It becomes official.',
    body: (d: string) =>
      `On ${d} a new chapter of our history begins. SC Metropolis 25 plays its first official competitive match in Berlin football.`,
    cta: 'Match details',
    ctaSecondary: 'View fixtures',
    kickoff: 'Kick-off',
    venue: 'Venue',
    date: 'Date',
    vs: 'vs',
    directions: 'Open directions in Google Maps',
    mapsAria: 'Open venue in Google Maps',
    resultBadge: 'First official competitive match',
    resultHeadline: 'We have arrived.',
    resultBody: (d: string) =>
      `On ${d} SC Metropolis 25 played its first official competitive match — and won it.`,
    finalLabel: 'Final score',
    resultCta: 'All results',
    venueNote:
      'The venue was made available for this match by Bezirksamt Lichtenberg. Our application for a permanent training and match facility remains under review.',
  },
  fr: {
    badge: 'Premier match officiel',
    provisional: 'Provisoire',
    headline: 'Cela devient officiel.',
    body: (d: string) =>
      `Le ${d}, un nouveau chapitre de notre histoire commence. SC Metropolis 25 dispute son premier match officiel dans le football berlinois.`,
    cta: 'Voir le match',
    ctaSecondary: 'Voir le calendrier',
    kickoff: 'Coup d’envoi',
    venue: 'Stade',
    date: 'Date',
    vs: 'contre',
    directions: 'Ouvrir l’itinéraire dans Google Maps',
    mapsAria: 'Ouvrir le stade dans Google Maps',
    resultBadge: 'Premier match officiel',
    resultHeadline: 'Nous y sommes.',
    resultBody: (d: string) =>
      `Le ${d}, SC Metropolis 25 a disputé son premier match officiel — et l’a gagné.`,
    finalLabel: 'Score final',
    resultCta: 'Tous les résultats',
    venueNote:
      "Le stade a été mis à disposition pour ce match par le Bezirksamt Lichtenberg. Notre demande d’installation permanente reste à l’étude.",
  },
}

const DATE_LOCALE: Record<Locale, string> = {
  de: 'de-DE',
  en: 'en-GB',
  fr: 'fr-FR',
}

function formatLongDate(iso: string, locale: Locale) {
  // Parsed as UTC midnight and formatted in UTC — deterministic on server
  // and client, so this never produces a hydration mismatch.
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(DATE_LOCALE[locale], {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

interface NextMatchCardProps {
  fixture: Fixture
  locale?: Locale
  /** `hero` = homepage treatment with headline + body. `panel` = compact. */
  variant?: 'hero' | 'panel'
  className?: string
}

export function NextMatchCard({
  fixture,
  locale = 'de',
  variant = 'hero',
  className,
}: NextMatchCardProps) {
  const c = COPY[locale]
  const isHero = variant === 'hero'
  const isProvisional = fixture.status === 'provisional'
  const longDate = formatLongDate(fixture.date, locale)
  const mapsUrl = getMapsUrl(fixture)
  const isFinished = fixture.status === 'finished' && !!fixture.result
  const outcome = getOutcome(fixture)

  return (
    <div
      className={clsx(
        'relative overflow-hidden border border-gold/25 bg-navy',
        className,
      )}
    >
      {/* ── Background treatment ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(224,161,6,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(224,161,6,0.7) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="absolute -top-24 -right-16 w-[420px] h-[320px] bg-gold/10 blur-[110px] rounded-full" />
      </div>

      {/* Oversized crest as graphic signature */}
      <BrandWatermark
        opacity={5}
        className="pointer-events-none absolute -right-16 -bottom-16 w-[340px] h-[340px] md:w-[440px] md:h-[440px]"
      />

      {/* Corner brackets — matchday graphic language */}
      <span className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-gold/45" aria-hidden="true" />
      <span className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-gold/45" aria-hidden="true" />

      <div className={clsx('relative z-10', isHero ? 'p-7 md:p-12' : 'p-6 md:p-8')}>

        {/* ── Competition strip ───────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="bg-gold text-navy text-[10px] font-heading font-bold uppercase tracking-[0.16em] px-3 py-1.5">
            {isFinished ? c.resultBadge : c.badge}
          </span>
          <span className="text-[10px] font-heading uppercase tracking-[0.16em] text-gold border border-gold/40 px-2.5 py-1.5">
            {fixture.competition}
          </span>
          {fixture.round && (
            <span className="text-[10px] font-heading uppercase tracking-[0.16em] text-ivory/55 border border-white/15 px-2.5 py-1.5">
              {fixture.round}
            </span>
          )}
          {isProvisional && (
            <span className="text-[10px] font-heading uppercase tracking-[0.16em] text-ivory/70 bg-white/10 px-2.5 py-1.5">
              {c.provisional}
            </span>
          )}
        </div>

        {/* ── Emotional headline (hero only) ──────────────────────── */}
        {isHero && (
          <>
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase leading-[0.95] mb-4">
              {isFinished ? c.resultHeadline : c.headline}
            </h2>
            <p className="text-ivory/70 text-sm md:text-base leading-relaxed max-w-xl mb-9">
              {isFinished ? c.resultBody(longDate) : c.body(longDate)}
            </p>
          </>
        )}

        {/* ── The fixture ─────────────────────────────────────────── */}
        <div className="border-y border-white/10 py-7 mb-7">
          <div className="flex items-center justify-center gap-5 md:gap-10">

            {/* Home — SC Metropolis 25, badged with the official crest */}
            <div className="flex-1 flex flex-col items-center text-center gap-3 min-w-0">
              <BrandMark size="lg" glow decorative />
              <span className="font-display text-white text-base md:text-2xl uppercase leading-tight break-words">
                {fixture.homeTeam}
              </span>
            </div>

            {/* Separator */}
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              {isFinished && fixture.result ? (
                <>
                  <span className="font-display text-white text-3xl md:text-5xl leading-none whitespace-nowrap">
                    {fixture.result.homeScore}
                    <span className="text-gold mx-1.5">:</span>
                    {fixture.result.awayScore}
                  </span>
                  <span
                    className={clsx(
                      'text-[10px] font-heading font-bold uppercase tracking-[0.16em] px-2 py-0.5 mt-1',
                      outcome === 'win' ? 'bg-gold text-navy' : 'bg-white/10 text-ivory/70',
                    )}
                  >
                    {c.finalLabel}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-display text-gold text-2xl md:text-4xl leading-none">VS</span>
                  <span className="w-8 h-px bg-gold/40" aria-hidden="true" />
                </>
              )}
            </div>

            {/* Away */}
            <div className="flex-1 flex flex-col items-center text-center gap-3 min-w-0">
              <span
                className="w-20 h-20 md:w-24 md:h-24 border border-white/15 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="font-display text-ivory/25 text-3xl md:text-4xl leading-none">
                  {fixture.awayTeam.charAt(0)}
                </span>
              </span>
              <span className="font-display text-ivory/85 text-base md:text-2xl uppercase leading-tight break-words">
                {fixture.awayTeam}
              </span>
            </div>
          </div>
        </div>

        {/* ── Meta grid ───────────────────────────────────────────── */}
        <dl className="grid sm:grid-cols-3 gap-5 mb-7">
          <div className="flex items-start gap-3">
            <CalendarDays className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <div className="min-w-0">
              <dt className="text-text-muted text-[10px] font-heading uppercase tracking-widest mb-1">
                {c.date}
              </dt>
              <dd className="text-white text-sm font-heading font-semibold">
                {longDate}
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <div className="min-w-0">
              <dt className="text-text-muted text-[10px] font-heading uppercase tracking-widest mb-1">
                {c.kickoff}
              </dt>
              <dd className="text-white text-sm font-heading font-semibold">
                {formatKickoff(fixture, locale)}
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <div className="min-w-0">
              <dt className="text-text-muted text-[10px] font-heading uppercase tracking-widest mb-1">
                {c.venue}
              </dt>
              <dd>
                {mapsUrl ? (
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/map inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-label={`${c.mapsAria}: ${formatVenue(fixture, locale)}${
                      fixture.venueAddress ? `, ${fixture.venueAddress}` : ''
                    }`}
                  >
                    <span className="flex items-center gap-1.5 text-white text-sm font-heading font-semibold group-hover/map:text-gold transition-colors">
                      <span className="underline decoration-gold/40 underline-offset-4 group-hover/map:decoration-gold">
                        {formatVenue(fixture, locale)}
                      </span>
                      <ExternalLink
                        className="w-3 h-3 shrink-0 text-gold/60 group-hover/map:text-gold transition-colors"
                        aria-hidden="true"
                      />
                    </span>
                    {fixture.venueAddress && (
                      <span className="block text-text-muted text-xs mt-0.5 group-hover/map:text-ivory/70 transition-colors">
                        {fixture.venueAddress}
                      </span>
                    )}
                    <span className="block text-gold/70 text-[10px] font-heading uppercase tracking-widest mt-1.5">
                      {c.directions}
                    </span>
                  </a>
                ) : (
                  <>
                    <span className="block text-white text-sm font-heading font-semibold">
                      {formatVenue(fixture, locale)}
                    </span>
                    {fixture.venueAddress && (
                      <span className="block text-text-muted text-xs mt-0.5">
                        {fixture.venueAddress}
                      </span>
                    )}
                  </>
                )}
              </dd>
            </div>
          </div>
        </dl>

        {/* ── CTAs ────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/spielbetrieb"
            className="btn-primary btn group inline-flex items-center justify-center gap-2"
          >
            <span>{isFinished ? c.resultCta : c.cta}</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <Link href="/teams/erste-mannschaft" className="btn-outline btn justify-center">
            {c.ctaSecondary}
          </Link>
        </div>

        {/* ── Venue clarification — permanent facility still pending ─ */}
        <p className="text-text-muted text-xs leading-relaxed mt-6 pt-6 border-t border-white/10 max-w-2xl">
          {c.venueNote}
        </p>
      </div>
    </div>
  )
}
