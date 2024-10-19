import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from '../../__generated__/graphql'
import GameCardList from './GameCardList'

describe('GameCardList', () => {
  it('renders component', async () => {
    // Arrange
    const cardData: Card[] = [
      { id: 1, name: 'Card 1', value: 5, isShiny: true, isFavourite: true },
      { id: 2, name: 'Card 2', value: 10, isShiny: true, isFavourite: true },
    ]
    const onFavouriteCard = vi.fn()

    // Act
    render(
      <GameCardList cardsData={cardData} onFavouriteCard={onFavouriteCard} />,
    )

    // Assert
    expect(await screen.findAllByRole('listitem')).toHaveLength(2)
  })
})
