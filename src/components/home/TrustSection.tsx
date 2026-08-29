'use client'

import { ShieldCheck, CheckCircle, Trophy, CalendarCheck, Monitor, Award, MapPin, Handshake, Landmark } from 'lucide-react'
import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'

/**
 * Club status dashboard.
 *
 * `state` drives the visual treatment:
 *   'done'    → confirmed, documented milestone
 *   'pending' → in progress
 *
 * Sportliche Förderungswürdigkeit: recognised by the Senatsverwaltung für
 * Inneres und Sport, Anerkennungsbescheid received 29.08.2026.
 *
 * Two items deliberately stay 'pending':
 *   sportstaette — the BVB-Stadion approval covers ONE fixture only. It is
 *                  not a permanent allocation and must not be shown as done.
 *   partner      — no sponsor is under contract.
 */
const items = [
  { key: 'ev',            icon: ShieldCheck,    state: 'done' },
  { key: 'gemeinnuetzig', icon: CheckCircle,    state: 'done' },
  { key: 'foerderung',    icon: Award,          state: 'done' },
  { key: 'lsb',           icon: Landmark,       state: 'done' },
  { key: 'spielbetrieb',  icon: Trophy,         state: 'done' },
  { key: 'dfbnet',        icon: Monitor,        state: 'done' },
  { key: 'pflichtspiel',  icon: CalendarCheck,  state: 'done' },
  { key: 'sportstaette',  icon: MapPin,         state: 'pending' },
  { key: 'partner',       icon: Handshake,      state: 'pending' },
] as const

export function TrustSection() {
  const t = useTranslations('trust')
  const tb = useTranslations('trust.badges')

  return (
    <section className="py-14 bg-dark-surface border-y border-dark-border" aria-label="Club status">
      <div className="container-custom">

        <div className="text-center mb-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-2">{t('label')}</p>
          <h2 className="font-display text-2xl md:text-3xl text-white uppercase">
            {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
          </h2>
        </div>

        {/* Status grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(item => {
            const done = item.state === 'done'
            return (
              <div
                key={item.key}
                className={clsx(
                  'card p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1',
                  done ? 'hover:border-gold/40' : 'border-dashed hover:border-ivory/30',
                )}
              >
                <div
                  className={clsx(
                    'w-9 h-9 flex items-center justify-center shrink-0 border',
                    done
                      ? 'bg-gold/10 border-gold/25'
                      : 'bg-white/[0.03] border-white/10',
                  )}
                >
                  <item.icon
                    className={clsx('w-4 h-4', done ? 'text-gold' : 'text-ivory/45')}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={clsx(
                        'text-[9px] font-heading font-bold uppercase tracking-[0.14em] px-1.5 py-0.5 shrink-0',
                        done
                          ? 'bg-gold text-navy'
                          : 'bg-white/[0.06] text-ivory/60 border border-white/10',
                      )}
                    >
                      {done ? t('stateDone') : t('statePending')}
                    </span>
                  </div>
                  <p className="font-heading text-white text-xs uppercase tracking-wider mb-1.5 leading-snug">
                    {tb(`${item.key}.label`)}
                  </p>
                  <p className="text-text-muted text-[11px] leading-relaxed">
                    {tb(`${item.key}.detail`)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-text-muted text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>

        {/* Vereinsfarben */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-dark-border">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-navy border border-dark-border" />
            <span className="w-3 h-3 rounded-full bg-gold" />
            <span className="w-3 h-3 rounded-full bg-ivory" />
          </div>
          <p className="text-text-muted text-xs text-center">
            {t('colours')}
          </p>
        </div>
      </div>
    </section>
  )
}
