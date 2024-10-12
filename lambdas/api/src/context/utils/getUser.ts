import { type MySql2Database } from 'drizzle-orm/mysql2'
import { eq, asc } from 'drizzle-orm'
import { schema } from '@tn/db-helper'

export const getUser = async (
  hash: string,
  orm: MySql2Database<typeof schema>,
): Promise<number> => {
  const [user] = await orm
    .select()
    .from(schema.user)
    .where(eq(schema.user.userHash, hash))

  let id = user?.id
  if (!id) {
    const [{ insertId }] = await orm
      .insert(schema.user)
      .values({ userHash: hash })
    id = insertId
  }

  return id
}
