import { Context } from '../../src/context/context'
import queries from '../../src/resolvers/queries'
import { schema } from '@tn/db-helper'
import { mockedContext } from '../mocks/mocks'

describe('Query Resolvers', () => {
  const cardFixture = { name: 'CardName', value: 10, shiny: false }

  afterEach(async () => {
    await mockedContext.orm.delete(schema.card)
  })

  describe('GetCard', () => {
    it('returns card', async () => {
      // Arrange
      const [entry] = await mockedContext.orm
        .insert(schema.card)
        .values(cardFixture)

      const parent = {}
      const args = { cardId: entry.insertId }
      const context: Context = { ...mockedContext }

      // Act
      //@ts-ignore
      const res = await queries.getCard(parent, args, context)

      // Assert
      expect(res).toMatchObject(cardFixture)
    })
  })

  describe('GetAllCards', () => {
    it('returns paginated cards', async () => {
      // Arrange
      const numCards = 15
      await mockedContext.orm
        .insert(schema.card)
        .values(new Array(numCards).fill(0).map((x) => cardFixture))

      const pageNo = 2
      const perPage = 10

      //
      const parent = {}
      const args = { pageNo, perPage }
      const context: Context = { ...mockedContext }

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
    await mockedContext.orm
      .insert(schema.card)
      .values(new Array(numCards).fill(0).map((x) => cardFixture))

    const pageNo = 2
    const perPage = 10
    const filter = ''

    //
    const parent = {}
    const args = { pageNo, perPage, filter }
    const context: Context = { ...mockedContext }

    // Act
    //@ts-ignore
    const res = await queries.getAllCards(parent, args, context)

    // Assert
    expect(res.paginatedData).toHaveLength(numCards - perPage)
    expect(res.paginatedData[0]).toMatchObject(cardFixture)
  })
})
