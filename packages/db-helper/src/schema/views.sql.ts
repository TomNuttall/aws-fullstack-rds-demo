import {
  mysqlView,
  bigint,
  int,
  boolean,
  varchar,
} from 'drizzle-orm/mysql-core'

export const cardsView = mysqlView('CardsView', {
  id: bigint('id', { mode: 'number' }),
  name: varchar('cardName', { length: 256 }).notNull(),
  value: int('cardValue').notNull(),
  isShiny: boolean('isShiny'),
  userId: bigint('userId', { mode: 'number' }),
}).existing()
