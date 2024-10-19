import React from 'react'
import { Card, Maybe } from '../../__generated__/graphql'
import GameCard from '../GameCard'

interface GameCardListProps {
  cardsData?: Maybe<Maybe<Card>[]>
  onFavouriteCard: (favourite: boolean, id?: number) => Promise<void>
}

const GameCardList: React.FC<GameCardListProps> = ({
  cardsData,
  onFavouriteCard,
}) => {
  return (
    <ul className="flex flex-row flex-wrap gap-4 justify-center">
      {cardsData &&
        cardsData?.map((cardData: Maybe<Card>) => (
          <li key={cardData?.id}>
            <GameCard data={cardData} onFavouriteCard={onFavouriteCard} />
          </li>
        ))}
    </ul>
  )
}

export default GameCardList
