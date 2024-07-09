import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'

import resolvers from './resolvers'
import { Context } from './context/context'

import { readFileSync } from 'fs'
import { join } from 'path'

const schemaFilePath = join(__dirname, 'schemas', 'schema.graphql')
const typeDefs = readFileSync(schemaFilePath, { encoding: 'utf-8' })

export const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageLocalDefault(),
  ],
})
