import { shield, allow, deny } from 'graphql-shield'
import { isAuthenticated } from './rules'

const permissions = shield(
  {
    Query: {
      '*': deny,
      getCards: allow,
      getMyCards: isAuthenticated,
    },
    Mutation: {
      '*': deny,
      favouriteCard: isAuthenticated,
      unfavouriteCard: isAuthenticated,
    },
  },
  { fallbackError: 'Error' },
)

export default permissions
