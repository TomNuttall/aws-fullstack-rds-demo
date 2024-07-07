import { StandaloneServerContextFunctionArgument } from '@apollo/server/standalone'
import { Context } from './types/types'

export const createContext = async (): Promise<Context> => {
  return {
    testData: {
      cards: [
        { id: 0, value: 5 },
        { id: 1, value: 10 },
      ],
    },
  }
}
