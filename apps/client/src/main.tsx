import React from 'react'
import ReactDOM from 'react-dom/client'
// import { GoogleOAuthProvider } from '@react-oauth/google'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// https://www.apollographql.com/docs/react/networking/authentication/
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="<your_client_id>">
    </GoogleOAuthProvider> */}
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
