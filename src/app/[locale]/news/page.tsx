import type { Metadata } from 'next'
import { NewsCard, type NewsItem } from '@/components/ui/NewsCard'

export const metadata: Metadata = {
  title: 'News & Berichte — SC Metropolis 25 Berlin',
  description:
    'Vereinsnachrichten, Spielberichte und Hintergrundgeschichten von SC Metropolis 25 Berlin e.V. — der echten Fußballgemeinschaft aus Berlin-Lichtenberg.',
}

// ─── NEWS ARTICLES ────────────────────────────────────────────────────────────
const newsItems: NewsItem[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────────

  {
    id: 'n-mboa-2026',
    slug: 'symposium-mboa-turnier-2026',
    title: 'Starker Auftritt beim Symposium Mboa 2026',
    excerpt:
      'SC Metropolis 25 zeigt beim Symposium Mboa Turnier am 23. und 24. Mai 2026 eine beeindruckende Vorstellung: ungeschlagen durch die Gruppenphase, Viertelfinalsieg gegen FÉE-FÉE FC (1:0) — erst im Halbfinale im Elfmeterschießen gegen Gambia ausgeschieden. Ein Auftritt, der zeigt: Dieser Verein ist angekommen.',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-05-24',
    featured: true,
    image: '/images/medals after Symposium final.jpeg',
    imageAlt: 'SC Metropolis 25 — Medaillen beim Symposium Mboa 2026',
  },
  {
    id: 'n-foerderung',
    slug: 'antrag-sportliche-foerderungswuerdigkeit',
    title: 'Antrag auf sportliche Förderungswürdigkeit eingereicht',
    excerpt:
      'SC Metropolis 25 Berlin e.V. hat den Antrag auf Anerkennung der sportlichen Förderungswürdigkeit bei der zuständigen Berliner Senatsverwaltung eingereicht. Ein weiterer struktureller Meilenstein auf dem Weg zum etablierten Berliner Fußballverein.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-06-01',
  },
  {
    id: 'n-flambeau2',
    slug: 'fortschritt-sichtbar-metropolis-gewinnt-4-3',
    title: 'Fortschritt sichtbar: Metropolis gewinnt 4:3',
    excerpt:
      'Im zweiten Aufeinandertreffen mit Flambeau FC zeigt SC Metropolis 25 eine deutliche Steigerung. Im März noch 2:2 — diesmal ein klarer 4:3-Sieg im Poststadion. Die Entwicklung der Mannschaft ist nicht zu übersehen.',
    category: 'Spielberichte',
    type: 'news',
    matchResult: '4:3',
    publishedAt: '2026-05-17',
    image: '/images/warming up before match agains Kmer Lichtenberg.jpeg',
    imageAlt: 'SC Metropolis 25 — Aufwärmen vor dem Spiel',
  },
  {
    id: 'n-kollektion',
    slug: 'erste-vereinskollektion-entsteht',
    title: 'Die erste Vereinskollektion entsteht',
    excerpt:
      'Navy, Gold, Ivory — die offiziellen Vereinsfarben des SC Metropolis 25 werden bald auch auf dem Platz sichtbar sein. Die erste Vereinskollektion befindet sich in Vorbereitung und soll rechtzeitig vor dem BFV-Ligastart vorgestellt werden.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-05-01',
  },
  {
    id: 'n-gemeinnuetzig',
    slug: 'gemeinnuetzigkeit-60a-ao',
    title: 'Meilenstein: Gemeinnützigkeit §60a AO bestätigt',
    excerpt:
      'Das Berliner Finanzamt hat am 30. April 2026 die vorläufige Anerkennung der Gemeinnützigkeit nach §60a AO ausgesprochen. SC Metropolis 25 darf damit steuerlich absetzbare Spendenbescheinigungen ausstellen — ein wichtiger Schritt für die Zukunft des Vereins.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-04-30',
  },
  {
    id: 'n-newstar',
    slug: 'erster-sieg-2026-new-star-berlin',
    title: 'Erster Sieg im Jahr 2026 — 1:0 gegen New Star Berlin SC',
    excerpt:
      'Am 27. April 2026 holt SC Metropolis 25 seinen ersten Sieg des Jahres. Ein hart erkämpftes 1:0 gegen New Star Berlin SC — geduldig, konzentriert, verdient. Genau die Mentalität, die den Verein auszeichnet.',
    category: 'Spielberichte',
    type: 'news',
    matchResult: '1:0',
    publishedAt: '2026-04-27',
    image: '/images/Integration-tournament-team.jpeg',
    imageAlt: 'SC Metropolis 25 — Teamgeist nach dem Sieg',
  },
  {
    id: 'n-lichtenberg',
    slug: 'starke-leistung-gegen-lichtenberg-kmer',
    title: 'Starke Leistung gegen Lichtenberg Kmer — 4:2',
    excerpt:
      'Am 19. April 2026 gewinnt SC Metropolis 25 deutlich mit 4:2 gegen Lichtenberg Kmer. Ein Spiel, das Teamgeist, Organisation und Entwicklung zeigt. Die Mannschaft wächst — in der Qualität und im Zusammenhalt.',
    category: 'Spielberichte',
    type: 'news',
    matchResult: '4:2',
    publishedAt: '2026-04-19',
    image: '/images/team photo before game against Kmer.jpeg',
    imageAlt: 'SC Metropolis 25 — Aufstellung vor dem Spiel gegen Lichtenberg Kmer',
  },
  {
    id: 'n-farben',
    slug: 'vereinsfarben-navy-gold-ivory',
    title: 'Navy. Gold. Ivory. — Die Farben von SC Metropolis 25',
    excerpt:
      'Drei Farben. Drei Werte. Eine Identität. Navy steht für Stabilität und Zusammenhalt. Gold für Ambition und Entwicklung. Ivory für Fairness und Respekt. Diese Farben sind mehr als Design — sie sind das Fundament unserer Vereinsidentität.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-04-15',
  },
  {
    id: 'n-bfv',
    slug: 'vorbereitung-berliner-ligabetrieb',
    title: 'Der nächste Schritt Richtung Berliner Ligabetrieb',
    excerpt:
      'SC Metropolis 25 bereitet sich aktiv auf den Einstieg in den organisierten Berliner Fußball vor. Sportstättensuche, BFV-Kontaktaufnahme, Spielerlizenzierungen — die organisatorische Arbeit läuft auf Hochtouren. Saison 2026/27 ist das Ziel.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-03-20',
  },
  {
    id: 'n-flambeau1',
    slug: 'erstes-testspiel-flambeau-fc',
    title: 'Erste Spielpraxis im Poststadion — 2:2 gegen Flambeau FC',
    excerpt:
      'Am 15. März 2026 bestreitet SC Metropolis 25 sein erstes organisiertes Testspiel: 2:2 gegen Flambeau FC im Poststadion. Ein wichtiger Lernschritt — das Spiel zeigt, wo die Mannschaft steht und wohin die Reise gehen soll.',
    category: 'Spielberichte',
    type: 'news',
    matchResult: '2:2',
    publishedAt: '2026-03-15',
    video: '/videos/m25-vs-flambeau.mp4',
  },
  {
    id: 'n-intarp',
    slug: 'intarp-hauptsponsor',
    title: 'Intarp GmbH wird Hauptsponsor von SC Metropolis 25',
    excerpt:
      'SC Metropolis 25 freut sich, Intarp GmbH als offiziellen Hauptsponsor begrüßen zu dürfen. Die Partnerschaft unterstützt den Aufbau des Vereins und macht den nächsten Schritt Richtung Ligabetrieb möglich.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-01-10',
  },

  // ── 2025 ──────────────────────────────────────────────────────────────────

  {
    id: 'n-community',
    slug: 'aus-sieben-spielern-wurde-eine-community',
    title: 'Aus sieben Spielern wurde eine Community',
    excerpt:
      '2019 begann alles mit sieben Studenten und einem Bolzplatz. Heute zählt die Community über 133 Menschen. Was als spontanes Samstagsfußball im Viktor-Jara-Wohnheim begann, ist heute ein eingetragener, gemeinnütziger Fußballverein in Berlin-Lichtenberg.',
    category: 'Community',
    type: 'news',
    publishedAt: '2025-12-10',
  },
  {
    id: 'n-eintragung',
    slug: 'vereinseintragung-dezember-2025',
    title: 'Offiziell eingetragen: SC Metropolis 25 Berlin e.V.',
    excerpt:
      'Am 22. Dezember 2025 wurde SC Metropolis 25 Berlin e.V. offiziell ins Vereinsregister eingetragen. Ein entscheidender Meilenstein — aus einer Fußballgemeinschaft ist ein Verein geworden.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2025-12-22',
  },
  {
    id: 'n-gruendung',
    slug: 'vereinsgruendung-november-2025',
    title: 'Aus einer Fußballgemeinschaft wird ein Verein',
    excerpt:
      'Am 26. November 2025 versammelten sich 22 Gründungsmitglieder in Berlin-Lichtenberg. SC Metropolis 25 Berlin e.V. wird ins Leben gerufen — mit Vorstand, Satzung und einer klaren Vision für Berliner Fußball.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2025-11-26',
  },
]

// ─── BERICHTE (long-form) ─────────────────────────────────────────────────────
const berichte: NewsItem[] = [
  {
    id: 'b-berlin-samstag',
    slug: 'berlin-samstag-fussball',
    title: 'Berlin. Samstag. Fußball.',
    image: '/images/team spirit.jpeg',
    imageAlt: 'SC Metropolis 25 — Gemeinschaft in der Kabine',
    excerpt:
      'Es ist Samstagmorgen. Unterschiedliche Menschen aus unterschiedlichen Ländern kommen auf einem Berliner Bolzplatz zusammen — und spielen Fußball. Was banal klingt, ist das Fundament von SC Metropolis 25. Diese Geschichte ist die Geschichte aller, die dabei waren.',
    category: 'Berichte',
    type: 'bericht',
    readTime: '6 min',
    publishedAt: '2026-05-15',
    featured: true,
  },
  {
    id: 'b-geschichte',
    slug: 'unsere-geschichte',
    title: 'Unsere Geschichte — Von der Idee zum Verein',
    excerpt:
      'Sechs Jahre. Hunderte von Spielen. Eine wachsende Gemeinschaft. Und am Ende: ein eingetragener, gemeinnütziger Fußballverein. Dies ist die vollständige Geschichte von SC Metropolis 25 Berlin — von den ersten Ballkontakten 2019 bis zur Vereinsgründung 2025.',
    category: 'Berichte',
    type: 'bericht',
    readTime: '8 min',
    publishedAt: '2026-04-01',
  },
  {
    id: 'b-wohnheim',
    slug: 'vom-wohnheim-zum-fussballverein',
    title: 'Wie aus Studenten, Mitspielern und Freunden ein Verein wurde',
    excerpt:
      'Im Viktor-Jara-Wohnheim in Berlin-Lichtenberg trafen internationale Studierende aufeinander. Was sie verband: Fußball. Jeden Samstag. Was dabei entstand, war mehr als Sport — es war eine Gemeinschaft, aus der schließlich SC Metropolis 25 hervorging.',
    category: 'Berichte',
    type: 'bericht',
    readTime: '5 min',
    publishedAt: '2026-03-01',
  },
  {
    id: 'b-warum',
    slug: 'warum-wir-metropolis-25-gegruendet-haben',
    title: 'Warum wir Metropolis 25 gegründet haben',
    excerpt:
      'Es war keine spontane Entscheidung. Die Vereinsgründung war das Ergebnis von Jahren — Jahren des Zusammenspiels, des Wachstums und der Erkenntnis: Wir wollen mehr als Freizeitkicks. Warum Berlin? Warum jetzt? Warum Metropolis 25?',
    category: 'Berichte',
    type: 'bericht',
    readTime: '5 min',
    publishedAt: '2026-02-01',
  },
  {
    id: 'b-fussball-verbindet',
    slug: 'fussball-verbindet-berlin',
    title: 'Fußball verbindet Berlin',
    excerpt:
      'Unser Team kommt aus mehr als elf Nationen. Auf dem Platz spricht man eine Sprache. SC Metropolis 25 ist mehr als ein Fußballverein — er ist ein lebendiges Beispiel dafür, was Fußball als Gemeinschaftssport leisten kann.',
    category: 'Berichte',
    type: 'bericht',
    readTime: '4 min',
    publishedAt: '2026-01-15',
  },
  {
    id: 'b-bfv-weg',
    slug: 'der-weg-richtung-bfv',
    title: 'Der Weg Richtung BFV — Transparenz über unsere Entwicklung',
    excerpt:
      'Vereinsregistrierung, Gemeinnützigkeit, Sportstättensuche, Spielerlizenzierungen — der Weg in den offiziellen Berliner Ligabetrieb ist komplex. Wir berichten transparent über unsere Fortschritte, Hürden und nächsten Schritte.',
    category: 'Berichte',
    type: 'bericht',
    readTime: '6 min',
    publishedAt: '2025-12-15',
  },
]

const categories = ['Alle', 'Spielberichte', 'Vereinsnews', 'Community']

export default function NewsPage() {
  const featured = newsItems.find(n => n.featured)
  const rest     = newsItems.filter(n => !n.featured)

  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.4) 0, rgba(224,161,6,0.4) 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom relative z-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Aktuelles</p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4 leading-none">
            News &{' '}
            <span className="text-gold-gradient">Berichte</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="text-ivory/70 font-heading text-base max-w-xl leading-relaxed">
            Die echte Geschichte von SC Metropolis 25 — von Samstags-Fußball und
            Gemeinschaft bis zum eingetragenen Berliner Fußballverein.
          </p>
        </div>
      </section>

      {/* ── News Section ─────────────────────────────────────── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-6 bg-gold" aria-hidden="true" />
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
              Vereinsnews & Spielberichte
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <span
                key={cat}
                className={`px-4 py-1.5 text-xs font-heading uppercase tracking-widest border transition-all duration-200 cursor-default ${
                  cat === 'Alle'
                    ? 'bg-gold text-navy border-gold'
                    : 'text-text-muted border-dark-border'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured */}
          {featured && (
            <div className="mb-8">
              <NewsCard article={featured} featured />
            </div>
          )}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Berichte Section ─────────────────────────────────── */}
      <section className="section-padding bg-dark-surface border-t border-dark-border">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-6 bg-ivory" aria-hidden="true" />
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
              Hintergrundberichte
            </h2>
          </div>
          <p className="text-text-muted text-sm mb-10 max-w-xl leading-relaxed">
            Längere Artikel, die die Geschichte, Werte und Entwicklung des Vereins
            erzählen — magazine-style, mit Tiefe.
          </p>

          {/* Featured bericht */}
          {berichte.filter(b => b.featured).map(b => (
            <div key={b.id} className="mb-8">
              <NewsCard article={b} featured />
            </div>
          ))}

          {/* Berichte grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {berichte.filter(b => !b.featured).map(b => (
              <NewsCard key={b.id} article={b} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
