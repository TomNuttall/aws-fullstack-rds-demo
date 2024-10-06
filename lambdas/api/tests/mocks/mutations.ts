const FAVOURITE_CARD = `
  mutation FavouriteCard($cardId: Int!) {
    favouriteCard(cardId: $cardId) {
      id
      value
    }
  }
`

const UNFAVOURITE_CARD = `
  mutation UnfavouriteCard($cardId: Int!) {
    unfavouriteCard(cardId: $cardId) {
      id
      value
    }
  }
`

export { FAVOURITE_CARD, UNFAVOURITE_CARD }
