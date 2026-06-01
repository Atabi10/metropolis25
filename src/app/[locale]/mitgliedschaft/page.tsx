import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Heart, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mitgliedschaft — SC Metropolis 25 Berlin',
  description: 'Werde Mitglied bei SC Metropolis 25 Berlin e.V. — Unterstütze den Berliner Fußball und sei Teil unserer Community.',
}

const membershipTypes = [
  {
    name: 'Aktiv-Mitglied',
    price: 'Ab 10 €',
    period: '/ Monat',
    description: 'Für alle, die aktiv mitspielen und am Vereinsleben teilnehmen.',
    features: ['Spielberechtigung in allen Teams', 'Nutzung aller Trainingseinheiten', 'Vereinsausweis', 'Stimmberechtigung bei der Jahreshauptversammlung', 'Teil der Vereinsgemeinschaft'],
    cta: 'Aktiv beitreten',
    featured: true,
  },
  {
    name: 'Förder- / Passiv-Mitglied',
    price: 'Ab 5 €',
    period: '/ Monat',
    description: 'Unterstütze den Verein ohne aktiv zu spielen.',
    features: ['Unterstützung des Vereins', 'Mitgliedsausweis', 'Vereins-Newsletter', 'Einladungen zu Vereinsevents', 'Förderer des Berliner Grassroots-Fußballs'],
    cta: 'Förderer werden',
    featured: false,
  },
  {
    name: 'Jugend-Mitglied',
    price: 'Ab 5 €',
    period: '/ Monat',
    description: 'Für Spielerinnen und Spieler unter 18 Jahren.',
    features: ['Spielberechtigung in Jugendteams', 'Vereinsausweis', 'Alle Trainingseinheiten', 'Teil der Vereinsgemeinschaft', 'Jugend-Vereinsevents'],
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
          {/* PayPal Payment Section */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {/* QR Code card */}
            <div className="card p-6 border-gold/20 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-4 h-4 text-gold" aria-hidden="true" />
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                  Mitgliedsbeitrag bezahlen
                </h3>
              </div>
              <p className="text-text-muted text-xs leading-relaxed mb-5 max-w-xs">
                Scanne den QR-Code mit deiner PayPal-App oder Kamera, um deinen
                monatlichen Mitgliedsbeitrag direkt zu überweisen.
              </p>

              {/* QR Code */}
              <div className="bg-white p-3 inline-block mb-4">
                <Image
                  src="/images/paypal-qr.png"
                  alt="PayPal QR-Code — SC Metropolis 25 Berlin Mitgliedsbeitrag"
                  width={200}
                  height={200}
                  className="block"
                />
              </div>

              <p className="text-gold text-xs font-heading uppercase tracking-wider mb-1">
                PayPal · SC Metropolis 25 Berlin e.V.
              </p>
              <p className="text-text-muted text-[10px] leading-relaxed">
                Bitte deinen Namen und "Mitgliedsbeitrag" im Verwendungszweck angeben.
              </p>
            </div>

            {/* Instructions card */}
            <div className="card p-6 border-gold/20 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
                  So geht es
                </h3>
                <ol className="space-y-4">
                  {[
                    { step: '01', text: 'Melde dich über das Kontaktformular an und teile uns deine gewählte Mitgliedschaft mit.' },
                    { step: '02', text: 'Scanne den PayPal QR-Code oder überweise deinen Beitrag manuell über PayPal.' },
                    { step: '03', text: 'Gib im Verwendungszweck deinen Namen und "Mitgliedsbeitrag" an.' },
                    { step: '04', text: 'Du erhältst eine Bestätigung und deinen Mitgliedsausweis per E-Mail.' },
                  ].map(item => (
                    <li key={item.step} className="flex items-start gap-4">
                      <span className="font-display text-gold/40 text-2xl leading-none shrink-0 w-8">
                        {item.step}
                      </span>
                      <p className="text-text-secondary text-xs leading-relaxed pt-1">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 pt-5 border-t border-dark-border">
                <p className="text-text-muted text-xs leading-relaxed">
                  Fragen zur Mitgliedschaft?{' '}
                  <Link href="/kontakt" className="text-gold hover:underline">
                    Schreib uns direkt.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Volunteer card */}
          <div className="mt-6 card p-6 flex items-center gap-4 border-gold/20">
            <Heart className="w-8 h-8 text-gold shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wide mb-1">
                Ehrenamtliche Unterstützung
              </h3>
              <p className="text-text-muted text-xs">
                Du möchtest ohne Mitgliedsbeitrag helfen? Wir freuen uns über jeden freiwilligen Helfer.{' '}
                <Link href="/kontakt" className="text-gold hover:underline">Melde dich bei uns.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
