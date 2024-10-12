import { type MySql2Database } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { Context } from '../../src/context/context'
import queries from '../../src/resolvers/queries'
import { schema } from '@tn/db-helper'
import { getTestDb } from '../mocks/test-db'
import { cardFixture } from '../mocks/fixtures'
import {
  QueryGetAllCardsArgs,
  QueryGetCardArgs,
} from '../../src/__generated__/resolvers-types'

describe('Query Resolvers', () => {
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

  describe('GetCard', () => {
    afterEach(async () => {
      await orm.delete(schema.card)
    })

    it('returns card', async () => {
      // Arrange
      const [{ insertId: cardId }] = await orm
        .insert(schema.card)
        .values(cardFixture)

      //
      const parent = {}
      const args: QueryGetCardArgs = { cardId }
      const context: Context = { orm, userId: 1, isLoggedIn: true }

      // Act
      //@ts-ignore
      const res = await queries.getCard(parent, args, context)

      // Assert
      expect(res).toMatchObject(cardFixture)
    })
  })

  describe('GetAllCards', () => {
    afterEach(async () => {
      await orm.delete(schema.card)
    })

    it('returns paginated cards', async () => {
      // Arrange
      const numCards = 15
      await orm
        .insert(schema.card)
        .values(new Array(numCards).fill(0).map(() => cardFixture))

      const pageNo = 2
      const perPage = 10

      //
      const parent = {}
      const args: QueryGetAllCardsArgs = { pageNo, perPage, filter: null }
      const context: Context = { orm, userId: 1, isLoggedIn: true }

      // Act
      //@ts-ignore
      const res = await queries.getAllCards(parent, args, context)

      // Assert
      expect(res.paginatedData).toHaveLength(numCards - perPage)
      expect(res.paginatedData[0]).toMatchObject(cardFixture)
    })
  })

  it('returns filtered paginated cards', async () => {
    // Arrange
    const numCards = 15
    await orm
      .insert(schema.card)
      .values(new Array(numCards).fill(0).map(() => cardFixture))

    const pageNo = 2
    const perPage = 10
    const filter = ''

    //
    const parent = {}
    const args: QueryGetAllCardsArgs = { pageNo, perPage, filter }
    const context: Context = { orm, userId: 1, isLoggedIn: true }

    // Act
    //@ts-ignore
    const res = await queries.getAllCards(parent, args, context)

    // Assert
    expect(res.paginatedData).toHaveLength(numCards - perPage)
    expect(res.paginatedData[0]).toMatchObject(cardFixture)
  })
})
