'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Play, ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setScrolled(rect.bottom < window.innerHeight / 2)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Willkommen bei SC Metropolis 25 Berlin"
    >

      {/* ── BACKGROUND VIDEO / IMAGE ──────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic gradient placeholder — replace with actual video/image */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 70% 40%, rgba(0, 40, 85, 0.6) 0%, transparent 60%),
              radial-gradient(ellipse at 30% 60%, rgba(224, 161, 6, 0.1) 0%, transparent 50%),
              linear-gradient(180deg, rgba(0,8,20,0.3) 0%, rgba(0,5,15,0.7) 50%, rgba(0,3,10,0.98) 100%),
              linear-gradient(135deg, #0a0d1e 0%, #001a3a 40%, #0a0d14 100%)
            `,
          }}
        />

        {/* Cinematic grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224,161,6,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224,161,6,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 hero-vignette" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* ── DECORATIVE ELEMENTS ──────────────────────────── */}
      {/* Large background "M" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className={clsx(
            'font-display text-[40vw] text-white/[0.015] select-none leading-none transition-all duration-1000',
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
          aria-hidden="true"
        >
          M
        </span>
      </div>

      {/* Floating gold lines */}
      <div className="absolute top-1/4 left-0 w-40 h-px bg-gradient-to-r from-transparent to-gold/40" />
      <div className="absolute top-1/3 right-0 w-60 h-px bg-gradient-to-l from-transparent to-gold/30" />

      {/* ── HERO CONTENT ─────────────────────────────────── */}
      <div className="relative z-10 container-custom pb-24 md:pb-32 pt-32">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <div
            className={clsx(
              'flex items-center gap-3 mb-6 transition-all duration-700',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-[0.3em]">
              Sport-Club Metropolis 25 Berlin e.V.
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={clsx(
              'font-display leading-none uppercase mb-4 transition-all duration-700 delay-100',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            <span className="block text-white">WO BERLIN</span>
            <span className="block text-gold-gradient">PULSIERT</span>
          </h1>

          {/* Sub headline */}
          <div
            className={clsx(
              'flex items-center gap-4 mb-3 transition-all duration-700 delay-200',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="w-16 h-px bg-gold/50" aria-hidden="true" />
            <p className="font-display text-3xl md:text-5xl text-white/80 uppercase tracking-wide">
              wächst unsere Stärke
            </p>
          </div>

          {/* Campaign line */}
          <p
            className={clsx(
              'text-ivory/60 font-heading text-sm md:text-base uppercase tracking-[0.4em] mb-10 transition-all duration-700 delay-300',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            Die Stärke aus der Hauptstadt
          </p>

          {/* CTAs */}
          <div
            className={clsx(
              'flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <Link
              href="/mitmachen"
              className="btn-primary btn btn-lg group inline-flex"
            >
              <span>Jetzt Mitmachen</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link
              href="/teams"
              className="btn-outline btn btn-lg"
            >
              Teams entdecken
            </Link>
          </div>

          {/* Quick stats strip */}
          <div
            className={clsx(
              'flex items-center gap-6 mt-12 pt-8 border-t border-white/10 transition-all duration-700 delay-500',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {[
              { value: '2025', label: 'Gegründet' },
              { value: '60+', label: 'Mitglieder' },
              { value: 'Berlin', label: 'Lichtenberg' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div>
                  <div className="font-display text-gold text-2xl leading-none">{item.value}</div>
                  <div className="text-text-muted text-xs font-heading uppercase tracking-wider mt-0.5">{item.label}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-dark-border" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────────── */}
      <div
        className={clsx(
          'absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-500',
          scrolled ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        )}
        aria-hidden="true"
      >
        <span className="text-text-muted text-xs font-heading uppercase tracking-[0.3em]">Entdecken</span>
        <div className="w-5 h-8 border border-text-muted/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
