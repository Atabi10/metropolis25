import { defineType, defineField } from 'sanity'

export const playerSchema = defineType({
  name: 'player',
  title: 'Spieler & Kader',
  type: 'document',
  icon: () => '👤',
  fields: [
    defineField({
      name: 'name',
      title: 'Vollständiger Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'number',
      title: 'Trikotnummer',
      type: 'number',
      validation: (rule) => rule.min(1).max(99),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          { title: 'Torwart', value: 'torwart' },
          { title: 'Innenverteidiger', value: 'iv' },
          { title: 'Außenverteidiger', value: 'av' },
          { title: 'Defensives Mittelfeld', value: 'dm' },
          { title: 'Zentrales Mittelfeld', value: 'zm' },
          { title: 'Offensives Mittelfeld', value: 'om' },
          { title: 'Außenbahn', value: 'ab' },
          { title: 'Stürmer', value: 'st' },
        ],
      },
    }),
    defineField({
      name: 'team',
      title: 'Mannschaft',
      type: 'string',
      options: {
        list: [
          { title: '1. Mannschaft', value: 'erste' },
          { title: 'U23', value: 'u23' },
          { title: 'U18', value: 'u18' },
          { title: 'U16', value: 'u16' },
          { title: 'U14', value: 'u14' },
          { title: 'U12', value: 'u12' },
          { title: 'U10', value: 'u10' },
          { title: 'U8', value: 'u8' },
        ],
      },
    }),
    defineField({
      name: 'photo',
      title: 'Spielerfoto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'nationality',
      title: 'Nationalität',
      type: 'string',
    }),
    defineField({
      name: 'birthYear',
      title: 'Geburtsjahr',
      type: 'number',
    }),
    defineField({
      name: 'joinedYear',
      title: 'Im Verein seit (Jahr)',
      type: 'number',
    }),
    defineField({
      name: 'captain',
      title: 'Mannschaftskapitän?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'active',
      title: 'Aktiv im Kader?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      number: 'number',
      position: 'position',
      team: 'team',
      media: 'photo',
    },
    prepare({ title, number, position, team }) {
      return {
        title: `${number ? `#${number} ` : ''}${title}`,
        subtitle: `${team ?? ''} — ${position ?? ''}`,
      }
    },
  },
})
