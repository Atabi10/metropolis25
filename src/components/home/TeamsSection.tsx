import Link from 'next/link'
import { ArrowRight, Users, Star, Zap } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const teams = [
  {
    id: 'erste-mannschaft',
    name: '1. Mannschaft',
    shortName: 'Erste',
    description: 'Unser Aushängeschild. Die Erste Mannschaft kämpft für Metropolis 25 im Berliner Amateurfußball.',
    icon: Star,
    badge: 'Senioren',
    color: 'from-navy to-navy-800',
    accent: 'border-gold',
    href: '/teams/erste-mannschaft',
  },
  {
    id: 'u23',
    name: 'U23 / Zweite',
    shortName: 'U23',
    description: 'Die Brücke zwischen Nachwuchs und Profikader. Junge Talente auf dem Weg nach oben.',
    icon: Zap,
    badge: 'U23',
    color: 'from-navy-800 to-navy-900',
    accent: 'border-gold/60',
    href: '/teams/u23',
  },
  {
    id: 'jugend',
    name: 'Jugend & Akademie',
    shortName: 'Jugend',
    description: 'Wo Berliner Talente entdeckt, gefördert und zu vollständigen Fußballern entwickelt werden.',
    icon: Users,
    badge: 'Jugend',
    color: 'from-dark-card to-dark-surface',
    accent: 'border-gold/40',
    href: '/akademie',
  },
]

export function TeamsSection() {
  return (
    <section className="section-padding bg-dark-surface" aria-labelledby="teams-title">
      <div className="container-custom">
        <SectionHeader
          label="Unsere Teams"
          title="Mannschaften"
          titleHighlight="überblick"
          subtitle="Von der Ersten Mannschaft bis zur Jugendakademie — bei Metropolis 25 findet jeder seinen Platz."
          id="teams-title"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.map((team, i) => (
            <Link
              key={team.id}
              href={team.href}
              className={`group relative card overflow-hidden border ${team.accent} hover:border-gold transition-all duration-300 hover:-translate-y-2`}
              aria-label={`Team: ${team.name}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-80`} aria-hidden="true" />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5" aria-hidden="true"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.3) 0, rgba(224,161,6,0.3) 1px, transparent 0, transparent 50%)',
                  backgroundSize: '8px 8px',
                }}
              />

              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <team.icon className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <span className="badge-gold text-xs">{team.badge}</span>
                </div>

                {/* Name */}
                <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                  {team.name}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {team.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-gold text-xs font-heading font-semibold uppercase tracking-widest">
                  <span>Zum Team</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-2" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Women's Team Teaser */}
        <div className="mt-6 card border-dashed border-dark-muted p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-1">
              Frauen-Team — Coming Soon
            </h4>
            <p className="text-text-muted text-xs">
              Wir bauen unser Frauenfußball-Programm auf. Intresse? Meld dich!
            </p>
          </div>
          <Link href="/mitmachen?team=frauen" className="btn-outline btn btn-sm shrink-0">
            Interesse anmelden
          </Link>
        </div>
      </div>
    </section>
  )
}
