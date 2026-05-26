import type { Metadata } from 'next'
import { NewsCard, type NewsItem } from '@/components/ui/NewsCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'News — SC Metropolis 25 Berlin',
  description: 'Aktuelle Neuigkeiten, Spielberichte und Vereinsnachrichten von SC Metropolis 25 Berlin e.V.',
}

const categories = ['Alle', 'Vereinsnews', 'Spielberichte', 'Akademie', 'Sponsoring', 'Community']

const allNews: NewsItem[] = [
  {
    id: '7',
    slug: 'symposium-mboa-turnier-2026',
    title: 'Starker Auftritt beim Symposium Mboa Turnier 2026',
    excerpt: 'SC Metropolis 25 zeigt beim Symposium Mboa Fußballturnier am 23. und 24. Mai 2026 in Berlin eine beeindruckende Vorstellung: Drei Spiele, zwei Siege, ein Unentschieden — ungeschlagen durch die Gruppenphase.',
    category: 'Spielberichte',
    publishedAt: '2026-05-24',
    featured: true,
    image: '/images/symposium-mboa-team.jpeg',
    imageAlt: 'SC Metropolis 25 beim Symposium Mboa Turnier 2026',
  },
  {
    id: '5',
    slug: 'gemeinnuetzigkeit-60a-ao',
    title: 'Gemeinnützigkeit §60a AO offiziell bestätigt',
    excerpt: 'Das Berliner Finanzamt hat am 30. April 2026 die vorläufige Anerkennung der Gemeinnützigkeit nach §60a AO ausgesprochen. Damit ist SC Metropolis 25 berechtigt, steuerlich absetzbare Spendenbescheinigungen auszustellen.',
    category: 'Vereinsnews',
    publishedAt: '2026-04-30',
  },
  {
    id: '6',
    slug: 'herrenmannschaft-im-aufbau',
    title: '1. Herren auf dem Weg in den BFV-Spielbetrieb',
    excerpt: 'Der Kader wächst: 23 aktive Feldspieler trainieren regelmäßig unter Cheftrainer Makendi Amos. Das Ziel ist klar — Anmeldung zum offiziellen BFV-Spielbetrieb ab Saison 2026/27.',
    category: 'Vereinsnews',
    publishedAt: '2026-03-15',
  },
  {
    id: '1',
    slug: 'vereinseintragung-dezember-2025',
    title: 'SC Metropolis 25 offiziell im Vereinsregister eingetragen',
    excerpt: 'Am 22. Dezember 2025 wurde SC Metropolis 25 Berlin e.V. offiziell ins Vereinsregister eingetragen — ein entscheidender Meilenstein für den Aufbau eines stabilen, rechtssicheren Vereins in Berlin-Lichtenberg.',
    category: 'Vereinsnews',
    publishedAt: '2025-12-22',
  },
  {
    id: '2',
    slug: 'vereinsgruendung-november-2025',
    title: 'Gründungsversammlung: SC Metropolis 25 entsteht',
    excerpt: 'Am 26. November 2025 versammelten sich die Gründungsmitglieder in Berlin-Lichtenberg: SC Metropolis 25 Berlin e.V. wird ins Leben gerufen — mit Vorstand, Satzung und einer klaren Vision für Berliner Fußball.',
    category: 'Vereinsnews',
    publishedAt: '2025-11-26',
  },
  {
    id: '3',
    slug: 'intarp-hauptsponsor',
    title: 'Intarp GmbH wird Hauptsponsor',
    excerpt: 'Wir freuen uns, Intarp GmbH als unseren offiziellen Hauptsponsor begrüßen zu dürfen. Eine starke Partnerschaft, die den Aufbau des Vereins maßgeblich unterstützt.',
    category: 'Sponsoring',
    publishedAt: '2026-01-10',
  },
  {
    id: '4',
    slug: 'frauenfussball-geplant',
    title: 'Frauenfußball — wir planen ein eigenes Team',
    excerpt: 'SC Metropolis 25 setzt auf Frauenfußball: Wir planen perspektivisch ein eigenständiges Frauenteam und suchen jetzt bereits Interessierte, die dieses Team mitgestalten wollen.',
    category: 'Vereinsnews',
    publishedAt: '2026-02-20',
  },
]

export default function NewsPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero */}
      <section className="py-20 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Aktuelles</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            News & <span className="text-gold-gradient">Berichte</span>
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                className={`px-4 py-2 text-xs font-heading uppercase tracking-widest border transition-all duration-200 ${
                  cat === 'Alle'
                    ? 'bg-gold text-navy-900 border-gold'
                    : 'bg-transparent text-text-muted border-dark-border hover:border-gold/40 hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {allNews.filter(n => n.featured).map(article => (
            <div key={article.id} className="mb-8">
              <NewsCard article={article} featured />
            </div>
          ))}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews.filter(n => !n.featured).map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
