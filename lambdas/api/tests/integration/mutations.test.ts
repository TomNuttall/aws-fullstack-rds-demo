import { type MySql2Database } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import {
  MutationFavouriteCardArgs,
  MutationUnfavouriteCardArgs,
} from '../../src/__generated__/resolvers-types'
import { Context } from '../../src/context/context'
import mutations from '../../src/resolvers/mutations'
import { schema } from '@tn/db-helper'
import { getTestDb } from '../mocks/test-db'
import { cardFixture, userFixture } from '../mocks/fixtures'

describe('Mutation Resolvers', () => {
  // Arrange
  let orm: MySql2Database<typeof schema>
  let pool: mysql.Pool

  beforeAll(async () => {
    const testDb = getTestDb()
    orm = testDb.orm
    pool = testDb.poolConnection
  })

  afterAll(async () => {
    pool.end()
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
      expect(res).toMatchObject(cardFixture)
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
      expect(res).toMatchObject(cardFixture)
    })
  })
})
