import { QueryResolvers } from '../__generated__/resolvers-types'

const queries: QueryResolvers = {
  getAllCards: async (_, args, context) => {
    const { pageNo, perPage } = args
    const {
      testData: { cards },
    } = context

    const offsetStart = (pageNo - 1) * perPage
    const offsetEnd = pageNo * perPage

    return {
      paginatedData: cards.slice(offsetStart, offsetEnd),
      paginatedTotal: cards.length,
    }
  },

  getMyCards: async (_, args, context) => {
    const { pageNo, perPage } = args
    const {
      testData: { cards },
    } = context

    // logged in user from context
    const offsetStart = (pageNo - 1) * perPage
    const offsetEnd = pageNo * perPage

    return {
      paginatedData: cards.slice(offsetStart, offsetEnd),
      paginatedTotal: cards.length,
    }
  },
}

export default queries
