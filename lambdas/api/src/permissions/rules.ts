import { rule, IRule } from 'graphql-shield'

import { Context } from '../context/context'

export const isAuthenticated: IRule = rule({
  cache: 'contextual',
})(async (parent, args, context: Context, info) => {
  return context.isLoggedIn
})
