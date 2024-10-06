import {
  mysqlView,
  bigint,
  int,
  boolean,
  varchar,
} from 'drizzle-orm/mysql-core'

export const cardsView = mysqlView('CardsView', {
  id: bigint('id', { mode: 'number' }),
  cardId: bigint('cardId', { mode: 'number' }),
  userId: bigint('userId', { mode: 'number' }),
  userName: varchar('userName', { length: 256 }),
  cardName: varchar('cardName', { length: 256 }).notNull(),
  cardValue: int('cardValue').notNull(),
  isShiny: boolean('isShiny'),
}).existing()
