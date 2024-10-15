import { eq, and } from 'drizzle-orm'
import { schema } from '@tn/db-helper'
import { MutationResolvers } from '../__generated__/resolvers-types.js'
import { transformCard } from '../transformers/transformCard'

const mutations: MutationResolvers = {
  favouriteCard: async (_, { cardId }, { orm, userId }) => {
    try {
      await orm
        .insert(schema.cardToUser)
        .values({ cardId: cardId, userId: userId })
    } catch (e) {
      console.error(e)
    }

    const rows = await orm
      .select()
      .from(schema.cardsView)
      .where(
        and(
          // @ts-ignore
          eq(schema.cardsView.id, cardId),
          // @ts-ignore
          eq(schema.cardsView.userId, userId),
        ),
      )

    const [card] = transformCard(rows)
    return card
  },

  unfavouriteCard: async (_, { cardId }, { orm, userId }) => {
    const rows = await orm
      .select()
      .from(schema.cardsView)
      .where(
        and(
          // @ts-ignore
          eq(schema.cardsView.id, cardId),
          // @ts-ignore
          eq(schema.cardsView.userId, userId),
        ),
      )

    await orm.delete(schema.cardToUser).where(
      and(
        // @ts-ignore
        eq(schema.cardToUser.cardId, cardId),
        // @ts-ignore
        eq(schema.cardToUser.userId, userId),
      ),
    )

    const [card] = transformCard(rows)
    return card
  },
}

export default mutations
