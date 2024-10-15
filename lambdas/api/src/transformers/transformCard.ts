import { Card } from '../__generated__/resolvers-types'

interface CardRow {
  id: number
  name: string
  value: number
  isShiny: boolean
  userId: number
}

export function transformCard(rows: CardRow[]): Card[] {
  return rows.map((row) => {
    const isFavourite = row.userId !== null
    return {
      id: row.id,
      name: row.name,
      value: row.value,
      isShiny: row.isShiny,
      isFavourite,
    }
  })
}
