import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle, ArrowRight, Star, Clock, Users, Award, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jugendakademie — SC Metropolis 25 Berlin',
  description: 'Die Jugendakademie von SC Metropolis 25 Berlin fördert Berliner Talente von 8–18 Jahren. Professionelles Training, Wertebildung und Berliner Fußball-Kultur.',
}

const ageGroups = [
  { group: 'U8',  ages: '7–8 Jahre',   sessions: '1x wöchentlich', focus: 'Spielfreude, Grundbewegungen, Ballgefühl' },
  { group: 'U10', ages: '9–10 Jahre',  sessions: '2x wöchentlich', focus: 'Technische Grundlagen, 1v1, Koordination' },
  { group: 'U12', ages: '11–12 Jahre', sessions: '2x wöchentlich', focus: 'Spielverständnis, Taktik-Basics, Teamplay' },
  { group: 'U14', ages: '13–14 Jahre', sessions: '3x wöchentlich', focus: 'Positions-Training, athletische Entwicklung' },
  { group: 'U16', ages: '15–16 Jahre', sessions: '3x wöchentlich', focus: 'Wettkampffußball, taktische Tiefe, Leadership' },
  { group: 'U18', ages: '17–18 Jahre', sessions: '3x wöchentlich', focus: 'Übergang Junioren-Senioren, Wettkampf-Vorbereitung' },
]

const pillars = [
  { icon: Target,  title: 'Technische Exzellenz',    desc: 'Ballkontrolle, Passspiel, Torschuss — Grundlagen auf höchstem Niveau.' },
  { icon: Users,   title: 'Taktisches Verständnis',  desc: 'Spielsysteme, Raumnutzung und kollektives Denken.' },
  { icon: Award,   title: 'Athletik & Fitness',      desc: 'Altersgerechte körperliche Entwicklung und Verletzungsprävention.' },
  { icon: Star,    title: 'Mentale Stärke',           desc: 'Fokus, Resilienz, Selbstvertrauen und Führungsqualitäten.' },
]

export default function AkademiePage() {
  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(224,161,6,0.3) 0, rgba(224,161,6,0.3) 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom relative z-10 max-w-4xl">
          <div className="section-label">Jugendförderung</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            Die Akademie
            <br /><span className="text-gold-gradient">für Berlin</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="section-subtitle text-ivory/70 text-lg">
            Wo Berliner Talente entdeckt, gefördert und zu vollständigen
            Fußballern und Persönlichkeiten entwickelt werden. Für alle,
            unabhängig von Herkunft oder Hintergrund.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/mitmachen" className="btn-primary btn btn-lg">Jetzt anmelden</Link>
            <Link href="#altersgruppen" className="btn-outline btn btn-lg">Altersgruppen</Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader label="Philosophie" title="Fußball als" titleHighlight="Lebensschule" align="left" subtitle="" />
              <p className="text-text-secondary leading-relaxed mb-6">
                Die Jugendakademie von SC Metropolis 25 Berlin ist mehr als ein
                Trainingsangebot. Wir glauben, dass Fußball junge Menschen formt —
                nicht nur als Spieler, sondern als Persönlichkeiten.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                Unser Ansatz kombiniert moderne Trainingsmethodik mit Berliner
                Bodenhaftung. Wir fördern Talente aus der Nachbarschaft, öffnen
                Türen für alle und schaffen Räume, in denen Kinder und Jugendliche
                aufblühen können.
              </p>
              <ul className="space-y-2.5">
                {['Kostenloses Probetraining für alle', 'Zertifizierte DFB-Trainer', 'Individuelle Förderung', 'Integration als Kernwert', 'Moderne Trainingsphilosophie'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-text-secondary text-sm">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map(p => (
                <div key={p.title} className="card p-5 hover:border-gold/30 transition-all duration-300 group">
                  <p.icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-semibold text-white text-xs uppercase tracking-wide mb-2">{p.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section id="altersgruppen" className="section-padding bg-dark-surface">
        <div className="container-custom">
          <SectionHeader
            label="Altersgruppen"
            title="Für jeden"
            titleHighlight="Jahrgang"
            subtitle="Von den Kleinsten bis zu den Junioren — wir haben das passende Programm für jedes Alter."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ageGroups.map((ag, i) => (
              <div key={ag.group} className="card p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-display text-4xl text-gold">{ag.group}</span>
                    <p className="text-text-muted text-xs mt-1">{ag.ages}</p>
                  </div>
                  <span className="badge-gold text-xs">{ag.sessions}</span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">{ag.focus}</p>
                <div className="mt-4 pt-4 border-t border-dark-border">
                  <Link href={`/mitmachen?team=${ag.group.toLowerCase()}`} className="text-gold text-xs font-heading uppercase tracking-widest hover:gap-3 flex items-center gap-2 transition-all">
                    Anmelden <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <h2 className="section-title text-3xl mb-4">Dein Talent wartet</h2>
          <p className="text-ivory/70 text-sm mb-8 max-w-md mx-auto">
            Kostenlose Probetrainings verfügbar. Meld dich an und zeig was du kannst.
          </p>
          <Link href="/mitmachen" className="btn-primary btn btn-lg">
            Probetraining buchen
          </Link>
        </div>
      </section>
    </div>
  )
}
