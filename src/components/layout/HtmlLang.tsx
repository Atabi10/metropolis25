'use client'

import { useEffect } from 'react'

/**
 * Updates the <html lang="..."> attribute to match the current locale.
 * The root layout defaults to "de"; this component patches it for EN/FR.
 */
export function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
