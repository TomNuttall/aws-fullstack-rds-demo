import { Card } from '../../src/__generated__/resolvers-types'
import { Context } from '../../src/context/context'
import queries from '../../src/resolvers/queries'
import { mockedContext } from '../mocks/mocks'

describe('Query Resolvers', () => {
  describe('GetCards', () => {
    it('returns all cards', async () => {
      if (!queries.getCards) return

      // Arrange
      const cardFixture: Card = { id: 1, value: 1 }

      //
      const parent = {}
      const args = {}
      const context: Context = {
        ...mockedContext,
        testData: { cards: [cardFixture] },
      }

      // Act
      // @ts-ignore
      const res = await queries.getCards(parent, args, context)

      // Assert
      expect(res).toHaveLength(1)
      expect(res[0]).toMatchObject(cardFixture)
    })
  })

  describe('GetMyCards', () => {
    it('returns all my cards', async () => {
      if (!queries.getMyCards) return

      // Arrange
      const cardFixture: Card = { id: 1, value: 1 }

      //
      const parent = {}
      const args = {}
      const context: Context = {
        ...mockedContext,
        testData: { cards: [cardFixture] },
      }

      // Act
      // @ts-ignore
      const res = await queries.getMyCards(parent, args, context)

      // Assert
      expect(res).toHaveLength(1)
      expect(res[0]).toMatchObject(cardFixture)
    })
  })
})
