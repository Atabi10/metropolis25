import { newsSchema }    from './news'
import { fixtureSchema } from './fixture'
import { sponsorSchema } from './sponsor'
import { playerSchema }  from './player'

// Export all schemas for Sanity CMS
export const schemaTypes = [
  newsSchema,
  fixtureSchema,
  sponsorSchema,
  playerSchema,
]
