import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import {
  Users, Target, MapPin, User, ArrowRight,
  ShieldCheck, Clock, CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '1. Herren — SC Metropolis 25 Berlin',
  description:
    'Die 1. Herrenmannschaft von SC Metropolis 25 Berlin e.V. befindet sich im Aufbau und bereitet sich auf den Einstieg in den Berliner Ligabetrieb vor.',
}

const facts = [
  { icon: User,       label: 'Trainer',      value: 'Makendi Amos' },
  { icon: Users,      label: 'Kader',         value: '23 aktive Feldspieler' },
  { icon: Target,     label: 'Ziel',          value: 'BFV-Ligabetrieb 2026/27' },
  { icon: MapPin,     label: 'Heimspiele',    value: 'Poststadion Berlin' },
  { icon: ShieldCheck,label: 'Status',        value: 'Im Aufbau' },
  { icon: Clock,      label: 'Ligastart',     value: 'Saison 2026/27 geplant' },
]

const strengths = [
  'Multinationaler Kader aus über 11 Nationen',
  'Strukturierter Trainingsaufbau unter Makendi Amos',
  'Spielpraxis durch Testspiele & Community Matches',
  'Teamgeist gewachsen seit 2019',
  'Institutionell gefestigt: e.V., §60a, BFV-Antrag',
]

const results = [
  { date: '17.05.2026', opponent: 'Flambeau FC',       result: '4:3', type: 'Sieg',           venue: 'Poststadion' },
  { date: '27.04.2026', opponent: 'New Star Berlin SC', result: '1:0', type: 'Sieg',           venue: '—' },
  { date: '19.04.2026', opponent: 'Lichtenberg Kmer',  result: '4:2', type: 'Sieg',           venue: 'Hauffstraße' },
  { date: '15.03.2026', opponent: 'Flambeau FC',       result: '2:2', type: 'Unentschieden',  venue: 'Poststadion' },
]

export default function ErsteMannschaftPage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team photo before game against Kmer.jpeg"
            alt="SC Metropolis 25 — 1. Herrenmannschaft"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,5,15,0.45) 0%, rgba(0,3,10,0.97) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 container-custom pb-16 pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-text-muted text-xs font-heading uppercase tracking-wider mb-5">
            <Link href="/teams" className="hover:text-gold transition-colors">Teams</Link>
            <span>/</span>
            <span className="text-gold">1. Herren</span>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <span className="font-display text-gold/30 text-7xl leading-none">01</span>
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-white uppercase leading-none mb-2">
                1. Herren<span className="text-gold-gradient">mannschaft</span>
              </h1>
              <p className="text-gold text-xs font-heading uppercase tracking-widest">
                SC Metropolis 25 Berlin e.V. · Im Aufbau · BFV 2026/27
              </p>
            </div>
          </div>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* ── Status banner ─────────────────────────────────── */}
      <section className="bg-navy border-y border-gold/20 py-4">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-gold">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-heading uppercase tracking-wider font-semibold">Status:</span>
            </div>
            <span className="text-ivory/80 text-sm">
              Die 1. Herrenmannschaft befindet sich aktuell im Aufbau und bereitet sich auf den
              geplanten Einstieg in den organisierten Spielbetrieb des Berliner Fußball-Verbandes
              zur Saison 2026/27 vor.
            </span>
            <span className="text-[10px] font-heading uppercase tracking-wider text-gold/60 border border-gold/30 px-2 py-0.5 ml-auto shrink-0">
              Kein offizieller Ligabetrieb
            </span>
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left — description + strengths */}
            <div className="lg:col-span-2 space-y-10">

              {/* Description */}
              <div>
                <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Über das Team</p>
                <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-6">
                  Aufbau. <span className="text-gold-gradient">Entwicklung. Zukunft.</span>
                </h2>
                <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                  <p>
                    Die 1. Herrenmannschaft von SC Metropolis 25 Berlin e.V. ist das sportliche Herzstück
                    des Vereins. Sie entstand aus einer Gemeinschaft, die seit 2019 gemeinsam Fußball spielt —
                    auf Bolzplätzen, bei Turnieren und in Community Matches quer durch Berlin.
                  </p>
                  <p>
                    Heute trainiert die Mannschaft strukturiert unter Trainer Makendi Amos. Mit 23 aktiven
                    Feldspielern aus mehr als elf Nationen steht sie für das, was SC Metropolis 25
                    ausmacht: Teamgeist, Vielfalt und den klaren Anspruch, den nächsten Schritt zu gehen.
                  </p>
                  <p>
                    Der geplante Einstieg in den Berliner Ligabetrieb zur Saison 2026/27 ist das gemeinsame
                    Ziel. Der BFV-Aufnahmeantrag ist eingereicht. Die Mannschaft bereitet sich vor.
                  </p>
                </div>
              </div>

              {/* Team strengths */}
              <div>
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
                  Was dieses Team ausmacht
                </h3>
                <ul className="space-y-3">
                  {strengths.map(s => (
                    <li key={s} className="flex items-start gap-3 text-text-secondary text-sm">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent results */}
              <div>
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
                  Testspiele & Community Matches
                </h3>
                <div className="space-y-3">
                  {results.map(r => (
                    <div key={`${r.date}-${r.opponent}`}
                      className={`card p-4 border-l-[3px] ${
                        r.type === 'Sieg' ? 'border-l-gold' : 'border-l-text-muted'
                      } flex items-center justify-between gap-4`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-text-muted text-xs mb-1">{r.date} · {r.venue}</p>
                        <p className="text-white text-sm font-heading font-semibold uppercase tracking-wide truncate">
                          SC Metropolis 25 vs {r.opponent}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-display text-2xl text-gold leading-none">{r.result}</div>
                        <span className={`text-[10px] font-heading uppercase tracking-wider ${
                          r.type === 'Sieg' ? 'text-gold' : 'text-text-muted'
                        }`}>
                          {r.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-text-muted text-xs mt-4 leading-relaxed">
                  * Alle aufgeführten Spiele sind Testspiele oder Community Matches —
                  kein offizieller BFV-Ligabetrieb.
                </p>
              </div>
            </div>

            {/* Right sidebar — facts + CTAs */}
            <div className="space-y-6">

              {/* Team facts */}
              <div className="card p-6 border-gold/20">
                <div className="w-full h-1 bg-gold mb-5" />
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
                  Teamdaten
                </h3>
                <dl className="space-y-4">
                  {facts.map(f => (
                    <div key={f.label} className="flex items-start gap-3">
                      <f.icon className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-text-muted text-[10px] font-heading uppercase tracking-wider">{f.label}</dt>
                        <dd className="text-white text-sm font-semibold">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Photo */}
              <div className="relative overflow-hidden border border-dark-border">
                <div className="relative h-48">
                  <Image
                    src="/images/warming up before match agains Kmer Lichtenberg.jpeg"
                    alt="SC Metropolis 25 — Training"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-heading italic">
                    &ldquo;Jeden Tag ein Schritt Richtung Ligabetrieb.&rdquo;
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="card p-6 border-gold/20 space-y-3">
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
                  Jetzt mitmachen
                </h3>
                <Link
                  href="/mitmachen?team=1herren"
                  className="btn-primary btn w-full justify-center group"
                >
                  <span>Probetraining anfragen</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <Link
                  href="/kontakt"
                  className="btn-outline btn w-full justify-center"
                >
                  Kontakt aufnehmen
                </Link>
                <p className="text-text-muted text-xs text-center leading-relaxed">
                  Kostenlos & unverbindlich. Wir melden uns innerhalb von 48 Stunden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other teams ───────────────────────────────────── */}
      <section className="py-12 bg-dark-surface border-t border-dark-border">
        <div className="container-custom">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-6">Weitere Teams</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: '2. Herren', badge: 'In Planung', href: '/mitmachen?team=2herren',
                desc: 'Die zweite Herrenmannschaft ist in Planung. Interesse? Melde dich jetzt an.' },
              { name: 'Frauen', badge: 'In Planung', href: '/mitmachen?team=frauen',
                desc: 'Ein Frauenteam ist geplant. Sei dabei von Anfang an.' },
            ].map(t => (
              <div key={t.name} className="card border-dashed border-dark-muted p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <h4 className="font-heading font-semibold text-text-secondary text-sm uppercase tracking-widest">
                    {t.name}
                  </h4>
                  <span className="text-[10px] font-heading uppercase tracking-wider text-text-muted border border-dark-border px-2 py-0.5">
                    {t.badge}
                  </span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed">{t.desc}</p>
                <Link href={t.href} className="btn-outline btn btn-sm text-xs self-start">
                  Interesse anmelden →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
