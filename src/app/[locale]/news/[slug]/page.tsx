import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Calendar, ArrowLeft, Clock, Trophy } from 'lucide-react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import { VideoHero } from '@/components/ui/VideoHero'

// ─── ARTICLE DATA ─────────────────────────────────────────────────────────────
interface Article {
  slug: string
  title: string
  category: string
  type: 'news' | 'bericht'
  publishedAt: string
  image?: string
  imageAlt?: string
  video?: string
  matchResult?: string
  readTime?: string
  body: string[]
}

const articles: Article[] = [
  {
    slug: 'symposium-mboa-turnier-2026',
    title: 'Starker Auftritt beim Symposium Mboa 2026',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-05-24',
    image: '/images/symposium-mboa-team.jpeg',
    imageAlt: 'SC Metropolis 25 beim Symposium Mboa Turnier 2026',
    body: [
      'Am 23. und 24. Mai 2026 trat SC Metropolis 25 Berlin e.V. erstmals als eingetragener Verein beim Symposium Mboa Fußballturnier an — einem der bedeutendsten afrikanischen Kulturfestivals Berlins.',
      'Die Gruppenphase verlief stark: Drei Spiele, zwei Siege, ein Unentschieden. Die Mannschaft blieb ungeschlagen und zog souverän in die K.o.-Runde ein.',
      'Im Viertelfinale folgte ein konzentrierter Auftritt gegen FÉE-FÉE FC. Ein 1:0-Sieg — die Defensive stand, die Offensive nutzte ihre Chance.',
      'Im Halbfinale war erst im Elfmeterschießen Schluss. Gegen Gambia zeigte die Mannschaft Charakter bis zum letzten Schuss. Das Ausscheiden nach einem couragierten Turnier schmerzte — und motiviert.',
      'Dieser Turnierverlauf zeigt, wo SC Metropolis 25 steht: nicht mehr nur eine Fußballgemeinschaft, sondern ein Verein, der mithalten kann. Das Halbfinale beim Symposium Mboa ist erst der Anfang.',
    ],
  },
  {
    slug: 'fortschritt-sichtbar-metropolis-gewinnt-4-3',
    title: 'Fortschritt sichtbar: Metropolis gewinnt 4:3',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-05-17',
    matchResult: '4:3',
    video: '/videos/m25-vs-flambeau.mp4',
    body: [
      'Am 17. Mai 2026 empfing SC Metropolis 25 Flambeau FC erneut im Poststadion — diesmal mit einem anderen Ergebnis. 4:3 Sieg. Ein Ergebnis, das Entwicklung beweist.',
      'Im ersten Aufeinandertreffen am 15. März hatte es 2:2 geendet — respektabel, aber mit dem Gefühl, mehr möglich gewesen zu sein. Zwei Monate später: vier Tore, drei Punkte, volle Kontrolle im Poststadion.',
      'Die Mannschaft zeigte eine reifere Version ihrer selbst. Kombinationsspiel, Zweikampfhärte, Laufbereitschaft — alles eine Stufe besser als beim ersten Spiel.',
      'Es sind noch keine offiziellen Ligaspiele. Aber jeder Spieltag bringt die Mannschaft näher an den Berliner Ligabetrieb heran.',
    ],
  },
  {
    slug: 'starke-leistung-gegen-lichtenberg-kmer',
    title: 'Starke Leistung gegen Lichtenberg Kmer — 4:2',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-04-19',
    matchResult: '4:2',
    body: [
      'Am 19. April 2026 gewann SC Metropolis 25 mit 4:2 gegen Lichtenberg Kmer an der Hauffstraße in Berlin-Lichtenberg — in der eigenen Nachbarschaft.',
      'Ein dominanter Auftritt. Die Mannschaft übernahm früh das Spielgeschehen, kombinierte sauber und belohnte sich mit vier Toren. Lichtenberg Kmer ist ein etabliertes Team im Berliner Community-Football.',
      'Der deutliche Sieg ist ein klares Zeichen: Die Qualität der Mannschaft wächst, die Automatismen werden besser. Trainer Makendi Amos hatte in den Wochen zuvor gezielt an der Defensive gearbeitet — das Ergebnis war sichtbar.',
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
      'Es war ein Spiel, das mentale Stärke verlangte. Geduld in der ersten Halbzeit, Konzentration in der zweiten und die Entschlossenheit, das knappe Ergebnis über die Zeit zu bringen.',
      'Genau diese Art Sieg baut eine Mannschaft. Wer lernt, knappe Führungen zu verteidigen, ist bereit für den Ligabetrieb. SC Metropolis 25 wächst nicht nur als Verein — es wächst als Mannschaft.',
    ],
  },
  {
    slug: 'erstes-testspiel-flambeau-fc',
    title: 'Erste Spielpraxis im Poststadion — 2:2 gegen Flambeau FC',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-03-15',
    matchResult: '2:2',
    video: '/videos/m25-vs-flambeau.mp4',
    body: [
      'Am 15. März 2026 bestritt SC Metropolis 25 sein erstes organisiertes Testspiel als eingetragener Verein: 2:2 gegen Flambeau FC im Poststadion Berlin.',
      'Kein Sieg — aber ein Schritt. Das Spiel war ein erster Gradmesser. Zwei eigene Tore, solide Defensivphasen, Momente echten Kombinationsfußballs — und Bereiche, an denen weiter gearbeitet wird.',
      'Zwei Monate später, beim Rückspiel am 17. Mai: 4:3 Sieg. Dieser erste Spieltag im Poststadion war der Anfang.',
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
      'Die erste offizielle Vereinsausstattung von SC Metropolis 25 Berlin e.V. befindet sich in Vorbereitung. Heimtrikot, Auswärtstrikot und Third Kit orientieren sich an den offiziellen Vereinsfarben.',
      'Die Kollektion soll rechtzeitig vor dem geplanten Einstieg in den Berliner Ligabetrieb zur Saison 2026/27 vorgestellt werden. Weitere Einblicke folgen auf unseren sozialen Kanälen.',
    ],
  },
  {
    slug: 'gemeinnuetzigkeit-60a-ao',
    title: 'Meilenstein: Gemeinnützigkeit §60a AO bestätigt',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-04-30',
    body: [
      'Am 30. April 2026 hat das Berliner Finanzamt die vorläufige Anerkennung der Gemeinnützigkeit nach §60a AO ausgesprochen. SC Metropolis 25 Berlin e.V. ist damit offiziell als gemeinnützig anerkannt.',
      'Was das bedeutet: Der Verein darf steuerlich absetzbare Spendenbescheinigungen ausstellen. Mitgliedsbeiträge können steuerlich geltend gemacht werden. Nach außen signalisiert es: SC Metropolis 25 ist ein seriöser, institutionell gefestigter Verein.',
      'Die Anerkennung ist das Ergebnis von Monaten organisatorischer Arbeit — sorgfältig ausgearbeitete Vereinssatzung, klare gemeinnützige Zwecksetzung, transparente Vereinsführung.',
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
      'Navy steht für Stabilität und Zusammenhalt — die Grundlage, die alle vereint. Gold steht für Ambition und Entwicklung: den Anspruch, besser zu werden und die eigenen Ziele konsequent zu verfolgen. Ivory steht für Fairness und Respekt — die Art, wie wir Fußball spielen und miteinander umgehen.',
      'Diese drei Farben sind mehr als ein Design. Sie sind das Fundament der Vereinsidentität von SC Metropolis 25 Berlin e.V. — auf dem Platz, im Trikot und in der Gemeinschaft.',
    ],
  },
  {
    slug: 'vorbereitung-berliner-ligabetrieb',
    title: 'Der nächste Schritt Richtung Berliner Ligabetrieb',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-03-20',
    body: [
      'SC Metropolis 25 bereitet sich aktiv auf den Einstieg in den organisierten Berliner Fußball vor. Die Arbeit läuft auf mehreren Ebenen gleichzeitig.',
      'Dazu gehören: die Kontaktaufnahme mit dem Berliner Fußball-Verband (BFV), die Suche nach geeigneten Sportstätten für den regulären Trainingsbetrieb, die Spielerlizenzierung sowie die strukturelle Weiterentwicklung des Vereins.',
      'Ziel ist der Einstieg in den Berliner Ligabetrieb zur Saison 2026/27. Die Richtung ist klar, der Wille ist da und die Grundlage ist gelegt.',
    ],
  },
  {
    slug: 'intarp-hauptsponsor',
    title: 'Intarp GmbH wird Hauptsponsor von SC Metropolis 25',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-01-10',
    body: [
      'SC Metropolis 25 freut sich, Intarp GmbH als offiziellen Hauptsponsor des Vereins begrüßen zu dürfen.',
      'Die Partnerschaft unterstützt den strukturellen Aufbau des Vereins und ermöglicht es, den nächsten Schritt Richtung organisierten Spielbetrieb zu gehen. Intarp GmbH teilt die Überzeugung, dass Sport und Gemeinschaft zusammengehören.',
      'Wir danken Intarp GmbH für das Vertrauen. Diese Partnerschaft ist ein wichtiger Baustein für die Zukunft von SC Metropolis 25 Berlin e.V.',
    ],
  },
  {
    slug: 'aus-sieben-spielern-wurde-eine-community',
    title: 'Aus sieben Spielern wurde eine Community',
    category: 'Community',
    type: 'news',
    publishedAt: '2025-12-10',
    body: [
      '2019 begann alles mit sieben Studenten und einem Bolzplatz. Heute zählt die Community über 133 Menschen aus mehr als elf Nationen.',
      'Was als spontanes Samstagsfußball im Viktor-Jara-Wohnheim in Berlin-Lichtenberg begann, wuchs über Jahre zu einer echten Gemeinschaft. Kein Verein, keine Satzung, keine Hierarchie — nur Menschen, die Fußball lieben.',
      'Die Gründung von SC Metropolis 25 war kein strategischer Schritt. Sie war das natürliche Ergebnis von sechs Jahren gemeinsamer Geschichte.',
    ],
  },
  {
    slug: 'vereinseintragung-dezember-2025',
    title: 'Offiziell eingetragen: SC Metropolis 25 Berlin e.V.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2025-12-22',
    body: [
      'Am 22. Dezember 2025 wurde SC Metropolis 25 Berlin e.V. offiziell ins Vereinsregister eingetragen. Ein entscheidender Meilenstein — aus einer Fußballgemeinschaft ist ein Verein geworden.',
      'Die Eintragung bedeutet: Rechtssicherheit für alle Mitglieder, institutionelle Anerkennung im Berliner Sport und die Grundlage für alle weiteren Schritte — Gemeinnützigkeit, BFV-Anmeldung, Sportstättenverträge.',
      'Wir danken allen 22 Gründungsmitgliedern, die diesen Schritt mitgegangen sind — und der Community, die seit 2019 gewachsen ist.',
    ],
  },
  {
    slug: 'vereinsgruendung-november-2025',
    title: 'Aus einer Fußballgemeinschaft wird ein Verein',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2025-11-26',
    body: [
      'Am 26. November 2025 versammelten sich 22 Gründungsmitglieder in Berlin-Lichtenberg. SC Metropolis 25 Berlin e.V. wurde ins Leben gerufen — mit Vorstand, Satzung und einer klaren Vision.',
      'Die Gründungsversammlung war der formelle Beginn. Aber die eigentliche Geschichte begann sechs Jahre früher — 2019, mit sieben Studenten, einem Bolzplatz und der Frage: Sollen wir nächsten Samstag wieder spielen?',
      'Heute ist SC Metropolis 25 ein eingetragener, gemeinnütziger Fußballverein mit über 37 Mitgliedern und dem klaren Ziel, ab Saison 2026/27 im organisierten Berliner Ligabetrieb anzutreten.',
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
    image: '/images/symposium-mboa-team.jpeg',
    imageAlt: 'SC Metropolis 25 — Teammoment',
    body: [
      'Es ist Samstagmorgen in Berlin-Lichtenberg. Jemand schreibt in die WhatsApp-Gruppe: "Heute um 10 auf dem Platz?" Zwei Minuten später: fünf Daumen nach oben. Dann zehn. Dann mehr.',
      'Diese Nachricht wurde hunderte Male geschrieben. Seit 2019. Jede Woche. Manchmal mit sieben Leuten, manchmal mit zwanzig. Manchmal bei Sonnenschein, manchmal im Berliner Novemberregen.',
      'Die Spieler kamen aus Kamerun, Nigeria, Frankreich, Marokko, Deutschland, dem Kongo und mehr als acht weiteren Ländern. Manche studierten, manche arbeiteten, manche kannten sich schon vorher. Aber auf dem Platz gab es nur eine Sprache: Fußball.',
      'Was niemand geplant hatte: Dass aus diesen Samstagen etwas Größeres werden würde. Dass aus Mitspielern Freunde werden würden. Dass aus Freunden eine Gemeinschaft entsteht. Und aus einer Gemeinschaft — ein Verein.',
      'SC Metropolis 25 Berlin e.V. wurde nicht im Büro gegründet. Er wurde auf dem Bolzplatz gegründet, Samstag für Samstag, Jahr für Jahr. Die offizielle Gründungsversammlung im November 2025 war nur der Moment, in dem das, was längst existierte, endlich einen Namen bekam.',
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
    image: '/images/symposium-mboa-team.jpeg',
    imageAlt: 'SC Metropolis 25 — Vereinsgeschichte',
    body: [
      '2019. Viktor-Jara-Wohnheim, Berlin-Lichtenberg. Internationale Studierende, verschiedene Hintergründe, eine gemeinsame Leidenschaft: Fußball.',
      'Es begann ohne Plan. Jemand fragte, ob man am Samstag spielen wolle. Jemand anderes kannte einen Platz. Eine Woche später kamen mehr. Dann noch mehr.',
      'Zwischen 2019 und 2024 wuchs die Community auf über 133 Menschen. Es gab keine Hierarchie, keine Satzung, keinen Vereinsrahmen — nur Menschen, die sich für Fußball trafen und dabei Freundschaften schlossen.',
      '2022 gewannen wir das Symposium Mboa Turnier. Ein Moment, der zeigte: Wir können mehr als Freizeitkicks.',
      '2024 das Halbfinale beim Symposium Mboa. Silber. Für viele war das der Moment, der alles veränderte: Wenn wir so weit kommen können — was wäre möglich mit einem richtigen Verein?',
      'November 2025: SC Metropolis 25 Berlin e.V. Zweiundzwanzig Gründungsmitglieder. Eine Satzung. Ein Vorstand. Ein Name, der zu uns passt.',
      'Dezember 2025: Vereinseintragung. April 2026: Gemeinnützigkeit. Mai 2026 — beim Symposium Mboa, erstmals als eingetragener Verein — das Halbfinale. Wieder.',
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
      'Das Viktor-Jara-Wohnheim in Berlin-Lichtenberg ist ein Ort, an dem Menschen aus der ganzen Welt aufeinandertreffen — Studierende, Arbeitende, Berliner Neuzugänge.',
      'Manche von ihnen spielten Fußball. Und wer Fußball spielte, fand schnell andere, die dasselbe wollten. So entstand eine erste Gruppe. Sieben Spieler. Ein Bolzplatz. Ein Samstagmorgen.',
      'Was zunächst spontan wirkte, hatte eine eigene Logik. Die Gruppe blieb zusammen. Sie lud andere ein. Sie spielte Turniere. Die WhatsApp-Gruppe wuchs — von zwanzig auf fünfzig, von fünfzig auf hundert, auf hundertdreiunddreißig.',
      'In dieser Zeit entstanden Freundschaften, die über den Fußball hinausgingen. Und irgendwann die Frage: Wäre es nicht Zeit, das offiziell zu machen?',
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
      'Warum einen Verein gründen? Diese Frage stellten wir uns, bevor wir den Schritt wagten. Die Antwort war einfacher, als wir dachten.',
      'Weil Fußball mehr verdient als einen Bolzplatz ohne Rahmen. Weil unsere Gemeinschaft eine Struktur brauchte, die ihr langfristig Stabilität geben kann. Weil wir Spieler hatten, die bereit für mehr waren.',
      'Warum Berlin? Weil wir hier sind. Weil diese Stadt uns geprägt hat — mit ihrer Energie, ihrer Vielfalt, ihrer Direktheit. Lichtenberg ist unser Zuhause.',
      'Warum 2025? Weil 2024 das Jahr war, das alles veränderte. Das Finale beim Symposium Mboa. Das war der Moment, in dem wir wussten: Wir sind bereit.',
      'Metropolis 25 — weil wir aus der Metropole kommen, weil wir 2025 gegründet wurden. Ambitioniert, urban, vielfältig. Berliner Fußball.',
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
      'Fußball ist die Sprache, die alle verstehen. Taktische Rufe, Jubel, Frustration — das braucht keine Übersetzung. Auf dem Platz zählt nicht, woher jemand kommt, sondern was er oder sie einbringt.',
      'Diese Realität erleben wir jede Woche. SC Metropolis 25 ist ein Berliner Fußballverein — aber auch ein Beweis dafür, dass Sport tatsächlich verbindet, wenn man ihm den Raum lässt.',
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
      'Erreicht: Vereinsgründung (November 2025), Vereinseintragung (Dezember 2025), Gemeinnützigkeit §60a AO (April 2026), erste Testspiele im organisierten Rahmen, Kader mit 23 aktiven Feldspielern, Hauptsponsor Intarp GmbH.',
      'In Arbeit: Sportstättensuche für festen Trainings- und Spielbetrieb, Kontaktaufnahme mit dem BFV, Spielerlizenzierungen, Aufbau der Vereinsstruktur.',
      'Ziel: Einstieg in den Berliner Ligabetrieb zur Saison 2026/27. Realistisch, wenn die organisatorischen Voraussetzungen rechtzeitig erfüllt sind.',
      'Wir berichten weiter — ehrlich, transparent und ohne Übertreibungen. Der Weg ist der Weg. Und wir gehen ihn.',
    ],
  },
]

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
    description: article.body[0]?.slice(0, 155),
  }
}

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  // TypeScript narrowing after notFound()
  const a = article as Article

  const formattedDate = format(new Date(a.publishedAt), 'dd. MMMM yyyy', { locale: de })
  const isBericht = a.type === 'bericht'

  const related = articles
    .filter(x => x.category === a.category && x.slug !== a.slug)
    .slice(0, 3)

  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        {a.image ? (
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
            <div className="absolute inset-0 bg-gradient-to-r from-dark/40 to-transparent" />
          </div>
        ) : a.video ? (
          <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
            <VideoHero src={a.video} />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/10" />
          </div>
        ) : (
          <div className="h-48 md:h-56 relative">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.5) 0, rgba(224,161,6,0.5) 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
        )}

        {/* Title block — overlaps the image bottom */}
        <div className={`container-custom relative z-10 pb-10 ${(a.image || a.video) ? '-mt-40 md:-mt-52' : 'pt-10'}`}>
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

            {/* Match result badge */}
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

            {/* Paragraphs */}
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

            {/* Back */}
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
                  href={`/news/${rel.slug}`}
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
