import {
  mysqlView,
  bigint,
  int,
  boolean,
  varchar,
} from 'drizzle-orm/mysql-core'

export const cardsView = mysqlView('CardsView', {
  id: bigint('id', { mode: 'number' }),
  userId: bigint('id', { mode: 'number' }),
  userName: varchar('userName', { length: 256 }),
  cardId: bigint('id', { mode: 'number' }),
  cardName: varchar('cardName', { length: 256 }).notNull(),
  cardValue: int('cardValue').notNull(),
  isShiny: boolean('isShiny'),
}).existing()
