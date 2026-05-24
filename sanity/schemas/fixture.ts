import { defineType, defineField } from 'sanity'

export const fixtureSchema = defineType({
  name: 'fixture',
  title: 'Spiele & Ergebnisse',
  type: 'document',
  icon: () => '⚽',
  fields: [
    defineField({
      name: 'homeTeam',
      title: 'Heimmannschaft',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'awayTeam',
      title: 'Gastmannschaft',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isHomeGame',
      title: 'Heimspiel von SC Metropolis 25?',
      type: 'boolean',
      description: 'Ist SC Metropolis 25 die Heimmannschaft?',
      initialValue: true,
    }),
    defineField({
      name: 'date',
      title: 'Datum & Uhrzeit',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Spielstätte',
      type: 'string',
      description: 'Name und Adresse des Sportplatzes',
    }),
    defineField({
      name: 'competition',
      title: 'Wettbewerb',
      type: 'string',
      options: {
        list: [
          { title: 'Kreisliga A', value: 'Kreisliga A' },
          { title: 'Kreisliga B', value: 'Kreisliga B' },
          { title: 'Kreisliga C', value: 'Kreisliga C' },
          { title: 'Pokal', value: 'Pokal' },
          { title: 'Freundschaftsspiel', value: 'Freundschaftsspiel' },
          { title: 'Turnier', value: 'Turnier' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Geplant (Upcoming)', value: 'upcoming' },
          { title: 'Live', value: 'live' },
          { title: 'Beendet', value: 'finished' },
          { title: 'Abgesagt', value: 'cancelled' },
          { title: 'Verschoben', value: 'postponed' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'homeScore',
      title: 'Tore Heimmannschaft',
      type: 'number',
      description: 'Nur ausfüllen wenn das Spiel beendet ist',
    }),
    defineField({
      name: 'awayScore',
      title: 'Tore Gastmannschaft',
      type: 'number',
      description: 'Nur ausfüllen wenn das Spiel beendet ist',
    }),
    defineField({
      name: 'team',
      title: 'Welches Team?',
      type: 'string',
      options: {
        list: [
          { title: '1. Mannschaft', value: 'erste' },
          { title: 'U23', value: 'u23' },
          { title: 'U18', value: 'u18' },
          { title: 'U16', value: 'u16' },
          { title: 'U14', value: 'u14' },
        ],
      },
      initialValue: 'erste',
    }),
    defineField({
      name: 'matchReport',
      title: 'Spielbericht',
      type: 'text',
      rows: 5,
      description: 'Kurzer Spielbericht (optional)',
    }),
    defineField({
      name: 'scorers',
      title: 'Torschützen',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Namen der Torschützen',
    }),
    defineField({
      name: 'attendance',
      title: 'Zuschauer',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      homeTeam: 'homeTeam',
      awayTeam: 'awayTeam',
      date: 'date',
      homeScore: 'homeScore',
      awayScore: 'awayScore',
      status: 'status',
    },
    prepare({ homeTeam, awayTeam, date, homeScore, awayScore, status }) {
      const score = status === 'finished' ? ` (${homeScore}:${awayScore})` : ''
      return {
        title: `${homeTeam} vs ${awayTeam}${score}`,
        subtitle: date ? new Date(date).toLocaleDateString('de-DE') : 'Datum ausstehend',
      }
    },
  },
  orderings: [
    {
      title: 'Datum (neueste zuerst)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Datum (älteste zuerst)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
