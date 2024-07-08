import { Card, MutationResolvers } from '../__generated__/resolvers-types'

const mutations: MutationResolvers = {
  favouriteCard: async (parent, args, context, info) => {
    const { cardId } = args
    // logged in user from contexr

    const card: Card = { id: cardId, value: 5 }
    return [card]
  },

  unfavouriteCard: async (parent, args, context, info) => {
    const { cardId } = args
    // logged in user from contexr

    const card: Card = { id: cardId, value: 5 }
    return [card]
  },
}

export default mutations
