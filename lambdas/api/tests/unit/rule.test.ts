import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { isAuthenticated } from '../../src/permissions/rules'
import { shield, allow } from 'graphql-shield'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'
import { ApolloServer } from '@apollo/server'

describe('isAuthenticated rule', () => {
  // Arrange
  const definitions = `
    type Options {
      name: String
    }

    type Query {
      getOptions(id: Int!): Options!
    }
  `
  const resolvers = {
    Query: {
      getOptions: async (_, { id }, __) => {
        return { name: `Success ${id}` }
      },
    },
  }
  const permissions = shield({
    Query: {
      getOptions: isAuthenticated,
    },
  })
  const schema = makeExecutableSchema({ typeDefs: definitions, resolvers })
  const securedSchema = applyMiddleware(schema, permissions)
  const apolloServer = new ApolloServer({ schema: securedSchema })

  const GET_OPTIONS = `
    query GetOptions($id: Int!) {
      getOptions(id: $id) {
        name
      }
    }
  `

  beforeAll(async () => {
    await apolloServer.start()
  })

  afterAll(async () => {
    await apolloServer.stop()
  })

  it('returns success if the query context is logged in', async () => {
    // Arrange
    const query = {
      query: GET_OPTIONS,
      variables: { id: 1 },
    }
    const context = {
      contextValue: {
        isLoggedIn: true,
      },
    }

    // Act
    const res = await apolloServer.executeOperation(query, context)
    const data = res.body.kind === 'single' ? res.body.singleResult.data : null

    // Assert
    expect(data).toMatchObject({ getOptions: { name: 'Success 1' } })
  })

  it('returns null if the query context is not logged in', async () => {
    // Arrange
    const query = {
      query: GET_OPTIONS,
      variables: { id: 1 },
    }
    const context = {
      contextValue: {
        isLoggedIn: false,
      },
    }

    // Act
    const res = await apolloServer.executeOperation(query, context)
    const data = res.body.kind === 'single' ? res.body.singleResult.data : null

    // Assert
    expect(data).toEqual(null)
  })
})
