'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

// ─── NAV ITEMS ───────────────────────────────────────────────────────────────
const navItems = [
  { label: 'Verein', href: '/verein' },
  {
    label: 'Teams',
    href: '/teams',
    children: [
      { label: '1. Mannschaft', href: '/teams/erste-mannschaft' },
      { label: 'U23', href: '/teams/u23' },
      { label: 'Jugend', href: '/teams/jugend' },
      { label: 'Frauen', href: '/teams/frauen' },
    ],
  },
  { label: 'Spielbetrieb', href: '/spielbetrieb' },
  { label: 'Akademie', href: '/akademie' },
  { label: 'News', href: '/news' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Sponsoren', href: '/sponsoren' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          scrolled
            ? 'bg-dark-surface/95 backdrop-blur-md border-b border-dark-border shadow-dark-lg'
            : 'bg-gradient-to-b from-black/60 to-transparent'
        )}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="container-custom h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="SC Metropolis 25 Berlin – Startseite">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="/m25-logo.png"
                alt="SC Metropolis 25 Berlin Wappen"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="hidden xs:block">
              <div className="font-display text-white text-lg leading-none tracking-wide">
                SC METROPOLIS
              </div>
              <div className="text-gold text-xs font-heading font-semibold tracking-[0.2em] uppercase">
                25 Berlin e.V.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef} aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
                      className={clsx(
                        'nav-link flex items-center gap-1 px-4 py-2 rounded-sm',
                        pathname.startsWith(item.href) && 'text-gold'
                      )}
                      aria-expanded={activeDropdown === item.href}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={clsx('w-3.5 h-3.5 transition-transform duration-200', activeDropdown === item.href && 'rotate-180')}
                      />
                    </button>
                    {/* Dropdown */}
                    {activeDropdown === item.href && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-dark-surface border border-dark-border shadow-dark-lg overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={clsx(
                              'block px-5 py-3 text-sm font-heading font-medium uppercase tracking-wider transition-all duration-200',
                              'text-text-secondary hover:text-gold hover:bg-navy/30 border-b border-dark-border last:border-0',
                              pathname === child.href && 'text-gold bg-navy/20'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={clsx(
                      'nav-link px-4 py-2 rounded-sm block',
                      pathname === item.href || pathname.startsWith(item.href + '/') ? 'text-gold' : ''
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA */}
            <div className="ml-4 flex items-center gap-2">
              <Link href="/mitmachen" className="btn-outline btn text-xs px-5 py-2.5">
                Mitmachen
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-primary hover:text-gold transition-colors duration-200"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Gold underline on scroll */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        )}
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-400',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={clsx(
            'absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-dark-surface border-l border-dark-border flex flex-col transition-transform duration-400',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-dark-border">
            <div>
              <div className="font-display text-white text-lg">SC METROPOLIS</div>
              <div className="text-gold text-xs font-heading tracking-widest">25 BERLIN e.V.</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-text-secondary hover:text-gold"
              aria-label="Menü schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-6" aria-label="Mobile Navigation">
            <div className="space-y-1">
              {navItems.map((item, i) => (
                <div key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
                        className="w-full flex items-center justify-between py-3 text-text-secondary hover:text-gold font-heading font-medium text-sm uppercase tracking-widest transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={clsx('w-4 h-4 transition-transform duration-200', activeDropdown === item.href && 'rotate-180')}
                        />
                      </button>
                      {activeDropdown === item.href && (
                        <div className="pl-4 pb-2 space-y-1 border-l border-gold/30 ml-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2.5 text-text-muted hover:text-gold font-heading text-xs uppercase tracking-wider transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={clsx(
                        'block py-3 font-heading font-medium text-sm uppercase tracking-widest transition-colors',
                        pathname === item.href ? 'text-gold' : 'text-text-secondary hover:text-gold'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                  <div className="h-px bg-dark-border" />
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-dark-border space-y-3">
            <Link href="/mitmachen" className="btn-primary btn w-full text-center text-xs">
              Jetzt Mitmachen
            </Link>
            <Link href="/kontakt" className="btn-outline btn w-full text-center text-xs">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
