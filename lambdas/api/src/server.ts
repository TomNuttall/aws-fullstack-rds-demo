import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import express from 'express'
import http from 'http'

import resolvers from './resolvers'
import { Context } from './context/context'

import { readFileSync } from 'fs'
import { join } from 'path'

const schemaFilePath = join(__dirname, 'schemas', 'schema.graphql')
const typeDefs = readFileSync(schemaFilePath, { encoding: 'utf-8' })

export const app = express()
export const httpServer = http.createServer(app)
export const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageLocalDefault(),
    ApolloServerPluginDrainHttpServer({ httpServer }),
  ],
})
