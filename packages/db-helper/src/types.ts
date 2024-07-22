import { InferInsertModel } from 'drizzle-orm'
import { user, card, cardToUser } from './schema/tables.sql.js'

export type User = InferInsertModel<typeof user>
export type Card = InferInsertModel<typeof card>
export type CardToUser = InferInsertModel<typeof cardToUser>
