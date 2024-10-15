import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import { apolloServer, app, httpServer } from './server'
import { createContext } from './context/context'

const main = async () => {
  await apolloServer.start()

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(apolloServer, { context: createContext }),
  )
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 3000 }, resolve),
  )
  console.log(`🚀 Server ready at http://localhost:3000/graphql`)
}
main()
