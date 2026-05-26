import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle, ArrowRight, Users, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mitspielen / Probetraining — SC Metropolis 25 Berlin',
  description: 'Werde Teil von SC Metropolis 25 Berlin. Probetraining anmelden, Mitglied werden, Talent zeigen. Fußball für alle in Berlin-Lichtenberg.',
}

const benefits = [
  'Professionelles Training unter lizenzierten Trainern',
  'Aufbau für BFV-Spielbetrieb ab Saison 2026/27',
  'Moderne, entwicklungsorientierte Trainingsphilosophie',
  'Multikulturelle, integrative Gemeinschaft',
  'Gemeinnütziger Verein mit §60a AO Anerkennung',
  'Netzwerk in der Berliner Fußball-Community',
]

export default function MitmachenPage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.3) 0, rgba(224,161,6,0.3) 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
          }}
        />
        <div className="container-custom relative z-10">
          <div className="section-label">Jetzt starten</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            Werde Teil von <br />
            <span className="text-gold-gradient">Metropolis 25</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="section-subtitle text-ivory/70 max-w-xl">
            Zeig was du kannst. Melde dich für ein kostenloses Probetraining an
            und lern uns kennen — egal woher du kommst.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Info */}
            <div>
              <SectionHeader
                label="Probetraining"
                title="So funktioniert"
                titleHighlight="es"
                align="left"
                subtitle=""
              />
              <p className="text-text-secondary leading-relaxed mb-8">
                Du willst bei SC Metropolis 25 mitspielen? Füll das Formular aus und
                wir melden uns bei dir innerhalb von 48 Stunden — mit allen Infos zu
                Probetraining, Zeiten und Treffpunkt.
              </p>

              {/* Training Notice */}
              <div className="card p-5 flex items-start gap-4 mb-8 border-gold/20 bg-navy/20">
                <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading text-white text-sm uppercase tracking-wide mb-1">Trainingszeiten & Treffpunkt</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Trainingszeiten und Treffpunkte werden nach Anmeldung persönlich mitgeteilt,
                    solange die offizielle Sportstättenüberlassung noch in Abstimmung ist.
                    Melde dich jetzt an — wir setzen uns zeitnah mit dir in Verbindung.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
                Warum Metropolis 25?
              </h3>
              <ul className="space-y-2.5">
                {benefits.map(b => (
                  <li key={b} className="flex items-start gap-2.5 text-text-secondary text-sm">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Registration Form */}
            <div>
              <div className="card p-6 md:p-8 border-gold/20">
                <div className="w-full h-1 bg-gold mb-6" />
                <h2 className="font-heading font-semibold text-white uppercase tracking-wide text-xl mb-2">
                  Probetraining anmelden
                </h2>
                <p className="text-text-muted text-sm mb-6">
                  Kostenlos & unverbindlich. Wir melden uns innerhalb von 48 Stunden.
                </p>

                <form
                  action="https://formspree.io/f/xbdbzjkl"
                  method="POST"
                  className="space-y-4"
                  aria-label="Anmeldeformular Probetraining"
                >
                  {/* Hidden subject tag for Formspree */}
                  <input type="hidden" name="_subject" value="Neue Mitspieler-Anfrage — SC Metropolis 25" />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="form-label">Vorname *</label>
                      <input type="text" id="firstName" name="vorname" required className="form-input" placeholder="Max" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label">Nachname *</label>
                      <input type="text" id="lastName" name="nachname" required className="form-input" placeholder="Mustermann" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age" className="form-label">Alter *</label>
                      <input type="number" id="age" name="alter" required min="14" max="60" className="form-input" placeholder="25" />
                    </div>
                    <div>
                      <label htmlFor="position" className="form-label">Position (optional)</label>
                      <select id="position" name="position" className="form-input">
                        <option value="">Bitte auswählen...</option>
                        <option value="torwart">Torwart</option>
                        <option value="verteidigung">Verteidigung</option>
                        <option value="mittelfeld">Mittelfeld</option>
                        <option value="sturm">Sturm</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">Telefon / WhatsApp *</label>
                    <input type="tel" id="phone" name="telefon" required className="form-input" placeholder="+49 151 ..." />
                  </div>

                  <div>
                    <label htmlFor="currentClub" className="form-label">Aktueller Verein (optional)</label>
                    <input type="text" id="currentClub" name="aktueller_verein" className="form-input" placeholder="Vereinsname oder 'Vereinslos'" />
                  </div>

                  {/* Interest checkboxes */}
                  <div>
                    <p className="form-label mb-2">Interesse an *</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'int-1herren',    name: 'interesse_1_herren',    label: '1. Herren' },
                        { id: 'int-2herren',    name: 'interesse_2_herren',    label: '2. Herren' },
                        { id: 'int-frauen',     name: 'interesse_frauen',      label: 'Frauenfußball' },
                        { id: 'int-ehrenamt',   name: 'interesse_ehrenamt',    label: 'Ehrenamt' },
                        { id: 'int-trainer',    name: 'interesse_trainer',     label: 'Trainer / Coach' },
                        { id: 'int-sponsoring', name: 'interesse_sponsoring',  label: 'Sponsoring' },
                      ].map(opt => (
                        <label key={opt.id} htmlFor={opt.id} className="flex items-center gap-2 text-text-secondary text-sm cursor-pointer">
                          <input type="checkbox" id={opt.id} name={opt.name} value="ja" className="accent-gold" />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">Nachricht (optional)</label>
                    <textarea id="message" name="nachricht" rows={3} className="form-input resize-none" placeholder="Erfahrungen, Fragen oder Anmerkungen..." />
                  </div>

                  {/* Privacy consent */}
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" name="datenschutz" required className="mt-1 accent-gold" />
                    <label htmlFor="privacy" className="text-text-muted text-xs leading-relaxed">
                      Ich habe die{' '}
                      <Link href="/datenschutz" className="text-gold hover:underline">Datenschutzerklärung</Link>
                      {' '}gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>

                  <button type="submit" className="btn-primary btn w-full">
                    Jetzt anmelden
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
