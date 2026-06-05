import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Galerie — SC Metropolis 25 Berlin',
  description: 'Fotos und Videos von SC Metropolis 25 Berlin — Spieltage, Training, Events und Vereinsleben.',
}

// Mock gallery items — replace with Sanity CMS
const mockGallery = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  title: `Galerie Bild ${i + 1}`,
  category: i % 3 === 0 ? 'Spieltag' : i % 3 === 1 ? 'Training' : 'Event',
}))

const categories = ['Alle', 'Spieltag', 'Training', 'Event', 'Team']

export default function GaleriePage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="py-20 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Bilder & Videos</div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
            Galerie
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button key={cat} className={`px-4 py-2 text-xs font-heading uppercase tracking-widest border transition-all duration-200 ${cat === 'Alle' ? 'bg-gold text-navy-900 border-gold' : 'bg-transparent text-text-muted border-dark-border hover:border-gold/40 hover:text-gold'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {mockGallery.map((item, i) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-300 cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '1/1' : '4/3' }}
              >
                {/* Gradient placeholder */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, hsl(${(i * 30) % 360}, 40%, 10%) 0%, hsl(${(i * 30 + 40) % 360}, 30%, 20%) 100%)`,
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="badge-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</span>
                </div>
                {/* Placeholder "M" */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-white/10 text-6xl select-none">M</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-text-muted text-sm mt-10">
            Bilder werden regelmäßig nach Spieltagen und Events hinzugefügt.
            <br />
            Folge uns auf <a href="https://www.instagram.com/metropolis25_berlin/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Instagram</a> für tägliche Updates.
          </p>
        </div>
      </section>
    </div>
  )
}
