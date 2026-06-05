import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Galerie — SC Metropolis 25 Berlin',
  description: 'Bilder und Videos von SC Metropolis 25 Berlin e.V. — Turniere, Training, Gemeinschaft und Berliner Fußballkultur.',
}

// ─── GALLERY DATA ─────────────────────────────────────────────────────────────
const groups = [
  {
    id: 'turniere',
    label: 'Turniere & Wettkämpfe',
    caption: 'Symposium Mboa 2024 & 2026 — vom Finaleinzug zur Halbfinalteilnahme als eingetragener Verein.',
    items: [
      {
        type: 'image' as const,
        src: '/images/medals after Symposium final.jpeg',
        alt: 'SC Metropolis 25 — Medaillen Symposium Mboa 2026',
        caption: 'Symposium Mboa 2026 — Halbfinale als eingetragener Verein.',
        wide: true,
      },
      {
        type: 'image' as const,
        src: '/images/trophy for 2nd place.jpeg',
        alt: 'SC Metropolis 25 — Trophäenübergabe 2. Platz Symposium Mboa',
        caption: 'Silber 2024 — der Moment, der den Vereinsgründung auslöste.',
        wide: false,
      },
      {
        type: 'image' as const,
        src: '/images/symposium-mboa-medals-group.jpeg',
        alt: 'SC Metropolis 25 — Team mit Medaillen',
        caption: 'Gemeinsame Erfolge. Gemeinsame Erinnerungen.',
        wide: false,
      },
      {
        type: 'video' as const,
        src: '/videos/m25-medals-ceremony.mp4',
        alt: 'SC Metropolis 25 — Medaillenübergabe',
        caption: 'Die Medaillenübergabe — ein Moment für die Geschichte.',
        wide: false,
      },
      {
        type: 'image' as const,
        src: '/images/symposium-mboa-team.jpeg',
        alt: 'SC Metropolis 25 beim Symposium Mboa',
        caption: 'Das Team beim Symposium Mboa — Berlins bedeutendstem afrikanischen Kulturfestival.',
        wide: false,
      },
    ],
  },
  {
    id: 'training',
    label: 'Training & Spieltage',
    caption: 'Jeder Trainingstag bringt die Mannschaft dem Berliner Ligabetrieb näher.',
    items: [
      {
        type: 'image' as const,
        src: '/images/team photo before game against Kmer.jpeg',
        alt: 'SC Metropolis 25 — Aufstellung vor dem Spiel gegen Lichtenberg Kmer',
        caption: 'Vor dem 4:2-Sieg gegen Lichtenberg Kmer — konzentriert, bereit.',
        wide: true,
      },
      {
        type: 'image' as const,
        src: '/images/warming up before match agains Kmer Lichtenberg.jpeg',
        alt: 'SC Metropolis 25 — Aufwärmen vor dem Spiel',
        caption: 'Aufwärmen. Fokussieren. Pressetag auf dem Berliner Rasen.',
        wide: false,
      },
      {
        type: 'video' as const,
        src: '/videos/m25-training-session.mp4',
        alt: 'SC Metropolis 25 — Trainingssession',
        caption: 'Strukturierter Trainingsaufbau — Schritt für Schritt.',
        wide: false,
      },
      {
        type: 'video' as const,
        src: '/videos/m25-training-01.mp4',
        alt: 'SC Metropolis 25 — Training',
        caption: 'Trainingsalltag bei SC Metropolis 25.',
        wide: false,
      },
      {
        type: 'video' as const,
        src: '/videos/m25-vs-flambeau.mp4',
        alt: 'SC Metropolis 25 vs Flambeau FC',
        caption: '4:3 gegen Flambeau FC im Poststadion — Spielszenen.',
        wide: false,
      },
    ],
  },
  {
    id: 'gemeinschaft',
    label: 'Gemeinschaft & Menschen',
    caption: 'Was 2019 mit sieben Studenten begann, ist heute eine wachsende Berliner Fußballgemeinschaft.',
    items: [
      {
        type: 'image' as const,
        src: '/images/team spirit.jpeg',
        alt: 'SC Metropolis 25 — Kabine, Teamgeist',
        caption: '"Aus Mitspielern wurden Freunde. Aus Freunden ein Verein."',
        wide: true,
      },
      {
        type: 'video' as const,
        src: '/videos/m25-community-01.mp4',
        alt: 'SC Metropolis 25 — Community Moment',
        caption: 'Gemeinschaft, die über den Fußball hinausgeht.',
        wide: false,
      },
      {
        type: 'image' as const,
        src: '/images/Integration-tournament-team.jpeg',
        alt: 'SC Metropolis 25 — Team nach dem Sieg',
        caption: 'Teamgeist nach dem Sieg — mehr als elf Nationen, ein Verein.',
        wide: false,
      },
      {
        type: 'video' as const,
        src: '/videos/m25-community-02.mp4',
        alt: 'SC Metropolis 25 — Community',
        caption: 'Lichtenberg. Berlin. Wir.',
        wide: false,
      },
      {
        type: 'image' as const,
        src: '/images/geschichte-early-team.jpeg',
        alt: 'SC Metropolis 25 — Anfänge',
        caption: 'Die Anfänge. Bevor es einen Vereinsnamen gab.',
        wide: false,
      },
    ],
  },
]

// ─── MEDIA CARD ───────────────────────────────────────────────────────────────
function MediaCard({
  item,
}: {
  item: (typeof groups)[0]['items'][0]
}) {
  if (item.type === 'video') {
    return (
      <div className="group relative bg-dark-card border border-dark-border overflow-hidden hover:border-gold/30 transition-colors duration-300">
        <div className={`relative overflow-hidden ${item.wide ? 'h-72 md:h-96' : 'h-56'}`}>
          <video
            src={item.src}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            autoPlay={false}
            loop
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-heading uppercase tracking-widest text-gold border border-gold/40 bg-dark/70 px-2 py-0.5">
              Video
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-xs font-heading leading-snug italic">&ldquo;{item.caption}&rdquo;</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative bg-dark-card border border-dark-border overflow-hidden hover:border-gold/30 transition-colors duration-300">
      <div className={`relative overflow-hidden ${item.wide ? 'h-72 md:h-96' : 'h-56'}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={item.wide ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-xs font-heading leading-snug italic">&ldquo;{item.caption}&rdquo;</p>
        </div>
      </div>
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function GaleriePage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(224,161,6,0.4) 0, rgba(224,161,6,0.4) 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
          }}
        />
        {/* Hero background — medals photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/medals after Symposium final.jpeg"
            alt="SC Metropolis 25 — Galerie"
            fill
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container-custom relative z-10">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Metropolis in Bildern</p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            Galerie &{' '}
            <span className="text-gold-gradient">Momente</span>
          </h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="text-ivory/70 font-heading text-base max-w-xl leading-relaxed">
            Turniere, Training, Gemeinschaft — die Geschichte von SC Metropolis 25
            in Bildern und Videos. Seit 2019.
          </p>
        </div>
      </section>

      {/* ── Gallery groups ──────────────────────────────────── */}
      {groups.map(group => (
        <section key={group.id} className="section-padding bg-dark border-b border-dark-border">
          <div className="container-custom">

            {/* Group header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-gold" aria-hidden="true" />
                <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                  {group.label}
                </h2>
              </div>
              <p className="text-text-muted text-sm leading-relaxed ml-4 max-w-xl">
                {group.caption}
              </p>
            </div>

            {/* Grid: wide item + 4 smaller */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Wide featured item */}
              <div className="col-span-2 lg:col-span-2">
                {group.items[0] && <MediaCard item={{ ...group.items[0], wide: true }} />}
              </div>

              {/* Right column — 2 stacked */}
              <div className="hidden lg:flex flex-col gap-4">
                {group.items.slice(1, 3).map(item => (
                  <MediaCard key={item.src} item={{ ...item, wide: false }} />
                ))}
              </div>

              {/* Bottom row — remaining items */}
              {group.items.slice(3).map(item => (
                <MediaCard key={item.src} item={{ ...item, wide: false }} />
              ))}

              {/* Mobile: show items 1-2 below wide */}
              <div className="col-span-2 grid grid-cols-2 gap-4 lg:hidden">
                {group.items.slice(1, 3).map(item => (
                  <MediaCard key={`mob-${item.src}`} item={{ ...item, wide: false }} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Social CTA ──────────────────────────────────────── */}
      <section className="py-16 bg-navy border-t border-dark-border">
        <div className="container-custom text-center max-w-xl mx-auto">
          <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-4">Mehr Einblicke</p>
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-4">
            Folge uns auf{' '}
            <span className="text-gold-gradient">Social Media</span>
          </h2>
          <p className="text-ivory/65 text-sm leading-relaxed mb-8">
            Aktuelle Eindrücke, Spieltag-Updates und Community-Momente —
            direkt auf unseren Kanälen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.instagram.com/metropolis25_berlin/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn"
            >
              Instagram →
            </a>
            <a
              href="https://tiktok.com/@scmetropolis25"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn"
            >
              TikTok →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
