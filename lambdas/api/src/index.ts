import { apolloServer } from './server'
import { createContext } from './context'
import {
  StandaloneServerContextFunctionArgument,
  startStandaloneServer,
} from '@apollo/server/standalone'
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda'

// export const handler = startServerAndCreateLambdaHandler(
//   apolloServer,
//   handlers.createAPIGatewayProxyEventRequestHandler({
//     context,
//   }),
// )

const main = async () => {
  const { url } = await startStandaloneServer(apolloServer, {
    context: createContext,
    listen: { port: 4000 },
  })
  console.log(`🚀  Server ready at ${url}`)
}

main()
