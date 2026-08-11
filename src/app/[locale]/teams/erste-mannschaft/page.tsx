import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import {
  Users, Target, MapPin, User, ArrowRight,
  ShieldCheck, Trophy, CheckCircle, Info,
} from 'lucide-react'
import { NextMatchCard } from '@/components/ui/NextMatchCard'
import { FixtureCard } from '@/components/ui/FixtureCard'
import { BrandMark } from '@/components/ui/BrandMark'
import {
  getNextOfficialMatch,
  getFriendlies,
  CURRENT_SEASON,
  COMPETITIONS,
} from '@/data/fixtures'

type Locale = 'de' | 'en' | 'fr'

const META = {
  de: {
    title: `1. Herren — Offizieller Spielbetrieb ${CURRENT_SEASON} | SC Metropolis 25 Berlin`,
    description: `Die 1. Herrenmannschaft von SC Metropolis 25 Berlin e.V. tritt in der Saison ${CURRENT_SEASON} im Berliner Freizeit- und Betriebsfußball an — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) und ${COMPETITIONS.cup}.`,
  },
  en: {
    title: `First team — Official competition ${CURRENT_SEASON} | SC Metropolis 25 Berlin`,
    description: `The first men's team of SC Metropolis 25 Berlin e.V. competes in Berlin recreational and works football in the ${CURRENT_SEASON} season — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) and the ${COMPETITIONS.cup}.`,
  },
  fr: {
    title: `Équipe première — Compétition officielle ${CURRENT_SEASON} | SC Metropolis 25 Berlin`,
    description: `L'équipe première du SC Metropolis 25 Berlin e.V. dispute la saison ${CURRENT_SEASON} en ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) et en ${COMPETITIONS.cup}.`,
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
    breadcrumb: 'Teams',
    current: '1. Herren',
    h1a: '1. Herren',
    h1b: 'mannschaft',
    kicker: `SC Metropolis 25 Berlin e.V. · Offizieller Spielbetrieb ${CURRENT_SEASON}`,
    statusLabel: 'Status:',
    statusText: `Die 1. Herrenmannschaft tritt in der Saison ${CURRENT_SEASON} im Berliner Freizeit- und Betriebsfußball an.`,
    statusBadge: 'Offizieller Spielbetrieb',
    aboutLabel: 'Über das Team',
    aboutTitleA: 'Gewachsen.',
    aboutTitleB: 'Angekommen. Offiziell.',
    p1: 'Die 1. Herrenmannschaft von SC Metropolis 25 Berlin e.V. ist das sportliche Herzstück des Vereins. Sie entstand aus einer Gemeinschaft, die seit 2019 gemeinsam Fußball spielt — auf Bolzplätzen, bei Turnieren und in Community Matches quer durch Berlin.',
    p2: 'Heute trainiert die Mannschaft strukturiert unter Trainer Makendi Amos. Mit 23 aktiven Feldspielern aus mehr als elf Nationen steht sie für das, was SC Metropolis 25 ausmacht: Teamgeist, Vielfalt und den klaren Anspruch, den nächsten Schritt zu gehen.',
    p3: `Dieser Schritt ist jetzt vollzogen: In der Saison ${CURRENT_SEASON} tritt die Mannschaft im offiziellen Berliner Spielbetrieb an — in der ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) und im ${COMPETITIONS.cup}.`,
    nextMatchTitle: 'Nächstes Pflichtspiel',
    venueNoticeTitle: 'Spielstätten',
    venueNotice:
      'Spielstätten werden entsprechend der jeweiligen behördlichen Überlassung bekanntgegeben. Für das Pflichtspiel am 30. August 2026 wurde dem Verein durch das Bezirksamt Lichtenberg das BVB-Stadion, Kunstrasen 2, überlassen. Der Antrag auf eine dauerhafte Trainings- und Spielstätte läuft weiter.',
    strengthsTitle: 'Was dieses Team ausmacht',
    strengths: [
      'Multinationaler Kader aus über 11 Nationen',
      'Strukturierter Trainingsaufbau unter Makendi Amos',
      `Aufnahme in den offiziellen Berliner Spielbetrieb zur Saison ${CURRENT_SEASON}`,
      'Teamgeist gewachsen seit 2019',
      'Institutionell gefestigt: e.V., Gemeinnützigkeit §60a AO',
    ],
    friendliesTitle: 'Testspiele & Community Matches',
    friendliesNote:
      '* Diese Spiele sind keine offiziellen Pflichtspiele. Sie dokumentieren die Vorbereitungsphase des Vereins.',
    factsTitle: 'Teamdaten',
    facts: {
      trainer: 'Trainer',
      squad: 'Kader',
      squadValue: '23 aktive Feldspieler',
      league: 'Liga',
      cup: 'Pokal',
      status: 'Status',
      statusValue: `Offizieller Spielbetrieb · Saison ${CURRENT_SEASON}`,
      venues: 'Spielstätten',
      venuesValue: 'Je nach behördlicher Überlassung',
    },
    quote: '„Aus Freunden wurden Mitspieler. Jetzt beginnt der Spielbetrieb.“',
    ctaTitle: 'Jetzt mitmachen',
    ctaPrimary: 'Probetraining anfragen',
    ctaSecondary: 'Kontakt aufnehmen',
    ctaNote: 'Kostenlos & unverbindlich. Wir melden uns innerhalb von 48 Stunden.',
    otherTeams: 'Weitere Teams',
    planned: 'In Planung',
    team2: '2. Herren',
    team2Desc: 'Die zweite Herrenmannschaft ist in Planung. Interesse? Melde dich jetzt an.',
    teamW: 'Frauen',
    teamWDesc: 'Ein Frauenteam ist geplant. Sei dabei von Anfang an.',
    register: 'Interesse anmelden',
    fullSchedule: 'Kompletter Spielplan',
  },
  en: {
    breadcrumb: 'Teams',
    current: 'First team',
    h1a: 'First',
    h1b: ' team',
    kicker: `SC Metropolis 25 Berlin e.V. · Official competition ${CURRENT_SEASON}`,
    statusLabel: 'Status:',
    statusText: `The first men's team competes in Berlin recreational and works football in the ${CURRENT_SEASON} season.`,
    statusBadge: 'Official competition',
    aboutLabel: 'About the team',
    aboutTitleA: 'Grown.',
    aboutTitleB: 'Arrived. Official.',
    p1: "The first men's team of SC Metropolis 25 Berlin e.V. is the sporting heart of the club. It grew out of a community that has played football together since 2019 — on Berlin pitches, at tournaments and in community matches across the city.",
    p2: 'Today the team trains in a structured programme under coach Makendi Amos. With 23 active outfield players from more than eleven nations, it stands for what SC Metropolis 25 is about: team spirit, diversity and a clear ambition to take the next step.',
    p3: `That step has now been taken: in the ${CURRENT_SEASON} season the team competes in official Berlin football — in the ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) and the ${COMPETITIONS.cup}.`,
    nextMatchTitle: 'Next official match',
    venueNoticeTitle: 'Venues',
    venueNotice:
      'Venues are announced according to the respective official facility allocation. For the competitive fixture on 30 August 2026, Bezirksamt Lichtenberg has made the BVB-Stadion, Kunstrasen 2, available to the club. Our application for a permanent training and match facility remains under review.',
    strengthsTitle: 'What defines this team',
    strengths: [
      'Multinational squad from more than 11 nations',
      'Structured training programme under Makendi Amos',
      `Admission to official Berlin competition for the ${CURRENT_SEASON} season`,
      'Team spirit built since 2019',
      'Institutionally established: registered association, charitable status §60a AO',
    ],
    friendliesTitle: 'Friendlies & community matches',
    friendliesNote:
      '* These are not official competitive fixtures. They document the club’s preparation phase.',
    factsTitle: 'Team data',
    facts: {
      trainer: 'Coach',
      squad: 'Squad',
      squadValue: '23 active outfield players',
      league: 'League',
      cup: 'Cup',
      status: 'Status',
      statusValue: `Official competition · Season ${CURRENT_SEASON}`,
      venues: 'Venues',
      venuesValue: 'Subject to official facility allocation',
    },
    quote: '“Friends became team-mates. Now official competition begins.”',
    ctaTitle: 'Join us',
    ctaPrimary: 'Request a trial session',
    ctaSecondary: 'Get in touch',
    ctaNote: 'Free and without obligation. We reply within 48 hours.',
    otherTeams: 'Other teams',
    planned: 'Planned',
    team2: 'Second team',
    team2Desc: 'A second men’s team is planned. Interested? Register now.',
    teamW: 'Women',
    teamWDesc: 'A women’s team is planned. Be part of it from the start.',
    register: 'Register interest',
    fullSchedule: 'Full fixture list',
  },
  fr: {
    breadcrumb: 'Équipes',
    current: 'Équipe première',
    h1a: 'Équipe',
    h1b: ' première',
    kicker: `SC Metropolis 25 Berlin e.V. · Compétition officielle ${CURRENT_SEASON}`,
    statusLabel: 'Statut :',
    statusText: `L'équipe première dispute la saison ${CURRENT_SEASON} dans le football berlinois de loisir et d'entreprise.`,
    statusBadge: 'Compétition officielle',
    aboutLabel: "À propos de l'équipe",
    aboutTitleA: 'Grandie.',
    aboutTitleB: 'Arrivée. Officielle.',
    p1: "L'équipe première de SC Metropolis 25 Berlin e.V. est le cœur sportif du club. Elle est née d'une communauté qui joue au football ensemble depuis 2019.",
    p2: "Aujourd'hui, l'équipe s'entraîne de manière structurée sous la direction de Makendi Amos. Avec 23 joueurs de champ actifs de plus de onze nations.",
    p3: `Cette étape est franchie : pour la saison ${CURRENT_SEASON}, l'équipe dispute la compétition officielle berlinoise — ${COMPETITIONS.league} (${COMPETITIONS.leagueShort}) et ${COMPETITIONS.cup}.`,
    nextMatchTitle: 'Prochain match officiel',
    venueNoticeTitle: 'Stades',
    venueNotice:
      "Les stades sont annoncés selon l'attribution officielle. Pour le match du 30 août 2026, le Bezirksamt Lichtenberg a mis le BVB-Stadion, Kunstrasen 2, à disposition du club. La demande d'installation permanente reste à l'étude.",
    strengthsTitle: "Ce qui définit cette équipe",
    strengths: [
      'Effectif multinational de plus de 11 nations',
      'Entraînement structuré sous Makendi Amos',
      `Admission en compétition officielle berlinoise pour la saison ${CURRENT_SEASON}`,
      "Esprit d'équipe construit depuis 2019",
      'Institutionnellement établi : association enregistrée, statut caritatif §60a AO',
    ],
    friendliesTitle: 'Matches amicaux',
    friendliesNote: '* Ces matches ne sont pas des rencontres officielles.',
    factsTitle: "Données de l'équipe",
    facts: {
      trainer: 'Entraîneur',
      squad: 'Effectif',
      squadValue: '23 joueurs de champ actifs',
      league: 'Championnat',
      cup: 'Coupe',
      status: 'Statut',
      statusValue: `Compétition officielle · Saison ${CURRENT_SEASON}`,
      venues: 'Stades',
      venuesValue: "Selon l'attribution officielle",
    },
    quote: "« Des amis sont devenus coéquipiers. La compétition commence. »",
    ctaTitle: 'Nous rejoindre',
    ctaPrimary: 'Demander un essai',
    ctaSecondary: 'Nous contacter',
    ctaNote: 'Gratuit et sans engagement. Réponse sous 48 heures.',
    otherTeams: 'Autres équipes',
    planned: 'Prévu',
    team2: 'Équipe réserve',
    team2Desc: 'Une équipe réserve est prévue. Intéressé ? Inscrivez-vous.',
    teamW: 'Féminines',
    teamWDesc: 'Une équipe féminine est prévue.',
    register: "Manifester son intérêt",
    fullSchedule: 'Calendrier complet',
  },
}

export default async function ErsteMannschaftPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  const locale = (['de', 'en', 'fr'].includes(raw) ? raw : 'de') as Locale
  const c = COPY[locale]

  const nextMatch = getNextOfficialMatch()
  const friendlies = getFriendlies().filter(f => f.status === 'finished').slice(0, 4)

  const facts = [
    { icon: User,        label: c.facts.trainer, value: 'Makendi Amos' },
    { icon: Users,       label: c.facts.squad,   value: c.facts.squadValue },
    { icon: Target,      label: c.facts.league,  value: `${COMPETITIONS.league} (${COMPETITIONS.leagueShort})` },
    { icon: Trophy,      label: c.facts.cup,     value: COMPETITIONS.cup },
    { icon: ShieldCheck, label: c.facts.status,  value: c.facts.statusValue },
    { icon: MapPin,      label: c.facts.venues,  value: c.facts.venuesValue },
  ]

  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team-photo-kmer.jpeg"
            alt="SC Metropolis 25 — 1. Herrenmannschaft"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,5,15,0.45) 0%, rgba(0,3,10,0.97) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 container-custom pb-16 pt-32">
          <div className="flex items-center gap-2 text-text-muted text-xs font-heading uppercase tracking-wider mb-5">
            <Link href="/teams" className="hover:text-gold transition-colors">
              {c.breadcrumb}
            </Link>
            <span>/</span>
            <span className="text-gold">{c.current}</span>
          </div>

          <div className="flex items-start gap-5 mb-4">
            <BrandMark size="lg" glow decorative className="hidden sm:block mt-1" />
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-white uppercase leading-none mb-2">
                {c.h1a}
                <span className="text-gold-gradient">{c.h1b}</span>
              </h1>
              <p className="text-gold text-xs font-heading uppercase tracking-widest">
                {c.kicker}
              </p>
            </div>
          </div>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* ── Status banner ─────────────────────────────────────── */}
      <section className="bg-navy border-y border-gold/20 py-4">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-gold">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-heading uppercase tracking-wider font-semibold">
                {c.statusLabel}
              </span>
            </div>
            <span className="text-ivory/80 text-sm">{c.statusText}</span>
            <span className="text-[10px] font-heading uppercase tracking-wider text-navy bg-gold px-2 py-1 ml-auto shrink-0 font-bold">
              {c.statusBadge}
            </span>
          </div>
        </div>
      </section>

      {/* ── Next official match ───────────────────────────────── */}
      {nextMatch && (
        <section className="section-padding bg-dark border-b border-dark-border">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-gold" aria-hidden="true" />
              <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                {c.nextMatchTitle}
              </h2>
            </div>
            <NextMatchCard fixture={nextMatch} locale={locale} variant="panel" />
          </div>
        </section>
      )}

      {/* ── Main content ──────────────────────────────────────── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">
                  {c.aboutLabel}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-6">
                  {c.aboutTitleA}{' '}
                  <span className="text-gold-gradient">{c.aboutTitleB}</span>
                </h2>
                <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                  <p>{c.p1}</p>
                  <p>{c.p2}</p>
                  <p>{c.p3}</p>
                </div>
              </div>

              {/* Venue clarification */}
              <div className="border border-gold/20 bg-navy/40 p-5 flex items-start gap-4">
                <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-white font-heading font-semibold text-sm uppercase tracking-wide mb-2">
                    {c.venueNoticeTitle}
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {c.venueNotice}
                  </p>
                </div>
              </div>

              {/* Strengths */}
              <div>
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
                  {c.strengthsTitle}
                </h3>
                <ul className="space-y-3">
                  {c.strengths.map(s => (
                    <li key={s} className="flex items-start gap-3 text-text-secondary text-sm">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Friendlies */}
              <div>
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
                  {c.friendliesTitle}
                </h3>
                <div className="space-y-3">
                  {friendlies.map(f => (
                    <FixtureCard key={f.id} fixture={f} locale={locale} compact />
                  ))}
                </div>
                <p className="text-text-muted text-xs mt-4 leading-relaxed">
                  {c.friendliesNote}
                </p>
                <Link
                  href="/spielbetrieb"
                  className="btn-outline btn btn-sm text-xs mt-5 inline-flex items-center gap-2 group"
                >
                  {c.fullSchedule}
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              <div className="card p-6 border-gold/20">
                <div className="w-full h-1 bg-gold mb-5" />
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
                  {c.factsTitle}
                </h3>
                <dl className="space-y-4">
                  {facts.map(f => (
                    <div key={f.label} className="flex items-start gap-3">
                      <f.icon className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <dt className="text-text-muted text-[10px] font-heading uppercase tracking-wider">
                          {f.label}
                        </dt>
                        <dd className="text-white text-sm font-semibold break-words">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative overflow-hidden border border-dark-border">
                <div className="relative h-48">
                  <Image
                    src="/images/warmup-kmer-lichtenberg.jpeg"
                    alt="SC Metropolis 25 — Training"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/85 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-heading italic">
                    {c.quote}
                  </p>
                </div>
              </div>

              <div className="card p-6 border-gold/20 space-y-3">
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
                  {c.ctaTitle}
                </h3>
                <Link
                  href="/mitmachen?team=1herren"
                  className="btn-primary btn w-full justify-center group"
                >
                  <span>{c.ctaPrimary}</span>
                  <ArrowRight
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
                <Link href="/kontakt" className="btn-outline btn w-full justify-center">
                  {c.ctaSecondary}
                </Link>
                <p className="text-text-muted text-xs text-center leading-relaxed">
                  {c.ctaNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other teams ───────────────────────────────────────── */}
      <section className="py-12 bg-dark-surface border-t border-dark-border">
        <div className="container-custom">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-6">
            {c.otherTeams}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: c.team2, href: '/mitmachen?team=2herren', desc: c.team2Desc },
              { name: c.teamW, href: '/mitmachen?team=frauen',  desc: c.teamWDesc },
            ].map(t => (
              <div key={t.name} className="card border-dashed border-dark-muted p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-semibold text-text-secondary text-sm uppercase tracking-widest">
                    {t.name}
                  </h3>
                  <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">
                    {c.planned}
                  </span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed">{t.desc}</p>
                <Link href={t.href} className="btn-outline btn btn-sm text-xs self-start">
                  {c.register} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
