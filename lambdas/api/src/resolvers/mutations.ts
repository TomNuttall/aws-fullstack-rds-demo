import { eq, and } from 'drizzle-orm'
import { schema } from '@tn/db-helper'
import { MutationResolvers } from '../__generated__/resolvers-types.js'
import { transformCard } from '../transformers/transformCard'

const mutations: MutationResolvers = {
  favouriteCard: async (_, { cardId }, { orm, userId }) => {
    let rows = await orm
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

    if (rows.length === 0) {
      await orm
        .insert(schema.cardToUser)
        .values({ cardId: cardId, userId: userId })

      rows = await orm
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
    }

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

    if (rows.length === 0) return null

    await orm.delete(schema.cardToUser).where(
      and(
        // @ts-ignore
        eq(schema.cardToUser.cardId, cardId),
        // @ts-ignore
        eq(schema.cardToUser.userId, userId),
      ),
    )

    const [card] = transformCard(rows)
    card.isFavourite = false
    return card
  },
}

export default mutations
