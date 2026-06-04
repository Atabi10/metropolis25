'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const t = useTranslations('hero')
  const [loaded, setLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setScrolled(heroRef.current.getBoundingClientRect().bottom < window.innerHeight / 2)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="SC Metropolis 25 Berlin — Willkommen"
    >
      {/* ── Background ──────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/medals after Symposium final.jpeg"
          alt="SC Metropolis 25 Berlin"
          fill priority
          className={clsx(
            'object-cover object-center transition-opacity duration-1000',
            videoLoaded ? 'opacity-0' : 'opacity-100'
          )}
          sizes="100vw"
        />
        <video
          ref={videoRef}
          autoPlay loop muted playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={clsx(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000',
            videoLoaded ? 'opacity-100' : 'opacity-0'
          )}
        >
          <source src="/videos/m25-training-01.mp4" type="video/mp4" />
        </video>

        {/* Cinematic gradient — stronger on left for text legibility */}
        <div className="absolute inset-0"
          style={{
            background: `
              linear-gradient(105deg, rgba(0,10,25,0.92) 0%, rgba(0,10,25,0.65) 50%, rgba(0,10,25,0.3) 100%),
              linear-gradient(180deg, rgba(0,8,20,0.4) 0%, rgba(0,5,15,0.5) 60%, rgba(0,3,10,0.98) 100%)
            `,
          }}
        />

        {/* Subtle grid — urban texture */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224,161,6,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224,161,6,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 hero-vignette" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* ── Decorative ──────────────────────────────────── */}
      {/* Left gold accent line */}
      <div className={clsx(
        'absolute left-0 top-1/3 h-48 w-[3px] bg-gradient-to-b from-transparent via-gold to-transparent transition-all duration-1000',
        loaded ? 'opacity-70' : 'opacity-0'
      )} aria-hidden="true" />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 container-custom pb-20 md:pb-28 pt-32">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className={clsx(
            'flex items-center gap-3 mb-8 transition-all duration-600',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold font-heading font-semibold text-xs uppercase tracking-[0.35em]">
              {t('label')}
            </span>
          </div>

          {/* Primary slogan — the emotional core */}
          <h1
            className={clsx(
              'font-display uppercase leading-[0.9] mb-2 transition-all duration-700 delay-75',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
            style={{ fontSize: 'clamp(2.8rem, 8.5vw, 7.5rem)' }}
          >
            <span className="block text-white">{t('slogan1')}</span>
            <span className="block text-gold-gradient">{t('slogan2')}</span>
          </h1>

          {/* Secondary club name */}
          <p className={clsx(
            'text-ivory/40 font-heading text-sm md:text-base uppercase tracking-[0.25em] mb-8 transition-all duration-700 delay-150',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}>
            {t('tagline')}
          </p>

          {/* Divider */}
          <div className={clsx(
            'w-16 h-[2px] bg-gold mb-8 transition-all duration-700 delay-200',
            loaded ? 'opacity-100 scale-x-100 origin-left' : 'opacity-0 scale-x-0 origin-left'
          )} />

          {/* Description */}
          <p className={clsx(
            'text-ivory/70 font-heading text-base md:text-lg leading-relaxed max-w-lg mb-10 transition-all duration-700 delay-250',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}>
            {t('description')}
          </p>

          {/* CTAs */}
          <div className={clsx(
            'flex flex-col sm:flex-row gap-3 mb-16 transition-all duration-700 delay-300',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}>
            <Link href="/mitmachen" className="btn-primary btn btn-lg group inline-flex items-center gap-2">
              <span>{t('ctaPrimary')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link href="/teams" className="btn-outline btn btn-lg">
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Trust strip */}
          <div className={clsx(
            'flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t border-white/10 transition-all duration-700 delay-[450ms]',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {[
              { value: 'e.V.',  label: 'Eingetragener Verein' },
              { value: '§60a', label: 'Gemeinnützigkeit AO' },
              { value: '37+',  label: 'Mitglieder' },
              { value: 'BFV',  label: '2026/27 in Vorbereitung' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div>
                  <div className="font-display text-gold text-xl leading-none">{item.value}</div>
                  <div className="text-text-muted text-[10px] font-heading uppercase tracking-wider mt-0.5">{item.label}</div>
                </div>
                {i < 3 && <div className="w-px h-6 bg-dark-border hidden sm:block" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <div
        className={clsx(
          'absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-500',
          scrolled ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        )}
        aria-hidden="true"
      >
        <span className="text-text-muted text-[10px] font-heading uppercase tracking-[0.3em]">Entdecken</span>
        <div className="w-5 h-8 border border-text-muted/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
