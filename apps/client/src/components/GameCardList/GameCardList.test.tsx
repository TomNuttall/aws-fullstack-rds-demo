import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card as CardType } from '../../__generated__/graphql'
import GameCardList from './GameCardList'

describe('GameCardList', () => {
  it('renders component', async () => {
    // Arrange
    const cardData: CardType[] = [{ id: 1, value: 5 }]

    // Act
    render(<GameCardList cardsData={cardData} />)

    // Assert
    expect(await screen.findAllByRole('listitem')).toHaveLength(1)
  })
})
