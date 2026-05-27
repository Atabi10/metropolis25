'use client'

import { useRef, useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { clsx } from 'clsx'
import { Link } from '@/i18n/navigation'

const clips = [
  {
    src: '/videos/m25-training-01.mp4',
    poster: '/images/symposium-mboa-team.jpeg',
    label: 'Training',
    caption: 'Strukturierter Trainingsaufbau',
  },
  {
    src: '/videos/m25-training-02.mp4',
    poster: '/images/symposium-mboa-team.jpeg',
    label: 'Spielszene',
    caption: 'Berliner Fußball, direkt vom Platz',
  },
  {
    src: '/videos/m25-community-01.mp4',
    poster: '/images/symposium-mboa-team.jpeg',
    label: 'Community',
    caption: 'Gemeinschaft, die trägt',
  },
  {
    src: '/videos/m25-community-02.mp4',
    poster: '/images/symposium-mboa-team.jpeg',
    label: 'Momente',
    caption: 'Lichtenberg. Berlin. Wir.',
  },
]

function VideoClip({ src, poster, label, caption }: (typeof clips)[0]) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [ready, setReady] = useState(false)

  // Auto-play when in view
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().then(() => setPlaying(true)).catch(() => {})
        } else {
          el.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const togglePlay = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) { el.play(); setPlaying(true) }
    else { el.pause(); setPlaying(false) }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (ref.current) {
      ref.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <div
      className="group relative bg-dark-card border border-dark-border overflow-hidden cursor-pointer hover:border-gold/30 transition-colors duration-300"
      onClick={togglePlay}
      role="button"
      aria-label={`Video: ${caption}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && togglePlay()}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="metadata"
        onCanPlay={() => setReady(true)}
        className="w-full aspect-[9/16] sm:aspect-video object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent pointer-events-none" />

      {/* Top label */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[10px] font-heading uppercase tracking-widest text-gold border border-gold/40 bg-dark/60 px-2 py-0.5">
          {label}
        </span>
      </div>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 z-10 w-7 h-7 bg-dark/60 border border-dark-border flex items-center justify-center text-text-muted hover:text-gold transition-colors"
        aria-label={muted ? 'Ton einschalten' : 'Ton ausschalten'}
      >
        {muted
          ? <VolumeX className="w-3.5 h-3.5" />
          : <Volume2 className="w-3.5 h-3.5" />
        }
      </button>

      {/* Play/pause indicator */}
      <div
        className={clsx(
          'absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 pointer-events-none',
          playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        )}
      >
        <div className="w-12 h-12 bg-dark/70 border border-gold/50 flex items-center justify-center">
          {playing
            ? <Pause className="w-5 h-5 text-gold" />
            : <Play className="w-5 h-5 text-gold ml-0.5" />
          }
        </div>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <p className="text-white text-xs font-heading uppercase tracking-wide">{caption}</p>
      </div>
    </div>
  )
}

export function MomenteSection() {
  return (
    <section className="section-padding bg-dark-surface" aria-labelledby="momente-title">
      <div className="container-custom">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-gold font-heading text-xs uppercase tracking-[0.3em] mb-3">
              Einblicke
            </p>
            <h2
              id="momente-title"
              className="font-display text-3xl md:text-4xl text-white uppercase"
            >
              Echter Fußball.{' '}
              <span className="text-gold-gradient">Echte Momente.</span>
            </h2>
            <div className="w-12 h-1 bg-gold mt-4" />
          </div>
          <p className="text-text-muted text-sm max-w-xs leading-relaxed sm:text-right">
            Direkt vom Platz — Training, Gemeinschaft und Berliner
            Fußballkultur, wie sie wirklich ist.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {clips.map((clip) => (
            <VideoClip key={clip.src} {...clip} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-dark-border">
          <p className="text-text-muted text-sm">
            Mehr Bilder und Videos auf unseren sozialen Kanälen.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/galerie" className="btn-outline btn btn-sm text-xs">
              Zur Galerie
            </Link>
            <a
              href="https://instagram.com/scmetropolis25"
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
