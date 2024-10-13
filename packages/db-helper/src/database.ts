import mysql from 'mysql2/promise'
import { drizzle } from 'drizzle-orm/mysql2'
import { schema } from './index.js'

export const getDbConnection = (config: mysql.PoolOptions) => {
  const poolConnection = mysql.createPool(config)
  const orm = drizzle(poolConnection, { schema: schema, mode: 'default' })

  return { orm, poolConnection }
}
