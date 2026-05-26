import { ShieldCheck, Users, Trophy, Star, CheckCircle } from 'lucide-react'

const badges = [
  {
    icon: ShieldCheck,
    value: 'e.V.',
    label: 'Eingetragener Verein',
    detail: 'Amtsgericht Berlin-Charlottenburg · Eingetragen 22.12.2025',
  },
  {
    icon: CheckCircle,
    value: '§60a AO',
    label: 'Gemeinnützigkeit',
    detail: 'Vorläufig anerkannt durch das Finanzamt · April 2026',
  },
  {
    icon: Trophy,
    value: 'BFV',
    label: '2026/27 in Vorbereitung',
    detail: 'Anmeldung zum Berliner Fußball-Verband Spielbetrieb',
  },
  {
    icon: Users,
    value: '37+',
    label: 'Mitglieder',
    detail: 'Davon 23 aktive Feldspieler',
  },
  {
    icon: Star,
    value: 'Berlin',
    label: 'Verwurzelt in Lichtenberg',
    detail: 'Lichtenberg · Marzahn-Hellersdorf und darüber hinaus',
  },
]

export function TrustSection() {
  return (
    <section className="py-14 bg-dark-surface border-y border-dark-border" aria-label="Vereinsstatus & Vertrauenssignale">
      <div className="container-custom">

        {/* Section Label */}
        <div className="text-center mb-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-2">Offiziell &amp; anerkannt</p>
          <h2 className="font-display text-2xl md:text-3xl text-white uppercase">
            Ein Verein mit <span className="text-gold-gradient">Substanz</span>
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
          SC Metropolis 25 Berlin e.V. ist ein gemeinnütziger Verein im Aufbau.
          Sportstätten und Trainingszeiten befinden sich aktuell in organisatorischer Abstimmung.
        </p>
      </div>
    </section>
  )
}
