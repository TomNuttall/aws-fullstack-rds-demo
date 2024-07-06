import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import Home from './Home'

describe('Home', () => {
  it('renders correctly with call to api', async () => {
    // Arrangexw

    // Act
    render(
      <MockedProvider mocks={[]}>
        <Home />
      </MockedProvider>,
    )

    // Assert
    expect(await screen.findByTestId('home')).toBeInTheDocument()
  })
})
