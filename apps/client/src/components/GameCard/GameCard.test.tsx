import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Card } from '../../__generated__/graphql'
import GameCard from './GameCard'

describe('GameCard', () => {
  it('renders component', async () => {
    // Arrange
    const cardData: Card = {
      id: 1,
      name: 'Card Name',
      value: 5,
      isShiny: true,
      isFavourite: true,
    }
    const onFavouriteCard = vi.fn()

    // Act
    render(<GameCard data={cardData} onFavouriteCard={onFavouriteCard} />)

    // Assert
    expect(await screen.findByText(cardData.name ?? '')).toBeInTheDocument()
  })

  it('calls onFavourite when button pressed', async () => {
    // Arrange
    const cardData: Card = {
      id: 1,
      name: '',
      value: 5,
      isShiny: true,
      isFavourite: true,
    }
    const onFavouriteCard = vi.fn()

    // Act
    render(<GameCard data={cardData} onFavouriteCard={onFavouriteCard} />)

    const btnElement = await screen.findByRole('button')
    await userEvent.click(btnElement)

    // Assert
    expect(onFavouriteCard).toHaveBeenCalled()
  })
})
