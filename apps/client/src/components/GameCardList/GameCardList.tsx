import React from 'react'
import { Card as CardType, Maybe } from '../../__generated__/graphql'
import GameCard from '../GameCard'

interface GameCardListProps {
  cardsData?: Maybe<CardType[]>
}

const GameCardList: React.FC<GameCardListProps> = ({ cardsData }) => {
  return (
    <>
      <ul className="flex flex-row flex-wrap gap-4 justify-center">
        {cardsData?.map((cardData: CardType) => (
          <li key={cardData?.id}>
            <GameCard data={cardData} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default GameCardList
