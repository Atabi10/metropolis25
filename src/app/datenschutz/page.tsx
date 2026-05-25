import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — SC Metropolis 25 Berlin',
  description: 'Datenschutzerklärung von Sport-Club Metropolis 25 Berlin e.V. gemäß DSGVO.',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="py-16 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Rechtliches</div>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase">Datenschutz&shy;erklärung</h1>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6 text-text-secondary text-sm leading-relaxed">

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">Allgemeine Hinweise</h3>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">Datenerfassung auf dieser Website</h3>
                  <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber Sport-Club Metropolis 25 Berlin e.V. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">2. Verantwortliche Stelle</h2>
              <div className="space-y-1">
                <p className="text-white font-semibold">Sport-Club Metropolis 25 Berlin e.V.</p>
                <p>[Adresse]</p>
                <p>E-Mail: <a href="mailto:kontakt@sc-metropolis25.de" className="text-gold hover:underline">kontakt@sc-metropolis25.de</a></p>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">3. Erhobene Daten</h2>
              <p className="mb-4">Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
              <ul className="space-y-2">
                {['Name und Kontaktdaten (bei Kontaktanfragen)', 'E-Mail-Adresse (bei Newsletter-Anmeldung)', 'Geburtsjahr (bei Anmeldung Probetraining)', 'IP-Adresse (technisch notwendig)', 'Nutzungsdaten (Seiten-Aufrufe, sofern Cookies akzeptiert)'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">4. Ihre Rechte</h2>
              <p className="mb-4">Sie haben folgende Rechte gemäß DSGVO:</p>
              <ul className="space-y-2">
                {['Recht auf Auskunft (Art. 15 DSGVO)', 'Recht auf Berichtigung (Art. 16 DSGVO)', 'Recht auf Löschung (Art. 17 DSGVO)', 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)', 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)', 'Widerspruchsrecht (Art. 21 DSGVO)'].map(r => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-4">Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:datenschutz@sc-metropolis25.de" className="text-gold hover:underline">datenschutz@sc-metropolis25.de</a></p>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">5. Cookies</h2>
              <p className="mb-4">Diese Website verwendet Cookies. Bei Ihrem ersten Besuch werden Sie um Ihre Zustimmung gebeten. Sie können Cookies in Ihren Browser-Einstellungen jederzeit deaktivieren.</p>
              <p>Weitere Informationen zu den verwendeten Cookies und zur Cookie-Verwaltung finden Sie in unserem Cookie-Banner.</p>
            </div>

            <div className="card p-6">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">6. Kontaktformular</h2>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            </div>

            <div className="card p-6 border-gold/20">
              <h2 className="font-heading text-white text-lg uppercase tracking-wider mb-4">7. Hinweis</h2>
              <p className="text-amber-400/80 text-xs">
                Diese Datenschutzerklärung ist ein Entwurf und muss vor der Veröffentlichung der Website
                von einem Rechtsanwalt geprüft und an die spezifischen Gegebenheiten des Vereins angepasst werden.
                SC Metropolis 25 Berlin e.V. empfiehlt die Konsultation eines Fachanwalts für IT-Recht.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link href="/impressum" className="text-gold hover:underline text-sm">← Zum Impressum</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
