import { eq, and } from 'drizzle-orm'
import { schema } from '@tn/db-helper'
import { MutationResolvers } from '../__generated__/resolvers-types.js'

const mutations: MutationResolvers = {
  favouriteCard: async (_, { cardId }, { orm, userId }) => {
    const [res] = await orm.insert(schema.cardToUser).values({ cardId, userId })
    //console.log(res)

    // const card = await orm.select().from(schema.cardsView)
    // console.log(card)
    return null
  },

  unfavouriteCard: async (_, { cardId }, { orm, userId }) => {
    await orm
      .delete(schema.cardToUser)
      .where(
        and(
          eq(schema.cardToUser.cardId, cardId),
          eq(schema.cardToUser.userId, userId),
        ),
      )

    return null
  },
}

export default mutations
