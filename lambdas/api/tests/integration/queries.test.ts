import { Card } from '../../src/__generated__/resolvers-types'
import { Context } from '../../src/context/context'
import queries from '../../src/resolvers/queries'
import { mockedContext } from '../mocks/mocks'

describe('Query Resolvers', () => {
  describe('GetAllCards', () => {
    it('returns paginated cards', async () => {
      if (!queries.getCards) return

      // Arrange
      const pageNo = 2
      const perPage = 10
      const cardFixture: Card = mockedContext.testData.cards[perPage]

      //
      const parent = {}
      const args = { pageNo, perPage }
      const context: Context = { ...mockedContext }

      // Act
      // @ts-ignore
      const res = await queries.getCards(parent, args, context)

      // Assert
      expect(res.paginatedTotal).toBe(mockedContext.testData.cards.length)
      expect(res.paginatedData).toHaveLength(perPage)
      expect(res.paginatedData[0]).toMatchObject(cardFixture)
    })
  })

  describe('GetMyCards', () => {
    it('returns my paginated cards', async () => {
      if (!queries.getMyCards) return

      // Arrange
      const pageNo = 2
      const perPage = 7
      const cardFixture: Card = mockedContext.testData.cards[perPage]

      //
      const parent = {}
      const args = { pageNo, perPage }
      const context: Context = { ...mockedContext }

      // Act
      // @ts-ignore
      const res = await queries.getMyCards(parent, args, context)

      // Assert
      expect(res.paginatedTotal).toBe(mockedContext.testData.cards.length)
      expect(res.paginatedData).toHaveLength(perPage)
      expect(res.paginatedData[0]).toMatchObject(cardFixture)
    })
  })
})
