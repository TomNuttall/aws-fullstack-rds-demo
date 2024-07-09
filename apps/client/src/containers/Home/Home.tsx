import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_CARDS } from '../../graphql/queries'
import Card from '../../components/Card'

const Home: React.FC = () => {
  const [getCards, { data }] = useLazyQuery(GET_CARDS)

  return (
    <div className="p-6" data-testid="home">
      <h1 className="h1">GraphQL Client</h1>
      <button
        className="btn btn-blue"
        onClick={() => {
          console.log('click')
          getCards({ fetchPolicy: 'no-cache' })
        }}
      >
        Get Query
      </button>
      <p className="mt-4 mb-6 text-main">Data</p>
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
