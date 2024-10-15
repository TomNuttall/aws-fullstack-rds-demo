import {
  mysqlTable,
  int,
  bigint,
  varchar,
  boolean,
  timestamp,
  unique,
} from 'drizzle-orm/mysql-core'

export const card = mysqlTable('Card', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 256 }).notNull(),
  value: int('value').notNull(),
  shiny: boolean('shiny'),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').onUpdateNow(),
})

export const user = mysqlTable('User', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  userHash: varchar('userHash', { length: 256 }),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').onUpdateNow(),
})

export const cardToUser = mysqlTable(
  'CardToUser',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    cardId: bigint('cardId', { mode: 'number' }).references(() => card.id, {
      onDelete: 'cascade',
    }),
    userId: bigint('userId', { mode: 'number' }).references(() => user.id, {
      onDelete: 'cascade',
    }),
  },
  (t) => ({
    unq: unique().on(t.cardId, t.userId),
  }),
)
