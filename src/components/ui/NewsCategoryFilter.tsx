'use client'

import { useState, useMemo } from 'react'
import { NewsCard, type NewsItem } from '@/components/ui/NewsCard'
import { clsx } from 'clsx'

// ─── CATEGORY DEFINITIONS ─────────────────────────────────────────────────────
export interface NewsCategory {
  label:   string
  slug:    string
  /** Match articles where category OR type includes any of these values */
  match:   string[]
  /** If true, this pill is purely editorial (no existing articles yet) */
  future?: boolean
}

export const NEWS_CATEGORIES: NewsCategory[] = [
  { label: 'Alle',             slug: 'alle',         match: [] },
  { label: 'Matchday',         slug: 'matchday',     match: ['Spielberichte'] },
  { label: 'Vereinsnews',      slug: 'vereinsnews',  match: ['Vereinsnews'] },
  { label: 'Community',        slug: 'community',    match: ['Community'] },
  { label: 'Behind the Badge', slug: 'berichte',     match: ['Berichte', 'bericht'] },
  { label: 'Berlin Fußball',   slug: 'berlin',       match: ['Berlin Fußball'] },
  { label: 'Future Talents',   slug: 'talents',      match: ['Future Talents'], future: true },
]

interface Props {
  newsItems:  NewsItem[]
  berichte:   NewsItem[]
}

export function NewsCategoryFilter({ newsItems, berichte }: Props) {
  const [active, setActive] = useState('alle')

  const allArticles = useMemo(() => [...newsItems, ...berichte], [newsItems, berichte])

  const filtered = useMemo(() => {
    if (active === 'alle') return null  // null = show original split layout

    const cat = NEWS_CATEGORIES.find(c => c.slug === active)
    if (!cat) return allArticles

    return allArticles.filter(a =>
      cat.match.some(m =>
        a.category === m ||
        a.type === m ||
        // 'bericht' in match should catch type === 'bericht'
        (m === 'bericht' && a.type === 'bericht')
      )
    )
  }, [active, allArticles])

  const featuredNews = newsItems.find(n => n.featured)
  const restNews     = newsItems.filter(n => !n.featured)
  const featuredBericht = berichte.find(b => b.featured)
  const restBerichte    = berichte.filter(b => !b.featured)

  return (
    <>
      {/* ── Category pills ──────────────────────────────────────── */}
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Artikel nach Kategorie filtern"
      >
        {NEWS_CATEGORIES.map(cat => (
          <button
            key={cat.slug}
            onClick={() => setActive(cat.slug)}
            aria-pressed={active === cat.slug}
            className={clsx(
              'px-4 py-1.5 text-xs font-heading uppercase tracking-widest border transition-all duration-200',
              active === cat.slug
                ? 'bg-gold text-navy border-gold'
                : cat.future
                  ? 'text-text-muted/50 border-dark-border/50 cursor-default'
                  : 'text-text-muted border-dark-border hover:border-gold/40 hover:text-gold/80'
            )}
            disabled={cat.future}
            title={cat.future ? 'Bald verfügbar' : undefined}
          >
            {cat.label}
            {cat.future && (
              <span className="ml-1.5 text-[9px] opacity-50 normal-case tracking-normal">bald</span>
            )}
          </button>
        ))}
      </div>

      {/* ── Filtered view ────────────────────────────────────────── */}
      {filtered !== null ? (
        filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(a => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-text-muted text-sm font-heading uppercase tracking-wider">
              Keine Artikel in dieser Kategorie
            </p>
            <button
              onClick={() => setActive('alle')}
              className="mt-4 text-gold text-xs font-heading uppercase tracking-widest hover:underline"
            >
              Alle Artikel anzeigen →
            </button>
          </div>
        )
      ) : (
        /* ── Default "Alle" layout ───────────────────────────────── */
        <>
          {/* News section */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-gold" aria-hidden="true" />
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
              Vereinsnews & Spielberichte
            </h2>
          </div>

          {featuredNews && (
            <div className="mb-6">
              <NewsCard article={featuredNews} featured />
            </div>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {restNews.map(a => <NewsCard key={a.id} article={a} />)}
          </div>

          {/* Berichte section */}
          <div className="border-t border-dark-border pt-14">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-6 bg-ivory/40" aria-hidden="true" />
              <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                Hintergrundberichte
              </h2>
            </div>
            <p className="text-text-muted text-xs mb-8 ml-4 max-w-xl leading-relaxed">
              Längere Artikel, die die Geschichte, Werte und Entwicklung des Vereins erzählen.
            </p>

            {featuredBericht && (
              <div className="mb-6">
                <NewsCard article={featuredBericht} featured />
              </div>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {restBerichte.map(b => <NewsCard key={b.id} article={b} />)}
            </div>
          </div>
        </>
      )}
    </>
  )
}
