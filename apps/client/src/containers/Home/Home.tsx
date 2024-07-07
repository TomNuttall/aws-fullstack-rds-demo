import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CARDS } from '../../graphql/queries'

const Home = () => {
  const { data } = useQuery(GET_CARDS)
  console.log(data)

  return (
    <div
      data-testid="home"
      className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <h1>Test</h1>
    </div>
  )
}

export default Home
