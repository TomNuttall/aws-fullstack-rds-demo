import { eq } from 'drizzle-orm'
import { schema } from '@tn/db-helper'

// @ts-ignore
export const getUser = async (hash: string, orm: any): Promise<number> => {
  const [user] = await orm
    .select()
    .from(schema.user)
    // @ts-ignore
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
