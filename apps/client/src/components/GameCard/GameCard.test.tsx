import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card as CardType } from '../../__generated__/graphql'
import GameCard from './GameCard'

describe('GameCard', () => {
  it('renders component', async () => {
    // Arrange
    const cardData: CardType = { id: 1, value: 5 }

    // Act
    render(<GameCard data={cardData} />)

    // Assert
    expect(await screen.findByText(cardData.value ?? '')).toBeInTheDocument()
  })
})
