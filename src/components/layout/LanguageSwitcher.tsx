'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

const languages = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', short: 'DE' },
  { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find((l) => l.code === locale) ?? languages[0]

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const switchLocale = (code: string) => {
    router.replace(pathname, { locale: code })
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          'flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-heading font-semibold uppercase tracking-widest',
          'text-text-secondary hover:text-gold border border-dark-border hover:border-gold/40 transition-all duration-200',
          open && 'border-gold/40 text-gold'
        )}
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span>{current.short}</span>
        <ChevronDown
          className={clsx('w-3 h-3 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-1 w-36 bg-dark-surface border border-dark-border shadow-dark-lg overflow-hidden z-50"
          role="listbox"
          aria-label="Language options"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={clsx(
                'w-full flex items-center gap-3 px-4 py-2.5 text-xs font-heading font-medium uppercase tracking-wider transition-all duration-200',
                'border-b border-dark-border last:border-0',
                locale === lang.code
                  ? 'text-gold bg-navy/30'
                  : 'text-text-secondary hover:text-gold hover:bg-navy/20'
              )}
              role="option"
              aria-selected={locale === lang.code}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
