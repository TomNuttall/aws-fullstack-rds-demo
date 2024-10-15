import { describe, it, expect, afterAll, afterEach } from '@jest/globals'
import { schema, getDbConnection } from '@tn/db-helper'
import { Context } from '../../src/context/context'
import mutations from '../../src/resolvers/mutations'
import { cardFixture, userFixture } from '../mocks/fixtures'
import {
  MutationFavouriteCardArgs,
  MutationUnfavouriteCardArgs,
} from '../../src/__generated__/resolvers-types'

const { orm, poolConnection } = getDbConnection()

describe('Query Resolvers', () => {
  // Arrange
  afterAll(async () => {
    poolConnection.end()
  })

  describe('FavouriteCard', () => {
    afterEach(async () => {
      await orm.delete(schema.card)
      await orm.delete(schema.user)
      await orm.delete(schema.cardToUser)
    })

    it('favourites a card', async () => {
      // Arrange
      const [{ insertId: cardId }] = await orm
        .insert(schema.card)
        .values(cardFixture)
      const [{ insertId: userId }] = await orm
        .insert(schema.user)
        .values(userFixture)

      //
      const parent = {}
      const args: MutationFavouriteCardArgs = { cardId }
      const context: Context = { orm, userId, isLoggedIn: true }

      // Act
      // @ts-ignore
      const res = await mutations.favouriteCard(parent, args, context)

      // Assert
      expect(res).toMatchObject({
        name: cardFixture.name,
        value: cardFixture.value,
        isShiny: cardFixture.shiny,
        isFavourite: true,
      })
    })
  })

  describe('UnfavouriteCard', () => {
    afterEach(async () => {
      await orm.delete(schema.card)
      await orm.delete(schema.user)
      await orm.delete(schema.cardToUser)
    })

    it('unfavourites a card', async () => {
      // Arrange
      const [{ insertId: cardId }] = await orm
        .insert(schema.card)
        .values(cardFixture)
      const [{ insertId: userId }] = await orm
        .insert(schema.user)
        .values(userFixture)
      await orm.insert(schema.cardToUser).values({ cardId, userId })

      //
      const parent = {}
      const args: MutationUnfavouriteCardArgs = { cardId }
      const context: Context = { orm, userId, isLoggedIn: true }

      // Act
      // @ts-ignore
      const res = await mutations.unfavouriteCard(parent, args, context)

      // Assert
      expect(res).toMatchObject({
        name: cardFixture.name,
        value: cardFixture.value,
        isShiny: cardFixture.shiny,
        isFavourite: true,
      })
    })
  })
})
