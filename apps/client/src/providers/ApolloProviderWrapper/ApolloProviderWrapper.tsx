import { ReactNode, useMemo } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  HttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth } from '@clerk/clerk-react'

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/',
})

interface ApolloProviderProps {
  children: ReactNode
}

const ApolloProviderWrapper: React.FC<ApolloProviderProps> = ({ children }) => {
  const { getToken, sessionId, userId } = useAuth()

  const client = useMemo(() => {
    const authMiddleware = setContext(async (_, { headers }) => {
      const token = await getToken()
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      }
    })

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    })
  }, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloProviderWrapper
