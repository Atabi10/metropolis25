import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trainer & Staff — SC Metropolis 25 Berlin',
  description: 'Das Trainerteam und der medizinische Stab von SC Metropolis 25 Berlin e.V.',
}

const staff = [
  {
    name: 'Makendi Amos',
    role: 'Cheftrainer',
    initials: 'MA',
    category: 'Trainerteam',
    description: 'Cheftrainer der 1. Mannschaft von SC Metropolis 25 Berlin. Verantwortlich für Training, Taktik und sportliche Entwicklung der Mannschaft.',
    accent: true,
  },
  {
    name: 'Sylvia Audrey',
    role: 'Medizinisches Personal',
    initials: 'SA',
    category: 'Medizinischer Stab',
    description: 'Zuständig für die medizinische Betreuung der Spieler vor, während und nach dem Training sowie bei Spielen.',
    accent: false,
  },
  {
    name: 'Hussein El-Samra',
    role: 'Physiotherapeut',
    initials: 'HE',
    category: 'Medizinischer Stab',
    description: 'Physiotherapeutische Betreuung der Mannschaft — Prävention, Rehabilitation und Leistungsoptimierung.',
    accent: false,
  },
]

const categories = ['Trainerteam', 'Medizinischer Stab']

export default function TrainerPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero */}
      <section className="py-16 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Unser Verein</div>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase">
            Trainer & <span className="text-gold-gradient">Staff</span>
          </h1>
        </div>
      </section>

      {/* Staff by category */}
      <section className="section-padding bg-dark">
        <div className="container-custom max-w-4xl">

          {categories.map((cat) => (
            <div key={cat} className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gold" />
                <h2 className="font-heading font-semibold text-white uppercase tracking-widest">{cat}</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {staff.filter(s => s.category === cat).map((member) => (
                  <div
                    key={member.name}
                    className={`card p-6 hover:border-gold/30 transition-all duration-300 group ${member.accent ? 'border-gold/20' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        member.accent
                          ? 'bg-gold/10 border-2 border-gold/50 group-hover:border-gold'
                          : 'bg-navy border-2 border-dark-border group-hover:border-gold/40'
                      }`}>
                        <span className={`font-display text-lg ${member.accent ? 'text-gold' : 'text-text-secondary'}`}>
                          {member.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-heading text-white font-semibold text-base uppercase tracking-wide">{member.name}</p>
                        <p className={`text-xs font-heading uppercase tracking-widest mb-3 ${member.accent ? 'text-gold' : 'text-text-muted'}`}>
                          {member.role}
                        </p>
                        <p className="text-text-muted text-sm leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Join the staff CTA */}
          <div className="card p-6 border-gold/20 text-center">
            <p className="font-heading text-white font-semibold uppercase tracking-wide mb-2">Werde Teil des Teams</p>
            <p className="text-text-muted text-sm mb-4">
              Wir suchen engagierte Trainer, Betreuer und medizinisches Personal. Interesse?
            </p>
            <Link href="/kontakt" className="btn-primary btn inline-flex">
              Kontakt aufnehmen
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/verein" className="text-gold hover:underline text-sm">← Zurück zu Über uns</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
