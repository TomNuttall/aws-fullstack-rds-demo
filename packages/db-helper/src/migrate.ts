import mysql from 'mysql2/promise'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import { getDbConnection } from './database.js'

export const runMigrations = async (config: mysql.PoolOptions) => {
  const { orm, poolConnection } = getDbConnection(config)

  await migrate(orm, { migrationsFolder: './migrations' })
  await poolConnection.end()
}
