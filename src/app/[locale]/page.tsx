import type { Metadata } from 'next'
import { HeroSection }         from '@/components/home/HeroSection'
import { StatsBar }            from '@/components/ui/StatsBar'
import { NextMatchSection }    from '@/components/home/NextMatchSection'
import { TrustSection }        from '@/components/home/TrustSection'
import { ManifestoSection }    from '@/components/home/ManifestoSection'
import { GeschichteTeaser }    from '@/components/home/GeschichteTeaser'
import { ClubIdentitySection } from '@/components/home/ClubIdentitySection'
import { TeamsSection }        from '@/components/home/TeamsSection'
import { MomenteSection }      from '@/components/home/MomenteSection'
import { FixturesPreview }     from '@/components/home/FixturesPreview'
import { NewsPreview }         from '@/components/home/NewsPreview'
import { SponsorCarousel }     from '@/components/ui/SponsorCarousel'
import { SocialSection }       from '@/components/home/SocialSection'
import { JoinCTASection }      from '@/components/home/JoinCTASection'

export const metadata: Metadata = {
  title: 'SC Metropolis 25 Berlin e.V. | Berliner Amateurfußball 2026/27',
  description:
    'SC Metropolis 25 startet in der Saison 2026/27 in den offiziellen Berliner Spielbetrieb. Erstes Pflichtspiel am 30. August 2026 gegen SG Prenzlauer Berg FZ Kunst. Eingetragener, gemeinnütziger Verein aus Berlin-Lichtenberg.',
}

type Locale = 'de' | 'en' | 'fr'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  const locale = (['de', 'en', 'fr'].includes(raw) ? raw : 'de') as Locale

  return (
    <>
      {/* Cinematic hero — slogan-first */}
      <HeroSection />

      {/* First official competitive fixture — the headline moment */}
      <NextMatchSection locale={locale} />

      {/* Institutional trust */}
      <StatsBar />
      <TrustSection />

      {/* M25 Manifesto — brand identity */}
      <ManifestoSection />

      {/* The founding story */}
      <GeschichteTeaser />

      {/* Club identity & values */}
      <ClubIdentitySection />

      {/* Teams */}
      <TeamsSection />

      {/* Real footage */}
      <MomenteSection />

      {/* Fixtures & News */}
      <FixturesPreview locale={locale} />
      <NewsPreview />

      {/* Partner der Bewegung */}
      <SponsorCarousel />

      {/* Social */}
      <SocialSection />

      {/* Join CTA */}
      <JoinCTASection />
    </>
  )
}
