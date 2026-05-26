import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mitgliedschaft — SC Metropolis 25 Berlin',
  description: 'Werde Mitglied bei SC Metropolis 25 Berlin e.V. — Unterstütze den Berliner Fußball und sei Teil unserer Community.',
}

const membershipTypes = [
  {
    name: 'Aktiv-Mitglied',
    price: 'Ab 15 €',
    period: '/ Monat',
    description: 'Für alle, die aktiv mitspielen möchten.',
    features: ['Spielberechtigung in allen Teams', 'Nutzung aller Trainingseinheiten', 'Vereinsausweis', 'Mitspracherecht bei der Jahreshauptversammlung', 'Mitgliederrabatte auf Merchandise'],
    cta: 'Aktiv beitreten',
    featured: true,
  },
  {
    name: 'Förder-Mitglied',
    price: 'Ab 10 €',
    period: '/ Monat',
    description: 'Unterstütze den Verein ohne aktiv zu spielen.',
    features: ['Unterstützung des Vereins', 'Mitgliedsausweis', 'Newsletter', 'Mitspracherecht', 'Einladungen zu Events'],
    cta: 'Förderer werden',
    featured: false,
  },
  {
    name: 'Jugend-Mitglied',
    price: 'Ab 8 €',
    period: '/ Monat',
    description: 'Für Spieler unter 18 Jahren.',
    features: ['Spielberechtigung Jugendteams', 'Akademieprogramm', 'Vereinsausweis', 'Alle Trainingseinheiten', 'Jugend-Events'],
    cta: 'Jetzt anmelden',
    featured: false,
  },
]

export default function MitgliedschaftPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="py-20 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Werde Teil der Familie</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            Mitglied <br /><span className="text-gold-gradient">werden</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="section-subtitle text-ivory/70 max-w-xl">
            Als Mitglied von SC Metropolis 25 Berlin bist du Teil einer wachsenden
            Gemeinschaft, die Berliner Fußball lebt und die Hauptstadt bewegt.
          </p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipTypes.map(type => (
              <div key={type.name} className={`card p-6 flex flex-col ${type.featured ? 'border-gold shadow-gold-md' : 'hover:border-gold/30'} transition-all`}>
                {type.featured && (
                  <div className="bg-gold text-navy-900 text-xs font-heading font-bold uppercase tracking-widest text-center py-1.5 -mx-6 -mt-6 mb-6">
                    Beliebt
                  </div>
                )}
                <h3 className="font-heading font-bold text-white uppercase tracking-wide mb-1">{type.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-3xl text-gold">{type.price}</span>
                  <span className="text-text-muted text-sm">{type.period}</span>
                </div>
                <p className="text-text-muted text-sm mb-6">{type.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {type.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-text-secondary text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt?subject=mitgliedschaft" className={type.featured ? 'btn-primary btn text-xs' : 'btn-outline btn text-xs'}>
                  {type.cta} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 card p-6 flex items-center gap-4 border-gold/20">
            <Heart className="w-8 h-8 text-gold shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wide mb-1">Ehrenamtliche Unterstützung</h3>
              <p className="text-text-muted text-xs">Du möchtest ohne Mitgliedsbeitrag helfen? Wir freuen uns über jeden freiwilligen Helfer. <Link href="/kontakt" className="text-gold hover:underline">Melde dich bei uns.</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
