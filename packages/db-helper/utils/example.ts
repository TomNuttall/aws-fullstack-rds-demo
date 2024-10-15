import { eq } from 'drizzle-orm'
import { getDbConnection } from '../src/database.js'
import * as schema from '../src/schema'

const { orm, poolConnection } = getDbConnection()

const values = await orm
  .select()
  .from(schema.cardsView)
  .where(eq(schema.cardsView.id, 1))
console.log(values)

await poolConnection.end()
