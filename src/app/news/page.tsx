import type { Metadata } from 'next'
import { NewsCard, type NewsItem } from '@/components/ui/NewsCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'News — SC Metropolis 25 Berlin',
  description: 'Aktuelle Neuigkeiten, Spielberichte und Vereinsnachrichten von SC Metropolis 25 Berlin e.V.',
}

const categories = ['Alle', 'Vereinsnews', 'Spielberichte', 'Akademie', 'Sponsoring', 'Community']

// Mock data — replace with Sanity CMS
const allNews: NewsItem[] = [
  { id: '7', slug: 'symposium-mboa-turnier-2026', title: 'Starker Auftritt beim Symposium Mboa Turnier 2026', excerpt: 'SC Metropolis 25 zeigt beim Symposium Mboa Fußballturnier am 23. und 24. Mai 2026 in Berlin eine beeindruckende Vorstellung: Drei Spiele, zwei Siege, ein Unentschieden — ungeschlagen durch die Gruppenphase.', category: 'Spielberichte', publishedAt: '2026-05-24', featured: true },
  { id: '1', slug: 'vereinsgruendung-2025', title: 'SC Metropolis 25 Berlin offiziell gegründet', excerpt: 'Ein neues Kapitel im Berliner Fußball beginnt: SC Metropolis 25 Berlin e.V. ist offiziell eingetragen und startet in die erste Saison.', category: 'Vereinsnews', publishedAt: '2025-01-15' },
  { id: '2', slug: 'intarp-hauptsponsor', title: 'Intarp GmbH wird Hauptsponsor', excerpt: 'Wir freuen uns, Intarp GmbH als unseren offiziellen Hauptsponsor begrüßen zu dürfen. Eine starke Partnerschaft für die Zukunft.', category: 'Sponsoring', publishedAt: '2025-02-01' },
  { id: '3', slug: 'jugendakademie-startet', title: 'Jugendakademie nimmt Betrieb auf', excerpt: 'Unser Nachwuchsprogramm startet durch: Die Jugendakademie von SC Metropolis 25 sucht Talente zwischen 8 und 18 Jahren.', category: 'Akademie', publishedAt: '2025-03-10' },
  { id: '4', slug: 'erster-sieg', title: 'Erster Sieg in der Kreisliga B', excerpt: 'Historischer Moment: SC Metropolis 25 holt beim ersten Ligaspiel drei Punkte. 3:1 gegen SV Lichtenberg 47.', category: 'Spielberichte', publishedAt: '2025-08-23' },
  { id: '5', slug: 'auswärtssieg-berlin-ost', title: 'Auswärtssieg bei FC Berlin-Ost', excerpt: 'Starke Leistung auswärts: SC Metropolis 25 gewinnt 2:1 bei FC Berlin-Ost und festigt den zweiten Tabellenplatz.', category: 'Spielberichte', publishedAt: '2025-08-30' },
  { id: '6', slug: 'community-training', title: 'Offenes Community-Training jeden Samstag', excerpt: 'Wir öffnen unsere Tore: Jeden Samstag können alle Berliner am offenen Community-Training teilnehmen.', category: 'Community', publishedAt: '2025-04-05' },
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
