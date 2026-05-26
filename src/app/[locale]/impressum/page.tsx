import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum — SC Metropolis 25 Berlin',
  description: 'Impressum von Sport-Club Metropolis 25 Berlin e.V. — Angaben gemäß §5 TMG.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="py-16 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Rechtliches</div>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase">Impressum</h1>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-invert prose-sm max-w-none space-y-8">

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">
                Angaben gemäß §5 TMG
              </h2>
              <div className="space-y-1 text-text-secondary text-sm">
                <p className="text-white font-semibold">Sport-Club Metropolis 25 Berlin e.V.</p>
                <p>c/o Atabong</p>
                <p>Seehausener Str. 33</p>
                <p>13057 Berlin</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">
                Registereintrag
              </h2>
              <div className="space-y-1 text-text-secondary text-sm">
                <p>Eingetragen im Vereinsregister</p>
                <p>Registergericht: Amtsgericht Charlottenburg</p>
                <p>Registernummer: VerR 42279 B</p>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">
                Vertreten durch
              </h2>
              <div className="space-y-1 text-text-secondary text-sm">
                <p>Raoul Atabong — 1. Vorsitzender</p>
                <p>Hassan Ghaddar — 2. Vorsitzender</p>
                <p>Leoni Charlize Klauß — Schatzmeisterin</p>
                <p>Moustafa Ghaddar — Sportdirektor</p>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">
                Kontakt
              </h2>
              <div className="space-y-1 text-text-secondary text-sm">
                <p>E-Mail: <a href="mailto:kontakt@sc-metropolis25.de" className="text-gold hover:underline">kontakt@sc-metropolis25.de</a></p>
                <p>Website: <a href="https://sc-metropolis25.de" className="text-gold hover:underline">www.sc-metropolis25.de</a></p>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">
                Inhaltlich Verantwortlicher gemäß §55 Abs. 2 RStV
              </h2>
              <p className="text-text-secondary text-sm">Raoul Atabong, Seehausener Str. 33, 13057 Berlin</p>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">Haftung für Inhalte</h3>
                  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">Haftung für Links</h3>
                  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">Urheberrecht</h3>
                  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
