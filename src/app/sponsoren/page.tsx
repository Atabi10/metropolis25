import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle, ArrowRight, Star, TrendingUp, Users, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sponsoren & Partner — SC Metropolis 25 Berlin',
  description: 'Werden Sie Sponsor von SC Metropolis 25 Berlin e.V. — Fördern Sie den Berliner Fußball und profitieren Sie von unserer wachsenden Community.',
}

const packages = [
  {
    name: 'Trikotsponsor',
    price: 'Auf Anfrage',
    description: 'Das maximale Sichtbarkeits-Paket — Ihr Logo prominent auf den Trikots der ersten Mannschaft.',
    features: [
      'Logoaufdruck auf Spielertrikots',
      'Logo auf Trainingskleidung',
      'Premium-Platzierung auf der Website',
      'Social Media Partnership',
      'VIP-Zugang zu Heimspielen',
      'Namentliche Erwähnung bei allen Events',
    ],
    featured: true,
    icon: Star,
  },
  {
    name: 'Gold-Partner',
    price: 'Auf Anfrage',
    description: 'Starke Präsenz und direkter Zugang zur Berliner Fußball-Community.',
    features: [
      'Logo auf der Website (prominent)',
      'Social Media Erwähnungen',
      'Logo auf Werbebannern',
      'Einladungen zu Heimspielen',
      'Quartalsbericht über Community-Reichweite',
    ],
    featured: false,
    icon: TrendingUp,
  },
  {
    name: 'Community-Partner',
    price: 'Auf Anfrage',
    description: 'Unterstützen Sie den Berliner Fußball und werden Sie Teil unserer wachsenden Community.',
    features: [
      'Logo auf der Website',
      'Erwähnung im Newsletter',
      'Social Media Danksagung',
      '2 Einladungen zu Heimspielen',
    ],
    featured: false,
    icon: Users,
  },
]

const stats = [
  { value: '37+', label: 'Mitglieder', icon: Users },
  { value: '200+', label: 'Social Follower', icon: Eye },
  { value: '11', label: 'Nationalitäten', icon: Star },
  { value: '2025', label: 'Gegründet', icon: TrendingUp },
]

export default function SponsorenPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.3) 0, rgba(224,161,6,0.3) 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="section-label">Partnership</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            Sponsoren & <br /><span className="text-gold-gradient">Partner</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="section-subtitle text-ivory/70 max-w-xl">
            Investieren Sie in den Berliner Fußball. Werden Sie Teil einer Bewegung,
            die Berliner Talente fördert und eine diverse Community aufbaut.
          </p>
        </div>
      </section>

      {/* Current Sponsor */}
      <section className="py-16 bg-dark border-b border-dark-border">
        <div className="container-custom text-center">
          <p className="text-text-muted text-xs font-heading uppercase tracking-widest mb-8">Unser Hauptsponsor</p>
          <div className="inline-flex items-center justify-center bg-dark-card border-2 border-gold/40 px-12 py-8 shadow-gold-md">
            <div className="text-center">
              <h2 className="font-heading font-bold text-white text-2xl uppercase tracking-widest">INTARP GMBH</h2>
              <p className="text-gold text-xs mt-1 font-heading tracking-widest">HAUPTSPONSOR 2025</p>
            </div>
          </div>
          <p className="text-text-muted text-sm mt-6">
            Wir suchen aktiv nach unseren ersten Gründungspartnern.
          </p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <SectionHeader
            label="Warum uns unterstützen"
            title="Die Stärke aus"
            titleHighlight="der Hauptstadt"
            subtitle="Als Sponsor von SC Metropolis 25 erreichen Sie eine junge, engagierte und diverse Berliner Community."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map(s => (
              <div key={s.label} className="card p-6 text-center hover:border-gold/30 transition-all">
                <s.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                <div className="font-display text-4xl text-gold mb-1">{s.value}</div>
                <div className="font-heading text-white text-xs uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-dark" id="interesse">
        <div className="container-custom">
          <SectionHeader
            label="Sponsoring-Pakete"
            title="Finden Sie"
            titleHighlight="Ihr Paket"
            subtitle="Maßgeschneiderte Pakete für jeden Bedarf. Kontaktieren Sie uns für individuelle Konditionen."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map(pkg => (
              <div
                key={pkg.name}
                className={`card p-6 flex flex-col ${pkg.featured ? 'border-gold shadow-gold-md' : 'hover:border-gold/30'} transition-all`}
              >
                {pkg.featured && (
                  <div className="bg-gold text-navy-900 text-xs font-heading font-bold uppercase tracking-widest text-center py-1.5 -mx-6 -mt-6 mb-6">
                    Empfohlen
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <pkg.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest">{pkg.name}</h3>
                </div>
                <p className="font-display text-2xl text-gold mb-2">{pkg.price}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{pkg.description}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-text-secondary text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt?subject=sponsoring" className={pkg.featured ? 'btn-primary btn text-xs' : 'btn-outline btn text-xs'}>
                  Anfrage senden <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-8">
            Alle Pakete sind verhandelbar. Kontaktieren Sie uns für ein individuelles Angebot.
          </p>
        </div>
      </section>
    </div>
  )
}
