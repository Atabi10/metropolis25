'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay so it doesn't flash immediately
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-modal="false"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 animate-fade-up"
    >
      <div className="bg-dark-surface border border-dark-border shadow-dark-lg overflow-hidden">
        {/* Gold top bar */}
        <div className="h-1 bg-gold-gradient" />

        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Cookie className="w-4 h-4 text-gold" aria-hidden="true" />
              <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
                Cookie-Hinweis
              </h2>
            </div>
            <button
              onClick={decline}
              className="text-text-muted hover:text-gold transition-colors"
              aria-label="Banner schließen"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Text */}
          <p className="text-text-muted text-xs leading-relaxed mb-4">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            Mehr dazu in unserer{' '}
            <Link href="/datenschutz" className="text-gold hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </p>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={accept}
              className="flex-1 btn-primary btn text-xs py-2.5 px-4"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={decline}
              className="flex-1 btn-ghost btn text-xs py-2.5 px-4 border border-dark-border"
            >
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
