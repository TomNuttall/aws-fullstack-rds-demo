import { startStandaloneServer } from '@apollo/server/standalone'
import { apolloServer } from './server'
import { createContext } from './context/context'

const main = async () => {
  const { url } = await startStandaloneServer(apolloServer, {
    context: createContext,
    listen: { port: 3000 },
  })
  console.log(`🚀  Server ready at ${url}`)
}

main()
