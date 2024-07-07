import { gql } from '../__generated__/gql'

const GET_CARD = gql(`
  query GetCard($cardId: Int!) {
    getCard(cardId: $cardId) {
      id
      value
    }
  }
`)

const GET_CARDS = gql(`
  query GetCards {
    getCards {
      id
      value
    }
  }
`)

export { GET_CARD, GET_CARDS }
