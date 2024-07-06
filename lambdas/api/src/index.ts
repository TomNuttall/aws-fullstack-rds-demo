import { apolloServer } from './server'
import {
  StandaloneServerContextFunctionArgument,
  startStandaloneServer,
} from '@apollo/server/standalone'
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda'

import { Context } from './types/types'

// {event}
const context = async (): Promise<Context> => {
  // req.
  return {
    testData: {
      cards: [
        { id: 0, value: 5 },
        { id: 1, value: 10 },
      ],
    },
  }
}

// export const handler = startServerAndCreateLambdaHandler(
//   apolloServer,
//   handlers.createAPIGatewayProxyEventRequestHandler({
//     context,
//   }),
// )

const main = async () => {
  const { url } = await startStandaloneServer(apolloServer, {
    context,
    listen: { port: 4000 },
  })
  console.log(`🚀  Server ready at ${url}`)
}

main()
