import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Clock, MessageCircle, ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt — SC Metropolis 25 Berlin',
  description: 'Kontakt zu SC Metropolis 25 Berlin e.V. — Anschrift, E-Mail, Social Media und Kontaktformular.',
}

export default function KontaktPage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* Hero */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Kontakt</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            Sprich mit <br /><span className="text-gold-gradient">uns</span>
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-6">
                Kontaktinformationen
              </h2>

              {[
                { icon: Mail,        label: 'E-Mail',    value: 'kontakt@sc-metropolis25.de',  href: 'mailto:kontakt@sc-metropolis25.de' },
                { icon: Phone,       label: 'Telefon',   value: '+49 151 74338335', href: 'tel:+4915174338335' },
                { icon: MapPin,      label: 'Standort',  value: 'Lichtenberg, Berlin, Germany', href: null },
                { icon: Clock,       label: 'Erreichbar', value: 'Mo–Fr: 09:00–18:00 Uhr', href: null },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Community beitreten', href: 'https://chat.whatsapp.com/scmetropolis25' },
              ].map(item => (
                <div key={item.label} className="card p-5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm font-heading hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-heading">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="card p-5">
                <p className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-4">Social Media</p>
                <div className="space-y-3">
                  {[
                    { platform: 'Instagram', handle: '@scmetropolis25', href: 'https://instagram.com/scmetropolis25' },
                    { platform: 'TikTok',    handle: '@scmetropolis25', href: 'https://tiktok.com/@scmetropolis25' },
                    { platform: 'YouTube',   handle: 'SC Metropolis 25', href: 'https://youtube.com/@scmetropolis25' },
                    { platform: 'Facebook',  handle: 'SC Metropolis 25 Berlin', href: 'https://facebook.com/scmetropolis25' },
                  ].map(s => (
                    <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 border-b border-dark-border last:border-0 text-text-secondary hover:text-gold transition-colors group">
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-xs uppercase tracking-wider">{s.platform}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-text-muted">{s.handle}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card overflow-hidden h-48 flex items-center justify-center bg-dark-card border-dark-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-text-muted text-sm">Lichtenberg, Berlin</p>
                  <a
                    href="https://maps.google.com/?q=Lichtenberg+Berlin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:underline mt-1 block"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card p-6 md:p-8 border-gold/20">
                <div className="w-full h-1 bg-gold mb-6" />
                <h2 className="font-heading font-semibold text-white uppercase tracking-wide text-xl mb-2">
                  Nachricht senden
                </h2>
                <p className="text-text-muted text-sm mb-6">
                  Fragen, Anfragen oder Feedback — wir freuen uns von dir zu hören.
                </p>

                <form action="https://formspree.io/f/xbdbzjkl" method="POST" className="space-y-4" aria-label="Kontaktformular">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input type="text" id="name" name="name" required className="form-input" placeholder="Dein Name" />
                    </div>
                    <div>
                      <label htmlFor="contactEmail" className="form-label">E-Mail *</label>
                      <input type="email" id="contactEmail" name="email" required className="form-input" placeholder="deine@email.de" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="form-label">Betreff *</label>
                    <select id="subject" name="subject" required className="form-input">
                      <option value="">Bitte auswählen...</option>
                      <option value="mitspielen">Mitspielen / Probetraining</option>
                      <option value="mitgliedschaft">Mitgliedschaft</option>
                      <option value="sponsoring">Sponsoring / Partnerschaft</option>
                      <option value="jugend">Jugendakademie</option>
                      <option value="presse">Presse & Medien</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contactMessage" className="form-label">Nachricht *</label>
                    <textarea id="contactMessage" name="message" rows={5} required className="form-input resize-none" placeholder="Deine Nachricht an uns..." />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="contactPrivacy" name="privacy" required className="mt-1 accent-gold" />
                    <label htmlFor="contactPrivacy" className="text-text-muted text-xs leading-relaxed">
                      Ich habe die <Link href="/datenschutz" className="text-gold hover:underline">Datenschutzerklärung</Link> gelesen und stimme zu. *
                    </label>
                  </div>
                  <button type="submit" className="btn-primary btn w-full">
                    Nachricht senden
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
