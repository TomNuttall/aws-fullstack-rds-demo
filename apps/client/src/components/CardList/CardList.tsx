import React from 'react'
import { Card as CardType, Maybe } from '../../__generated__/graphql'
import Card from '../../components/Card'

interface CardListProps {
  cardsData: Maybe<CardType[]>
}

const CardList: React.FC<CardListProps> = ({ cardsData }) => {
  return (
    <>
      <p className="mt-4 mb-6 text-main">Card List</p>
      <ul>
        {cardsData?.map((cardData: CardType) => (
          <li key={cardData?.id}>
            <Card data={cardData} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default CardList
