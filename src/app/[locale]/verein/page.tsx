import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MapPin, Calendar, Users, ShieldCheck, ArrowRight } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('verein.meta')
  return { title: t('title'), description: t('description') }
}

const milestones = [
  { year: '2019', event: 'Der erste Samstag', desc: 'Sieben Studenten treffen sich auf einem Berliner Bolzplatz. Was als lockere Runde beginnt, wird Woche für Woche zur Gemeinschaft. Der Grundstein ist gelegt.' },
  { year: '2019–2024', event: 'Wachstum & Turniere', desc: 'Die Gruppe wächst auf 133+ Community-Mitglieder. Auftritte bei Berliner Integrations-Turnieren und dem Symposium Mboa. 2024: Finaleinzug beim Symposium Mboa.' },
  { year: '26. Nov. 2025', event: 'Vereinsgründung', desc: '22 Mitglieder bei der Gründungsversammlung. SC Metropolis 25 Berlin e.V. entsteht offiziell — mit Vorstand, Satzung und einer klaren Zukunftsvision.' },
  { year: '22. Dez. 2025', event: 'Eintragung ins Vereinsregister', desc: 'Das Amtsgericht Berlin-Charlottenburg trägt den Verein ein. Die rechtliche Grundlage für alles Weitere ist geschaffen.' },
  { year: '30. Apr. 2026', event: 'Gemeinnützigkeit §60a AO', desc: 'Das Finanzamt erkennt die Gemeinnützigkeit vorläufig an. Spenden sind steuerlich absetzbar. Der Verein ist auf institutionellem Kurs.' },
  { year: '2026/27', event: 'BFV-Spielbetrieb in Vorbereitung', desc: 'Anmeldung zum Berliner Fußball-Verband Spielbetrieb. Aufbau des 2. Herren-Teams und perspektivisch Frauenfußball.' },
]

const boardMembers = [
  { name: 'Raoul Atabong',       role: '1. Vorsitzender',  initials: 'RA' },
  { name: 'Hassan Ghaddar',      role: '2. Vorsitzender',  initials: 'HG' },
  { name: 'Leoni Charlize Klauß', role: 'Schatzmeisterin', initials: 'LK' },
  { name: 'Moustafa Ghaddar',    role: 'Sportdirektor',    initials: 'MG' },
]

export default async function VereinPage() {
  const t = await getTranslations('verein')
  const tv = await getTranslations('verein.values')

  const values = [
    { value: tv('gemeinschaft'), icon: '🤝' },
    { value: tv('jugend'),        icon: '⚽' },
    { value: tv('diversitat'),    icon: '🌍' },
    { value: tv('fairPlay'),      icon: '🏅' },
    { value: tv('respekt'),       icon: '💛' },
    { value: tv('teamgeist'),     icon: '👊' },
    { value: tv('disziplin'),     icon: '💪' },
    { value: tv('ambition'),      icon: '🎯' },
    { value: tv('integration'),   icon: '🌟' },
    { value: tv('verantwortung'), icon: '🏙️' },
  ]

  return (
    <div className="pt-[var(--nav-height)]">

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(224,161,6,0.1) 0%, transparent 60%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="section-label">{t('hero.label')}</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            {t('hero.title')} <br />
            <span className="text-gold-gradient">{t('hero.titleHighlight')}</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="section-subtitle max-w-2xl text-ivory/70 text-lg">{t('hero.description')}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                label={t('mission.label')}
                title={t('mission.title')}
                titleHighlight={t('mission.titleHighlight')}
                align="left"
                subtitle=""
              />
              <p className="text-text-secondary leading-relaxed mb-6">{t('mission.body1')}</p>
              <p className="text-text-muted text-sm leading-relaxed mb-8">{t('mission.body2')}</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar,    label: t('mission.infoGrundet'),      value: '26.11.2025' },
                  { icon: MapPin,      label: t('mission.infoStandort'),     value: t('mission.infoStandortValue') },
                  { icon: Users,       label: t('mission.infoMitglieder'),   value: '37+' },
                  { icon: ShieldCheck, label: t('mission.infoGemeinnuetzig'), value: '§60a AO' },
                ].map(item => (
                  <div key={item.label} className="card p-4 flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <div className="text-text-muted text-xs uppercase tracking-wider">{item.label}</div>
                      <div className="text-white font-heading text-sm font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-navy border border-gold/20 p-8 md:p-10 relative">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold -translate-x-2 -translate-y-2" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold translate-x-2 translate-y-2" />
                <h3 className="font-heading font-semibold text-gold text-xs uppercase tracking-widest mb-4">{t('vision.title')}</h3>
                <p className="font-heading text-xl text-white uppercase leading-relaxed mb-6">{t('vision.body')}</p>
                <ul className="space-y-3">
                  {[t('vision.goal1'), t('vision.goal2'), t('vision.goal3'), t('vision.goal4')].map(goal => (
                    <li key={goal} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <SectionHeader
            label={tv('label')}
            title={tv('title')}
            titleHighlight={tv('titleHighlight')}
            subtitle={tv('subtitle')}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map(v => (
              <div key={v.value} className="card p-4 text-center hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-2" role="img" aria-label={v.value}>{v.icon}</div>
                <p className="font-heading text-white text-xs uppercase tracking-wider">{v.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club History Timeline */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <SectionHeader
            label={t('history.label')}
            title={t('history.title')}
            titleHighlight={t('history.titleHighlight')}
            subtitle={t('history.subtitle')}
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-border md:-translate-x-0.5" aria-hidden="true" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card p-5">
                      <span className="text-gold font-display text-2xl">{m.year}</span>
                      <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wide mt-1 mb-2">{m.event}</h3>
                      <p className="text-text-muted text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-5 shadow-gold-sm" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/verein/geschichte" className="btn-outline btn btn-lg group inline-flex">
              <span>{t('history.readMore')}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <SectionHeader
            label={t('board.label')}
            title={t('board.title')}
            titleHighlight={t('board.titleHighlight')}
            subtitle={t('board.subtitle')}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {boardMembers.map(member => (
              <div key={member.role} className="card p-6 text-center hover:border-gold/30 transition-all duration-300">
                <div className="w-16 h-16 bg-navy border-2 border-gold/30 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-gold text-2xl">{member.initials}</span>
                </div>
                <p className="font-heading text-white text-sm uppercase tracking-wide mb-1">{member.name}</p>
                <p className="text-text-muted text-xs">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-6">
            {t('board.interest')}{' '}
            <Link href="/kontakt" className="text-gold hover:underline">{t('board.contactUs')}</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="container-custom">
          <h2 className="section-title text-3xl mb-4">{t('cta.title')}</h2>
          <p className="text-ivory/70 text-sm mb-8 max-w-lg mx-auto">{t('cta.body')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/mitmachen" className="btn-primary btn btn-lg">{t('cta.mitspielen')}</Link>
            <Link href="/mitgliedschaft" className="btn-outline btn btn-lg">{t('cta.mitglied')}</Link>
            <Link href="/kontakt" className="btn-outline btn btn-lg">{t('cta.kontakt')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
