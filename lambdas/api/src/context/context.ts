import { Card } from '../__generated__/resolvers-types'
import { createClerkClient } from '@clerk/backend'

export interface TestData {
  cards: Card[]
}

export interface Context {
  testData: TestData
  userId: string
}

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
})

//@ts-ignore
export const createContext = async ({ req }): Promise<Context> => {
  try {
    console.log('HEADERS', req.headers)
    const userId = await clerkClient.authenticateRequest(req)
    console.log('USER ID', userId)
    // const user = userId ? await clerkClient.users.getUser(userId) : null
    // console.log('USER', user)
  } catch (e) {
    console.log(e)
  }

  return {
    testData: {
      cards: [
        { id: 0, value: 5 },
        { id: 1, value: 10 },
      ],
    },
    userId: '1',
  }
}
