import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Calendar, ArrowLeft, Clock, Trophy } from 'lucide-react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

// Force fully dynamic — no static pre-rendering
export const dynamic = 'force-dynamic'

// ─── ARTICLE DATA ─────────────────────────────────────────────────────────────
interface Article {
  slug: string
  title: string
  category: string
  type: 'news' | 'bericht'
  publishedAt: string
  image?: string
  imageAlt?: string
  matchResult?: string
  readTime?: string
  body: string[]
}

const articles: Article[] = [
  // ── SPIELBERICHTE ──────────────────────────────────────────────────────────
  {
    slug: 'finalist-symposium-mboa-2024',
    title: 'Der erste große Erfolg: Finale beim Symposium Mboa 2024',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2024-07-01',
    image: '/images/trophy for 2nd place.jpeg',
    imageAlt: 'SC Metropolis 25 — Trophäe und Medaillen Symposium Mboa 2024',
    body: [
      'Das Symposium Mboa 2024 war kein gewöhnliches Turnier. Es war der Moment, der alles veränderte.',
      'In der Gruppenphase legte die Mannschaft den Grundstein: 1:0 gegen Santé Biesdorf, 1:1 gegen Benin, 2:1 gegen Leipzig. Drei Spiele, zwei Siege, ein Unentschieden — ungeschlagen durch die erste Runde.',
      'Im Viertelfinale folgte ein klarer 2:0-Sieg gegen Ghana. Im Halbfinale, dem härtesten Spiel des Turniers, gewann die Mannschaft 1:0 gegen Algeria — kampfbetont, konzentriert, verdient.',
      'Und dann das Finale. Flambeau FC. 0:1. Silber.',
      'Die Niederlage tat weh. Aber was an diesem Tag auf dem Platz stand, war keine lockere Freizeitgruppe mehr. Es war eine Mannschaft. Eine echte Mannschaft, die das Finale eines der bedeutendsten afrikanischen Kulturturniere Berlins erreicht hatte.',
      'Für viele Spieler war genau dieser Moment der Auslöser. Wenn wir das schaffen können — was wäre möglich, wenn wir einen richtigen Verein hätten? Wenige Monate später, im November 2025, gründeten 22 Mitglieder SC Metropolis 25 Berlin e.V.',
      'Das Symposium Mboa 2024 war nicht nur ein Turnierergebnis. Es war der Beginn von etwas Größerem.',
    ],
  },
  {
    slug: 'symposium-mboa-turnier-2026',
    title: 'Starker Auftritt beim Symposium Mboa 2026',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-05-24',
    image: '/images/medals after Symposium final.jpeg',
    imageAlt: 'SC Metropolis 25 — Medaillen beim Symposium Mboa 2026',
    body: [
      'Am 23. und 24. Mai 2026 trat SC Metropolis 25 Berlin e.V. erstmals als eingetragener Verein beim Symposium Mboa Fußballturnier an — einem der bedeutendsten afrikanischen Kulturfestivals Berlins.',
      'Die Gruppenphase verlief stark: Drei Spiele, zwei Siege, ein Unentschieden. Die Mannschaft blieb ungeschlagen und zog souverän in die K.o.-Runde ein.',
      'Im Viertelfinale folgte ein konzentrierter Auftritt gegen FÉE-FÉE FC. Ein 1:0-Sieg — die Defensive stand, die Offensive nutzte ihre Chance.',
      'Im Halbfinale war erst im Elfmeterschießen Schluss. Gegen Gambia zeigte die Mannschaft Charakter bis zum letzten Schuss. Das Ausscheiden nach einem couragierten Turnier motiviert für die Zukunft.',
      'Dieser Turnierverlauf zeigt, wo SC Metropolis 25 steht: nicht mehr nur eine Fußballgemeinschaft, sondern ein Verein, der mithalten kann.',
    ],
  },
  {
    slug: 'fortschritt-sichtbar-metropolis-gewinnt-4-3',
    title: 'Fortschritt sichtbar: Metropolis gewinnt 4:3',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-05-17',
    matchResult: '4:3',
    body: [
      'Am 17. Mai 2026 empfing SC Metropolis 25 Flambeau FC erneut im Poststadion — diesmal mit einem anderen Ergebnis. 4:3 Sieg. Ein Ergebnis, das Entwicklung beweist.',
      'Im ersten Aufeinandertreffen am 15. März hatte es 2:2 geendet. Zwei Monate später: vier Tore, drei Punkte, volle Kontrolle im Poststadion.',
      'Die Mannschaft zeigte eine reifere Version ihrer selbst. Kombinationsspiel, Zweikampfhärte, Laufbereitschaft — alles eine Stufe besser.',
      'Es sind noch keine offiziellen Ligaspiele. Aber jeder Spieltag bringt die Mannschaft näher an den Berliner Ligabetrieb.',
    ],
  },
  {
    slug: 'starke-leistung-gegen-lichtenberg-kmer',
    title: 'Starke Leistung gegen Lichtenberg Kmer — 4:2',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-04-19',
    matchResult: '4:2',
    image: '/images/team photo before game against Kmer.jpeg',
    imageAlt: 'SC Metropolis 25 — Aufstellung vor dem Spiel gegen Lichtenberg Kmer',
    body: [
      'Am 19. April 2026 gewann SC Metropolis 25 mit 4:2 gegen Lichtenberg Kmer an der Hauffstraße in Berlin-Lichtenberg — in der eigenen Nachbarschaft.',
      'Ein dominanter Auftritt. Die Mannschaft übernahm früh das Spielgeschehen und belohnte sich mit vier Toren.',
      'Der deutliche Sieg zeigt: Die Qualität der Mannschaft wächst, die Automatismen werden besser. Trainer Makendi Amos hatte in den Wochen zuvor gezielt an der Defensive gearbeitet.',
    ],
  },
  {
    slug: 'erster-sieg-2026-new-star-berlin',
    title: 'Erster Sieg im Jahr 2026 — 1:0 gegen New Star Berlin SC',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-04-27',
    matchResult: '1:0',
    body: [
      'Am 27. April 2026 holte SC Metropolis 25 seinen ersten Sieg des Jahres: 1:0 gegen New Star Berlin SC. Kein glamouröses Ergebnis — aber ein wichtiges.',
      'Es war ein Spiel, das mentale Stärke verlangte. Geduld in der ersten Halbzeit, Konzentration in der zweiten, die Entschlossenheit, das knappe Ergebnis zu verteidigen.',
      'Genau diese Art Sieg baut eine Mannschaft. Wer lernt, knappe Führungen zu halten, ist bereit für den Ligabetrieb.',
    ],
  },
  {
    slug: 'erstes-testspiel-flambeau-fc',
    title: 'Erste Spielpraxis im Poststadion — 2:2 gegen Flambeau FC',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-03-15',
    matchResult: '2:2',
    body: [
      'Am 15. März 2026 bestritt SC Metropolis 25 sein erstes organisiertes Testspiel als eingetragener Verein: 2:2 gegen Flambeau FC im Poststadion Berlin.',
      'Kein Sieg — aber ein Schritt. Das Spiel war ein erster Gradmesser. Zwei eigene Tore, solide Defensivphasen, Momente echten Kombinationsfußballs.',
      'Zwei Monate später, beim Rückspiel am 17. Mai: 4:3 Sieg. Dieser erste Spieltag im Poststadion war der Anfang.',
    ],
  },
  // ── VEREINSNEWS ────────────────────────────────────────────────────────────
  {
    slug: 'antrag-sportliche-foerderungswuerdigkeit',
    title: 'Antrag auf sportliche Förderungswürdigkeit eingereicht',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-06-01',
    body: [
      'Der SC Metropolis 25 Berlin e.V. hat den Antrag auf Anerkennung der sportlichen Förderungswürdigkeit bei der zuständigen Berliner Senatsverwaltung eingereicht.',
      'Die Anerkennung der sportlichen Förderungswürdigkeit ist ein wichtiger Schritt für Berliner Sportvereine und bildet eine wesentliche Grundlage für die Nutzung öffentlicher Sportanlagen sowie die weitere institutionelle Entwicklung des Vereins.',
      'Mit der Antragstellung setzt SC Metropolis 25 seinen strukturierten Vereinsaufbau konsequent fort: Vereinsgründung (November 2025), Eintragung (Dezember 2025), Gemeinnützigkeit §60a AO (April 2026), BFV-Aufnahmeantrag (Frühjahr 2026) — und nun die Förderungswürdigkeit.',
      'Der Antrag befindet sich derzeit in Bearbeitung. SC Metropolis 25 berichtet transparent über alle weiteren Schritte.',
    ],
  },
  {
    slug: 'erste-vereinskollektion-entsteht',
    title: 'Die erste Vereinskollektion entsteht',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-05-01',
    body: [
      'Die Farben sind klar: Navy, Gold, Ivory. Die Werte dahinter auch. Jetzt wird daraus eine Kollektion.',
      'Die erste offizielle Vereinsausstattung befindet sich in Vorbereitung. Heimtrikot, Auswärtstrikot und Third Kit orientieren sich an den offiziellen Vereinsfarben.',
      'Die Kollektion soll rechtzeitig vor dem Einstieg in den Berliner Ligabetrieb zur Saison 2026/27 vorgestellt werden.',
    ],
  },
  {
    slug: 'gemeinnuetzigkeit-60a-ao',
    title: 'Meilenstein: Gemeinnützigkeit §60a AO bestätigt',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-04-30',
    body: [
      'Am 30. April 2026 hat das Berliner Finanzamt die vorläufige Anerkennung der Gemeinnützigkeit nach §60a AO ausgesprochen.',
      'Der Verein darf steuerlich absetzbare Spendenbescheinigungen ausstellen. Mitgliedsbeiträge können steuerlich geltend gemacht werden.',
      'Die Anerkennung ist das Ergebnis von Monaten organisatorischer Arbeit — sorgfältig ausgearbeitete Satzung, klare gemeinnützige Zwecksetzung, transparente Vereinsführung.',
    ],
  },
  {
    slug: 'vereinsfarben-navy-gold-ivory',
    title: 'Navy. Gold. Ivory. — Die Farben von SC Metropolis 25',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-04-15',
    body: [
      'Drei Farben. Drei Werte. Eine Identität.',
      'Navy steht für Stabilität und Zusammenhalt. Gold für Ambition und Entwicklung. Ivory für Fairness und Respekt.',
      'Diese drei Farben sind mehr als ein Design. Sie sind das Fundament der Vereinsidentität von SC Metropolis 25 Berlin e.V.',
    ],
  },
  {
    slug: 'vorbereitung-berliner-ligabetrieb',
    title: 'Der nächste Schritt Richtung Berliner Ligabetrieb',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-03-20',
    body: [
      'SC Metropolis 25 bereitet sich aktiv auf den Einstieg in den organisierten Berliner Fußball vor.',
      'Dazu gehören: BFV-Kontaktaufnahme, Sportstättensuche, Spielerlizenzierungen sowie die strukturelle Weiterentwicklung des Vereins.',
      'Ziel ist der Einstieg in den Berliner Ligabetrieb zur Saison 2026/27.',
    ],
  },
  {
    slug: 'intarp-hauptsponsor',
    title: 'Intarp GmbH wird Hauptsponsor von SC Metropolis 25',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-01-10',
    body: [
      'SC Metropolis 25 freut sich, Intarp GmbH als offiziellen Hauptsponsor begrüßen zu dürfen.',
      'Die Partnerschaft unterstützt den strukturellen Aufbau und ermöglicht den nächsten Schritt Richtung organisierten Spielbetrieb.',
      'Wir danken Intarp GmbH für das Vertrauen in unser Projekt.',
    ],
  },
  {
    slug: 'aus-sieben-spielern-wurde-eine-community',
    title: 'Aus sieben Spielern wurde eine Community',
    category: 'Community',
    type: 'news',
    publishedAt: '2025-12-10',
    image: '/images/team spirit.jpeg',
    imageAlt: 'SC Metropolis 25 — Mannschaftsgeist in der Kabine',
    body: [
      '2019 begann alles mit sieben Studenten und einem Bolzplatz. Heute zählt die Community über 133 Menschen aus mehr als elf Nationen.',
      'Was als spontanes Samstagsfußball im Viktor-Jara-Wohnheim begann, wuchs über Jahre zu einer echten Gemeinschaft.',
      'Die Gründung von SC Metropolis 25 war das natürliche Ergebnis von sechs Jahren gemeinsamer Geschichte.',
    ],
  },
  {
    slug: 'vereinseintragung-dezember-2025',
    title: 'Offiziell eingetragen: SC Metropolis 25 Berlin e.V.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2025-12-22',
    body: [
      'Am 22. Dezember 2025 wurde SC Metropolis 25 Berlin e.V. offiziell ins Vereinsregister eingetragen.',
      'Die Eintragung bedeutet Rechtssicherheit für alle Mitglieder und institutionelle Anerkennung im Berliner Sport.',
      'Wir danken allen 22 Gründungsmitgliedern und der Community, die seit 2019 gewachsen ist.',
    ],
  },
  {
    slug: 'vereinsgruendung-november-2025',
    title: 'Aus einer Fußballgemeinschaft wird ein Verein',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2025-11-26',
    body: [
      'Am 26. November 2025 versammelten sich 22 Gründungsmitglieder. SC Metropolis 25 Berlin e.V. wurde ins Leben gerufen.',
      'Die Gründungsversammlung war der formelle Beginn — die eigentliche Geschichte startete 2019 auf einem Bolzplatz.',
      'Heute ist SC Metropolis 25 ein eingetragener, gemeinnütziger Verein mit über 37 Mitgliedern.',
    ],
  },
  // ── BERICHTE ───────────────────────────────────────────────────────────────
  {
    slug: 'berlin-samstag-fussball',
    title: 'Berlin. Samstag. Fußball.',
    category: 'Berichte',
    type: 'bericht',
    readTime: '6 min',
    publishedAt: '2026-05-15',
    image: '/images/team spirit.jpeg',
    imageAlt: 'SC Metropolis 25 — Gemeinschaft in der Kabine vor dem Spiel',
    body: [
      'Es ist Samstagmorgen in Berlin-Lichtenberg. Jemand schreibt in die WhatsApp-Gruppe: "Heute um 10 auf dem Platz?" Zwei Minuten später: fünf Daumen nach oben. Dann zehn.',
      'Diese Nachricht wurde hunderte Male geschrieben. Seit 2019. Jede Woche. Manchmal mit sieben Leuten, manchmal mit zwanzig. Manchmal bei Sonnenschein, manchmal im Berliner Novemberregen.',
      'Die Spieler kamen aus Kamerun, Nigeria, Frankreich, Marokko, Deutschland, dem Kongo und mehr als acht weiteren Ländern. Auf dem Platz gab es nur eine Sprache: Fußball.',
      'SC Metropolis 25 wurde nicht im Büro gegründet. Er wurde auf dem Bolzplatz gegründet, Samstag für Samstag. Die offizielle Gründungsversammlung im November 2025 war nur der Moment, in dem das, was längst existierte, endlich einen Namen bekam.',
      'Diese Geschichte ist nicht außergewöhnlich. Sie ist sehr normal — für Menschen, die Fußball lieben und sich gefunden haben. Genau das macht sie so stark.',
    ],
  },
  {
    slug: 'unsere-geschichte',
    title: 'Unsere Geschichte — Von der Idee zum Verein',
    category: 'Berichte',
    type: 'bericht',
    readTime: '8 min',
    publishedAt: '2026-04-01',
    image: '/images/trophy for 2nd place.jpeg',
    imageAlt: 'SC Metropolis 25 — Trophäenübergabe Symposium Mboa 2024',
    body: [
      '2019. Viktor-Jara-Wohnheim, Berlin-Lichtenberg. Internationale Studierende, eine gemeinsame Leidenschaft: Fußball.',
      'Es begann ohne Plan. Eine Woche später kamen mehr. Dann noch mehr. Zwischen 2019 und 2024 wuchs die Community auf über 133 Menschen.',
      '2022 gewannen wir das Symposium Mboa Turnier. 2024 das Halbfinale. Silber. Der Moment, der alles veränderte.',
      'November 2025: SC Metropolis 25 Berlin e.V. Dezember 2025: Vereinseintragung. April 2026: Gemeinnützigkeit. Mai 2026: Halbfinale beim Symposium Mboa — als eingetragener Verein.',
      'Das ist unsere Geschichte. Und sie hat gerade erst angefangen.',
    ],
  },
  {
    slug: 'vom-wohnheim-zum-fussballverein',
    title: 'Wie aus Studenten, Mitspielern und Freunden ein Verein wurde',
    category: 'Berichte',
    type: 'bericht',
    readTime: '5 min',
    publishedAt: '2026-03-01',
    body: [
      'Das Viktor-Jara-Wohnheim in Berlin-Lichtenberg ist ein Ort, an dem Menschen aus der ganzen Welt aufeinandertreffen.',
      'Manche von ihnen spielten Fußball. Und wer Fußball spielte, fand schnell andere, die dasselbe wollten. Die WhatsApp-Gruppe wuchs auf 133 Mitglieder.',
      'Die Antwort war SC Metropolis 25. Nicht aus dem Nichts — sondern als logische Fortsetzung von sechs Jahren gemeinsamer Geschichte.',
    ],
  },
  {
    slug: 'warum-wir-metropolis-25-gegruendet-haben',
    title: 'Warum wir Metropolis 25 gegründet haben',
    category: 'Berichte',
    type: 'bericht',
    readTime: '5 min',
    publishedAt: '2026-02-01',
    body: [
      'Weil Fußball mehr verdient als einen Bolzplatz ohne Rahmen. Weil unsere Gemeinschaft eine Struktur brauchte. Weil wir Spieler hatten, die bereit für mehr waren.',
      'Warum Berlin? Weil wir hier sind. Lichtenberg ist unser Zuhause, Berlin unser Feld.',
      'Warum 2025? Weil 2024 das Jahr war, das alles veränderte. Das Finale beim Symposium Mboa. Der Moment, in dem wir wussten: Wir sind bereit.',
    ],
  },
  {
    slug: 'fussball-verbindet-berlin',
    title: 'Fußball verbindet Berlin',
    category: 'Berichte',
    type: 'bericht',
    readTime: '4 min',
    publishedAt: '2026-01-15',
    body: [
      'Unser Kader kommt aus mehr als elf Nationen. Auf dem Platz ist das keine Besonderheit — es ist der Normalzustand.',
      'Fußball ist die Sprache, die alle verstehen. Auf dem Platz zählt nicht, woher jemand kommt, sondern was er oder sie einbringt.',
      'SC Metropolis 25 ist ein Berliner Fußballverein — und ein Beweis dafür, dass Sport tatsächlich verbindet.',
    ],
  },
  {
    slug: 'der-weg-richtung-bfv',
    title: 'Der Weg Richtung BFV — Transparenz über unsere Entwicklung',
    category: 'Berichte',
    type: 'bericht',
    readTime: '6 min',
    publishedAt: '2025-12-15',
    body: [
      'SC Metropolis 25 ist transparent über seinen Weg. Hier ist der aktuelle Stand.',
      'Erreicht: Vereinsgründung (November 2025), Eintragung (Dezember 2025), Gemeinnützigkeit §60a AO (April 2026), BFV-Aufnahmeantrag (Frühjahr 2026), Antrag auf sportliche Förderungswürdigkeit (Sommer 2026), 23 aktive Feldspieler, Hauptsponsor Intarp GmbH.',
      'In Bearbeitung: Anerkennung der sportlichen Förderungswürdigkeit, Sportstättensuche, Spielerlizenzierungen.',
      'Ziel: Einstieg in den Berliner Ligabetrieb zur Saison 2026/27. Wir berichten weiter — ehrlich und transparent.',
    ],
  },
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Artikel nicht gefunden — SC Metropolis 25 Berlin' }
  return {
    title: `${article.title} — SC Metropolis 25 Berlin`,
    description: article.body[0]?.slice(0, 155) ?? '',
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const a = article!
  const isBericht = a.type === 'bericht'
  const formattedDate = format(new Date(a.publishedAt), 'dd. MMMM yyyy', { locale: de })

  const related = articles
    .filter(x => x.category === a.category && x.slug !== a.slug)
    .slice(0, 3)

  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        {a.image && (
          <div className="relative h-[45vh] md:h-[55vh]">
            <Image
              src={a.image}
              alt={a.imageAlt ?? a.title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/10" />
          </div>
        )}

        {!a.image && (
          <div className="h-48 md:h-56 relative">
            <div className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.5) 0, rgba(224,161,6,0.5) 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
        )}

        {/* Title block */}
        <div className={`container-custom relative z-10 pb-10 ${a.image ? '-mt-40 md:-mt-52' : 'pt-10'}`}>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-text-muted text-xs font-heading uppercase tracking-wider hover:text-gold transition-colors mb-5"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            News & Berichte
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className={`text-[10px] font-heading uppercase tracking-wider px-2 py-0.5 ${
              isBericht ? 'bg-ivory text-navy' : 'badge-gold'
            }`}>
              {isBericht ? 'Bericht' : a.category}
            </span>
            {a.readTime && (
              <span className="flex items-center gap-1 text-text-muted text-xs">
                <Clock className="w-3 h-3" aria-hidden="true" />
                {a.readTime} Lesezeit
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-none mb-4 max-w-3xl">
            {a.title}
          </h1>
          <div className="w-12 h-1 bg-gold mb-4" />

          <div className="flex items-center gap-2 text-text-muted text-xs">
            <Calendar className="w-3 h-3 text-gold" aria-hidden="true" />
            <time dateTime={a.publishedAt}>{formattedDate}</time>
            <span className="mx-2 text-dark-muted">·</span>
            <span>SC Metropolis 25 Berlin e.V.</span>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">

            {a.matchResult && (
              <div className="flex items-center gap-4 mb-8 p-4 bg-navy border border-gold/20">
                <Trophy className="w-5 h-5 text-gold shrink-0" aria-hidden="true" />
                <span className="font-display text-gold text-3xl leading-none">{a.matchResult}</span>
                <div className="w-px h-8 bg-dark-border" />
                <div>
                  <p className="text-white text-xs font-heading uppercase tracking-wide">SC Metropolis 25 Berlin</p>
                  <p className="text-text-muted text-xs mt-0.5">Community Match / Testspiel</p>
                </div>
              </div>
            )}

            <div className="space-y-5">
              {a.body.map((para, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? 'text-ivory/90 text-base md:text-lg font-heading'
                      : 'text-text-secondary text-sm md:text-base'
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-dark-border">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-gold text-xs font-heading uppercase tracking-widest hover:gap-3 transition-all duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                Alle News & Berichte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related ──────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-dark-surface border-t border-dark-border">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-gold" aria-hidden="true" />
              <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                Weitere Artikel
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map(rel => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}` as `/news/${string}`}
                  className="group card p-5 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 block"
                >
                  <span className="text-[10px] font-heading uppercase tracking-wider text-gold border border-gold/30 px-2 py-0.5 mb-3 inline-block">
                    {rel.category}
                  </span>
                  <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wide group-hover:text-gold transition-colors duration-200 mb-2 line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="text-text-muted text-xs">
                    {format(new Date(rel.publishedAt), 'dd. MMM yyyy', { locale: de })}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
