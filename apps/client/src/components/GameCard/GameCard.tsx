import React, { useState } from 'react'
import { Card as CardType, Maybe } from '../../__generated__/graphql'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'

interface GameCardProps {
  data: Maybe<CardType>
}

const GameCard: React.FC<GameCardProps> = ({ data }) => {
  const [favourited, setFavourited] = useState<boolean>(
    data?.isFavourite || false,
  )
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>{`Card ${data?.id}`}</CardTitle>
        <CardDescription>{data?.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data?.value}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" onClick={() => setFavourited(!favourited)}>
          {favourited ? <HeartFilledIcon color="#E11D48" /> : <HeartIcon />}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default GameCard
