import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'

import express from 'express'
import http from 'http'

import resolvers from './resolvers'
import permissions from './permissions/permissions'
import { Context } from './context/context'

import { readFileSync } from 'fs'
import { join } from 'path'

const schemaFilePath = join(__dirname, 'schemas', 'schema.graphql')
const typeDefs = readFileSync(schemaFilePath, { encoding: 'utf-8' })

const schema = makeExecutableSchema({ typeDefs, resolvers })
const securedSchema = applyMiddleware(schema, permissions)

export const app = express()
export const httpServer = http.createServer(app)
export const apolloServer = new ApolloServer<Context>({
  schema: securedSchema,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageLocalDefault(),
    ApolloServerPluginDrainHttpServer({ httpServer }),
  ],
  introspection: process.env.NODE_ENV !== 'production',
})
