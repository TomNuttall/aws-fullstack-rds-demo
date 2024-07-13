import { gql } from '../__generated__/gql'

const GET_ALL_CARDS = gql(`
  query GetAllCards($pageNo: Int!, $perPage: Int!) {
    getAllCards(pageNo: $pageNo, perPage: $perPage) {
      paginatedData {
        id
        value
      }
      paginatedTotal
    }
  }
`)

const GET_MY_CARDS = gql(`
  query GetMyCards($pageNo: Int!, $perPage: Int!) {
    getMyCards(pageNo: $pageNo, perPage: $perPage) {
      paginatedData {
        id
        value
      }
      paginatedTotal
    }
  }
`)

export { GET_ALL_CARDS, GET_MY_CARDS }
