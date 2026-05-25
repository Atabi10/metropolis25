import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MapPin, Calendar, Users, Trophy, Heart, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns — SC Metropolis 25 Berlin',
  description: 'Die Geschichte, Mission und Werte von SC Metropolis 25 Berlin e.V. — Berlins ambitioniertester Fußballclub aus Lichtenberg.',
}

const milestones = [
  { year: '2024', event: 'Idee & Gründungsplanung', desc: 'Eine Gruppe Berliner Fußballenthusiasten fasst den Entschluss, einen neuen Verein zu gründen.' },
  { year: '2025', event: 'Vereinsgründung', desc: 'SC Metropolis 25 Berlin e.V. wird offiziell im Vereinsregister eingetragen.' },
  { year: '2025', event: 'Erste Mannschaft', desc: 'Die erste Mannschaft nimmt am Berliner Amateurfußball teil.' },
  { year: '2025', event: 'Jugendakademie', desc: 'Die Jugendakademie startet mit Nachwuchsförderung für 8–18-Jährige.' },
  { year: '2026', event: 'Wachstum & Expansion', desc: 'Erweiterung auf mehrere Teams, neue Sponsoren und wachsende Community.' },
]

const boardMembers = [
  { name: 'Raoul Atabong',       role: '1. Vorsitzender',  initials: 'RA' },
  { name: 'Hassan Ghaddar',      role: '2. Vorsitzender',  initials: 'HG' },
  { name: 'Leoni Charlize Klauß', role: 'Schatzmeisterin', initials: 'LK' },
  { name: 'Moustafa Ghaddar',    role: 'Sportdirektor',    initials: 'MG' },
]

export default function VereinPage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(224,161,6,0.1) 0%, transparent 60%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="section-label">Unser Verein</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            SC Metropolis 25 <br />
            <span className="text-gold-gradient">Berlin e.V.</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="section-subtitle max-w-2xl text-ivory/70 text-lg">
            Gegründet 2025 in Lichtenberg, Berlin. Ein Fußballclub für alle,
            der die DNA der Hauptstadt trägt und Fußball als soziale Kraft versteht.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                label="Mission"
                title="Warum es uns"
                titleHighlight="gibt"
                align="left"
                subtitle=""
              />
              <p className="text-text-secondary leading-relaxed mb-6">
                SC Metropolis 25 Berlin e.V. entstand aus der Überzeugung, dass Berlin
                mehr Räume braucht, wo Fußball gelebt wird — nicht nur gespielt.
                Wo junge Talente gefördert werden, unabhängig von Herkunft oder
                finanziellem Hintergrund.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                Wir glauben an Fußball als Sprache, die Menschen verbindet. Als
                Werkzeug für Integration, als Motor für Persönlichkeitsentwicklung
                und als Ausdruck der einzigartigen Berliner Stadtkultur.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: 'Gegründet', value: '2025' },
                  { icon: MapPin,   label: 'Standort',  value: 'Lichtenberg, Berlin' },
                  { icon: Users,    label: 'Mitglieder',value: '60+' },
                  { icon: Trophy,   label: 'Liga',       value: 'Kreisliga Berlin' },
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
                <h3 className="font-heading font-semibold text-gold text-xs uppercase tracking-widest mb-4">Vision 2030</h3>
                <p className="font-heading text-xl text-white uppercase leading-relaxed mb-6">
                  Berlins anerkanntester Nachwuchs-Fußballclub — mit Spielern in höheren Ligen
                  und einer Community, die die Stadt bewegt.
                </p>
                <ul className="space-y-3">
                  {[
                    'Mehrere Teams in verschiedenen Altersklassen',
                    'Eigener Trainingsplatz in Lichtenberg',
                    'Anerkannte Jugendakademie',
                    'Internationale Kooperationen',
                  ].map(goal => (
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
            label="Was uns antreibt"
            title="Unsere"
            titleHighlight="Werte"
            subtitle="Diese Werte sind nicht nur Worte — sie sind die Grundlage jeder Entscheidung, die wir als Verein treffen."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { value: 'Gemeinschaft',       icon: '🤝' },
              { value: 'Jugendförderung',    icon: '⚽' },
              { value: 'Diversität',         icon: '🌍' },
              { value: 'Fair Play',          icon: '🏅' },
              { value: 'Respekt',            icon: '💛' },
              { value: 'Teamgeist',          icon: '👊' },
              { value: 'Disziplin',          icon: '💪' },
              { value: 'Ambition',           icon: '🎯' },
              { value: 'Integration',        icon: '🌟' },
              { value: 'Verantwortung',      icon: '🏙️' },
            ].map(v => (
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
            label="Vereinsgeschichte"
            title="Unsere"
            titleHighlight="Geschichte"
            subtitle="Von der Idee bis zum Berliner Fußball — die Geschichte von SC Metropolis 25."
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-border md:-translate-x-0.5" aria-hidden="true" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card p-5">
                      <span className="text-gold font-display text-2xl">{m.year}</span>
                      <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wide mt-1 mb-2">{m.event}</h3>
                      <p className="text-text-muted text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-5 shadow-gold-sm" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <SectionHeader
            label="Führung"
            title="Vorstand &"
            titleHighlight="Leitung"
            subtitle="Die Menschen hinter SC Metropolis 25 Berlin — engagiert, leidenschaftlich und berlinverbunden."
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
            Interesse am Vorstand? <Link href="/kontakt" className="text-gold hover:underline">Melde dich bei uns.</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="container-custom">
          <h2 className="section-title text-3xl mb-4">Teil der Familie werden</h2>
          <p className="text-ivory/70 text-sm mb-8 max-w-lg mx-auto">
            Ob als Spieler, Unterstützer oder Mitglied — bei uns ist jeder willkommen.
          </p>
          <Link href="/mitgliedschaft" className="btn-primary btn btn-lg">
            Mitglied werden
          </Link>
        </div>
      </section>
    </div>
  )
}
