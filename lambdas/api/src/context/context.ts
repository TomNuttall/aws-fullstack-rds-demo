import { Card } from '../__generated__/resolvers-types'
import { createClerkClient } from '@clerk/backend'
import { mockedTestData } from '../../tests/mocks/mocks'

export interface TestData {
  cards: Card[]
}

export interface Context {
  testData: TestData
  userId: string | undefined
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
      userId = user.userId
      isLoggedIn = true
    }
  } catch (e) {}

  console.log(`REQUEST - user: ${userId} operation: ${req.body.operationName}`)

  return {
    testData: mockedTestData,
    userId,
    isLoggedIn,
  }
}
