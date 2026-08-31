'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { Calendar } from 'lucide-react'
import { FixtureCard } from '@/components/ui/FixtureCard'
import type { Fixture } from '@/data/fixtures'

type Locale = 'de' | 'en' | 'fr'

const COPY = {
  de: { all: 'Alle', league: 'Bezirksliga', cup: 'Pokal', empty: 'Für diesen Wettbewerb sind noch keine offiziellen Spiele veröffentlicht.' },
  en: { all: 'All',  league: 'League',       cup: 'Cup',   empty: 'No official fixtures have been published for this competition yet.' },
  fr: { all: 'Tous', league: 'Championnat',  cup: 'Coupe', empty: "Aucun match officiel n'a encore été publié pour cette compétition." },
}

type TabKey = 'all' | 'league' | 'cup'

interface FixtureTabsProps {
  fixtures: Fixture[]
  locale?: Locale
}

export function FixtureTabs({ fixtures, locale = 'de' }: FixtureTabsProps) {
  const c = COPY[locale]
  const [tab, setTab] = useState<TabKey>('all')

  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: 'all',    label: c.all,    count: fixtures.length },
    { key: 'league', label: c.league, count: fixtures.filter(f => f.competitionType === 'league').length },
    { key: 'cup',    label: c.cup,    count: fixtures.filter(f => f.competitionType === 'cup').length },
  ]

  // Chronological. Fixtures with no published date (status 'unscheduled')
  // always sort last so they never displace a dated fixture.
  const ordered = [...fixtures].sort(
    (a, b) => (a.date ?? '9999').localeCompare(b.date ?? '9999'),
  )

  const visible =
    tab === 'all' ? ordered : ordered.filter(f => f.competitionType === tab)

  return (
    <div>
      {/* Tab bar */}
      <div
        className="flex flex-wrap gap-2 mb-6"
        role="tablist"
        aria-label={locale === 'de' ? 'Wettbewerbe filtern' : 'Filter competitions'}
      >
        {tabs.map(t => (
          <button
            key={t.key}
            role="tab"
            type="button"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={clsx(
              'font-heading text-xs uppercase tracking-widest px-4 py-2.5 border transition-colors duration-200',
              tab === t.key
                ? 'bg-gold text-navy border-gold font-semibold'
                : 'text-text-secondary border-dark-border hover:text-gold hover:border-gold/40',
            )}
          >
            {t.label}
            <span
              className={clsx(
                'ml-2 text-[10px]',
                tab === t.key ? 'text-navy/70' : 'text-text-muted',
              )}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>

      {/* Panel */}
      <div role="tabpanel" className="space-y-4">
        {visible.length > 0 ? (
          visible.map(f => <FixtureCard key={f.id} fixture={f} locale={locale} />)
        ) : (
          <div className="card p-8 text-center">
            <Calendar className="w-8 h-8 text-text-muted mx-auto mb-3" aria-hidden="true" />
            <p className="text-text-muted text-sm max-w-sm mx-auto leading-relaxed">
              {c.empty}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
