import { Card, MutationResolvers } from '../__generated__/resolvers-types'

const mutations: MutationResolvers = {
  favouriteCard: async (_, args, context) => {
    const { cardId } = args
    // logged in user from contexr

    const card: Card = { id: cardId, value: 5 }
    return card
  },

  unfavouriteCard: async (_, args, context) => {
    const { cardId } = args
    // logged in user from contexr

    const card: Card = { id: cardId, value: 5 }
    return card
  },
}

export default mutations
