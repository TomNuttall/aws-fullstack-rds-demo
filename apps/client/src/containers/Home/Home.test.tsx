import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { GET_ALL_CARDS } from '../../graphql/queries'
import { GetAllCardsQuery } from '../../__generated__/graphql'
import { PER_PAGE } from './Home'
import Home from './Home'

describe('Home', () => {
  it('renders correctly with call to api', async () => {
    // Arrange
    const getCardsMock: MockedResponse<GetAllCardsQuery> = {
      request: {
        query: GET_ALL_CARDS,
        variables: { pageNo: 1, perPage: PER_PAGE },
      },
      result: {
        data: {
          getAllCards: {
            paginatedData: [
              {
                id: 1,
                name: 'Card Name',
                value: 5,
                isShiny: true,
                isFavourite: true,
              },
            ],
            paginatedTotal: 1,
          },
        },
      },
    }

    const mocks = [getCardsMock]

    // Act
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
    )

    // Assert
    expect(await screen.findByTestId('home')).toBeInTheDocument()
  })
})
