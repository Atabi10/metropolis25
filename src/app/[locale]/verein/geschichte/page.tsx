import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unsere Geschichte — SC Metropolis 25 Berlin',
  description: 'SC Metropolis 25 Berlin e.V. entstand nicht auf dem Papier — sondern auf einem Bolzplatz. Die Geschichte eines echten Berliner Fußballvereins seit 2019.',
}

const timeline = [
  {
    year: '2019',
    label: 'Der Anfang',
    text: 'Sieben Studenten — viele davon im Wohnheim Viktor Jara in Biesdorf — treffen sich jeden Samstag zum Fußball. Ohne Struktur, ohne Verein. Nur ein Ball, ein Platz und die Leidenschaft.',
    image: '/images/geschichte-early-team.jpeg',
    imageAlt: 'Frühe Trainingsgruppe SC Metropolis 25 Berlin',
  },
  {
    year: '2019–2023',
    label: 'Wachstum',
    text: 'Die Gruppe wächst. Aus sieben werden zwanzig, dreißig, mehr. Gespielt wird rund um die Cecilienstraße und überall dort, wo Platz ist. Die WhatsApp-Gruppe entwickelt sich zu einem Netzwerk mit über 133 Mitgliedern.',
    image: '/images/geschichte-squad-training.jpeg',
    imageAlt: 'SC Metropolis 25 Trainingssession',
  },
  {
    year: '2024',
    label: 'Symposium Mboa — Das Finale',
    text: 'Beim Symposium Mboa 2024 erreicht das Team das Finale — und verpasst den Titel nur knapp. Für viele ist das der Moment, der alles verändert: Aus einer Freizeitgruppe ist längst eine echte Mannschaft geworden.',
    image: '/images/geschichte-medal-ceremony.jpeg',
    imageAlt: 'Medaillenübergabe beim Symposium Mboa Turnier',
  },
  {
    year: '26. Nov. 2025',
    label: 'Vereinsgründung',
    text: '22 Mitglieder sind anwesend. Die Gründungsversammlung findet statt. SC Metropolis 25 Berlin e.V. wird offiziell gegründet — mit gewähltem Vorstand, Satzung und einer Vision.',
    image: null,
    imageAlt: null,
  },
  {
    year: '22. Dez. 2025',
    label: 'Eintragung ins Vereinsregister',
    text: 'Das Amtsgericht Berlin-Charlottenburg trägt den Verein offiziell ein. SC Metropolis 25 Berlin e.V. ist rechtlich anerkannt.',
    image: null,
    imageAlt: null,
  },
  {
    year: '30. Apr. 2026',
    label: 'Gemeinnützigkeit §60a AO',
    text: 'Das Finanzamt erkennt die Gemeinnützigkeit nach §60a AO vorläufig an. Spenden sind ab sofort steuerlich absetzbar. Der Verein ist auf institutionellem Kurs.',
    image: null,
    imageAlt: null,
  },
  {
    year: 'Mai 2026',
    label: 'Symposium Mboa — Ungeschlagen',
    text: 'Drei Spiele, zwei Siege, ein Unentschieden. SC Metropolis 25 geht ungeschlagen durch die Gruppenphase, gewinnt das Viertelfinale gegen FÉE-FÉE FC mit 1:0 und scheidet erst im Halbfinale gegen Gambia im Elfmeterschießen aus.',
    image: '/images/symposium-mboa-team.jpeg',
    imageAlt: 'SC Metropolis 25 beim Symposium Mboa Turnier 2026',
  },
  {
    year: 'Frühjahr 2026',
    label: 'BFV-Aufnahmeantrag eingereicht',
    text: 'SC Metropolis 25 Berlin e.V. stellt den offiziellen Aufnahmeantrag beim Berliner Fußball-Verband (BFV). Ein entscheidender Schritt auf dem Weg in den organisierten Berliner Ligabetrieb ab Saison 2026/27.',
    image: null,
    imageAlt: null,
  },
  {
    year: 'Sommer 2026',
    label: 'Antrag auf sportliche Förderungswürdigkeit',
    text: 'Der Verein reicht den Antrag auf Anerkennung der sportlichen Förderungswürdigkeit bei der zuständigen Berliner Senatsverwaltung ein. Die Anerkennung bildet eine wesentliche Grundlage für die Nutzung öffentlicher Sportanlagen. Der Antrag befindet sich in Bearbeitung.',
    image: null,
    imageAlt: null,
    pending: true,
  },
]

export default function GeschichtePage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geschichte-squad-training.jpeg"
            alt="SC Metropolis 25 Berlin — Geschichte"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,5,15,0.6) 0%, rgba(0,3,10,0.98) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 container-custom pb-16 pt-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold font-heading font-semibold text-xs uppercase tracking-[0.3em]">
              Berlin-Lichtenberg · Seit 2019
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase leading-[0.95] mb-6">
            Unsere<br />
            <span className="text-gold-gradient">Geschichte</span>
          </h1>
          <p className="text-ivory/70 font-heading text-lg max-w-xl leading-relaxed">
            Manche Fußballvereine entstehen auf dem Papier.<br />
            <strong className="text-white font-semibold">SC Metropolis 25 Berlin e.V. entstand auf einem Bolzplatz.</strong>
          </p>
        </div>
      </section>

      {/* ── OPENING NARRATIVE ────────────────────────────── */}
      <section className="bg-dark py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">

            {/* Pull quote */}
            <blockquote className="border-l-4 border-gold pl-8 mb-12">
              <p className="font-display text-2xl md:text-3xl text-white uppercase leading-snug mb-4">
                &ldquo;Samstage. Fußball. Gemeinschaft. Berlin.&rdquo;
              </p>
              <cite className="text-text-muted text-sm font-heading not-italic uppercase tracking-wider">
                Der Ursprung von SC Metropolis 25
              </cite>
            </blockquote>

            {/* Opening paragraphs */}
            <div className="space-y-6 text-text-secondary leading-[1.9] text-base md:text-lg">
              <p>
                Unsere Geschichte begann im Jahr 2019 – nicht mit Funktionären, sondern mit einem Fußball.
                Mit sieben Studenten in Berlin, die sich jeden Samstag trafen, um gemeinsam zu spielen.
                Viele von ihnen lebten im Studentenwohnheim Viktor Jara in Biesdorf.
                Was als lockere Runde unter Freunden begann, entwickelte sich Woche für Woche zu einer festen Gemeinschaft.
              </p>
              <p>
                Gespielt wurde überall dort, wo Platz war – besonders rund um die Fußballanlage an der Cecilienstraße.
                Unterschiedliche Herkunft, verschiedene Sprachen und Lebensgeschichten spielten dabei keine Rolle.
                Auf dem Platz zählte nur der Fußball.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO BREAK — early training ────────────────── */}
      <section className="bg-dark-surface">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/geschichte-training.jpeg"
              alt="Frühes Training SC Metropolis 25"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/geschichte-medal-duo.jpeg"
              alt="SC Metropolis 25 Medaille Erfolg"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── GROWTH NARRATIVE ─────────────────────────────── */}
      <section className="bg-dark py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-text-secondary leading-[1.9] text-base md:text-lg">
              <p>
                Mit der Zeit wuchs nicht nur die Zahl der Spieler, sondern auch die Idee hinter dem Projekt.
                Aus sieben Spielern wurde eine stetig wachsende Community. Die WhatsApp-Gruppe entwickelte sich
                über die Jahre zu einem Netzwerk mit mehr als{' '}
                <span className="text-white font-semibold">133 Mitgliedern</span> –
                verbunden durch die gleiche Leidenschaft: Fußball in Berlin.
              </p>
              <p>
                Die Mannschaft nahm an verschiedenen lokalen und interkulturellen Turnieren teil,
                darunter das Symposium Mboa, Integrations-Turniere und weitere Berliner Fußballveranstaltungen.
              </p>
            </div>

            {/* Stat callout */}
            <div className="grid grid-cols-3 gap-4 my-12">
              {[
                { value: '2019', label: 'Erstes gemeinsames Spiel' },
                { value: '133+', label: 'Community-Mitglieder' },
                { value: '7', label: 'Gründungsspieler' },
              ].map(s => (
                <div key={s.label} className="text-center card p-6">
                  <div className="font-display text-gold text-3xl md:text-4xl leading-none mb-2">{s.value}</div>
                  <div className="text-text-muted text-xs font-heading uppercase tracking-wider leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-text-secondary leading-[1.9] text-base md:text-lg">
              <p>
                Ein besonderer Moment war das Jahr 2024: Beim Symposium Mboa erreichte das Team das Finale
                und verpasste den Titel nur knapp. Für viele war das mehr als nur ein Turnier —
                es war der Beweis, dass aus einer Freizeitgruppe längst eine echte Mannschaft geworden war.
              </p>
              <p>
                Mit dem Wachstum kam auch der Wunsch nach Struktur und Zukunft. Die Gemeinschaft wollte
                mehr als spontane Spiele am Wochenende. Es entstand die Vision eines Vereins, der jungen
                Fußballern aus Lichtenberg, Marzahn-Hellersdorf und ganz Berlin eine sportliche Heimat bieten sollte –
                unabhängig von Herkunft, Sprache oder sozialem Hintergrund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH SQUAD PHOTO ───────────────────────── */}
      <section className="relative h-72 md:h-[28rem] overflow-hidden">
        <Image
          src="/images/symposium-mboa-medals-group.jpeg"
          alt="SC Metropolis 25 Berlin — Symposium Mboa 2026 Team"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em]">
            Symposium Mboa 2026 · Ungeschlagen durch die Gruppenphase
          </p>
        </div>
      </section>

      {/* ── FOUNDING MOMENT ──────────────────────────────── */}
      <section className="bg-navy py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold font-heading text-xs uppercase tracking-[0.3em]">Der entscheidende Schritt</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase leading-tight mb-10">
              26. November 2025 —<br />
              <span className="text-gold-gradient">Die Gründung</span>
            </h2>

            <div className="space-y-6 text-text-secondary leading-[1.9] text-base md:text-lg">
              <p>
                Deshalb fiel 2025 die Entscheidung, den nächsten Schritt zu gehen.
              </p>
              <p>
                <span className="text-white font-semibold">22 Mitglieder</span> waren bei der offiziellen
                Vereinsgründung anwesend. Aus einer informellen Fußballgruppe wurde der SC Metropolis 25 Berlin e.V. –
                mit dem Ziel, langfristig einen nachhaltigen, organisierten und ambitionierten Fußballverein in
                Berlin aufzubauen.
              </p>
            </div>

            {/* Key dates */}
            <div className="mt-12 space-y-4">
              {[
                { date: '26. November 2025', event: 'Gründungsversammlung — 22 Mitglieder anwesend' },
                { date: '22. Dezember 2025', event: 'Eintragung ins Vereinsregister, Amtsgericht Berlin-Charlottenburg' },
                { date: '30. April 2026', event: 'Anerkennung Gemeinnützigkeit §60a AO durch das Finanzamt' },
              ].map(d => (
                <div key={d.date} className="flex items-start gap-5 card p-5">
                  <div className="shrink-0">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  </div>
                  <div>
                    <div className="font-display text-gold text-sm leading-none mb-1">{d.date}</div>
                    <div className="text-text-secondary text-sm font-heading">{d.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <section className="bg-dark py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-2">
              Von der Idee zum <span className="text-gold-gradient">Verein</span>
            </h2>
            <p className="text-text-muted text-sm font-heading mb-12">Jeder Schritt war ein echter.</p>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-dark-border" aria-hidden="true" />
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-8">
                    {/* Dot — pulsing for pending items */}
                    <div className="shrink-0 w-10 flex justify-center pt-1.5">
                      {(item as { pending?: boolean }).pending ? (
                        <span className="relative flex w-3 h-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50" />
                          <span className="relative inline-flex rounded-full w-3 h-3 bg-gold/60 border border-gold" />
                        </span>
                      ) : (
                        <div className="w-3 h-3 bg-gold rounded-full shadow-[0_0_8px_rgba(224,161,6,0.5)]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-2 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display text-gold text-sm leading-none">{item.year}</span>
                        {(item as { pending?: boolean }).pending && (
                          <span className="text-[10px] font-heading uppercase tracking-wider text-gold/60 border border-gold/30 px-2 py-0.5">
                            In Bearbeitung
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-semibold text-white text-base uppercase tracking-wide mb-2">
                        {item.label}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
                      {item.image && (
                        <div className="relative mt-4 h-48 md:h-60 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.imageAlt ?? ''}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING NARRATIVE ────────────────────────────── */}
      <section className="bg-dark-surface py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-text-secondary leading-[1.9] text-base md:text-lg mb-12">
              <p>
                Heute wächst die Community weiter. Neue Spieler schließen sich regelmäßig an, neue Ideen
                entstehen und die sportlichen Ziele entwickeln sich Schritt für Schritt weiter.
                Der Aufbau einer 1. Herrenmannschaft, perspektivisch einer 2. Herrenmannschaft sowie
                langfristig auch einer Frauenmannschaft ist Teil dieser Entwicklung.
              </p>
              <p>
                Doch unabhängig davon, wie groß der Verein in Zukunft wird, bleibt der Ursprung derselbe.
              </p>
            </div>

            {/* Closing quote */}
            <div className="relative border border-gold/20 p-8 md:p-12 bg-navy/40">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold -translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold translate-x-1 translate-y-1" />
              <p className="font-display text-2xl md:text-3xl text-white uppercase leading-snug mb-6">
                Samstage. Fußball.<br />Gemeinschaft. Berlin.
              </p>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                Denn SC Metropolis 25 steht nicht nur für einen Verein.
                Sondern für die Idee, dass Fußball Menschen verbindet und aus Begegnungen etwas Dauerhaftes entstehen kann.
              </p>
              <p className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
                &ldquo;Wo Berlin pulsiert, wächst unsere Stärke.&rdquo;
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-12">
              <Link href="/mitmachen" className="btn-primary btn btn-lg group inline-flex">
                <span>Teil der Geschichte werden</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/verein" className="btn-outline btn btn-lg">
                Zurück zum Verein
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
