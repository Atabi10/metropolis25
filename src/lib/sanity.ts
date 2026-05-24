import { createClient } from 'next-sanity'
import imageUrlBuilder  from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// ─── SANITY CLIENT ───────────────────────────────────────────────────────────
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v6iza3vy',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// ─── IMAGE URL BUILDER ───────────────────────────────────────────────────────
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ─── QUERIES ─────────────────────────────────────────────────────────────────

/** Fetch all news articles (newest first) */
export async function getAllNews(limit = 20) {
  return sanityClient.fetch(`
    *[_type == "news"] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      featured,
      mainImage { asset->{url}, alt }
    }
  `)
}

/** Fetch single news article by slug */
export async function getNewsBySlug(slug: string) {
  return sanityClient.fetch(`
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      featured,
      mainImage { asset->{url}, alt },
      body,
      author,
      tags
    }
  `, { slug })
}

/** Fetch fixtures (upcoming first, then past) */
export async function getFixtures(status?: 'upcoming' | 'finished' | 'live') {
  const filter = status ? `&& status == "${status}"` : ''
  return sanityClient.fetch(`
    *[_type == "fixture" ${filter}] | order(date desc) {
      _id,
      homeTeam,
      awayTeam,
      isHomeGame,
      date,
      venue,
      competition,
      status,
      homeScore,
      awayScore,
      team
    }
  `)
}

/** Fetch active sponsors */
export async function getSponsors() {
  return sanityClient.fetch(`
    *[_type == "sponsor" && active == true] | order(sortOrder asc) {
      _id,
      name,
      logo { asset->{url} },
      tier,
      website,
      description
    }
  `)
}

/** Fetch players for a specific team */
export async function getPlayersByTeam(team: string) {
  return sanityClient.fetch(`
    *[_type == "player" && team == $team && active == true] | order(number asc) {
      _id,
      name,
      number,
      position,
      nationality,
      birthYear,
      captain,
      photo { asset->{url} }
    }
  `, { team })
}
