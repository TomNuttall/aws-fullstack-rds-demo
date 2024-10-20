import React, { useEffect, useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'

import { GET_ALL_CARDS } from '../../graphql/queries'
import { FAVOURITE_CARD, UNFAVOURITE_CARD } from '../../graphql/mutations'

import GameCardList from '../../components/GameCardList'
import Pagination from '../../components/Pagination'

export const PER_PAGE = 5

const Home: React.FC = () => {
  const [pageNo, setPageNo] = useState<number>(1)

  const [fetchMore, { data }] = useLazyQuery(GET_ALL_CARDS, {
    variables: { pageNo, perPage: PER_PAGE },
  })

  const [favouriteCard] = useMutation(FAVOURITE_CARD)
  const [unfavouriteCard] = useMutation(UNFAVOURITE_CARD)

  useEffect(() => {
    fetchMore({ variables: { pageNo, perPage: PER_PAGE } })
  }, [pageNo])

  const onFavouriteCard = async (favourite: boolean, id?: number) => {
    if (id) {
      if (favourite) {
        favouriteCard({ variables: { cardId: id } })
      } else {
        unfavouriteCard({ variables: { cardId: id } })
      }
    }
  }

  const cardsData = data?.getAllCards?.paginatedData
  const totalResults = data?.getAllCards?.paginatedTotal || 0

  return (
    <div className="container" data-testid="home">
      <h1 className="h1 pb-6">Home</h1>
      {cardsData && (
        <>
          <GameCardList
            cardsData={cardsData}
            onFavouriteCard={onFavouriteCard}
          />

          <Pagination
            pageNo={pageNo}
            perPage={PER_PAGE}
            totalResults={totalResults}
            setPageNo={setPageNo}
          />
        </>
      )}
    </div>
  )
}

export default Home
