import { defineType, defineField } from 'sanity'

export const newsSchema = defineType({
  name: 'news',
  title: 'News & Berichte',
  type: 'document',
  icon: () => '📰',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'Der Titel des Artikels',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'URL-Pfad (Slug)',
      type: 'slug',
      description: 'Wird automatisch aus dem Titel generiert',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
      description: 'Kurze Zusammenfassung (max. 200 Zeichen) — erscheint in Vorschauen',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Vereinsnews', value: 'Vereinsnews' },
          { title: 'Spielberichte', value: 'Spielberichte' },
          { title: 'Akademie', value: 'Akademie' },
          { title: 'Sponsoring', value: 'Sponsoring' },
          { title: 'Community', value: 'Community' },
          { title: 'Transfers', value: 'Transfers' },
          { title: 'Allgemein', value: 'Allgemein' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
      description: 'Empfohlene Größe: 1200 x 675px (16:9)',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Bildbeschreibung (Alt-Text)',
          type: 'string',
          description: 'Beschreibung des Bildes für Suchmaschinen und Barrierefreiheit',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Veröffentlichungsdatum',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Highlight-Artikel',
      type: 'boolean',
      description: 'Soll dieser Artikel auf der Startseite hervorgehoben werden?',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Artikelinhalt',
      type: 'array',
      description: 'Der vollständige Text des Artikels',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Überschrift 2', value: 'h2' },
            { title: 'Überschrift 3', value: 'h3' },
            { title: 'Zitat', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Fett', value: 'strong' },
              { title: 'Kursiv', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Bildbeschreibung' }],
        },
      ],
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      description: 'Name des Autors (optional)',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta-Titel', type: 'string', description: 'Wird in Google angezeigt (max. 60 Zeichen)' }),
        defineField({ name: 'metaDescription', title: 'Meta-Beschreibung', type: 'text', rows: 2, description: 'Wird in Google angezeigt (max. 160 Zeichen)' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
  orderings: [
    {
      title: 'Neueste zuerst',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
