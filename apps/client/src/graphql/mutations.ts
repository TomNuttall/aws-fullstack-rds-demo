import { gql } from '../__generated__/gql'

const UPDATE_CARD = gql(`
  mutation UpdateCard($cardId: Int!, $value: Int!) {
    updateCard(cardId: $cardId, value: $value) {
      id
      value
    }
  }
`)

export { UPDATE_CARD }
