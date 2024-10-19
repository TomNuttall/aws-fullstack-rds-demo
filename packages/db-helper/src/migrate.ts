import mysql from 'mysql2/promise'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import { getDbConnection } from './database.js'

export const runMigrations = async (
  config: mysql.PoolOptions,
  migrationsFolder: string,
) => {
  const { orm, poolConnection } = getDbConnection(config)

  await migrate(orm, { migrationsFolder })
  await poolConnection.end()
}
