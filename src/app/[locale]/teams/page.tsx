import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('teams.meta')
  return { title: t('title'), description: t('description') }
}

export default async function TeamsPage() {
  const t = await getTranslations('teams')

  const comingSoon = [
    {
      name: t('zweiteH.name'),
      description: t('zweiteH.description'),
      badge: t('zweiteH.badge'),
      href: '/mitmachen?team=2herren',
      cta: t('zweiteH.cta'),
    },
    {
      name: t('frauen.name'),
      description: t('frauen.description'),
      badge: t('frauen.badge'),
      href: '/mitmachen?team=frauen',
      cta: t('frauen.cta'),
    },
  ]

  return (
    <div className="pt-[var(--nav-height)]">
      <section className="py-20 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">{t('hero.label')}</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            {t('hero.title')} <span className="text-gold-gradient">{t('hero.titleHighlight')}</span>
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-custom">

          {/* 1. Mannschaft — active */}
          <Link
            href="/teams/erste-mannschaft"
            className="group card p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 block border-gold/30 mb-6"
          >
            <div className="flex items-start gap-6">
              <div className="font-display text-6xl text-gold/30 leading-none w-12 shrink-0 group-hover:text-gold/60 transition-colors">
                01
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-heading font-bold text-white text-2xl uppercase tracking-wide group-hover:text-gold transition-colors">
                    {t('ersteM.title')}
                  </h2>
                  <span className="badge-gold text-xs">{t('ersteM.badge')}</span>
                </div>
                <p className="text-gold text-xs font-heading uppercase tracking-widest mb-3">{t('ersteM.league')}</p>
                <p className="text-text-muted text-sm leading-relaxed max-w-xl">{t('ersteM.description')}</p>
                <div className="flex flex-wrap gap-6 mt-4">
                  {[
                    [t('ersteM.trainerLabel'), 'Makendi Amos'],
                    [t('ersteM.spielerLabel'), t('ersteM.spielerValue')],
                    [t('ersteM.zielLabel'), t('ersteM.zielValue')],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <span className="text-text-muted text-xs uppercase tracking-wider">{k}: </span>
                      <span className="text-white text-xs font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gold text-xs font-heading font-semibold uppercase tracking-widest shrink-0">
              <span>{t('ersteM.cta')}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </div>
          </Link>

          {/* Coming Soon */}
          <div className="grid sm:grid-cols-2 gap-4">
            {comingSoon.map((team, i) => (
              <Link
                key={team.name}
                href={team.href}
                className="card border-dashed border-dark-muted p-6 flex flex-col justify-between gap-4 hover:border-gold/40 hover:-translate-y-0.5 transition-all duration-200 block"
              >
                <div className="flex items-start gap-4">
                  <div className="font-display text-4xl text-dark-muted leading-none w-10 shrink-0">
                    {String(i + 2).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-bold text-text-secondary text-base uppercase tracking-wide">{team.name}</h3>
                      <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">{team.badge}</span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{team.description}</p>
                  </div>
                </div>
                <div className="pl-14">
                  <span className="btn-outline btn btn-sm text-xs pointer-events-none">{team.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
