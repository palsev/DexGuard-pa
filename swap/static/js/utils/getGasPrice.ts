import { Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
import { DEFAULT_GAS_PRICE } from '../constants'

const GAS_NOW_URL = process.env.REACT_APP_GAS_NOW_URL

/**
 * Fetches current competitive gas price estimate
 */
export default async function getGasPrice(provider?: Web3Provider): Promise<BigNumber> {
  if (provider) {
    const gasPrice = await provider?.getGasPrice()
    return gasPrice ? gasPrice : DEFAULT_GAS_PRICE
  } else {
    return DEFAULT_GAS_PRICE
  } 
}
