'use client'

import Image from 'next/image'
import { Instagram, Youtube, Facebook, Mail, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/scmetropolis25' },
  { icon: Youtube,   label: 'YouTube',   href: 'https://youtube.com/@scmetropolis25' },
  { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61590362822229' },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
      </svg>
    ),
    label: 'TikTok',
    href: 'https://tiktok.com/@scmetropolis25',
  },
]

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    verein: {
      title: t('sections.verein'),
      links: [
        { label: t('links.uberUns'),    href: '/verein' },
        { label: t('links.geschichte'), href: '/verein/geschichte' },
        { label: t('links.vorstand'),   href: '/verein/vorstand' },
        { label: t('links.sponsoren'),  href: '/sponsoren' },
        { label: t('links.news'),       href: '/news' },
      ],
    },
    sport: {
      title: t('sections.teams'),
      links: [
        { label: t('links.ersteM'),       href: '/teams/erste-mannschaft' },
        { label: t('links.spielbetrieb'), href: '/spielbetrieb' },
        { label: t('links.galerie'),      href: '/galerie' },
        { label: t('links.mitspielen'),   href: '/mitmachen' },
        { label: t('links.mitgliedschaft'), href: '/mitgliedschaft' },
      ],
    },
    mitmachen: {
      title: t('sections.mitmachen'),
      links: [
        { label: t('links.mitspielen'),    href: '/mitmachen' },
        { label: t('links.mitgliedschaft'), href: '/mitgliedschaft' },
        { label: t('links.kontakt'),       href: '/kontakt' },
        { label: t('links.sponsoren'),     href: '/sponsoren' },
      ],
    },
  }

  return (
    <footer className="bg-dark-surface border-t border-dark-border" aria-label="Footer">

      {/* Main Footer Content */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="xl:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-14 h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/m25-logo.png"
                  alt="SC Metropolis 25 Berlin Wappen"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <div>
                <div className="font-display text-white text-lg leading-none tracking-wide">SC METROPOLIS</div>
                <div className="text-gold text-xs font-heading font-semibold tracking-[0.2em] uppercase mt-0.5">
                  25 Berlin e.V.
                </div>
              </div>
            </Link>

            <blockquote className="border-l-2 border-gold pl-4 mb-6">
              <p className="font-heading text-ivory text-sm italic leading-relaxed">
                &ldquo;{t('tagline')}&rdquo;
              </p>
            </blockquote>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                <span>Lichtenberg, Berlin</span>
              </div>
              <a href="mailto:kontakt@sc-metropolis25.de" className="flex items-center gap-3 text-text-muted text-sm hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                kontakt@sc-metropolis25.de
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SC Metropolis 25 on ${social.label}`}
                  className="w-9 h-9 bg-dark-card border border-dark-border flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold/50 hover:bg-navy/30 transition-all duration-250"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="xl:col-span-1">
              <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-5">
                {section.title}
                <div className="w-8 h-px bg-gold mt-2" />
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsor Acknowledgment */}
      <div className="border-t border-dark-border">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-xs">
              Hauptsponsor: <span className="text-gold font-semibold">Intarp GmbH</span>
            </p>
            <Link href="/sponsoren" className="text-xs text-text-muted hover:text-gold transition-colors uppercase tracking-wider font-heading">
              {t('links.sponsoren')} →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-border bg-dark/50">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-xs">
            <div>
              <p>&copy; {currentYear} {t('copyright')}</p>
              <p className="mt-1 text-[10px] text-dark-muted max-w-md">
                {t('legal.disclaimer')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/impressum" className="hover:text-gold transition-colors">{t('legal.impressum')}</Link>
              <span className="text-dark-muted">·</span>
              <Link href="/datenschutz" className="hover:text-gold transition-colors">{t('legal.datenschutz')}</Link>
              <span className="text-dark-muted">·</span>
              <Link href="/satzung" className="hover:text-gold transition-colors">{t('legal.satzung')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
