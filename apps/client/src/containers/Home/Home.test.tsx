import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { GET_CARDS } from '../../graphql/queries'
import { GetCardsQuery } from '../../__generated__/graphql'
import Home from './Home'

describe('Home', () => {
  it('renders correctly with call to api', async () => {
    // Arrange
    const getCardsMock: MockedResponse<GetCardsQuery> = {
      request: {
        query: GET_CARDS,
      },
      result: {
        data: {
          getCards: [{ id: 1, value: 5 }],
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
