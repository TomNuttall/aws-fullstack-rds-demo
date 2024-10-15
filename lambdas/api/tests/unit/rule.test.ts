import { describe, it, expect } from '@jest/globals'
import { isAuthenticated } from '../../src/permissions/rules'
import { shield } from 'graphql-shield'
import { graphql } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'

describe('isAuthenticated rule', () => {
  // Arrange
  const typeDefs = `
    type Query {
      getOptions: String!
    }
  `
  const resolvers = {
    Query: {
      getOptions: () => 'Success',
    },
  }
  const permissions = shield({
    Query: {
      getOptions: isAuthenticated,
    },
  })
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  const securedSchema = applyMiddleware(schema, permissions)

  it('returns success if the query context is logged in', async () => {
    // Arrange
    const query = `
      query {
        getOptions
      }
    `

    // Act
    const res = await graphql({
      schema: securedSchema,
      source: query,
      contextValue: { isLoggedIn: true },
    })

    // Assert
    expect(res.data).toEqual({ getOptions: 'Success' })
  })

  it('returns null if the query context is not logged in', async () => {
    // Arrange
    const query = `
      query {
        getOptions
      }
    `

    // Act
    const res = await graphql({
      schema: securedSchema,
      source: query,
      contextValue: { isLoggedIn: false },
    })

    // Assert
    expect(res.data).toEqual(null)
  })
})
