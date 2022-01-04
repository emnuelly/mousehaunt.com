import bsc from './bsc'
import bscTestnet from './bscTestnet'

const config = {
  bscTestnet,
  bsc
}

export default config

export type Network = 'bsc' | 'bscTestnet'
