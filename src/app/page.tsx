// Route intercepted by next-intl middleware at runtime.
// All requests to "/" are served by src/app/[locale]/page.tsx via middleware rewriting.
// This file exists only to satisfy Next.js static analysis — it is never rendered in production.
export default function RootPage() {
  return null
}
