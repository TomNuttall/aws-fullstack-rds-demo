import { migrate } from 'drizzle-orm/mysql2/migrator'
import { db, poolConnection } from './database.js'

export const runMigrations = async () => {
  await migrate(db, { migrationsFolder: './migrations' })
  await poolConnection.end()
}

runMigrations()
