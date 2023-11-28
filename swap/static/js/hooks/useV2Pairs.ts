import { Pair } from '@uniswap/v2-sdk'
import { Token } from '@uniswap/sdk-core'
import { useMemo } from 'react'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import { Interface } from '@ethersproject/abi'
import { useActiveWeb3React } from './index'
import { useMultipleContractSingleData } from '../state/multicall/hooks'
import { wrappedCurrency } from '../utils/wrappedCurrency'
import { Currency, CurrencyAmount } from '@uniswap/sdk-core'
import { useUserUnderlyingExchange } from "../state/user/hooks";
import { getCreate2Address } from '@ethersproject/address'
import { pack, keccak256 } from '@ethersproject/solidity'

const PAIR_INTERFACE = new Interface(IUniswapV2PairABI)

export enum PairState {
  LOADING,
  NOT_EXISTS,
  EXISTS,
  INVALID,
}

// quick hack because sushi init code hash is different
const computeSushiPairAddress = ({ tokenA, tokenB }: { tokenA: Token; tokenB: Token }): string => {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
  return getCreate2Address(
    '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
    keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]),
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
  )
}


export function useV2Pairs(currencies: [Currency | undefined, Currency | undefined][]): [PairState, Pair | null][] {
  const { chainId } = useActiveWeb3React()
  const [exchange,] = useUserUnderlyingExchange();

  const tokens = useMemo(
    () =>
      currencies.map(([currencyA, currencyB]) => [
        wrappedCurrency(currencyA, chainId),
        wrappedCurrency(currencyB, chainId),
      ]),
    [chainId, currencies]
  )

  const pairAddresses = useMemo(
    () =>
      tokens.map(([tokenA, tokenB]) => {
        if (tokenA && tokenB && !tokenA.equals(tokenB)) {
          if (exchange === "Sushiswap") {
            return computeSushiPairAddress({ tokenA, tokenB })
          }
          else {
            return Pair.getAddress(tokenA, tokenB)
          }
        }
        return undefined
      }),
    [tokens, exchange]
  )
  const results = useMultipleContractSingleData(pairAddresses, PAIR_INTERFACE, 'getReserves')

  return useMemo(() => {
    return results.map((result, i) => {
      const { result: reserves, loading } = result
      const tokenA = tokens[i][0]
      const tokenB = tokens[i][1]

      if (loading) return [PairState.LOADING, null]
      if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [PairState.INVALID, null]
      if (!reserves) return [PairState.NOT_EXISTS, null]
      const { reserve0, reserve1 } = reserves
      const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
      return [
        PairState.EXISTS,
        new Pair(
          CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
          CurrencyAmount.fromRawAmount(token1, reserve1.toString())
        ),
      ]
    })
  }, [results, tokens])
}

export function useV2Pair(tokenA?: Currency, tokenB?: Currency): [PairState, Pair | null] {
  return useV2Pairs([[tokenA, tokenB]])[0]
}
