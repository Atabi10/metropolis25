'use client'

import { ArrowRight, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export function TeamsSection() {
  const t = useTranslations('teamsSection')

  const comingSoon = [
    { name: t('comingSoon.zweiteH'), href: '/mitmachen?team=2herren' },
    { name: t('comingSoon.frauen'),  href: '/mitmachen?team=frauen' },
  ]

  return (
    <section className="section-padding bg-dark-surface" aria-labelledby="teams-title">
      <div className="container-custom">
        <SectionHeader
          label={t('label')}
          title={t('title')}
          titleHighlight={t('titleHighlight')}
          subtitle={t('subtitle')}
          id="teams-title"
        />

        {/* 1. Mannschaft — featured */}
        <Link
          href="/teams/erste-mannschaft"
          className="group relative card overflow-hidden border border-gold hover:border-gold/80 transition-all duration-300 hover:-translate-y-1 block mb-6"
          aria-label={t('ersteM.title')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-800 opacity-80" aria-hidden="true" />
          <div className="absolute inset-0 opacity-5" aria-hidden="true"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.3) 0, rgba(224,161,6,0.3) 1px, transparent 0, transparent 50%)',
              backgroundSize: '8px 8px',
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-gold/10 border border-gold/40 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                <Star className="w-7 h-7 text-gold" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-4xl text-white uppercase group-hover:text-gold transition-colors duration-300">
                    {t('ersteM.title')}
                  </h3>
                  <span className="badge-gold text-xs">{t('ersteM.badge')}</span>
                </div>
                <p className="text-gold text-xs font-heading uppercase tracking-widest mb-3">{t('ersteM.league')}</p>
                <p className="text-text-muted text-sm leading-relaxed max-w-xl">
                  {t('ersteM.description')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gold text-xs font-heading font-semibold uppercase tracking-widest shrink-0">
              <span>{t('ersteM.cta')}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-2" aria-hidden="true" />
            </div>
          </div>
        </Link>

        {/* Coming Soon */}
        <div className="grid sm:grid-cols-2 gap-4">
          {comingSoon.map(team => (
            <div key={team.name} className="card border-dashed border-dark-muted p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">{team.name}</h4>
                  <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">{t('comingSoon.badge')}</span>
                </div>
                <p className="text-text-muted text-xs">{t('comingSoon.description')}</p>
              </div>
              <Link href={team.href} className="btn-outline btn btn-sm shrink-0 text-xs">
                {t('comingSoon.cta')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
