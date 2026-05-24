import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NewsCard, type NewsItem } from '@/components/ui/NewsCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

// ─── MOCK DATA — Replace with Sanity CMS data ────────────────────────────────
const mockNews: NewsItem[] = [
  {
    id: '1',
    slug: 'vereinsgruendung-2025',
    title: 'SC Metropolis 25 Berlin offiziell gegründet',
    excerpt: 'Ein neues Kapitel im Berliner Fußball beginnt: SC Metropolis 25 Berlin e.V. ist offiziell eingetragen und startet in die erste Saison.',
    category: 'Vereinsnews',
    publishedAt: '2025-01-15',
    featured: true,
  },
  {
    id: '2',
    slug: 'intarp-hauptsponsor',
    title: 'Intarp GmbH wird Hauptsponsor von SC Metropolis 25',
    excerpt: 'Wir freuen uns, Intarp GmbH als unseren offiziellen Hauptsponsor begrüßen zu dürfen. Eine starke Partnerschaft für die Zukunft.',
    category: 'Sponsoring',
    publishedAt: '2025-02-01',
  },
  {
    id: '3',
    slug: 'jugendakademie-startet',
    title: 'Jugendakademie nimmt Betrieb auf',
    excerpt: 'Unser Nachwuchsprogramm startet durch: Die Jugendakademie von SC Metropolis 25 sucht Talente zwischen 8 und 18 Jahren.',
    category: 'Akademie',
    publishedAt: '2025-03-10',
  },
]

export function NewsPreview() {
  const [featured, ...rest] = mockNews

  return (
    <section className="section-padding bg-dark-surface" aria-labelledby="news-title">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="section-label">Aktuelles</div>
            <h2 id="news-title" className="section-title text-4xl text-white mb-0">
              News &{' '}
              <span className="text-gold-gradient">Berichte</span>
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden md:flex items-center gap-2 text-gold text-xs font-heading font-semibold uppercase tracking-widest hover:gap-3 transition-all duration-250"
          >
            Alle News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured */}
          <div className="md:col-span-2">
            <NewsCard article={featured} featured />
          </div>

          {/* Secondary */}
          <div className="flex flex-col gap-6">
            {rest.map(article => (
              <NewsCard key={article.id} article={article} className="flex-1" />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-8 md:hidden">
          <Link href="/news" className="btn-outline btn">
            Alle News ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}
