import mysql from 'mysql2/promise'
import { drizzle, MySql2Database } from 'drizzle-orm/mysql2'

export interface dbConnection {
  orm: MySql2Database
  poolConnection: mysql.Pool
}

export const getDbConnection = (config: mysql.PoolOptions): dbConnection => {
  const poolConnection = mysql.createPool(config)
  const orm = drizzle(poolConnection)

  return { orm, poolConnection }
}
