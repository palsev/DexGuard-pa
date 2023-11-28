import { Trade } from '@uniswap/v2-sdk'
import invariant from 'tiny-invariant'
import warning from 'tiny-warning'
import { Currency, CurrencyAmount, ETHER, Percent, TradeType } from '@uniswap/sdk-core'
import { getAddress } from '@ethersproject/address'

// Redeclares primary Router class from uniswap to allow

function validateAndParseAddress(address: string): string {
  try {
    const checksummedAddress = getAddress(address)
    warning(address === checksummedAddress, `${address} is not checksummed.`)
    return checksummedAddress
  } catch (error) {
    invariant(false, `${address} is not a valid address.`)
  }
}

function toHex(currencyAmount: CurrencyAmount<Currency>) {
  return `0x${currencyAmount.quotient.toString(16)}`
}

export interface BxTrade {
  amountIn: string,
  amountOut: string,
  path: string[],
  to: string,
  deadline: string
}

export interface BxTradeOptions {
  allowedSlippage: Percent
  ttl: number
  recipient: string
  feeOnTransfer?: boolean,
  ethTip: CurrencyAmount<Currency>
}

export interface BxTradeOptionsDeadline extends Omit<BxTradeOptions, 'ttl'> {
  deadline: number
}

export interface BxSwapParameters {
  methodName: string
  args: (string | string[] | BxTrade)[]
  value: string
}

const ZERO_HEX = '0x0'

export abstract class Router {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
  }

  public static swapCallParameters(
    trade: Trade<Currency, Currency, TradeType>,
    options: BxTradeOptions | BxTradeOptionsDeadline
  ): BxSwapParameters {
    const etherIn = trade.inputAmount.currency === ETHER
    const etherOut = trade.outputAmount.currency === ETHER
    // the router does not support both ether in and out
    invariant(!(etherIn && etherOut), 'ETHER_IN_OUT')
    invariant(!('ttl' in options) || options.ttl > 0, 'TTL')

    const to: string = validateAndParseAddress(options.recipient)
    const amountIn: string = toHex(trade.maximumAmountIn(options.allowedSlippage))
    const amountOut: string = toHex(trade.minimumAmountOut(options.allowedSlippage))
    const path: string[] = trade.route.path.map(token => token.address)
    const deadline =
      'ttl' in options
        ? `0x${(Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16)}`
        : `0x${options.deadline.toString(16)}`

    const useFeeOnTransfer = Boolean(options.feeOnTransfer)

    let methodName: string
    let args: (string | string[])[]
    let value: string
    switch (trade.tradeType) {
      case TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? 'swapExactETHForTokensSupportingFeeOnTransferTokens' : 'swapExactETHForTokens'
          // (uint amountOutMin, address[] calldata path, address to, uint deadline)
          args = [amountOut, path, to, deadline]
          value = amountIn
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? 'swapExactTokensForETHSupportingFeeOnTransferTokens' : 'swapExactTokensForETH'
          // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
          args = [amountIn, amountOut, path, to, deadline]
          value = ZERO_HEX
        } else {
          methodName = useFeeOnTransfer
            ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens'
            : 'swapExactTokensForTokens'
          // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
          args = [amountIn, amountOut, path, to, deadline]
          value = ZERO_HEX
        }
        break
      case TradeType.EXACT_OUTPUT:
        invariant(!useFeeOnTransfer, 'EXACT_OUT_FOT')
        if (etherIn) {
          methodName = 'swapETHForExactTokens'
          // (uint amountOut, address[] calldata path, address to, uint deadline)
          args = [amountOut, path, to, deadline]
          value = amountIn
        } else if (etherOut) {
          methodName = 'swapTokensForExactETH'
          // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
          args = [amountOut, amountIn, path, to, deadline]
          value = ZERO_HEX
        } else {
          methodName = 'swapTokensForExactTokens'
          // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
          args = [amountOut, amountIn, path, to, deadline]
          value = ZERO_HEX
        }
        break
    }
    return {
      methodName,
      args,
      value
    }
  }
}

export abstract class BxSwapRouter {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
  }

  public static swapCallParameters(
    routerAddress: string,
    trade: Trade<Currency, Currency, TradeType>,
    options: BxTradeOptions | BxTradeOptionsDeadline
  ): BxSwapParameters {
    const etherIn = trade.inputAmount.currency === ETHER
    const etherOut = trade.outputAmount.currency === ETHER
    // the router does not support both ether in and out
    invariant(!(etherIn && etherOut), 'ETHER_IN_OUT')
    invariant(!('ttl' in options) || options.ttl > 0, 'TTL')

    const to: string = validateAndParseAddress(options.recipient)
    const amountInCurrency = trade.maximumAmountIn(options.allowedSlippage)
    const amountIn: string = toHex(amountInCurrency)
    const amountOutCurrency = trade.minimumAmountOut(options.allowedSlippage)
    const amountOut: string = toHex(amountOutCurrency)
    const path: string[] = trade.route.path.map(token => token.address)
    const deadline =
      'ttl' in options
        ? `0x${(Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16)}`
        : `0x${options.deadline.toString(16)}`

    const ethTip = toHex(options.ethTip)
    const bxTrade: BxTrade = { amountIn, amountOut, path, to, deadline }

    let methodName: string
    let args: (string | string[] | BxTrade)[]
    let value: string

    switch (trade.tradeType) {
      case TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = 'swapExactETHForTokensWithTip'
          args = [routerAddress, bxTrade, ethTip]
          value = toHex(amountInCurrency.add(options.ethTip))
        } else if (etherOut) {
          methodName = 'swapExactTokensForETHWithTip'
          args = [routerAddress, bxTrade]
          value = ethTip
        } else {
          methodName = 'swapExactTokensForTokensWithTip'
          args = [routerAddress, bxTrade]
          value = ethTip
        }
        break
      case TradeType.EXACT_OUTPUT:
        if (etherIn) {
          methodName = 'swapETHForExactTokensWithTip'
          args = [routerAddress, bxTrade, ethTip]
          value = toHex(amountInCurrency.add(options.ethTip))
        } else if (etherOut) {
          methodName = 'swapTokensForExactETHWithTip'
          args = [routerAddress, bxTrade]
          value = ethTip
        } else {
          methodName = 'swapTokensForExactTokensWithTip'
          args = [routerAddress, bxTrade]
          value = ethTip
        }
        break
    }

    return {
      methodName,
      args,
      value
    }
  }
}

