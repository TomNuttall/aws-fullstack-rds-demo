import { Card } from '../../src/__generated__/resolvers-types'
import { Context } from '../../src/context/context'

export const mockedTestData = {
  cards: new Array(30).fill(0).map((_, idx): Card => {
    return { id: idx, value: idx * 2 }
  }),
}

export const mockedContext: Context = {
  testData: mockedTestData,
  userId: undefined,
  isLoggedIn: false,
}
