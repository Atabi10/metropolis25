import type { Metadata } from 'next'
import { HeroSection }        from '@/components/home/HeroSection'
import { StatsBar }           from '@/components/ui/StatsBar'
import { ClubIdentitySection }from '@/components/home/ClubIdentitySection'
import { TeamsSection }       from '@/components/home/TeamsSection'
import { FixturesPreview }    from '@/components/home/FixturesPreview'
import { NewsPreview }        from '@/components/home/NewsPreview'
import { SponsorCarousel }    from '@/components/ui/SponsorCarousel'
import { SocialSection }      from '@/components/home/SocialSection'
import { JoinCTASection }     from '@/components/home/JoinCTASection'

export const metadata: Metadata = {
  title: 'SC Metropolis 25 Berlin — Wo Berlin pulsiert, wächst unsere Stärke',
  description:
    'Willkommen beim SC Metropolis 25 Berlin e.V. — Dein Fußballclub aus Lichtenberg. Mitglied werden, Teams entdecken, Spieltage verfolgen.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ClubIdentitySection />
      <TeamsSection />
      <FixturesPreview />
      <NewsPreview />
      <SponsorCarousel />
      <SocialSection />
      <JoinCTASection />
    </>
  )
}
