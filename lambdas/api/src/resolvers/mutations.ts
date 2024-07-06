import { Card, MutationResolvers } from '../__generated__/resolvers-types'

const mutations: MutationResolvers = {
  updateCard: async (parent, args, context, info) => {
    const { cardId, value } = args

    const card: Card = { id: cardId, value }
    return [card]
  },
}

export default mutations
