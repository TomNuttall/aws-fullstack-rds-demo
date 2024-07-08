import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CARDS } from '../../graphql/queries'
import Card from '../../components/Card'

const Home: React.FC = () => {
  const { data } = useQuery(GET_CARDS)

  return (
    <div
      data-testid="home"
      className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <h1>Test</h1>
      <ul>
        {data?.getCards?.map((cardData) => (
          <li key={cardData?.id}>
            <Card data={cardData} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
