import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_ALL_CARDS } from '../../graphql/queries'
import GameCardList from '../../components/GameCardList'
import Pagination from '../../components/Pagination'

export const PER_PAGE = 5

const Home: React.FC = () => {
  const [pageNo, setPageNo] = useState<number>(1)

  const { data, fetchMore } = useQuery(GET_ALL_CARDS, {
    variables: { pageNo, perPage: PER_PAGE },
  })

  useEffect(() => {
    fetchMore({ variables: { pageNo, perPage: PER_PAGE } })
  }, [pageNo])

  const cardsData = data?.getAllCards?.paginatedData
  const totalPages = data?.getAllCards?.paginatedTotal ?? 0

  return (
    <div className="container" data-testid="home">
      <h1 className="h1 pb-6">Home</h1>
      {cardsData && (
        <>
          <GameCardList cardsData={cardsData} />

          <Pagination
            pageNo={pageNo}
            perPage={PER_PAGE}
            totalPages={totalPages}
            setPageNo={setPageNo}
          />
        </>
      )}
    </div>
  )
}

export default Home
