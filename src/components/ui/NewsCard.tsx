import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

export interface NewsItem {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  type?: 'news' | 'bericht'   // 'bericht' = long-form magazine article
  readTime?: string            // e.g. '4 min'
  publishedAt: string
  image?: string
  imageAlt?: string
  video?: string               // path to video clip for match reports
  featured?: boolean
  matchResult?: string         // e.g. '2:2' — shown as a badge
}

interface NewsCardProps {
  article: NewsItem
  featured?: boolean
  className?: string
}

export function NewsCard({ article, featured = false, className }: NewsCardProps) {
  const date = new Date(article.publishedAt)
  const formattedDate = format(date, 'dd. MMMM yyyy', { locale: de })
  const isBericht = article.type === 'bericht'

  return (
    <Link
      href={`/news/${article.slug}`}
      className={clsx(
        'group card-hover block overflow-hidden h-full',
        className
      )}
      aria-label={`${isBericht ? 'Bericht' : 'News'}: ${article.title}`}
    >
      {/* Image / Video thumbnail area */}
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
        ) : article.video ? (
          <video
            src={article.video}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy to-dark flex items-center justify-center">
            <span className="font-display text-gold/20 text-8xl select-none">M</span>
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={clsx(
            'text-[10px] font-heading uppercase tracking-wider px-2 py-0.5',
            isBericht
              ? 'bg-ivory text-navy border border-ivory/60'
              : 'badge-gold'
          )}>
            {isBericht ? 'Bericht' : article.category}
          </span>
          {article.matchResult && (
            <span className="text-[10px] font-display font-bold bg-navy border border-gold/40 text-gold px-2 py-0.5 tracking-wide">
              {article.matchResult}
            </span>
          )}
        </div>

        {article.featured && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-heading uppercase tracking-wider bg-gold text-navy px-2 py-0.5 font-semibold">
              Highlight
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 text-text-muted text-xs mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-gold" aria-hidden="true" />
            <time dateTime={article.publishedAt}>{formattedDate}</time>
          </div>
          {article.readTime && (
            <>
              <span className="text-dark-muted">·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>{article.readTime}</span>
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className={clsx(
          'font-heading font-semibold uppercase tracking-wide text-white group-hover:text-gold transition-colors duration-250 mb-2',
          featured ? 'text-xl md:text-2xl' : 'text-sm md:text-base line-clamp-2'
        )}>
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-muted text-xs leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-2 text-gold text-xs font-heading font-semibold uppercase tracking-widest">
          <span>{isBericht ? 'Artikel lesen' : 'Weiterlesen'}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}
