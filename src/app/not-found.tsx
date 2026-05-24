import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center px-4">
        <div className="font-display text-[20vw] text-white/5 leading-none select-none mb-0" aria-hidden="true">
          404
        </div>
        <div className="-mt-8 relative z-10">
          <div className="font-display text-6xl md:text-8xl text-gold mb-4">404</div>
          <h1 className="font-heading text-2xl text-white uppercase tracking-widest mb-4">
            Seite nicht gefunden
          </h1>
          <p className="text-text-muted text-sm mb-8 max-w-sm mx-auto">
            Diese Seite existiert nicht. Vielleicht warst du mit dem falschen Fuß raus heute?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary btn">
              Zurück zur Startseite
            </Link>
            <Link href="/kontakt" className="btn-outline btn">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
