import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

/**
 * SC Metropolis 25 Berlin — Sanity CMS Configuration
 *
 * Setup instructions:
 * 1. Create a free project at sanity.io
 * 2. Copy your Project ID from the Sanity dashboard
 * 3. Replace 'YOUR_PROJECT_ID' below with your actual Project ID
 * 4. Run: npx sanity@latest init --env  (to set up environment variables)
 */
export default defineConfig({
  name: 'sc-metropolis-25',
  title: 'SC Metropolis 25 Berlin — CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v6iza3vy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('SC Metropolis 25 Berlin')
          .items([
            S.listItem()
              .title('📰 News & Berichte')
              .child(S.documentTypeList('news').title('News & Berichte')),
            S.listItem()
              .title('⚽ Spiele & Ergebnisse')
              .child(S.documentTypeList('fixture').title('Spiele & Ergebnisse')),
            S.listItem()
              .title('👤 Spieler & Kader')
              .child(S.documentTypeList('player').title('Spieler & Kader')),
            S.listItem()
              .title('🤝 Sponsoren & Partner')
              .child(S.documentTypeList('sponsor').title('Sponsoren & Partner')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
