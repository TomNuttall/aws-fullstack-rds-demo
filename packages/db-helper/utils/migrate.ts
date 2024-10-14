import mysql from 'mysql2/promise'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import { getDbConnection } from '../src/database.js'

export const runMigrations = async (config: mysql.PoolOptions) => {
  const { orm, poolConnection } = getDbConnection(config)

  await migrate(orm, { migrationsFolder: './migrations' })
  await poolConnection.end()
}

runMigrations({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})
