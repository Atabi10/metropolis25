'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import { clsx } from 'clsx'
import { Link } from '@/i18n/navigation'

// ─── PHOTO MOMENTS ────────────────────────────────────────────────────────────
const photos = [
  {
    src: '/images/medals after Symposium final.jpeg',
    alt: 'SC Metropolis 25 mit Medaillen nach dem Symposium Mboa 2026',
    caption: 'Symposium Mboa 2026 — Halbfinale. Medaillen. Stolz.',
    tag: 'Turnier',
  },
  {
    src: '/images/team spirit.jpeg',
    alt: 'SC Metropolis 25 Kabine — Teamgeist vor dem Spiel',
    caption: 'Aus Mitspielern wurden Freunde. Aus Freunden ein Verein.',
    tag: 'Gemeinschaft',
  },
  {
    src: '/images/team photo before game against Kmer.jpeg',
    alt: 'SC Metropolis 25 — Aufstellung vor dem Spiel gegen Lichtenberg Kmer',
    caption: '11 gegen 11. Berliner Fußball, wie er wirklich ist.',
    tag: 'Spieltag',
  },
  {
    src: '/images/trophy for 2nd place.jpeg',
    alt: 'SC Metropolis 25 — Trophäenübergabe Symposium Mboa',
    caption: 'Silber 2024. Der Moment, der alles veränderte.',
    tag: 'Meilenstein',
  },
  {
    src: '/images/warming up before match agains Kmer Lichtenberg.jpeg',
    alt: 'SC Metropolis 25 — Aufwärmen vor dem Spiel',
    caption: 'Jeden Trainingstag ein Schritt Richtung Ligabetrieb.',
    tag: 'Training',
  },
  {
    src: '/images/symposium-mboa-medals-group.jpeg',
    alt: 'SC Metropolis 25 — Gruppenphoto mit Medaillen',
    caption: 'Seit 2019. Wir wachsen. Wir halten zusammen.',
    tag: 'Community',
  },
]

// ─── VIDEO CLIP ───────────────────────────────────────────────────────────────
function VideoClip({ src, label, caption }: { src: string; label: string; caption: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.play().then(() => setPlaying(true)).catch(() => {}) }
        else { el.pause(); setPlaying(false) }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) { el.play(); setPlaying(true) } else { el.pause(); setPlaying(false) }
  }

  return (
    <div
      className="group relative bg-dark-card border border-dark-border overflow-hidden cursor-pointer hover:border-gold/30 transition-colors duration-300"
      onClick={toggle}
      role="button"
      aria-label={`Video abspielen: ${caption}`}
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && toggle()}
    >
      <video
        ref={ref}
        src={src}
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent pointer-events-none" />
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[10px] font-heading uppercase tracking-widest text-gold border border-gold/40 bg-dark/60 px-2 py-0.5">
          {label}
        </span>
      </div>
      <div className={clsx(
        'absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 pointer-events-none',
        playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
      )}>
        <div className="w-12 h-12 bg-dark/70 border border-gold/50 flex items-center justify-center">
          {playing ? <Pause className="w-5 h-5 text-gold" /> : <Play className="w-5 h-5 text-gold ml-0.5" />}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <p className="text-white text-xs font-heading uppercase tracking-wide">{caption}</p>
      </div>
    </div>
  )
}

// ─── PHOTO CARD ───────────────────────────────────────────────────────────────
function PhotoCard({ photo }: { photo: typeof photos[0] }) {
  return (
    <div className="group relative bg-dark-card border border-dark-border overflow-hidden hover:border-gold/30 transition-colors duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-heading uppercase tracking-widest text-gold border border-gold/40 bg-dark/70 px-2 py-0.5">
            {photo.tag}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-xs font-heading leading-relaxed italic">
            &ldquo;{photo.caption}&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── SECTION ──────────────────────────────────────────────────────────────────
export function MomenteSection() {
  return (
    <section className="section-padding bg-dark-surface" aria-labelledby="momente-title">
      <div className="container-custom">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-3">Einblicke</p>
            <h2 id="momente-title" className="font-display text-3xl md:text-4xl text-white uppercase">
              Echter Fußball.{' '}
              <span className="text-gold-gradient">Echte Momente.</span>
            </h2>
            <div className="w-12 h-1 bg-gold mt-4" />
          </div>
          <p className="text-text-muted text-sm max-w-xs leading-relaxed sm:text-right">
            Turniere, Training, Gemeinschaft — SC Metropolis 25 in Bildern und Videos.
          </p>
        </div>

        {/* Featured row: 2 large photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {photos.slice(0, 2).map(p => (
            <div key={p.src} className="group relative bg-dark-card border border-dark-border overflow-hidden hover:border-gold/30 transition-colors duration-300">
              <div className="relative h-72 md:h-80 overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-heading uppercase tracking-widest text-gold border border-gold/50 bg-dark/70 px-2 py-0.5">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-sm font-heading leading-relaxed italic">
                    &ldquo;{p.caption}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-column grid: 2 photos + 2 videos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <PhotoCard photo={photos[2]} />
          <VideoClip
            src="/videos/m25-training-session.mp4"
            label="Training"
            caption="Strukturiert. Ambitioniert. Berlin."
          />
          <PhotoCard photo={photos[3]} />
          <VideoClip
            src="/videos/m25-medals-ceremony.mp4"
            label="Medaillen"
            caption="Symposium Mboa 2024 — Silber."
          />
        </div>

        {/* Bottom row: 2 more photos */}
        <div className="grid grid-cols-2 gap-4">
          <PhotoCard photo={photos[4]} />
          <PhotoCard photo={photos[5]} />
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-dark-border">
          <p className="text-text-muted text-sm leading-relaxed">
            Mehr Bilder und Videos auf unseren sozialen Kanälen.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/galerie" className="btn-outline btn btn-sm text-xs">
              Zur Galerie
            </Link>
            <a
              href="https://www.instagram.com/metropolis25_berlin/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn btn-sm text-xs"
            >
              Instagram →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
