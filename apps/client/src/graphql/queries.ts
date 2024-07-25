import { gql } from '../__generated__/gql'

export const GET_CARD = gql(`
  query GetCard($cardId: Int!) {
    getCard(cardId: $cardId) {
      id
      name
      value
      shiny
    }
  }
`)

export const GET_ALL_CARDS = gql(`
  query GetAllCards($pageNo: Int!, $perPage: Int!, $filter: String) {
    getAllCards(pageNo: $pageNo, perPage: $perPage, filter: $filter) {
      paginatedData {
        id
        name
        value
        shiny
      }
      paginatedTotal
    }
  }
`)
