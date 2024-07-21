import mysql from 'mysql2/promise'
import { drizzle } from 'drizzle-orm/mysql2'
import { schema } from '../src/'

export const poolConnection = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export const db = drizzle(poolConnection, {
  schema,
  mode: 'default',
})
