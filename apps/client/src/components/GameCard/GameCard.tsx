import React from 'react'
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Card, Maybe } from '../../__generated__/graphql'

interface GameCardProps {
  data: Maybe<Card>
  onFavouriteCard: (favourite: boolean, id?: number) => Promise<void>
}

const GameCard: React.FC<GameCardProps> = ({ data, onFavouriteCard }) => {
  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {data?.name}
      </div>

      <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        {data?.value}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() =>
            onFavouriteCard(data?.isFavourite || false, data?.id || undefined)
          }
        >
          {data?.isFavourite ? (
            <HeartFilledIcon color="#E11D48" />
          ) : (
            <HeartIcon />
          )}
        </Button>
      </div>
    </div>
  )
}

export default GameCard
