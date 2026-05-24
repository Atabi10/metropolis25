import { defineType, defineField } from 'sanity'

export const sponsorSchema = defineType({
  name: 'sponsor',
  title: 'Sponsoren & Partner',
  type: 'document',
  icon: () => '🤝',
  fields: [
    defineField({
      name: 'name',
      title: 'Unternehmensname',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo des Sponsors (empfohlen: weißer/transparenter Hintergrund, min. 400px breit)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tier',
      title: 'Sponsoring-Stufe',
      type: 'string',
      options: {
        list: [
          { title: 'Hauptsponsor', value: 'hauptsponsor' },
          { title: 'Gold-Partner', value: 'gold' },
          { title: 'Silber-Partner', value: 'silber' },
          { title: 'Community-Partner', value: 'community' },
          { title: 'Trikotsponsor', value: 'trikot' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'Link zur Website des Sponsors',
    }),
    defineField({
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 2,
      description: 'Kurze Beschreibung des Sponsors (optional)',
    }),
    defineField({
      name: 'active',
      title: 'Aktiv',
      type: 'boolean',
      description: 'Soll dieser Sponsor auf der Website angezeigt werden?',
      initialValue: true,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Kleinere Zahl = weiter vorne. Hauptsponsor: 1',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tier',
      media: 'logo',
    },
  },
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
})
