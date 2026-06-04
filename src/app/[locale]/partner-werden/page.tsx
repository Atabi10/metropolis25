import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import {
  ArrowRight, Users, Target, Globe, TrendingUp, Heart,
  MapPin, Mail, Phone, Star, CheckCircle, Building2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner werden — SC Metropolis 25 Berlin',
  description:
    'Werden Sie Gründungspartner von SC Metropolis 25 Berlin e.V. Unterstützen Sie eine wachsende Berliner Fußballgemeinschaft und begleiten Sie unseren Weg zum etablierten Amateurfußballverein.',
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: '37',   label: 'Mitglieder',              sub: 'eingetragene Vereinsmitglieder' },
  { value: '23',   label: 'Aktive Spieler',           sub: 'Kader 1. Herren' },
  { value: '133+', label: 'Community-Mitglieder',     sub: 'seit 2019 gewachsen' },
  { value: '2019', label: 'Beginn',                   sub: 'der Fußballgemeinschaft' },
  { value: '2025', label: 'Vereinsgründung',          sub: 'SC Metropolis 25 Berlin e.V.' },
  { value: '2026', label: 'BFV-Aufnahmeverfahren',    sub: 'Einstieg in den Ligabetrieb' },
]

const whyReasons = [
  { icon: Target,    text: 'Amateurfußball in Berlin aktiv unterstützen' },
  { icon: Users,     text: 'Gemeinschaft und soziale Integration fördern' },
  { icon: Globe,     text: 'Kulturelle Vielfalt und Weltoffenheit leben' },
  { icon: TrendingUp,text: 'Nachhaltige Vereinsentwicklung begleiten' },
  { icon: Heart,     text: 'Sportliche Perspektiven für junge Menschen schaffen' },
  { icon: Star,      text: 'Teil der Gründungsgeschichte eines echten Vereins werden' },
]

const visibilityChannels = [
  { label: 'Website',               desc: 'Namentliche Nennung und Logo-Platzierung auf sc-metropolis25.de' },
  { label: 'Social Media',          desc: 'Instagram, TikTok, YouTube und Facebook (@scmetropolis25)' },
  { label: 'Freundschaftsspiele',   desc: 'Präsenz bei Testspielen und Community Matches' },
  { label: 'Turniere',              desc: 'Sichtbarkeit bei Turnierauftritten inkl. Symposium Mboa' },
  { label: 'Vereinsveranstaltungen',desc: 'Nennung bei Events, Mitgliederversammlungen und Vereinsfeiern' },
  { label: 'Vereinsbekleidung',     desc: 'Logo auf Vereinsmaterialien nach individueller Vereinbarung' },
]

const packages = [
  {
    tier: 'Bronze',
    color: '#CD7F32',
    price: '300 €',
    period: '/ Jahr',
    description: 'Einstieg als offizieller Partner',
    features: [
      'Namentliche Website-Erwähnung',
      'Aufnahme in die Partnerliste',
      'Dankeschön auf Social Media',
      'Partnerurkunde',
    ],
    cta: 'Bronze-Partner werden',
    featured: false,
  },
  {
    tier: 'Silber',
    color: '#C0C0C0',
    price: '750 €',
    period: '/ Jahr',
    description: 'Sichtbarer Partner mit Community-Präsenz',
    features: [
      'Logo-Platzierung auf der Website',
      'Hervorgehobene Darstellung als Partner',
      'Social-Media-Erwähnung (regelmäßig)',
      'Partnerurkunde & persönlicher Kontakt',
      'Einladung zu Vereinsveranstaltungen',
    ],
    cta: 'Silber-Partner werden',
    featured: true,
  },
  {
    tier: 'Gold',
    color: '#E0A106',
    price: '1.000 – 2.500 €',
    period: '/ Jahr',
    description: 'Gründungspartner mit maximaler Sichtbarkeit',
    features: [
      'Prominente Logo-Platzierung auf Website',
      'Hervorgehobene Darstellung als Gründungspartner',
      'Regelmäßige Social-Media-Kooperation',
      'Nennung auf Vereinsmaterialien (nach Absprache)',
      'Persönliches Gespräch mit dem Vorstand',
      'Einladung zu allen Vereinsveranstaltungen',
      'Individuelle Absprachen möglich',
    ],
    cta: 'Gold-Partner werden',
    featured: false,
  },
]

const timeline = [
  { year: '2019', label: 'Der Anfang',        text: 'Studenten aus dem Wohnheim Viktor Jara starten wöchentlichen Samstagsfußball in Lichtenberg.' },
  { year: '2019–2024', label: 'Wachstum',     text: 'Community wächst auf 133+ Mitglieder aus über 11 Nationen. Regelmäßige Turnierauftritte.' },
  { year: '2024', label: 'Symposium Mboa',    text: 'Finale beim Symposium Mboa 2024 — Silber. Der Moment, der die Vereinsgründung auslöste.' },
  { year: '2025', label: 'Vereinsgründung',   text: 'SC Metropolis 25 Berlin e.V. offiziell gegründet und ins Vereinsregister eingetragen.' },
  { year: '2026', label: 'BFV & Zukunft',     text: 'Gemeinnützigkeit §60a AO, BFV-Aufnahmeantrag, Förderungswürdigkeit beantragt.' },
]

const visionGoals = [
  'Am Berliner Ligabetrieb des BFV teilnehmen',
  'Eine nachhaltige Vereinsstruktur schaffen',
  'Frauenfußball aufbauen und fördern',
  'Lokale Talente entdecken und entwickeln',
  'Menschen durch Fußball verbinden',
  'Ein Verein für Berlin-Lichtenberg und darüber hinaus werden',
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function PartnerWerdenPage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/medals after Symposium final.jpeg"
            alt="SC Metropolis 25 Berlin — Gründungspartner werden"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,8,20,0.5) 0%, rgba(0,5,15,0.78) 50%, rgba(0,3,10,0.98) 100%)' }}
          />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.5) 0, rgba(224,161,6,0.5) 1px, transparent 0, transparent 50%)',
              backgroundSize: '10px 10px',
            }}
          />
        </div>

        <div className="relative z-10 container-custom pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold font-heading text-xs uppercase tracking-[0.3em] font-semibold">
                Gründungspartnerschaft
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.95] mb-6">
              Werden Sie<br />
              <span className="text-gold-gradient">Gründungspartner</span><br />
              von SC Metropolis 25
            </h1>
            <div className="w-16 h-1 bg-gold mb-6" />
            <p className="text-ivory/80 font-heading text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Unterstützen Sie eine wachsende Berliner Fußballgemeinschaft und begleiten Sie
              unseren Weg vom Gemeinschaftsprojekt zum etablierten Amateurfußballverein.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#kontakt" className="btn-primary btn btn-lg group inline-flex">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a href="#pakete" className="btn-outline btn btn-lg">
                Pakete ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — Geschichte ────────────────────────── */}
      <section className="section-padding bg-dark" id="geschichte">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Unsere Geschichte</p>
              <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-6">
                Vom Fußballplatz{' '}
                <span className="text-gold-gradient">zum Verein</span>
              </h2>
              <div className="w-12 h-1 bg-gold mb-8" />
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                SC Metropolis 25 ist kein Verein, der auf dem Papier entstand. Er wuchs über
                sechs Jahre aus einer echten Gemeinschaft — Studenten, Freunde, Berliner aus
                über elf Nationen, vereint durch Fußball.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Heute sind wir ein eingetragener, gemeinnütziger Verein mit klarem Ziel:
                der Einstieg in den organisierten Berliner Ligabetrieb. Wer jetzt Partner
                wird, begleitet diesen Weg von Anfang an.
              </p>
            </div>

            {/* Mini timeline */}
            <div className="relative pl-6 border-l border-gold/30">
              <ol className="space-y-7" aria-label="Vereinsgeschichte">
                {timeline.map((item, i) => (
                  <li key={item.year} className="relative flex gap-5">
                    <div
                      className={`absolute -left-[25px] w-3 h-3 rounded-full mt-1 border-2 border-gold ${i === timeline.length - 1 ? 'bg-gold/50' : 'bg-gold'}`}
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-display text-gold text-sm leading-none block mb-0.5">{item.year}</span>
                      <p className="text-white text-xs font-heading font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                      <p className="text-text-muted text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Stats ─────────────────────────────── */}
      <section className="py-16 bg-navy border-y border-gold/20">
        <div className="container-custom">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-8 text-center">
            SC Metropolis 25 auf einen Blick
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map(s => (
              <div key={s.label} className="bg-dark-card border border-dark-border p-4 text-center hover:border-gold/30 transition-colors duration-200">
                <div className="font-display text-2xl md:text-3xl text-gold leading-none mb-1">{s.value}</div>
                <div className="text-white text-xs font-heading uppercase tracking-wide mb-1">{s.label}</div>
                <div className="text-text-muted text-[10px] leading-snug">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Warum Partner werden ─────────────── */}
      <section className="section-padding bg-dark-surface" id="warum">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Ihre Chance</p>
            <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-4">
              Warum SC Metropolis{' '}
              <span className="text-gold-gradient">unterstützen?</span>
            </h2>
            <p className="text-text-muted text-sm leading-relaxed max-w-xl mx-auto">
              Als Gründungspartner begleiten Sie einen Verein in einer einzigartigen Phase
              seiner Entwicklung — authentisch, lokal, mit echtem Wachstumspotenzial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyReasons.map((r, i) => (
              <div key={i} className="card p-5 group hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-200">
                  <r.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — Sichtbarkeit ──────────────────────── */}
      <section className="section-padding bg-dark" id="sichtbarkeit">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Ihre Sichtbarkeit</p>
              <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-6">
                Ihre Marke sichtbar in{' '}
                <span className="text-gold-gradient">unserer Community</span>
              </h2>
              <div className="w-12 h-1 bg-gold mb-8" />
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Wir bieten ehrliche, authentische Sichtbarkeit — keine aufgeblasenen
                Reichweitenversprechen, sondern echte Präsenz in einer wachsenden
                Berliner Football-Community.
              </p>
              <p className="text-text-muted text-xs leading-relaxed">
                Alle Kooperationsdetails werden individuell abgestimmt und vertraglich festgehalten.
              </p>
            </div>

            <div className="space-y-3">
              {visibilityChannels.map(c => (
                <div key={c.label} className="flex items-start gap-4 p-4 bg-dark-card border border-dark-border hover:border-gold/20 transition-colors duration-200">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-white text-sm font-heading font-semibold uppercase tracking-wide mb-0.5">{c.label}</p>
                    <p className="text-text-muted text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Pakete ────────────────────────────── */}
      <section className="section-padding bg-navy" id="pakete">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Partnerschaftspakete</p>
            <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-4">
              Finden Sie das richtige{' '}
              <span className="text-gold-gradient">Paket</span>
            </h2>
            <p className="text-text-muted text-sm max-w-lg mx-auto leading-relaxed">
              Individuelle Partnerschaften sind jederzeit möglich — sprechen Sie uns einfach an.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {packages.map(pkg => (
              <div
                key={pkg.tier}
                className={`relative card p-6 flex flex-col ${
                  pkg.featured
                    ? 'border-gold shadow-[0_0_30px_rgba(224,161,6,0.15)]'
                    : 'border-dark-border hover:border-gold/30'
                } transition-colors duration-200`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-[10px] font-heading font-bold uppercase tracking-wider px-3 py-1">
                      Empfohlen
                    </span>
                  </div>
                )}

                {/* Tier badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: pkg.color }} aria-hidden="true" />
                  <span className="font-heading font-bold text-white text-sm uppercase tracking-widest">{pkg.tier}</span>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className="font-display text-3xl md:text-4xl text-gold leading-none">{pkg.price}</span>
                  <span className="text-text-muted text-xs ml-1">{pkg.period}</span>
                </div>
                <p className="text-text-muted text-xs mb-6 leading-relaxed">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-text-secondary text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={pkg.featured ? 'btn-primary btn text-xs text-center' : 'btn-outline btn text-xs text-center'}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-text-muted text-xs">
            Alle Preise zzgl. gesetzlicher MwSt. · Individuelle Partnerschaften auf Anfrage · 
            Laufzeit & Konditionen nach Vereinbarung.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 — Vision ────────────────────────────── */}
      <section className="section-padding bg-dark" id="vision">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="relative overflow-hidden border border-dark-border">
              <div className="relative h-80">
                <Image
                  src="/images/team photo before game against Kmer.jpeg"
                  alt="SC Metropolis 25 — Gemeinsam aufbauen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs font-heading italic">
                    &ldquo;Die ersten Partner werden immer Teil unserer Geschichte bleiben.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Unsere Vision</p>
              <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-6">
                Gemeinsam etwas{' '}
                <span className="text-gold-gradient">aufbauen</span>
              </h2>
              <div className="w-12 h-1 bg-gold mb-8" />

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                SC Metropolis 25 möchte langfristig mehr sein als ein Fußballverein.
                Wir wollen ein nachhaltiger Teil der Berliner Sportlandschaft werden —
                mit echtem gesellschaftlichem Beitrag.
              </p>

              <ul className="space-y-3 mb-8">
                {visionGoals.map(g => (
                  <li key={g} className="flex items-start gap-3 text-text-secondary text-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-2 border-gold pl-4">
                <p className="text-ivory/80 text-sm leading-relaxed italic font-heading">
                  &ldquo;Die ersten Partner werden immer Teil unserer Geschichte bleiben.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — Aktuelle Partner ─────────────────── */}
      <section className="py-16 bg-dark-surface border-y border-dark-border" id="partner">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-3">Gründungspartner 2026</p>
            <h2 className="font-display text-2xl md:text-3xl text-white uppercase">
              Unsere Gründungspartner
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Intarp — confirmed partner */}
            <div className="card p-6 border-gold/30 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-dark-surface border border-gold/20 flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-gold" aria-hidden="true" />
              </div>
              <p className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-1">Intarp GmbH</p>
              <span className="text-[10px] font-heading uppercase tracking-wider text-gold border border-gold/30 px-2 py-0.5">
                Hauptsponsor
              </span>
            </div>

            {/* Placeholder slots */}
            {[1, 2].map(i => (
              <div key={i} className="card border-dashed border-dark-muted p-6 flex flex-col items-center text-center hover:border-gold/30 transition-colors duration-200">
                <div className="w-16 h-16 bg-dark-surface border border-dashed border-dark-muted flex items-center justify-center mb-4">
                  <span className="text-text-muted text-2xl font-display">?</span>
                </div>
                <p className="text-text-muted text-sm font-heading uppercase tracking-wide mb-1">
                  Ihr Unternehmen
                </p>
                <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5 mb-3">
                  Dieser Platz ist reserviert
                </span>
                <a href="#kontakt" className="text-gold text-xs font-heading hover:underline">
                  Jetzt Partner werden →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — Kontakt ───────────────────────────── */}
      <section className="section-padding bg-dark" id="kontakt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left — contact info */}
            <div>
              <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Kontakt</p>
              <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-6">
                Lassen Sie uns ins{' '}
                <span className="text-gold-gradient">Gespräch kommen</span>
              </h2>
              <div className="w-12 h-1 bg-gold mb-8" />
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                Haben Sie Interesse an einer Partnerschaft? Wir freuen uns über jede Anfrage —
                egal ob Bronze, Gold oder ein individuelles Modell. Melden Sie sich einfach.
              </p>

              {/* Contact person */}
              <div className="card p-6 border-gold/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-0.5">
                      Raoul Atabong
                    </p>
                    <p className="text-gold text-xs font-heading uppercase tracking-wider mb-3">
                      1. Vorsitzender · SC Metropolis 25 Berlin e.V.
                    </p>
                    <div className="space-y-2">
                      <a href="mailto:kontakt@sc-metropolis25.de"
                        className="flex items-center gap-2 text-text-secondary text-xs hover:text-gold transition-colors">
                        <Mail className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                        kontakt@sc-metropolis25.de
                      </a>
                      <div className="flex items-center gap-2 text-text-muted text-xs">
                        <MapPin className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                        Lichtenberg, Berlin
                      </div>
                      <a href="https://www.sc-metropolis25.de"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary text-xs hover:text-gold transition-colors">
                        <Globe className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                        www.sc-metropolis25.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div>
              <div className="card p-6 md:p-8 border-gold/20">
                <div className="w-full h-1 bg-gold mb-6" />
                <h3 className="font-heading font-semibold text-white uppercase tracking-wide text-lg mb-2">
                  Partneranfrage senden
                </h3>
                <p className="text-text-muted text-xs mb-6">
                  Wir melden uns innerhalb von 48 Stunden bei Ihnen.
                </p>

                <form
                  action="https://formspree.io/f/xbdbzjkl"
                  method="POST"
                  className="space-y-4"
                  aria-label="Partneranfrage"
                >
                  <input type="hidden" name="_subject" value="Partneranfrage — SC Metropolis 25" />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="p-name" className="form-label">Name *</label>
                      <input type="text" id="p-name" name="name" required className="form-input" placeholder="Ihr Name" />
                    </div>
                    <div>
                      <label htmlFor="p-company" className="form-label">Unternehmen *</label>
                      <input type="text" id="p-company" name="unternehmen" required className="form-input" placeholder="Firmenname" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="p-email" className="form-label">E-Mail *</label>
                    <input type="email" id="p-email" name="email" required className="form-input" placeholder="name@unternehmen.de" />
                  </div>

                  <div>
                    <label htmlFor="p-phone" className="form-label">Telefon (optional)</label>
                    <input type="tel" id="p-phone" name="telefon" className="form-input" placeholder="+49 30 ..." />
                  </div>

                  <div>
                    <label htmlFor="p-package" className="form-label">Paket-Interesse</label>
                    <select id="p-package" name="paket" className="form-input">
                      <option value="">Bitte auswählen...</option>
                      <option value="bronze">Bronze — 300 €/Jahr</option>
                      <option value="silber">Silber — 750 €/Jahr</option>
                      <option value="gold">Gold — 1.000–2.500 €/Jahr</option>
                      <option value="individuell">Individuelles Modell</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="p-message" className="form-label">Nachricht</label>
                    <textarea id="p-message" name="nachricht" rows={4} className="form-input resize-none"
                      placeholder="Ihre Fragen, Ideen oder Anmerkungen..." />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="p-privacy" name="datenschutz" required className="mt-1 accent-gold" />
                    <label htmlFor="p-privacy" className="text-text-muted text-xs leading-relaxed">
                      Ich habe die{' '}
                      <Link href="/datenschutz" className="text-gold hover:underline">Datenschutzerklärung</Link>
                      {' '}gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>

                  <button type="submit" className="btn-primary btn w-full">
                    Partneranfrage senden
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
