import { gql } from '../__generated__/gql'

const GET_CARDS = gql(`
  query GetCards {
    getCards {
      id
      value
    }
  }
`)

const GET_MY_CARDS = gql(`
  query GetMyCards {
    getMyCards {
      id
      value
    }
  }
`)

export { GET_CARDS, GET_MY_CARDS }
