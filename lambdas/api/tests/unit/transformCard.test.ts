import { describe, it, expect } from '@jest/globals'
import { transformCard } from '../../src/transformers/transformCard'

describe('transformCard', () => {
  it('transforms card row', async () => {
    // Arrange
    const cardRow = { id: 1, name: 'Test', value: 1, isShiny: true, userId: 1 }
    const rows = [cardRow]

    // Act
    const res = transformCard(rows)

    // Assert
    expect(res).toMatchObject([
      {
        name: cardRow.name,
        value: cardRow.value,
        isShiny: cardRow.isShiny,
        isFavourite: true,
      },
    ])
  })
})
