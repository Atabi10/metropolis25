import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Satzung — SC Metropolis 25 Berlin',
  description: 'Satzung des Sport-Club Metropolis 25 Berlin e.V. (M25 Berlin SC) — beschlossen in der Gründungsversammlung am 26.11.2025.',
  robots: { index: true, follow: true },
}

export default function SatzungPage() {
  return (
    <div className="pt-[var(--nav-height)]">

      {/* Hero */}
      <section className="py-16 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-custom">
          <div className="section-label">Rechtliches</div>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase">Satzung</h1>
          <p className="text-text-secondary mt-3 text-sm">
            Sport-Club Metropolis 25 Berlin e.V. &mdash; beschlossen am 26.11.2025 &middot; zuletzt geändert am 15.02.2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-dark">
        <div className="container-custom max-w-3xl space-y-8">

          {/* Präambel */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">Präambel</h2>
            <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
              <p>
                Der Sport-Club Metropolis 25 Berlin e. V. versteht sich als gemeinnützig orientierter Sportverein, dessen Zweck in der Förderung des Fußballsports sowie in der Pflege und Verbreitung sportlicher Betätigung liegt. Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne der Abgabenordnung.
              </p>
              <p>
                Der Verein hat das Ziel, Personen unabhängig von Herkunft, Alter, Geschlecht oder sozialem Hintergrund den Zugang zum organisierten Fußballsport zu ermöglichen. Er legt besonderen Wert auf die Vermittlung und Einhaltung sportlicher Grundwerte wie Fairness, Respekt, Teamgeist und Disziplin.
              </p>
              <p>
                Ein weiterer Schwerpunkt der Vereinsarbeit ist die Förderung junger Talente sowie die Schaffung geeigneter Rahmenbedingungen für eine kontinuierliche sportliche und soziale Entwicklung der Mitglieder. Der Verein begreift sich als Bestandteil der städtischen Gemeinschaft Berlins und leistet durch seine Tätigkeit einen Beitrag zur Stärkung des gesellschaftlichen Miteinanders.
              </p>
              <p className="border-l-2 border-gold pl-4 italic text-ivory">
                „Wo Berlin pulsiert, wächst unsere Stärke"
              </p>
            </div>
          </div>

          {/* § 1 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 1 Name, Sitz, Geschäftsjahr</h2>
            <ol className="space-y-3 text-text-secondary text-sm leading-relaxed list-none">
              <li><span className="text-white font-semibold">1.</span> Der Verein führt den Namen „Sport-Club Metropolis 25 Berlin". Mit der Eintragung in das Vereinsregister führt er den Zusatz „e.V.". Die Kurzbezeichnung lautet „M25 Berlin SC".</li>
              <li><span className="text-white font-semibold">2.</span> Der Verein hat seinen Sitz in Berlin-Lichtenberg und soll in das Vereinsregister beim Amtsgericht Berlin-Charlottenburg eingetragen werden.</li>
              <li><span className="text-white font-semibold">3.</span> Das Geschäftsjahr ist das Kalenderjahr (1. Januar bis 31. Dezember).</li>
              <li><span className="text-white font-semibold">4.</span> Der Verein kann im rechtsgeschäftlichen Verkehr die Kurzbezeichnung „M25 Berlin SC" verwenden.</li>
            </ol>
          </div>

          {/* § 2 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 2 Zweck, Aufgaben, Gemeinnützigkeit</h2>
            <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke" der Abgabenordnung (§§ 51–68 AO).</p>
              <p>Zweck des Vereins ist die <strong className="text-white">Förderung des Sports im Sinne des § 52 Abs. 2 Nr. 21 AO</strong>, insbesondere des Fußballsports.</p>
              <p>Der Satzungszweck wird insbesondere verwirklicht durch:</p>
              <ul className="ml-4 space-y-2">
                <li>a) die Durchführung eines regelmäßigen Trainings- und Übungsbetriebes im Fußball,</li>
                <li>b) die Teilnahme an offiziellen Wettkämpfen, Ligaspielen und Turnieren,</li>
                <li>c) die Organisation sportlicher Veranstaltungen und Wettbewerbe,</li>
                <li>d) die Förderung des Kinder-, Jugend- und Nachwuchssports,</li>
                <li>e) die Aus- und Weiterbildung sowie den Einsatz von Übungsleiterinnen, Übungsleitern, Trainerinnen und Trainern,</li>
                <li>f) die Durchführung von Maßnahmen zur sportlichen Integration und Teilhabe verschiedener Bevölkerungsgruppen im Rahmen des organisierten Sports,</li>
                <li>g) die Zusammenarbeit mit Sportverbänden und anderen sportlichen Einrichtungen.</li>
              </ul>
              <p><span className="text-white font-semibold">2.</span> Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.</p>
              <p><span className="text-white font-semibold">3.</span> Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins.</p>
              <p><span className="text-white font-semibold">4.</span> Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.</p>
              <p><span className="text-white font-semibold">5.</span> Der Verein ist parteipolitisch und religiös neutral. Er tritt Diskriminierung und extremistischen Bestrebungen entschieden entgegen und fördert eine gleichberechtigte Teilhabe aller Menschen im organisierten Sport.</p>
              <p><span className="text-white font-semibold">6.</span> Der Verein beabsichtigt, Mitglied des Berliner Fußball-Verbandes (BFV) zu werden und erkennt dessen Satzungen und Ordnungen in der jeweils gültigen Fassung an.</p>
            </div>
          </div>

          {/* § 3 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 3 Mitgliedschaft</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Der Verein besteht aus:</p>
              <ul className="ml-4 space-y-1">
                <li>a. Aktiven Mitgliedern (Spielerinnen und Spielern),</li>
                <li>b. Passiven Mitgliedern (Fördermitgliedern),</li>
                <li>c. Ehrenmitgliedern.</li>
              </ul>
              <p><span className="text-white font-semibold">2.</span> Mitglied des Vereins kann jede natürliche Person werden, die die Ziele des Vereins unterstützt.</p>
              <p><span className="text-white font-semibold">3.</span> Bei Minderjährigen ist der Aufnahmeantrag durch die gesetzlichen Vertreter zu stellen.</p>
              <p><span className="text-white font-semibold">4.</span> Über den schriftlichen Aufnahmeantrag entscheidet der Vorstand. Ein abgelehnter Antrag wird schriftlich mitgeteilt; er bedarf einer Begründung.</p>
              <p><span className="text-white font-semibold">5.</span> Die Ehrenmitgliedschaft kann vom Vorstand verliehen werden.</p>
              <p><span className="text-white font-semibold">6.</span> Die Mitgliedschaft ist nicht übertragbar und nicht vererblich.</p>
            </div>
          </div>

          {/* § 4 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 4 Rechte und Pflichten der Mitglieder</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Alle Mitglieder sind berechtigt, an den Veranstaltungen des Vereins teilzunehmen und die Einrichtungen des Vereins zu nutzen.</p>
              <p><span className="text-white font-semibold">2.</span> Stimmberechtigt in der Mitgliederversammlung sind alle aktiven Mitglieder ab 16 Jahren. Jedes stimmberechtigte Mitglied hat eine Stimme. Eine Übertragung des Stimmrechts ist ausgeschlossen.</p>
              <p><span className="text-white font-semibold">3.</span> Jedes Mitglied verpflichtet sich, die Ziele des Vereins zu fördern, die Satzung anzuerkennen und die Beschlüsse der Vereinsorgane zu respektieren.</p>
            </div>
          </div>

          {/* § 5 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 5 Beiträge</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Die Mitglieder zahlen Mitgliedsbeiträge, deren Höhe, Fälligkeit und Zahlungsweise in einer von der Mitgliederversammlung beschlossenen Beitragsordnung festgelegt werden.</p>
              <p><span className="text-white font-semibold">2.</span> Beiträge sind im Voraus zu entrichten.</p>
              <p><span className="text-white font-semibold">3.</span> In begründeten Fällen kann der Vorstand Beiträge ermäßigen, stunden oder erlassen.</p>
            </div>
          </div>

          {/* § 6 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 6 Beendigung der Mitgliedschaft</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Die Mitgliedschaft endet durch Austritt, Ausschluss oder Tod.</p>
              <p><span className="text-white font-semibold">2.</span> Der Austritt ist schriftlich gegenüber dem Vorstand zu erklären und wird zum Ende des laufenden Kalendermonats wirksam.</p>
              <p><span className="text-white font-semibold">3.</span> Ein Mitglied kann ausgeschlossen werden, wenn es schuldhaft in grober Weise gegen die Interessen oder das Ansehen des Vereins verstoßen hat. Der Ausschluss ist schriftlich zu begründen und bekanntzugeben.</p>
              <p><span className="text-white font-semibold">4.</span> Mit Beendigung der Mitgliedschaft erlöschen alle Ansprüche gegenüber dem Verein. Eine Rückzahlung von Beiträgen ist ausgeschlossen.</p>
            </div>
          </div>

          {/* § 7 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 7 Organe des Vereins</h2>
            <div className="space-y-2 text-text-secondary text-sm leading-relaxed">
              <p>Die Organe des Vereins sind:</p>
              <ul className="ml-4 space-y-1">
                <li>a. die Mitgliederversammlung</li>
                <li>b. der Vorstand.</li>
              </ul>
            </div>
          </div>

          {/* § 8 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 8 Vorstand</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Der Vorstand besteht aus:</p>
              <ul className="ml-4 space-y-1">
                <li>a. dem 1. Vorsitzenden,</li>
                <li>b. dem 2. Vorsitzenden,</li>
                <li>c. dem Schatzmeister,</li>
                <li>d. dem Sportdirektor.</li>
              </ul>
              <p><span className="text-white font-semibold">2.</span> Vorstand im Sinne des § 26 BGB sind der 1. Vorsitzende und der 2. Vorsitzende. Beide sind jeweils alleinvertretungsberechtigt.</p>
              <p><span className="text-white font-semibold">3.</span> Der Vorstand wird von der Mitgliederversammlung für die Dauer von zwei Jahren gewählt. Eine Wiederwahl ist zulässig.</p>
              <p><span className="text-white font-semibold">4.</span> Der Vorstand bleibt bis zur Neuwahl im Amt.</p>
              <p><span className="text-white font-semibold">5.</span> Der Vorstand kann sich eine Geschäftsordnung geben, in der Aufgabenverteilung und Verfahren geregelt werden.</p>
            </div>
          </div>

          {/* § 9 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 9 Zuständigkeit und Arbeitsweise des Vorstands</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Der Vorstand führt die laufenden Geschäfte des Vereins und setzt die Beschlüsse der Mitgliederversammlung um.</p>
              <p><span className="text-white font-semibold">2.</span> Der Vorstand ist beschlussfähig, wenn mindestens die Hälfte seiner Mitglieder anwesend ist. Beschlüsse werden mit einfacher Mehrheit gefasst.</p>
              <p><span className="text-white font-semibold">3.</span> Der Vorstand kann Aufgaben auf Ausschüsse oder einzelne Mitglieder übertragen.</p>
              <p><span className="text-white font-semibold">4.</span> Über Vorstandssitzungen ist ein Protokoll zu führen.</p>
            </div>
          </div>

          {/* § 10 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 10 Mitgliederversammlung</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Die ordentliche Mitgliederversammlung findet einmal jährlich statt.</p>
              <p><span className="text-white font-semibold">2.</span> Eine außerordentliche Mitgliederversammlung ist einzuberufen, wenn das Interesse des Vereins dies erfordert oder wenn mindestens ein Drittel der Mitglieder dies schriftlich verlangt.</p>
              <p><span className="text-white font-semibold">3.</span> Die Einladung erfolgt schriftlich oder per E-Mail unter Angabe der Tagesordnung mit einer Frist von mindestens zwei Wochen. Für die Fristwahrung ist der Zeitpunkt der Absendung maßgeblich.</p>
              <p><span className="text-white font-semibold">4.</span> Anträge zur Tagesordnung sind mindestens eine Woche vor der Versammlung schriftlich einzureichen. Dringlichkeitsanträge können mit einfacher Mehrheit zugelassen werden.</p>
              <p><span className="text-white font-semibold">5.</span> Die Mitgliederversammlung wird vom 1. Vorsitzenden oder einem seiner Vertreter geleitet.</p>
              <p><span className="text-white font-semibold">6.</span> Die Mitgliederversammlung ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig.</p>
            </div>
          </div>

          {/* § 11 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 11 Beschlussfassung der Mitgliederversammlung</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Beschlüsse werden mit einfacher Mehrheit der abgegebenen Stimmen gefasst.</p>
              <p><span className="text-white font-semibold">2.</span> Satzungsänderungen bedürfen einer Mehrheit von zwei Dritteln der anwesenden stimmberechtigten Mitglieder.</p>
              <p><span className="text-white font-semibold">3.</span> Über die Mitgliederversammlung ist ein Protokoll anzufertigen, das vom Versammlungsleiter und dem Protokollführer zu unterzeichnen ist.</p>
              <p><span className="text-white font-semibold">4.</span> Abstimmungen erfolgen offen, sofern nicht ein Mitglied geheime Abstimmung beantragt.</p>
            </div>
          </div>

          {/* § 12 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 12 Kassenprüfung</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Die Mitgliederversammlung wählt zwei Kassenprüfer für die Dauer von zwei Jahren.</p>
              <p><span className="text-white font-semibold">2.</span> Die Kassenprüfer dürfen nicht dem Vorstand angehören.</p>
              <p><span className="text-white font-semibold">3.</span> Sie prüfen die Ordnungsmäßigkeit der Buchführung und berichten schriftlich und mündlich der Mitgliederversammlung.</p>
              <p><span className="text-white font-semibold">4.</span> Sie beantragen bei ordnungsgemäßer Führung die Entlastung des Vorstands.</p>
            </div>
          </div>

          {/* § 13 */}
          <div className="card p-8">
            <h2 className="font-heading text-gold text-lg uppercase tracking-wider mb-6">§ 13 Auflösung des Vereins</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p><span className="text-white font-semibold">1.</span> Die Auflösung des Vereins kann nur in einer zu diesem Zweck einberufenen Mitgliederversammlung beschlossen werden. Zur Auflösung ist eine Mehrheit von drei Vierteln der abgegebenen gültigen Stimmen erforderlich.</p>
              <p><span className="text-white font-semibold">2.</span> Bei Auflösung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an eine juristische Person des öffentlichen Rechts oder eine andere steuerbegünstigte Körperschaft zur Verwendung für die Förderung des Sports.</p>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center text-text-muted text-xs py-4 border-t border-dark-border">
            Beschlossen in der Gründungsversammlung am 26.11.2025 in Berlin. Zuletzt geändert durch Beschluss der Mitgliederversammlung vom 15.02.2026.
          </div>

        </div>
      </section>
    </div>
  )
}
