import type { Metadata } from 'next'
import { HeroSection }         from '@/components/home/HeroSection'
import { StatsBar }            from '@/components/ui/StatsBar'
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
  title: 'SC Metropolis 25 Berlin e.V. — Wo Berlin pulsiert, wächst unsere Stärke',
  description: 'SC Metropolis 25 ist mehr als ein Fußballverein. Eingetragener, gemeinnütziger Verein aus Berlin-Lichtenberg. Jetzt mitmachen, Probetraining anfragen, Geschichte entdecken.',
}

export default function HomePage() {
  return (
    <>
      {/* Cinematic hero — slogan-first */}
      <HeroSection />

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
      <FixturesPreview />
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
