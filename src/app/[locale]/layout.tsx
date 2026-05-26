import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { HtmlLang } from '@/components/layout/HtmlLang'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate the incoming locale
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Load messages for the current locale
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* Updates <html lang="..."> client-side for non-default locales */}
      <HtmlLang locale={locale} />

      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] btn-primary btn text-sm"
      >
        {locale === 'en' ? 'Skip to content' : locale === 'fr' ? 'Aller au contenu' : 'Zum Hauptinhalt springen'}
      </a>

      <Navbar />

      <main id="main-content" className="min-h-screen">
        {children}
      </main>

      <Footer />
      <CookieBanner />
    </NextIntlClientProvider>
  )
}
