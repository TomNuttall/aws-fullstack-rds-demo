import { shield, allow, deny } from 'graphql-shield'
import { isAuthenticated } from './rules'

const permissions = shield(
  {
    Query: {
      '*': deny,
      getCard: allow,
      getAllCards: allow,
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
