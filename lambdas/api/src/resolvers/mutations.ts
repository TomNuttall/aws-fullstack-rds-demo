import { eq, and } from 'drizzle-orm'
import { schema } from '@tn/db-helper'
import { cardsView } from '../schemas/views.sql'
import { MutationResolvers } from '../__generated__/resolvers-types.js'

const mutations: MutationResolvers = {
  favouriteCard: async (_, { cardId }, { orm, userId }) => {
    await orm
      .insert(schema.cardToUser)
      .values({ cardId: cardId, userId: userId })

    const [card] = await orm
      .select()
      .from(cardsView)
      .where(eq(cardsView.cardId, cardId))

    return {
      id: card.id,
      name: card.cardName,
      value: card.cardValue,
      shiny: card.isShiny,
    }
  },

  unfavouriteCard: async (_, { cardId }, { orm, userId }) => {
    const [card] = await orm
      .select()
      .from(cardsView)
      .where(and(eq(cardsView.cardId, cardId), eq(cardsView.userId, userId)))

    await orm
      .delete(schema.cardToUser)
      .where(
        and(
          eq(schema.cardToUser.cardId, cardId),
          eq(schema.cardToUser.userId, userId),
        ),
      )

    return {
      id: card.id,
      name: card.cardName,
      value: card.cardValue,
      shiny: card.isShiny,
    }
  },
}

export default mutations
