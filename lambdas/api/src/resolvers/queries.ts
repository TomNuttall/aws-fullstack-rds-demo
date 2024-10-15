import { eq, asc } from 'drizzle-orm'
import { schema } from '@tn/db-helper'
import { QueryResolvers } from '../__generated__/resolvers-types.js'
import { transformCard } from '../transformers/transformCard'

const queries: QueryResolvers = {
  getCard: async (_, { cardId }, { orm }) => {
    const rows = await orm.select().from(schema.cardsView).where(
      // @ts-ignore
      eq(schema.cardsView.id, cardId),
    )

    const [card] = transformCard(rows)
    return card
  },

  getAllCards: async (_, { pageNo, perPage, filter }, { orm }) => {
    const rows = await orm
      .select()
      .from(schema.cardsView)
      // @ts-ignore
      .orderBy(asc(schema.cardsView.id))
      .limit(perPage)
      .offset((pageNo - 1) * perPage)

    return {
      paginatedData: transformCard(rows),
      paginatedTotal: 1,
    }
  },
}

export default queries
