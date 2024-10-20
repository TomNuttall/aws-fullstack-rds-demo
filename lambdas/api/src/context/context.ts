import { createClerkClient } from '@clerk/backend'
import { getDbConnection } from '@tn/db-helper'
import { getUser } from './utils/getUser'

const { orm } = getDbConnection()

export interface Context {
  orm: any
  userId: number
  isLoggedIn: boolean
}

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
})

export const createContext = async ({ req }): Promise<Context> => {
  let userId: number = 1
  let isLoggedIn = false

  try {
    req.url = process.env.APP_URL ?? req.url
    const { isSignedIn, toAuth } = await clerkClient.authenticateRequest(req)

    if (isSignedIn) {
      const user = toAuth()

      userId = await getUser(user.userId, orm)
      isLoggedIn = true
    }
  } catch (e) {}

  console.log(`REQUEST - user: ${userId} operation: ${req.body.operationName}`)

  return {
    orm,
    userId,
    isLoggedIn,
  }
}
