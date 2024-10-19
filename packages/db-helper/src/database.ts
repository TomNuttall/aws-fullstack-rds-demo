import mysql from 'mysql2/promise'
import { drizzle, MySql2Database } from 'drizzle-orm/mysql2'

export interface dbConnection {
  orm: MySql2Database<Record<string, never>>
  poolConnection: mysql.Pool
}

export const defaultConfig = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}

export const getDbConnection = (config?: mysql.PoolOptions): dbConnection => {
  const poolConnection = mysql.createPool(config || defaultConfig)
  const orm = drizzle(poolConnection)

  return { orm, poolConnection }
}
