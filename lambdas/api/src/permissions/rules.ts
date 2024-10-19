import { rule, IRule } from 'graphql-shield'

import { Context } from '../context/context'

export const isAuthenticated: IRule = rule({
  cache: 'contextual',
})(async (_, __, context: Context) => {
  return context.isLoggedIn
})
