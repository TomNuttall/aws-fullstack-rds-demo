import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import ApolloProviderWrapper from './providers/ApolloProviderWrapper'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './globals.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} telemetry={false}>
      <ApolloProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProviderWrapper>
    </ClerkProvider>
  </React.StrictMode>,
)
