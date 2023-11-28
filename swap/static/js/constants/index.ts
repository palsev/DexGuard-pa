import { ChainId, Percent, Token, WETH9 } from '@uniswap/sdk-core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import JSBI from 'jsbi'
import {
  binanceWallet,
  clover,
  fortmatic,
  injected,
  keystone,
  lattice,
  portis,
  torus,
  walletconnect,
  walletlink,
} from '../connectors'
import { BigNumber } from '@ethersproject/bignumber'

import INJECTED_ICON_URL from '../assets/images/arrow-right.svg'
import METAMASK_ICON_URL from '../assets/images/metamask.png'
import WALLETCONNECT_ICON_URL from '../assets/images/walletConnectIcon.svg'
import COINBASE_ICON_URL from '../assets/images/coinbaseWalletIcon.svg'
import FORTMATIC_ICON_URL from '../assets/images/fortmaticIcon.png'
import PORTIS_ICON_URL from '../assets/images/portisIcon.png'
import TORUS_ICON_URL from '../assets/images/torus.svg'
import BINANCE_WALLET_ICON_URL from '../assets/images/binanceWallet.jpeg'
import CLOVER_WALLET_ICON_URL from '../assets/images/clover.png'
import LATTICE_WALLET_ICON_URL from '../assets/images/lattice.png'
import KEYSTONE_WALLET_ICON_URL from '../assets/images/keystone.jpeg'

export const MULTICALL2_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.ROPSTEN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.KOVAN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.RINKEBY]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.GÖRLI]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
}

export const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
export const UNISWAP_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const UNISWAP_INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
export const SUSHISWAP_ROUTER_ADDRESS = '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'
export const SUSHISWAP_FACTORY_ADDRESS = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
export const SUSHIWAP_INIT_CODE_HASH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
export const SUSHISWAP_RINKEBY_ROUTER_ADDRESS = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
export const SUSHISWAP_RINKEBY_FACTORY_ADDRESS = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'

export const UNDERLYING_EXCHANGES: {
  [chainId in ChainId]?: {
    name: string
    router: string
    factory: string
    initCodeHash: string
    pairExplorerPrefix?: string
  }[]
} = {
  [ChainId.MAINNET]: [
    {
      name: 'Uniswap',
      router: UNISWAP_ROUTER_ADDRESS,
      factory: UNISWAP_FACTORY_ADDRESS,
      initCodeHash: UNISWAP_INIT_CODE_HASH,
      pairExplorerPrefix: 'https://info.uniswap.org/pair/',
    },
    {
      name: 'Sushiswap',
      router: SUSHISWAP_ROUTER_ADDRESS,
      factory: SUSHISWAP_FACTORY_ADDRESS,
      initCodeHash: SUSHIWAP_INIT_CODE_HASH,
      pairExplorerPrefix: 'https://analytics.sushi.com/pairs/',
    },
  ],
  [ChainId.RINKEBY]: [
    {
      name: 'Uniswap',
      router: UNISWAP_ROUTER_ADDRESS,
      factory: UNISWAP_FACTORY_ADDRESS,
      initCodeHash: UNISWAP_INIT_CODE_HASH,
    },
    {
      name: 'Sushiswap',
      router: SUSHISWAP_RINKEBY_ROUTER_ADDRESS,
      factory: SUSHISWAP_RINKEBY_FACTORY_ADDRESS,
      initCodeHash: SUSHIWAP_INIT_CODE_HASH,
    },
  ],
}

export const BLXR_ENV = process.env.REACT_APP_BLXR_ENV ?? 'DEV'
export const BLXR_ENABLE_SWAP_ROUTER = true
export const BLXR_SWAP_ADDRESS_MAINNET = '0x6Ab2fB1fc6f43672bE731b11Db2Ba9147B1f6add'
export const BLXR_TIP_RATIO = 0.15

export const BLXR_RELAY_URI: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]:
    BLXR_ENV === 'PROD'
      ? 'https://vkmxdva05c.execute-api.us-east-1.amazonaws.com/staging'
      : 'https://vkmxdva05c.execute-api.us-east-1.amazonaws.com/staging',
}
export const BLXR_SWAP_ADDRESSES: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: BLXR_SWAP_ADDRESS_MAINNET,
  [ChainId.RINKEBY]: '0x3234d5B32587fFF0A16994332b04cdFE7C2298aa',
}

export const DEFAULT_GAS_PRICE: BigNumber = BigNumber.from(114000000000)
export const DEFAULT_GAS_LIMIT: JSBI = JSBI.BigInt(21000)
export const DEFAULT_GAS_ESTIMATE: BigNumber = BigNumber.from(250000)

export const V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const DEFAULT_ETH_TIP: JSBI = JSBI.multiply(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)), JSBI.BigInt(0))
// default gas price to use if all other sources unavailable
export { PRELOADED_PROPOSALS } from './proposals'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const WBTC = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC')
export const FEI = new Token(ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD')
export const TRIBE = new Token(ChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', 18, 'TRIBE', 'Tribe')
export const FRAX = new Token(ChainId.MAINNET, '0x853d955aCEf822Db058eb8505911ED77F175b99e', 18, 'FRAX', 'Frax')
export const FXS = new Token(ChainId.MAINNET, '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 18, 'FXS', 'Frax Share')
export const renBTC = new Token(ChainId.MAINNET, '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 8, 'renBTC', 'renBTC')
export const UMA = new Token(
  ChainId.MAINNET,
  '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828',
  18,
  'UMA',
  'UMA Voting Token v1'
)

// Mirror Protocol compat.
export const UST = new Token(ChainId.MAINNET, '0xa47c8bf37f92abed4a126bda807a7b7498661acd', 18, 'UST', 'Wrapped UST')
export const MIR = new Token(ChainId.MAINNET, '0x09a3ecafa817268f77be1283176b946c4ff2e608', 18, 'MIR', 'Wrapped MIR')
// List of all mirror's assets addresses.
// Last pulled from : https://whitelist.mirror.finance/eth/tokenlists.json
// TODO: Generate this programaticaly ?
const mAssetsAdditionalBases: { [tokenAddress: string]: Token[] } = {
  [UST.address]: [MIR],
  [MIR.address]: [UST],
  '0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84': [MIR, UST], // mAAPL
  '0x59A921Db27Dd6d4d974745B7FfC5c33932653442': [MIR, UST], // mGOOGL
  '0x21cA39943E91d704678F5D00b6616650F066fD63': [MIR, UST], // mTSLA
  '0xC8d674114bac90148d11D3C1d33C61835a0F9DCD': [MIR, UST], // mNFLX
  '0x13B02c8dE71680e71F0820c996E4bE43c2F57d15': [MIR, UST], // mQQQ
  '0xEdb0414627E6f1e3F082DE65cD4F9C693D78CCA9': [MIR, UST], // mTWTR
  '0x41BbEDd7286dAab5910a1f15d12CBda839852BD7': [MIR, UST], // mMSFT
  '0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7': [MIR, UST], // mAMZN
  '0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72': [MIR, UST], // mBABA
  '0x1d350417d9787E000cc1b95d70E9536DcD91F373': [MIR, UST], // mIAU
  '0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676': [MIR, UST], // mSLV
  '0x31c63146a635EB7465e5853020b39713AC356991': [MIR, UST], // mUSO
  '0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86': [MIR, UST], // mVIXY
}

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 13
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

const UNI_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
}

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [UNI_ADDRESS]: 'UNI',
  [GOVERNANCE_ADDRESS]: 'Governance',
  [TIMELOCK_ADDRESS]: 'Timelock',
}

export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH9[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH9[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH9[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH9[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH9[ChainId.KOVAN]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, WBTC],
}

export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    ...mAssetsAdditionalBases,
    '0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18': [UNI[ChainId.MAINNET]],
    '0x561a4717537ff4AF5c687328c0f7E90a319705C0': [UNI[ChainId.MAINNET]],
    '0xa6e3454fec677772dd771788a079355e43910638': [UMA],
    [FEI.address]: [TRIBE],
    [TRIBE.address]: [FEI],
    [FRAX.address]: [FXS],
    [FXS.address]: [FRAX],
    [WBTC.address]: [renBTC],
    [renBTC.address]: [WBTC],
  },
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WETH9[ChainId.MAINNET]],
  },
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: Partial<ChainTokenList> = {
  [ChainId.MAINNET]: [DAI, USDC, USDT, WBTC],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, WBTC],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin'),
    ],
    [USDC, USDT],
    [DAI, USDT],
  ],
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconURL: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconURL: INJECTED_ICON_URL,
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconURL: METAMASK_ICON_URL,
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
    mobile: true,
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconURL: WALLETCONNECT_ICON_URL,
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true,
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconURL: COINBASE_ICON_URL,
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5',
  },
  COINBASE_LINK: {
    name: 'Coinbase Wallet',
    iconURL: COINBASE_ICON_URL,
    description: 'Open in Coinbase Wallet app.',
    href: `https://go.cb-w.com/dapp?cb_url=${window.location.href}`,
    color: '#315CF5',
    mobile: true,
    mobileOnly: true,
  },
  // FORTMATIC: {
  //   connector: fortmatic,
  //   name: 'Fortmatic',
  //   iconURL: FORTMATIC_ICON_URL,
  //   description: 'Login using Fortmatic hosted wallet',
  //   href: null,
  //   color: '#6748FF',
  //   mobile: true,
  // },
  // Portis: {
  //   connector: portis,
  //   name: 'Portis',
  //   iconURL: PORTIS_ICON_URL,
  //   description: 'Login using Portis hosted wallet',
  //   href: null,
  //   color: '#4A6C9B',
  // },
  Torus: {
    connector: torus,
    name: 'Torus',
    iconURL: TORUS_ICON_URL,
    description: 'Login using Torus',
    href: null,
    color: '#4A6C9B',
  },
  Binance: {
    connector: binanceWallet,
    name: 'BinanceWallet',
    iconURL: BINANCE_WALLET_ICON_URL,
    description: 'Login using binanceWallet',
    href: null,
    color: '#4A6C9B',
  },
  // Clover: {
  //   connector: clover,
  //   name: 'Clover',
  //   iconURL: CLOVER_WALLET_ICON_URL,
  //   description: 'Login using clover',
  //   href: null,
  //   color: '#4A6C9B',
  // },
}

export const NetworkContextName = 'NETWORK'

// 30 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 30

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis JSBI.BigInt
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
]

export const ARGENT_WALLET_DETECTOR_MAINNET_ADDRESS = '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8'

export const V1_MIGRATOR_ADDRESS = '0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b'

export const LANGUAGES = [
  {
    code: 'en-US',
    name: 'EN',
  },
  {
    code: 'zh-CN',
    name: '中文',
  },
]
