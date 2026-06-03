import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NewsCard, type NewsItem } from '@/components/ui/NewsCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

// ─── REAL CLUB NEWS — most recent 4 ──────────────────────────────────────────
const latestNews: NewsItem[] = [
  {
    id: 'n-mboa-2026',
    slug: 'symposium-mboa-turnier-2026',
    title: 'Starker Auftritt beim Symposium Mboa 2026',
    excerpt:
      'Ungeschlagen durch die Gruppenphase, Viertelfinalsieg gegen FÉE-FÉE FC — erst im Halbfinale im Elfmeterschießen ausgeschieden. Ein Auftritt, der zeigt: Dieser Verein ist angekommen.',
    category: 'Spielberichte',
    type: 'news',
    publishedAt: '2026-05-24',
    featured: true,
    image: '/images/medals after Symposium final.jpeg',
    imageAlt: 'SC Metropolis 25 — Medaillen beim Symposium Mboa 2026',
  },
  {
    id: 'n-flambeau2',
    slug: 'fortschritt-sichtbar-metropolis-gewinnt-4-3',
    title: 'Fortschritt sichtbar: 4:3-Sieg gegen Flambeau FC',
    excerpt:
      'Im März noch 2:2 — diesmal ein klarer 4:3-Sieg. Die Entwicklung der Mannschaft ist nicht zu übersehen.',
    category: 'Spielberichte',
    type: 'news',
    matchResult: '4:3',
    publishedAt: '2026-05-17',
    image: '/images/warming up before match agains Kmer Lichtenberg.jpeg',
    imageAlt: 'SC Metropolis 25 — Spieltag-Atmosphäre',
  },
  {
    id: 'n-gemeinnuetzig',
    slug: 'gemeinnuetzigkeit-60a-ao',
    title: 'Meilenstein: Gemeinnützigkeit §60a AO bestätigt',
    excerpt:
      'Das Berliner Finanzamt hat die vorläufige Gemeinnützigkeit anerkannt. Ein wichtiger Schritt für die Zukunft des Vereins.',
    category: 'Vereinsnews',
    type: 'news',
    publishedAt: '2026-04-30',
  },
  {
    id: 'b-berlin-samstag',
    slug: 'berlin-samstag-fussball',
    title: 'Berlin. Samstag. Fußball.',
    excerpt:
      'Unterschiedliche Menschen. Unterschiedliche Länder. Dieselbe Leidenschaft. Die Geschichte, wie wöchentlicher Samstagsfußball zum Fundament eines Vereins wurde.',
    category: 'Berichte',
    type: 'bericht',
    readTime: '6 min',
    publishedAt: '2026-05-15',
    image: '/images/team spirit.jpeg',
  },
]

export function NewsPreview() {
  const [featured, ...rest] = latestNews

  return (
    <section className="section-padding bg-dark-surface" aria-labelledby="news-title">
      <div className="container-custom">
        <SectionHeader
          label="News & Berichte"
          title="Aktuelles vom"
          titleHighlight="Verein"
          subtitle="Spielberichte, Vereinsmeilensteine und die Geschichte hinter SC Metropolis 25 Berlin."
          id="news-title"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured — takes 2 columns */}
          <div className="lg:col-span-2">
            <NewsCard article={featured} featured />
          </div>

          {/* Side articles */}
          <div className="flex flex-col gap-6">
            {rest.slice(0, 2).map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* 4th article full width teaser */}
        <div className="mt-6">
          <NewsCard article={rest[2]} />
        </div>

        <div className="text-center mt-10">
          <Link
            href="/news"
            className="btn-outline btn group inline-flex items-center gap-2"
          >
            Alle News & Berichte
            <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
