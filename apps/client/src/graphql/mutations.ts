import { gql } from '../__generated__/gql'

export const FAVOURITE_CARD = gql(`
  mutation FavouriteCard($cardId: Int!) {
    favouriteCard(cardId: $cardId) {
      id
      name
      value
      shiny
    }
  }
`)

export const UNFAVOURITE_CARD = gql(`
  mutation UnfavouriteCard($cardId: Int!) {
    unfavouriteCard(cardId: $cardId) {
      id
      name
      value
      shiny
    }
  }
`)
