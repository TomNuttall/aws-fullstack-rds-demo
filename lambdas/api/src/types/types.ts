import { Card } from '../__generated__/resolvers-types'

export interface TestData {
  cards: Card[]
}

export interface Context {
  testData: TestData
}
