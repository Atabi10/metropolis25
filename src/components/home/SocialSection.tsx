import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const socialChannels = [
  {
    name: 'Instagram',
    handle: '@scmetropolis25',
    href: 'https://instagram.com/scmetropolis25',
    color: 'from-purple-600 to-pink-500',
    description: 'Matchday-Fotos, Trainingseinblicke und Vereinsleben',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@scmetropolis25',
    href: 'https://tiktok.com/@scmetropolis25',
    color: 'from-gray-900 to-gray-800',
    description: 'Highlight-Clips, Skills und Vereinsmomente',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'SC Metropolis 25',
    href: 'https://youtube.com/@scmetropolis25',
    color: 'from-red-700 to-red-600',
    description: 'Spielberichte, Interviews und Vereinsdokus',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export function SocialSection() {
  return (
    <section className="section-padding bg-dark" aria-labelledby="social-title">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center">Follow us</div>
          <h2 id="social-title" className="section-title text-4xl mb-4">
            Folge uns auf{' '}
            <span className="text-gold-gradient">Social Media</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-4" />
          <p className="section-subtitle mx-auto">
            Bleib immer up-to-date mit News, Spielberichten, Behind-the-Scenes
            und allem, was Metropolis 25 ausmacht.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card p-6 hover:border-gold/40 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              aria-label={`SC Metropolis 25 auf ${channel.name} folgen`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-dark-card`}
              >
                <channel.icon />
              </div>

              {/* Name */}
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-1">
                {channel.name}
              </h3>

              {/* Handle */}
              <p className="text-gold text-xs mb-3">{channel.handle}</p>

              {/* Description */}
              <p className="text-text-muted text-xs leading-relaxed mb-4">
                {channel.description}
              </p>

              {/* Follow CTA */}
              <div className="flex items-center gap-1.5 text-gold text-xs font-heading uppercase tracking-widest mt-auto">
                <span>Folgen</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp Community */}
        <div className="mt-8 card border-green-500/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-500/10 border border-green-500/30 flex items-center justify-center rounded-lg shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wide">
                WhatsApp Community
              </h4>
              <p className="text-text-muted text-xs mt-0.5">
                Tritt unserer Community bei und bleib immer informiert
              </p>
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/scmetropolis25"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-green-600 hover:bg-green-500 text-white btn text-xs px-5 py-2.5 transition-colors duration-250 shrink-0"
          >
            Jetzt beitreten
          </a>
        </div>
      </div>
    </section>
  )
}
