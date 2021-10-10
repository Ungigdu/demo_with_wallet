import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'KusaSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | KusaSwap',
  },
  '/competition': {
    title: 'Trading Battle | KusaSwap',
  },
  '/prediction': {
    title: 'Prediction | KusaSwap',
  },
  '/farms': {
    title: 'Farms | KusaSwap',
  },
  '/pools': {
    title: 'Pools | KusaSwap',
  },
  '/lottery': {
    title: 'Lottery | KusaSwap',
  },
  '/collectibles': {
    title: 'Collectibles | KusaSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | KusaSwap',
  },
  '/teams': {
    title: 'Leaderboard | KusaSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | KusaSwap',
  },
  '/profile': {
    title: 'Your Profile | KusaSwap',
  },
}
