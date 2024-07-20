import { db, poolConnection } from './database'
import { migrate } from 'drizzle-orm/mysql2/migrator'

export const runMigrations = async () => {
  await migrate(db, { migrationsFolder: './migrations' })
  await poolConnection.end()
}
