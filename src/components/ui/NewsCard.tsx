import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

export interface NewsItem {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  image?: string
  imageAlt?: string
  featured?: boolean
}

interface NewsCardProps {
  article: NewsItem
  featured?: boolean
  className?: string
}

export function NewsCard({ article, featured = false, className }: NewsCardProps) {
  const date = new Date(article.publishedAt)
  const formattedDate = format(date, 'dd. MMMM yyyy', { locale: de })

  return (
    <Link
      href={`/news/${article.slug}`}
      className={clsx(
        'group card-hover block overflow-hidden h-full',
        className
      )}
      aria-label={`News: ${article.title}`}
    >
      {/* Image */}
      <div className={clsx(
        'relative overflow-hidden bg-dark-card',
        featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
      )}>
        {article.image ? (
          <Image
            src={article.image}
            alt={article.imageAlt ?? article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Placeholder with brand gradient
          <div className="absolute inset-0 bg-navy-gradient flex items-center justify-center">
            <span className="font-display text-gold text-6xl opacity-20">M</span>
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="badge-gold text-xs">{article.category}</span>
        </div>

        {/* Featured indicator */}
        {article.featured && (
          <div className="absolute top-3 right-3">
            <span className="badge bg-gold text-navy-900 text-xs font-bold">Highlight</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-text-muted text-xs mb-3">
          <Calendar className="w-3 h-3 text-gold" aria-hidden="true" />
          <time dateTime={article.publishedAt}>{formattedDate}</time>
        </div>

        {/* Title */}
        <h3 className={clsx(
          'font-heading font-semibold uppercase tracking-wide text-white group-hover:text-gold transition-colors duration-250 mb-2',
          featured ? 'text-xl md:text-2xl' : 'text-base line-clamp-2'
        )}>
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-muted text-sm line-clamp-2 leading-relaxed mb-4">
          {article.excerpt}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-2 text-gold text-xs font-heading font-semibold uppercase tracking-widest">
          <span>Weiterlesen</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}
