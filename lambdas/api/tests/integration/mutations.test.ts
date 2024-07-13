import {
  Card,
  MutationFavouriteCardArgs,
  MutationUnfavouriteCardArgs,
} from '../../src/__generated__/resolvers-types'
import { Context } from '../../src/context/context'
import mutations from '../../src/resolvers/mutations'
import { mockedContext } from '../mocks/mocks'

describe('Mutation Resolvers', () => {
  describe('FavouriteCard', () => {
    it('favourites a card', async () => {
      if (!mutations.favouriteCard) return

      // Arrange
      const cardId = 1
      const cardFixture: Card = { id: cardId, value: 1 }

      //
      const parent = {}
      const args: MutationFavouriteCardArgs = { cardId }
      const context: Context = {
        ...mockedContext,
        testData: { cards: [cardFixture] },
      }

      // Act
      // @ts-ignore
      const res = await mutations.favouriteCard(parent, args, context)

      // Assert
      expect(res).toMatchObject({ id: cardId, value: 5 })
    })
  })

  describe('UnfavouriteCard', () => {
    it('unfavourites a card', async () => {
      if (!mutations.unfavouriteCard) return

      // Arrange
      const cardId = 1
      const cardFixture: Card = { id: cardId, value: 1 }

      //
      const parent = {}
      const args: MutationUnfavouriteCardArgs = { cardId }
      const context: Context = {
        ...mockedContext,
        testData: { cards: [cardFixture] },
      }

      // Act
      // @ts-ignore
      const res = await mutations.unfavouriteCard(parent, args, context)

      // Assert
      expect(res).toMatchObject({ id: cardId, value: 5 })
    })
  })
})
