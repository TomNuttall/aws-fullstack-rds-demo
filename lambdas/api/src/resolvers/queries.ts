import { QueryResolvers } from '../__generated__/resolvers-types'

const queries: QueryResolvers = {
  getCards: async (parent, args, context, info) => {
    const {
      testData: { cards },
    } = context

    return cards
  },

  getCard: async (parent, args, context, info) => {
    const { cardId } = args
    const {
      testData: { cards },
    } = context

    const match = cards.find((card: any) => card.id === cardId)
    return match ?? null
  },
}

export default queries
