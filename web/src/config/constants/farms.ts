import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'KUSA-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x4c954e4a94feaa8961c05090ea0b7de41d23a4b3',
    },
    token: tokens.kusa,
    quoteToken: tokens.usdt,
  },

  {
    pid: 2,
    lpSymbol: 'KUSA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd24085aa69b2d19e757da29f46c623d74cf7b7fc',
    },
    token: tokens.kusa,
    quoteToken: tokens.wbnb,
  },

]

export default farms
