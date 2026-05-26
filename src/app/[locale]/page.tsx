import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { HeroSection }        from '@/components/home/HeroSection'
import { StatsBar }           from '@/components/ui/StatsBar'
import { TrustSection }       from '@/components/home/TrustSection'
import { ClubIdentitySection }from '@/components/home/ClubIdentitySection'
import { TeamsSection }       from '@/components/home/TeamsSection'
import { FixturesPreview }    from '@/components/home/FixturesPreview'
import { NewsPreview }        from '@/components/home/NewsPreview'
import { SponsorCarousel }    from '@/components/ui/SponsorCarousel'
import { SocialSection }      from '@/components/home/SocialSection'
import { JoinCTASection }     from '@/components/home/JoinCTASection'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('hero')
  return {
    title: `${t('title')} ${t('subtitle')} — ${t('description')}`,
    description: 'Willkommen beim SC Metropolis 25 Berlin e.V. — Dein Fußballclub aus Lichtenberg.',
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <TrustSection />
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
