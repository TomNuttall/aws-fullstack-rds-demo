import { QueryResolvers } from '../__generated__/resolvers-types'

const queries: QueryResolvers = {
  getCards: async (parent, args, context, info) => {
    const {
      testData: { cards },
    } = context

    return cards
  },

  getMyCards: async (parent, args, context, info) => {
    const {
      testData: { cards },
    } = context

    // logged in user from context
    return cards
  },
}

export default queries
