import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.kusa,
    earningToken: tokens.kusa,
    contractAddress: {
      97: '',
      56: '0x41fA80e9ba7e5AC78B982C0E40F6B9c03f5Cb43d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
