import mysql from 'mysql2/promise'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import { getDbConnection } from '../src/database.js'

export const runMigrations = async () => {
  const { orm, poolConnection } = getDbConnection()

  await migrate(orm, { migrationsFolder: './migrations' })
  await poolConnection.end()
}

runMigrations()
