import { createClerkClient } from '@clerk/backend'
import mysql from 'mysql2/promise'
import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2'
import { schema } from '@tn/db-helper'

const poolConnection = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})
const db = drizzle(poolConnection, { schema: schema, mode: 'default' })

export interface Context {
  orm: MySql2Database<typeof schema>
  userId: number //string | undefined
  isLoggedIn: boolean
}

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
})

//@ts-ignore
export const createContext = async ({ req }): Promise<Context> => {
  let userId: string | undefined = undefined
  let isLoggedIn = false
  try {
    req.url = process.env.APP_URL ?? req.url
    const { isSignedIn, toAuth } = await clerkClient.authenticateRequest(req)

    if (isSignedIn) {
      const user = toAuth()
      // userId = user.userId
      isLoggedIn = true
    }
  } catch (e) {}

  console.log(`REQUEST - user: ${userId} operation: ${req.body.operationName}`)

  return {
    orm: db,
    userId: 1,
    isLoggedIn,
  }
}
