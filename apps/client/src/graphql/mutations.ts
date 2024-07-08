import { gql } from '../__generated__/gql'

const FAVOURITE_CARD = gql(`
  mutation FavouriteCard($cardId: Int!) {
    favouriteCard(cardId: $cardId) {
      id
      value
    }
  }
`)

const UNFAVOURITE_CARD = gql(`
  mutation UnfavouriteCard($cardId: Int!) {
    unfavouriteCard(cardId: $cardId) {
      id
      value
    }
  }
`)

export { FAVOURITE_CARD, UNFAVOURITE_CARD }
