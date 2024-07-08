import React from 'react'
import { Card as CardType, Maybe } from '../../__generated__/graphql'

interface CardProps {
  data: Maybe<CardType>
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div
      data-testid="card"
      className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <h2>{data?.value}</h2>
    </div>
  )
}

export default Card
