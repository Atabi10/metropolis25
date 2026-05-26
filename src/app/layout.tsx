import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, Bebas_Neue } from 'next/font/google'
import '@/styles/globals.css'

// ─── FONTS ───────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  weight: '400',
})

// ─── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://sc-metropolis25.de'),
  title: {
    default: 'SC Metropolis 25 Berlin e.V. — Wo Berlin pulsiert, wächst unsere Stärke',
    template: '%s | SC Metropolis 25 Berlin',
  },
  description:
    'Sport-Club Metropolis 25 Berlin e.V. — Der Fußballclub aus Lichtenberg. Mitglied werden, Teams entdecken, Spieltage verfolgen. Die Stärke aus der Hauptstadt.',
  keywords: [
    'SC Metropolis 25 Berlin',
    'Fußballverein Berlin',
    'Fußball Lichtenberg',
    'Jugend Fußball Berlin',
    'Amateur Fußball Berlin',
    'Berliner Fußball',
    'e.V. Fußball Berlin',
    'Football Club Berlin',
    'Berlin football club',
    'youth academy Berlin',
  ],
  authors: [{ name: 'SC Metropolis 25 Berlin e.V.' }],
  creator: 'SC Metropolis 25 Berlin e.V.',
  publisher: 'SC Metropolis 25 Berlin e.V.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['en_US', 'fr_FR'],
    url: 'https://sc-metropolis25.de',
    siteName: 'SC Metropolis 25 Berlin',
    title: 'SC Metropolis 25 Berlin e.V. — Die Stärke aus der Hauptstadt',
    description: 'Der nächste Fußballclub aus Berlin. Urban. Ambitioniert. Authentisch.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SC Metropolis 25 Berlin — Die Stärke aus der Hauptstadt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SC Metropolis 25 Berlin e.V.',
    description: 'Urban. Ambitioniert. Authentisch. — Der Fußballclub aus Berlin.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://sc-metropolis25.de',
    languages: {
      'de-DE': 'https://sc-metropolis25.de',
      'en-US': 'https://sc-metropolis25.de/en',
      'fr-FR': 'https://sc-metropolis25.de/fr',
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0d14' },
    { media: '(prefers-color-scheme: light)', color: '#002855' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// ─── ROOT LAYOUT ────────────────────────────────────────────────────────────
// This is the minimal shell. Navbar, Footer and locale context live in
// src/app/[locale]/layout.tsx which next-intl middleware always routes through.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${oswald.variable} ${bebasNeue.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsOrganization',
              '@id': 'https://sc-metropolis25.de',
              name: 'Sport-Club Metropolis 25 Berlin e.V.',
              alternateName: 'SC Metropolis 25',
              url: 'https://sc-metropolis25.de',
              logo: 'https://sc-metropolis25.de/logo.png',
              foundingDate: '2025',
              sport: 'Soccer',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Berlin',
                addressRegion: 'Berlin',
                addressCountry: 'DE',
              },
              sameAs: [
                'https://www.instagram.com/scmetropolis25',
                'https://www.tiktok.com/@scmetropolis25',
                'https://www.youtube.com/@scmetropolis25',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-dark antialiased">
        {children}
      </body>
    </html>
  )
}
