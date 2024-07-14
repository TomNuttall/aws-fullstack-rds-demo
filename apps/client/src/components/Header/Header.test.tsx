import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { ClerkProvider } from '@clerk/clerk-react'

describe('Header', () => {
  it.skip('renders sign in', async () => {
    // Arrange

    // Act
    render(
      <ClerkProvider publishableKey="">
        <Header />
      </ClerkProvider>,
    )

    // Assert
    expect(await screen.findByText('Sign in')).toBeInTheDocument()
  })
})
