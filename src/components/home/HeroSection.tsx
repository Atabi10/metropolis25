'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export function HeroSection() {
  const t = useTranslations('hero')
  const [loaded, setLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
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
      aria-label="Willkommen bei SC Metropolis 25 Berlin"
    >

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">

        {/* Fallback photo shown until video is ready */}
        <Image
          src="/images/symposium-mboa-team.jpeg"
          alt="SC Metropolis 25 Berlin — Team"
          fill
          priority
          className={clsx(
            'object-cover object-center transition-opacity duration-1000',
            videoLoaded ? 'opacity-0' : 'opacity-100'
          )}
          sizes="100vw"
        />

        {/* Real club footage — loops silently */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={clsx(
            'absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000',
            videoLoaded ? 'opacity-100' : 'opacity-0'
          )}
        >
          <source src="/videos/m25-training-01.mp4" type="video/mp4" />
          <source src="/videos/m25-training-02.mp4" type="video/mp4" />
        </video>

        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 70% 40%, rgba(0, 40, 85, 0.55) 0%, transparent 60%),
              radial-gradient(ellipse at 30% 60%, rgba(224, 161, 6, 0.07) 0%, transparent 50%),
              linear-gradient(180deg, rgba(0,8,20,0.55) 0%, rgba(0,5,15,0.72) 50%, rgba(0,3,10,0.97) 100%)
            `,
          }}
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224,161,6,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224,161,6,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="absolute inset-0 hero-vignette" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className={clsx(
            'font-display text-[40vw] text-white/[0.012] select-none leading-none transition-all duration-1000',
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
          aria-hidden="true"
        >
          M
        </span>
      </div>

      <div className="absolute top-1/4 left-0 w-40 h-px bg-gradient-to-r from-transparent to-gold/40" />
      <div className="absolute top-1/3 right-0 w-60 h-px bg-gradient-to-l from-transparent to-gold/30" />

      {/* HERO CONTENT */}
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
              {t('label')}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={clsx(
              'font-display leading-[0.95] uppercase mb-5 transition-all duration-700 delay-100',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ fontSize: 'clamp(2.6rem, 7.5vw, 7rem)' }}
          >
            <span className="block text-white">{t('title')}</span>
            <span className="block text-gold-gradient">{t('subtitle')}</span>
          </h1>

          {/* Sub headline */}
          <p
            className={clsx(
              'text-ivory/75 font-heading text-base md:text-lg leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-200',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {t('description')}
          </p>

          {/* CTAs */}
          <div
            className={clsx(
              'flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <Link href="/mitmachen" className="btn-primary btn btn-lg group inline-flex">
              <span>{t('ctaPrimary')}</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
            <Link href="/verein/geschichte" className="btn-outline btn btn-lg">
              {t('ctaHistory')}
            </Link>
          </div>

          {/* Quick stats strip */}
          <div
            className={clsx(
              'flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 pt-8 border-t border-white/10 transition-all duration-700 delay-500',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {[
              { value: 'e.V.',  label: 'Eingetragener Verein' },
              { value: '§60a', label: 'Gemeinnützigkeit AO' },
              { value: '37+',  label: 'Mitglieder' },
              { value: 'BFV',  label: '2026/27 in Vorbereitung' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div>
                  <div className="font-display text-gold text-xl leading-none">{item.value}</div>
                  <div className="text-text-muted text-xs font-heading uppercase tracking-wider mt-0.5">
                    {item.label}
                  </div>
                </div>
                {i < 3 && (
                  <div className="w-px h-6 bg-dark-border hidden sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className={clsx(
          'absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-500',
          scrolled ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        )}
        aria-hidden="true"
      >
        <span className="text-text-muted text-xs font-heading uppercase tracking-[0.3em]">
          Entdecken
        </span>
        <div className="w-5 h-8 border border-text-muted/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
