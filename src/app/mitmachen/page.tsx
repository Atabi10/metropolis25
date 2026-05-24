import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle, ArrowRight, Users, Calendar, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mitspielen / Probetraining — SC Metropolis 25 Berlin',
  description: 'Werde Teil von SC Metropolis 25 Berlin. Probetraining anmelden, Mitglied werden, Talent zeigen. Fußball für alle in Berlin-Lichtenberg.',
}

const benefits = [
  'Professionelles Training unter erfahrenen Trainern',
  'Spielbetrieb in Berliner Ligen',
  'Moderne Trainingsphilosophie',
  'Multikulturelle, integrative Gemeinschaft',
  'Jugendförderung und Talententwicklung',
  'Netzwerk in der Berliner Fußball-Community',
]

const trials = [
  { day: 'Dienstag',   time: '19:00 – 21:00 Uhr', team: '1. Mannschaft & U23' },
  { day: 'Donnerstag', time: '18:00 – 20:00 Uhr', team: 'Jugend U14–U18' },
  { day: 'Samstag',    time: '10:00 – 12:00 Uhr', team: 'Jugend U8–U13' },
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
                Du willst bei SC Metropolis 25 mitspielen? Komm einfach zu einem
                unserer offenen Probetrainings. Keine Voranmeldung nötig — wir
                freuen uns auf jeden, der Lust auf Fußball hat.
              </p>

              {/* Training Times */}
              <div className="space-y-3 mb-8">
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
                  Trainingszeiten
                </h3>
                {trials.map(t => (
                  <div key={t.day} className="card p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gold shrink-0" />
                      <div>
                        <p className="font-heading text-white text-sm uppercase tracking-wide">{t.day}</p>
                        <p className="text-text-muted text-xs">{t.time}</p>
                      </div>
                    </div>
                    <span className="badge-gold text-xs shrink-0">{t.team}</span>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className="card p-4 flex items-start gap-3 mb-8">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading text-white text-sm uppercase tracking-wide mb-1">Trainingsstandort</p>
                  <p className="text-text-secondary text-sm">Lichtenberg, Berlin</p>
                  <p className="text-text-muted text-xs mt-1">Genaue Adresse wird nach Anmeldung mitgeteilt</p>
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
                  action="/api/trial-registration"
                  method="POST"
                  className="space-y-4"
                  aria-label="Anmeldeformular Probetraining"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="form-label">Vorname *</label>
                      <input type="text" id="firstName" name="firstName" required className="form-input" placeholder="Max" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label">Nachname *</label>
                      <input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Mustermann" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">E-Mail Adresse *</label>
                    <input type="email" id="email" name="email" required className="form-input" placeholder="max@example.de" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">Telefonnummer</label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="+49 30 ..." />
                  </div>

                  <div>
                    <label htmlFor="birthYear" className="form-label">Geburtsjahr *</label>
                    <input type="number" id="birthYear" name="birthYear" required min="1990" max="2020" className="form-input" placeholder="2000" />
                  </div>

                  <div>
                    <label htmlFor="team" className="form-label">Interessiert an Team *</label>
                    <select id="team" name="team" required className="form-input">
                      <option value="">Bitte auswählen...</option>
                      <option value="erste">1. Mannschaft / U23</option>
                      <option value="u18">Jugend U18</option>
                      <option value="u16">Jugend U16</option>
                      <option value="u14">Jugend U14</option>
                      <option value="u12">Jugend U12</option>
                      <option value="u10">Jugend U10</option>
                      <option value="u8">Jugend U8</option>
                      <option value="frauen">Damen (Coming Soon)</option>
                    </select>
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

                  <div>
                    <label htmlFor="message" className="form-label">Nachricht (optional)</label>
                    <textarea id="message" name="message" rows={3} className="form-input resize-none" placeholder="Erfahrungen, Fragen oder Anmerkungen..." />
                  </div>

                  {/* Privacy consent */}
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" name="privacy" required className="mt-1 accent-gold" />
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
