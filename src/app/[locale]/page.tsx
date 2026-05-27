import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { HeroSection }         from '@/components/home/HeroSection'
import { StatsBar }            from '@/components/ui/StatsBar'
import { TrustSection }        from '@/components/home/TrustSection'
import { GeschichteTeaser }    from '@/components/home/GeschichteTeaser'
import { ClubIdentitySection } from '@/components/home/ClubIdentitySection'
import { TeamsSection }        from '@/components/home/TeamsSection'
import { MomenteSection }      from '@/components/home/MomenteSection'
import { FixturesPreview }     from '@/components/home/FixturesPreview'
import { NewsPreview }         from '@/components/home/NewsPreview'
import { SponsorCarousel }     from '@/components/ui/SponsorCarousel'
import { SocialSection }       from '@/components/home/SocialSection'
import { JoinCTASection }      from '@/components/home/JoinCTASection'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('hero')
  return {
    title: 'SC Metropolis 25 Berlin e.V. — Wo Berlin pulsiert, wächst unsere Stärke',
    description: 'Eingetragener, gemeinnütziger Fußballclub aus Berlin-Lichtenberg. Jetzt mitmachen, Probetraining anmelden, die Geschichte kennenlernen.',
  }
}

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic hero with real club footage */}
      <HeroSection />

      {/* 2. Trust strip — e.V., §60a, BFV, members */}
      <StatsBar />
      <TrustSection />

      {/* 3. The founding story — made central */}
      <GeschichteTeaser />

      {/* 4. Club identity & values */}
      <ClubIdentitySection />

      {/* 5. Teams */}
      <TeamsSection />

      {/* 6. Real footage — community & training moments */}
      <MomenteSection />

      {/* 7. Fixtures & News */}
      <FixturesPreview />
      <NewsPreview />

      {/* 8. Sponsors & social */}
      <SponsorCarousel />
      <SocialSection />

      {/* 9. Join CTA */}
      <JoinCTASection />
    </>
  )
}
