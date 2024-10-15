import { describe, it, expect, afterAll, afterEach } from '@jest/globals'
import { schema, getDbConnection } from '@tn/db-helper'
import { Context } from '../../src/context/context'
import queries from '../../src/resolvers/queries'
import { cardFixture } from '../mocks/fixtures'
import {
  QueryGetAllCardsArgs,
  QueryGetCardArgs,
} from '../../src/__generated__/resolvers-types'

const { orm, poolConnection } = getDbConnection()

describe('Query Resolvers', () => {
  // Arrange
  afterAll(async () => {
    poolConnection.end()
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
      expect(res).toMatchObject({
        name: cardFixture.name,
        value: cardFixture.value,
        isShiny: cardFixture.shiny,
      })
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
      expect(res.paginatedData[0]).toMatchObject({
        name: cardFixture.name,
        value: cardFixture.value,
        isShiny: cardFixture.shiny,
      })
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
    expect(res.paginatedData[0]).toMatchObject({
      name: cardFixture.name,
      value: cardFixture.value,
      isShiny: cardFixture.shiny,
    })
  })
})
