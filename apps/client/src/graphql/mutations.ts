import { gql } from '../__generated__/gql'

export const FAVOURITE_CARD = gql(`
  mutation FavouriteCard($cardId: Int!) {
    favouriteCard(cardId: $cardId) {
      id
      name
      value
      isShiny
      isFavourite
    }
  }
`)
