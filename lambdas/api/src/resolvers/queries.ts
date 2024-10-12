import { eq, asc } from 'drizzle-orm'
import { schema } from '@tn/db-helper'
import { QueryResolvers } from '../__generated__/resolvers-types.js'

const queries: QueryResolvers = {
  getCard: async (_, { cardId }, { orm }) => {
    const [card] = await orm
      .select()
      .from(schema.card)
      .where(eq(schema.card.id, cardId))

    return card
  },

  getAllCards: async (_, { pageNo, perPage, filter }, { orm }) => {
    const cards = await orm
      .select()
      .from(schema.card)
      .orderBy(asc(schema.card.id))
      .limit(perPage)
      .offset((pageNo - 1) * perPage)

    return {
      paginatedData: cards,
      paginatedTotal: 1,
    }
  },
}

export default queries
