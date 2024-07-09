import React from 'react'
import { Card as CardType, Maybe } from '../../__generated__/graphql'

interface CardProps {
  data: Maybe<CardType>
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div data-testid="card" className="flex flex-row">
      <p className="text-main">{data?.id}</p>
      <p className="text-main">{data?.value}</p>
    </div>
  )
}

export default Card
