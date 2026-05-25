import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vorstand — SC Metropolis 25 Berlin',
  description: 'Der Vorstand von SC Metropolis 25 Berlin e.V. — die Menschen, die den Verein leiten und gestalten.',
}

const vorstand = [
  {
    name: 'Raoul Atabong',
    role: '1. Vorsitzender',
    initials: 'RA',
    description: 'Gründungsmitglied und treibende Kraft hinter SC Metropolis 25 Berlin. Verantwortlich für die strategische Ausrichtung und Außenrepräsentation des Vereins.',
  },
  {
    name: 'Hassan Ghaddar',
    role: '2. Vorsitzender',
    initials: 'HG',
    description: 'Unterstützt den 1. Vorsitzenden in allen Vereinsbelangen und koordiniert interne Abläufe sowie die Kommunikation zwischen den Vereinsbereichen.',
  },
  {
    name: 'Leoni Charlize Klauß',
    role: 'Schatzmeisterin',
    initials: 'LK',
    description: 'Verantwortlich für das Finanzmanagement des Vereins — Buchhaltung, Beiträge, Sponsorengelder und Budgetplanung.',
  },
  {
    name: 'Moustafa Ghaddar',
    role: 'Sportdirektor',
    initials: 'MG',
    description: 'Zuständig für alle sportlichen Belange: Kaderplanung, Trainingsorganisation, Spielbetrieb und Nachwuchsförderung.',
  },
]

export default function VorstandPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero */}
      <section className="py-16 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Unser Verein</div>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase">
            Vorstand
          </h1>
        </div>
      </section>

      {/* Board members */}
      <section className="section-padding bg-dark">
        <div className="container-custom max-w-4xl">
          <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
            Der Vorstand von SC Metropolis 25 Berlin e.V. wurde auf der Gründungsversammlung
            am 26. November 2025 gewählt und trägt die Verantwortung für die
            Entwicklung des Vereins.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {vorstand.map((member) => (
              <div key={member.role} className="card p-6 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-navy border-2 border-gold/30 group-hover:border-gold/60 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <span className="font-display text-gold text-lg">{member.initials}</span>
                  </div>
                  <div>
                    <p className="font-heading text-white font-semibold text-base uppercase tracking-wide">{member.name}</p>
                    <p className="text-gold text-xs font-heading uppercase tracking-widest mb-3">{member.role}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 card p-6 border-gold/20 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <p className="font-heading text-white font-semibold uppercase tracking-wide mb-1">Kontakt zum Vorstand</p>
              <p className="text-text-muted text-sm">Fragen, Anliegen oder Mitarbeit im Vorstand?</p>
            </div>
            <a
              href="mailto:kontakt@sc-metropolis25.de"
              className="btn-primary btn shrink-0 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              E-Mail senden
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm">
            <Link href="/verein" className="text-gold hover:underline">← Zurück zu Über uns</Link>
            <span className="text-dark-border">·</span>
            <Link href="/impressum" className="text-text-muted hover:text-gold transition-colors">Impressum</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
