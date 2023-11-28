import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { Router, Trade as V2Trade } from '@uniswap/v2-sdk'
import { ChainId, Currency, CurrencyAmount, Percent, TradeType } from '@uniswap/sdk-core'
import { useMemo } from 'react'
import { getTradeVersion } from '../utils/getTradeVersion'
import isZero from '../utils/isZero'
import { useActiveWeb3React } from './index'
import { SignatureData } from './useERC20Permit'
import useTransactionDeadline from './useTransactionDeadline'
import useENS from './useENS'
import { Version } from './useToggledVersion'
import { BLXR_RELAY_URI, BLXR_ENV, BLXR_ENABLE_SWAP_ROUTER, BLXR_TIP_RATIO } from '../constants'
import Common from '@ethereumjs/common'
import { ethers } from 'ethers'
import { TransactionFactory } from '@ethereumjs/tx'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { useUserGasPrice, useUserGasEstimate, useUserUnderlyingExchangeAddresses } from '../state/user/hooks'
import { useArbiProfit } from 'state/swap/hooks'
import { getBxSwapContract, getUnderlyingExchangeRouterContract } from '../utils'
import { BxSwapParameters, BxSwapRouter } from '../bxrouter'
import { parseUnits } from '@ethersproject/units'

export enum SwapCallbackState {
  INVALID,
  LOADING,
  VALID,
}

export interface SwapParameters {
  /**
   * The method to call on the Uniswap V2 Router.
   */
  methodName: string
  /**
   * The arguments to pass to the method, all hex encoded.
   */
  args: (string | string[])[]
  /**
   * The amount of wei to send in hex.
   */
  value: string
}

interface SwapCall {
  contract: Contract
  parameters: BxSwapParameters
}

export interface SwapCallEstimate {
  call: SwapCall
}

/**
 * The parameters to use in the call to the Uniswap V2 Router to execute a trade.
 */
export interface SwapParameters {
  /**
   * The method to call on the Uniswap V2 Router.
   */
  methodName: string
  /**
   * The arguments to pass to the method, all hex encoded.
   */
  args: (string | string[])[]
  /**
   * The amount of wei to send in hex.
   */
  value: string
}

export interface SuccessfulCall {
  call: SwapCall
  gasEstimate: BigNumber
}

export interface FailedCall {
  call: SwapCall
  error: Error
}

export type EstimatedSwapCall = SuccessfulCall | FailedCall

/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param recipientAddressOrName the ENS name or address of the recipient of the swap output
 * @param signatureData the signature data of the permit of the input token amount, if available
 */
export function useSwapCallArguments(
  trade: V2Trade<Currency, Currency, TradeType> | undefined, // trade to execute, required
  allowedSlippage: Percent, // in bips
  recipientAddressOrName: string | null, // the ENS name or address of the recipient of the trade, or null if swap should be returned to sender
  signatureData: SignatureData | null | undefined
): SwapCall[] {
  const { account, chainId, library } = useActiveWeb3React()

  const { address: recipientAddress } = useENS(recipientAddressOrName)
  const recipient = recipientAddressOrName === null ? account : recipientAddress
  const deadline = useTransactionDeadline()
  const exchange = useUserUnderlyingExchangeAddresses()

  const [userGasPrice] = useUserGasPrice()
  const [userGasEstimate] = useUserGasEstimate()

  const gasPriceParsed = parseUnits(userGasPrice, 0)
  const bxTip = gasPriceParsed.mul(Math.round(((Number.parseInt(userGasEstimate) * 2) / 3) * BLXR_TIP_RATIO))

  return useMemo(() => {
    const tradeVersion = getTradeVersion(trade)
    if (
      !trade ||
      !recipient ||
      !library ||
      !account ||
      !tradeVersion ||
      !chainId ||
      !deadline ||
      tradeVersion !== Version.v2 ||
      !exchange?.router
    )
      return []

    const underlyingRouter = getUnderlyingExchangeRouterContract(exchange.router, chainId, library, account)
    if (!underlyingRouter) {
      return []
    }

    let contract = underlyingRouter
    if (BLXR_ENABLE_SWAP_ROUTER) {
      contract = getBxSwapContract(chainId as ChainId, library, account)
    }

    if (trade instanceof V2Trade) {
      if (!underlyingRouter) return []
      const swapMethods = []

      if (!BLXR_ENABLE_SWAP_ROUTER) {
        swapMethods.push(
          Router.swapCallParameters(trade, {
            feeOnTransfer: false,
            allowedSlippage,
            recipient,
            deadline: deadline.toNumber(),
          })
        )

        if (trade.tradeType === TradeType.EXACT_INPUT) {
          swapMethods.push(
            Router.swapCallParameters(trade, {
              feeOnTransfer: true,
              allowedSlippage,
              recipient,
              deadline: deadline.toNumber(),
            })
          )
        }
      } else {
        swapMethods.push(
          BxSwapRouter.swapCallParameters(underlyingRouter.address, trade, {
            allowedSlippage,
            recipient,
            deadline: deadline.toNumber(),
            ethTip: CurrencyAmount.ether(bxTip.toString()),
          })
        )
      }
      return swapMethods.map((parameters) => ({ parameters, contract, bxTip }))
    } else {
      console.debug(signatureData)
      return []
    }
  }, [account, allowedSlippage, chainId, deadline, library, recipient, signatureData, trade, exchange, bxTip])
}

/**
 * This is hacking out the revert reason from the ethers provider thrown error however it can.
 * This object seems to be undocumented by ethers.
 * @param error an error from the ethers provider
 */
export function swapErrorToUserReadableMessage(error: any): string {
  let reason: string | undefined
  while (Boolean(error)) {
    reason = error.reason ?? error.message ?? reason
    error = error.error ?? error.data?.originalError
  }

  if (reason?.indexOf('execution reverted: ') === 0) reason = reason.substr('execution reverted: '.length)

  switch (reason) {
    case 'UniswapV2Router: EXPIRED':
      return 'The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.'
    case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
    case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
      return 'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.'
    case 'TransferHelper: TRANSFER_FROM_FAILED':
      return 'The input token cannot be transferred. There may be an issue with the input token.'
    case 'UniswapV2: TRANSFER_FAILED':
      return 'The output token cannot be transferred. There may be an issue with the output token.'
    case 'UniswapV2: K':
      return 'The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.'
    case 'Too little received':
    case 'Too much requested':
    case 'STF':
      return 'This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.'
    case 'TF':
      return 'The output token cannot be transferred. There may be an issue with the output token. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.'
    default:
      if (reason?.indexOf('undefined is not an object') !== -1) {
        console.error(error, reason)
        return 'An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.'
      }
      return `Unknown error${
        reason ? `: "${reason}"` : ''
      }. Try increasing your slippage tolerance. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.`
  }
}

// returns a function that will execute a swap, if the parameters are all valid
// and the user has approved the slippage adjusted input amount for the trade
export function useSwapCallback(
  trade: V2Trade<Currency, Currency, TradeType> | undefined, // trade to execute, required
  allowedSlippage: Percent, // in bips
  recipientAddressOrName: string | null, // the ENS name or address of the recipient of the trade, or null if swap should be returned to sender
  signatureData: SignatureData | undefined | null
): { state: SwapCallbackState; callback: null | (() => Promise<string>); error: string | null } {
  const { account, chainId, library } = useActiveWeb3React()

  const swapCalls = useSwapCallArguments(trade, allowedSlippage, recipientAddressOrName, signatureData)
  const [userGasPrice] = useUserGasPrice()
  const [userGasEstimate] = useUserGasEstimate()
  const userGasEstimateBN = BigNumber.from(userGasEstimate)
  const userGasPriceBN = BigNumber.from(userGasPrice)
  const { address: recipientAddress } = useENS(recipientAddressOrName)
  const recipient = recipientAddressOrName === null ? account : recipientAddress
  const [arbiProfit, setArbiProfit] = useArbiProfit()

  return useMemo(() => {
    if (!trade || !library || !account || !chainId) {
      return { state: SwapCallbackState.INVALID, callback: null, error: 'Missing dependencies' }
    }
    if (!recipient) {
      if (recipientAddressOrName !== null) {
        return { state: SwapCallbackState.INVALID, callback: null, error: 'Invalid recipient' }
      } else {
        return { state: SwapCallbackState.LOADING, callback: null, error: null }
      }
    }
    return {
      state: SwapCallbackState.VALID,
      callback: async function onSwap(): Promise<string> {
        const estimatedCalls: EstimatedSwapCall[] = await Promise.all(
          swapCalls.map((call) => {
            const {
              parameters: { methodName, args, value },
              contract,
            } = call
            const options = !value || isZero(value) ? {} : { value }

            return contract.estimateGas[methodName](...args, options)
              .then((gasEstimate) => {
                return {
                  call,
                  gasEstimate,
                }
              })
              .catch((gasError) => {
                console.debug('Gas estimate failed, trying eth_call to extract error', call)

                return contract.callStatic[methodName](...args, options)
                  .then((result) => {
                    console.debug('Unexpected successful call after failed estimate gas', call, gasError, result)
                    return { call, error: new Error('Unexpected issue with estimating the gas. Please try again.') }
                  })
                  .catch((callError) => {
                    console.debug('Call threw error', call, callError)
                    let errorMessage: string
                    switch (callError.reason) {
                      case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
                      case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
                        errorMessage =
                          'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.'
                        break
                      default:
                        errorMessage = `The transaction cannot succeed due to error: ${callError.reason}. This is probably an issue with one of the tokens you are swapping.`
                    }
                    return { call, error: new Error(errorMessage) }
                  })
              })
          })
        )

        // a successful estimation is a bignumber gas estimate and the next call is also a bignumber gas estimate
        const bestCallOption = estimatedCalls.find(
          (el, ix, list): el is SuccessfulCall =>
            'gasEstimate' in el && (ix === list.length - 1 || 'gasEstimate' in list[ix + 1])
        )

        // check if any calls errored with a recognizable error
        if (!bestCallOption) {
          const errorCalls = estimatedCalls.filter((call): call is FailedCall => 'error' in call)
          if (errorCalls.length > 0) throw errorCalls[errorCalls.length - 1].error
          throw new Error('Unexpected error. Please contact support: none of the calls threw an error')
        }

        const {
          call: {
            contract,
            parameters: { methodName, args, value },
          },
        } = bestCallOption

        const postToRelay = (rawTransaction: string) => {
          // as a wise man on the critically acclaimed hit TV series "MTV's Cribs" once said:
          // "this is where the magic happens"

          const relayURI = chainId ? BLXR_RELAY_URI[chainId] : undefined
          if (!relayURI) throw new Error('Could not determine relay URI for this network')

          const body = JSON.stringify({
            method: 'blxr_private_tx',
            id: '1',
            jsonrpc: '2.0',
            params: {
              transaction: rawTransaction.slice(2),
              ...(arbiProfit.hash ? { uuid: arbiProfit.hash } : {}),
            },
          })
          fetch(`${relayURI}/blxr_private_tx` + '?blxr_env=' + BLXR_ENV, {
            method: 'POST',
            body,
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((err) => console.error(err))
        }
        const partialTx = {
          from: account,
          to: contract.address,
          data: contract.interface.encodeFunctionData(methodName, args),
          gasLimit: userGasEstimateBN,
          gasPrice: userGasPriceBN,
          ...(value && !isZero(value) ? { value } : {}),
        }

        return contract.signer
          .populateTransaction(partialTx)
          .then((fullTx) => {
            // metamask doesn't support Signer.signTransaction, so we have to do all this manually
            //return contract.signer.signTransaction(fullTx)

            const chainNames: { [chainId in ChainId]?: string } = {
              [ChainId.MAINNET]: 'mainnet',
              [ChainId.RINKEBY]: 'rinkeby',
            }
            const chain = chainNames[chainId]
            if (!chain) throw new Error(`Unknown chain ID ${chainId} when building transaction`)

            const common = new Common({ chain, hardfork: 'berlin' })

            const txParams = {
              nonce: fullTx.nonce !== undefined ? ethers.utils.hexlify(fullTx.nonce, { hexPad: 'left' }) : undefined,
              gasPrice:
                fullTx.gasPrice !== undefined ? ethers.utils.hexlify(fullTx.gasPrice, { hexPad: 'left' }) : undefined,
              gasLimit:
                fullTx.gasLimit !== undefined ? ethers.utils.hexlify(fullTx.gasLimit, { hexPad: 'left' }) : undefined,
              to: fullTx.to,
              value: fullTx.value !== undefined ? ethers.utils.hexlify(fullTx.value, { hexPad: 'left' }) : undefined,
              data: fullTx.data?.toString(),
              chainId: fullTx.chainId !== undefined ? ethers.utils.hexlify(fullTx.chainId) : undefined,
              type: fullTx.type !== undefined ? ethers.utils.hexlify(fullTx.type) : undefined,
            }
            console.log(txParams)
            const tx = TransactionFactory.fromTxData(txParams, {})
            const unsignedTx = tx.getMessageToSign()

            if (!(contract.signer instanceof JsonRpcSigner)) {
              throw new Error(`Cannot sign transactions with this wallet type`)
            }
            const signer = contract.signer as JsonRpcSigner

            // ethers will change eth_sign to personal_sign if it detects metamask
            // https://github.com/ethers-io/ethers.js/blob/2a7dbf05718e29e550f7a208d35a095547b9ccc2/packages/providers/src.ts/web3-provider.ts#L33

            let isMetamask: boolean | undefined
            let web3Provider: Web3Provider | undefined
            if (signer.provider instanceof Web3Provider && signer.provider.provider.isMetaMask) {
              web3Provider = signer.provider as Web3Provider
              isMetamask = web3Provider.provider.isMetaMask
              web3Provider.provider.isMetaMask = false
            }

            return signer.provider
              .send('eth_sign', [account, ethers.utils.hexlify(unsignedTx)])
              .then((signature) => {
                const signatureParts = ethers.utils.splitSignature(signature)

                // really crossing the streams here
                // @ts-ignore
                const txWithSignature = tx._processSignature(
                  signatureParts.v,
                  ethers.utils.arrayify(signatureParts.r),
                  ethers.utils.arrayify(signatureParts.s)
                )

                return { signedTx: ethers.utils.hexlify(txWithSignature.serialize()), fullTx }
              })
              .finally(() => {
                if (web3Provider) {
                  web3Provider.provider.isMetaMask = isMetamask
                }
              })
          })
          .then(({ signedTx, fullTx }) => {
            const hash = ethers.utils.keccak256(signedTx)
            console.log(`full signed tx: ${JSON.stringify(fullTx)}, signed: ${signedTx}`)
            postToRelay(signedTx)
            return hash
          })
          .catch((error) => {
            // if the user rejected the tx, pass this along
            if (error?.code === 4001) {
              throw new Error('Transaction rejected.')
            } else {
              // otherwise, the error was unexpected and we need to convey that
              console.error(`Swap failed`, error, methodName, args, value)

              throw new Error(`Swap failed: ${swapErrorToUserReadableMessage(error)}`)
            }
          })
      },
      error: null,
    }
  }, [
    trade,
    library,
    account,
    chainId,
    recipient,
    recipientAddressOrName,
    swapCalls,
    userGasPriceBN,
    userGasEstimateBN,
  ])
}
