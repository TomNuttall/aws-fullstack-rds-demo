import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_CARDS } from '../../graphql/queries'
import CardList from '../../components/CardList'

const Home: React.FC = () => {
  const [pageNo, setPageNo] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(10)

  const { data, fetchMore } = useQuery(GET_ALL_CARDS, {
    variables: { pageNo, perPage },
  })

  return (
    <div className="p-6" data-testid="home">
      <h1 className="h1">GraphQL Client</h1>
      <button
        className="btn btn-blue"
        onClick={() => {
          fetchMore({
            variables: { pageNo, perPage },
          })
        }}
      >
        Get Query
      </button>
      {data?.getAllCards && (
        <CardList cardsData={data.getAllCards.paginatedData} />
      )}
    </div>
  )
}

export default Home
