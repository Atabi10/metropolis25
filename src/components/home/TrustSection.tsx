'use client'

import { ShieldCheck, Users, Trophy, Star, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const icons = [ShieldCheck, CheckCircle, Trophy, Users, Star]
const keys = ['ev', 'gemeinnuetzig', 'bfv', 'members', 'berlin'] as const

export function TrustSection() {
  const t = useTranslations('trust')
  const tb = useTranslations('trust.badges')

  const badges = keys.map((key, i) => ({
    icon: icons[i],
    value: tb(`${key}.value`),
    label: tb(`${key}.label`),
    detail: tb(`${key}.detail`),
  }))

  return (
    <section className="py-14 bg-dark-surface border-y border-dark-border" aria-label="Club status">
      <div className="container-custom">

        {/* Section Label */}
        <div className="text-center mb-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-2">{t('label')}</p>
          <h2 className="font-display text-2xl md:text-3xl text-white uppercase">
            {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="card p-5 text-center hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors duration-300">
                <badge.icon className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <div className="font-display text-gold text-xl leading-none mb-1">{badge.value}</div>
              <div className="font-heading text-white text-xs uppercase tracking-wider mb-2">{badge.label}</div>
              <div className="text-text-muted text-[10px] leading-relaxed">{badge.detail}</div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-text-muted text-xs mt-8 max-w-xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>

        {/* Vereinsfarben */}
        <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-dark-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-navy border border-dark-border" title="Navy" />
            <div className="w-3 h-3 rounded-full bg-gold" title="Gold" />
            <div className="w-3 h-3 rounded-full bg-ivory" title="Ivory" />
          </div>
          <p className="text-text-muted text-xs">
            Vereinsfarben: <span className="text-ivory/70">Navy</span>,{' '}
            <span className="text-gold">Gold</span> &{' '}
            <span className="text-ivory">Ivory</span>{' '}
            — Zusammenhalt, Ambition und Fairness.
          </p>
        </div>
      </div>
    </section>
  )
}
