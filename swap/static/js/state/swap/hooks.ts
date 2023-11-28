import JSBI from 'jsbi'
import { BigNumber } from '@ethersproject/bignumber'
import { Trade as V3Trade } from '@uniswap/v3-sdk'
// import { useBestV3TradeExactIn, useBestV3TradeExactOut, V3TradeState } from '../../hooks/useBestV3Trade'
import useENS from '../../hooks/useENS'
import { parseUnits, parseEther, formatUnits } from '@ethersproject/units'
import { Currency, CurrencyAmount, Percent, TradeType } from '@uniswap/sdk-core'
import { Trade as V2Trade } from '@uniswap/v2-sdk'
import { ParsedQs } from 'qs'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useActiveWeb3React } from '../../hooks'
import { useCurrency } from '../../hooks/Tokens'
import useSwapSlippageTolerance from '../../hooks/useSwapSlippageTolerance'
import { Version } from '../../hooks/useToggledVersion'
import { useV2TradeExactIn, useV2TradeExactOut } from '../../hooks/useV2Trade'
import useParsedQueryString from '../../hooks/useParsedQueryString'
import { SuccessfulCall, FailedCall, useSwapCallArguments, EstimatedSwapCall } from '../../hooks/useSwapCallback'
import { isAddress } from '../../utils'
import { AppDispatch, AppState } from '../index'
import { useCurrencyBalances } from '../wallet/hooks'
import {
  Field,
  replaceSwapState,
  selectCurrency,
  setRecipient,
  switchCurrencies,
  typeInput,
  updateArbiProfit,
} from './actions'
import { SwapState } from './reducer'
import { useUserGasPrice, useUserGasEstimateManualOverride } from '../user/hooks'
import getGasPrice from '../../utils/getGasPrice'
import isZero from '../../utils/isZero'
import { useBlockNumber } from '../application/hooks'
import { DEFAULT_GAS_ESTIMATE } from '../../constants'
import { useUserTipManualOverride, useUserGasEstimate } from '../user/hooks'
import { useTranslation } from 'react-i18next'

export function useSwapState(): AppState['swap'] {
  return useSelector<AppState, AppState['swap']>((state) => state.swap)
}

export function useSwapActionHandlers(): {
  onCurrencySelection: (field: Field, currency: Currency) => void
  onSwitchTokens: () => void
  onUserInput: (field: Field, typedValue: string) => void
  onChangeRecipient: (recipient: string | null) => void
} {
  const dispatch = useDispatch<AppDispatch>()
  const onCurrencySelection = useCallback(
    (field: Field, currency: Currency) => {
      dispatch(
        selectCurrency({
          field,
          currencyId: currency.isToken ? currency.address : currency.isEther ? 'ETH' : '',
        })
      )
    },
    [dispatch]
  )

  const onSwitchTokens = useCallback(() => {
    dispatch(switchCurrencies())
  }, [dispatch])

  const onUserInput = useCallback(
    (field: Field, typedValue: string) => {
      dispatch(typeInput({ field, typedValue }))
    },
    [dispatch]
  )

  const onChangeRecipient = useCallback(
    (recipient: string | null) => {
      dispatch(setRecipient({ recipient }))
    },
    [dispatch]
  )

  return {
    onSwitchTokens,
    onCurrencySelection,
    onUserInput,
    onChangeRecipient,
  }
}

// try to parse a user entered amount for a given token
export function tryParseAmount<T extends Currency>(value?: string, currency?: T): CurrencyAmount<T> | undefined {
  if (!value || !currency) {
    return undefined
  }
  try {
    const typedValueParsed = parseUnits(value, currency.decimals).toString()
    if (typedValueParsed !== '0') {
      return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed))
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.log(`Failed to parse input amount: "${value}"`, error)
  }
  // necessary for all paths to return a value
  return undefined
}

// try to parse a user entered amount for a given token
export function tryParseGasFee<T extends Currency>(value?: string, currency?: T): JSBI | undefined {
  if (!value || !currency) {
    return undefined
  }
  try {
    const typedValueParsed = parseUnits(value, 'gwei').toString()
    if (typedValueParsed !== '0') {
      return JSBI.BigInt(typedValueParsed)
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.log(`Failed to parse input amount: "${value}"`, error)
  }
  // necessary for all paths to return a value
  return undefined
}

// try to parse a user entered amount for a given token
export function weiToGwei(wei: string): JSBI | undefined {
  if (!wei) {
    return undefined
  }
  try {
    const typedValueParsed = parseEther(wei)
    if (typedValueParsed.toString() !== '0') {
      return JSBI.BigInt(Number.parseInt(formatUnits(wei, 'gwei')))
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.log(`Failed to parse input amount: "${wei}"`, error)
  }
  // necessary for all paths to return a value
  return undefined
}

const BAD_RECIPIENT_ADDRESSES: { [address: string]: true } = {
  '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f': true, // v2 factory
  '0xf164fC0Ec4E93095b804a4795bBe1e041497b92a': true, // v2 router 01
  '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D': true, // v2 router 02
}

/**
 * Returns true if any of the pairs or tokens in a trade have the given checksummed address
 * @param trade to check for the given address
 * @param checksummedAddress address to check in the pairs and tokens
 */
function involvesAddress(
  trade: V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType>,
  checksummedAddress: string
): boolean {
  const path = trade instanceof V2Trade ? trade.route.path : trade.route.tokenPath
  return (
    path.some((token) => token.address === checksummedAddress) ||
    (trade instanceof V2Trade
      ? trade.route.pairs.some((pair) => pair.liquidityToken.address === checksummedAddress)
      : false)
  )
}

// from the current swap inputs, compute the best trade and return it.
export function useDerivedSwapInfo(
  toggledVersion: Version
): {
  currencies: { [field in Field]?: Currency }
  currencyBalances: { [field in Field]?: CurrencyAmount<Currency> }
  parsedAmount: CurrencyAmount<Currency> | undefined
  inputError?: string
  v2Trade: V2Trade<Currency, Currency, TradeType> | undefined
  v3TradeState: { trade: V3Trade<Currency, Currency, TradeType> | null; state: null }
  toggledTrade: V2Trade<Currency, Currency, TradeType> | undefined
  allowedSlippage: Percent
} {
  const { account, library } = useActiveWeb3React()

  const { t } = useTranslation()

  const {
    independentField,
    typedValue,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
    recipient,
  } = useSwapState()

  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)
  const recipientLookup = useENS(recipient ?? undefined)
  const to: string | null = (recipient === null ? account : recipientLookup.address) ?? null

  const relevantTokenBalances = useCurrencyBalances(account ?? undefined, [
    inputCurrency ?? undefined,
    outputCurrency ?? undefined,
  ])

  const isExactIn: boolean = independentField === Field.INPUT
  const parsedAmount = tryParseAmount(typedValue, (isExactIn ? inputCurrency : outputCurrency) ?? undefined)

  const bestV2TradeExactIn = useV2TradeExactIn(isExactIn ? parsedAmount : undefined, outputCurrency ?? undefined)
  const bestV2TradeExactOut = useV2TradeExactOut(inputCurrency ?? undefined, !isExactIn ? parsedAmount : undefined)

  const bestV3TradeExactIn = null
  const bestV3TradeExactOut = null

  const v2Trade = isExactIn ? bestV2TradeExactIn : bestV2TradeExactOut
  const v3Trade = isExactIn ? bestV3TradeExactIn : bestV3TradeExactOut

  const currencyBalances = {
    [Field.INPUT]: relevantTokenBalances[0],
    [Field.OUTPUT]: relevantTokenBalances[1],
  }

  const currencies: { [field in Field]?: Currency } = {
    [Field.INPUT]: inputCurrency ?? undefined,
    [Field.OUTPUT]: outputCurrency ?? undefined,
  }

  let inputError: string | undefined
  if (!account) {
    inputError = t('connect_wallet')
  }

  if (!parsedAmount) {
    inputError = inputError ?? t('enter_an_amount')
  }

  if (!currencies[Field.INPUT] || !currencies[Field.OUTPUT]) {
    inputError = inputError ?? t('select_token')
  }

  const formattedTo = isAddress(to)
  if (!to || !formattedTo) {
    inputError = inputError ?? t('enter_recipient')
  } else {
    if (
      BAD_RECIPIENT_ADDRESSES[formattedTo] ||
      (bestV2TradeExactIn && involvesAddress(bestV2TradeExactIn, formattedTo)) ||
      (bestV2TradeExactOut && involvesAddress(bestV2TradeExactOut, formattedTo))
    ) {
      inputError = inputError ?? t('invalid_recipient')
    }
  }

  const toggledTrade = (toggledVersion === Version.v2 ? v2Trade : null) ?? undefined
  const allowedSlippage = useSwapSlippageTolerance(toggledTrade)

  // compare input balance to max input based on version
  const [balanceIn, amountIn] = [currencyBalances[Field.INPUT], v2Trade?.maximumAmountIn(allowedSlippage)]

  if (balanceIn && amountIn && balanceIn.lessThan(amountIn)) {
    inputError = t('insufficient_token_balance', amountIn.currency.symbol)
  }
  const swapCalls = useSwapCallArguments(toggledTrade, allowedSlippage, to, null)
  const [, setUserGasPrice] = useUserGasPrice()
  const [, setUserGasEstimate] = useUserGasEstimate()
  const [userGasEstimateManualOverride, setUserGasEstimateManualOverride] = useUserGasEstimateManualOverride()
  const [userTipManualOverride, setUserTipManualOverride] = useUserTipManualOverride()
  const blockNumber = useBlockNumber()

  useEffect(() => {
    setUserTipManualOverride(false)
    setUserGasEstimateManualOverride(false)
    setUserGasEstimate(DEFAULT_GAS_ESTIMATE.toString())
  }, [setUserTipManualOverride, setUserGasEstimateManualOverride, setUserGasEstimate])

  useEffect(() => {
    async function getCurrentGasPrice() {
      if (!userTipManualOverride) {
        const gasPrice = await getGasPrice(library)
        setUserGasPrice(gasPrice.toString())
      }
    }
    getCurrentGasPrice()
  }, [library, blockNumber, setUserGasPrice, userTipManualOverride])

  useEffect(() => {
    async function estimateGas() {
      if (!library || !account) {
        return
      }
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
      if ('gasEstimate' in bestCallOption) {
        const multipleGasEstimate: BigNumber = bestCallOption.gasEstimate.mul(3).div(2)
        if (!userGasEstimateManualOverride) {
          setUserGasEstimate(multipleGasEstimate.toString())
        }
      }
    }
    if (v2Trade && swapCalls && !userGasEstimateManualOverride) {
      estimateGas()
    }
  }, [v2Trade, account, library, swapCalls, userTipManualOverride, setUserGasEstimate, userGasEstimateManualOverride])

  return {
    currencies,
    currencyBalances,
    parsedAmount,
    inputError,
    v2Trade: v2Trade ?? undefined,
    v3TradeState: { trade: v3Trade, state: null },
    toggledTrade,
    allowedSlippage,
  }
}

function parseCurrencyFromURLParameter(urlParam: any): string {
  if (typeof urlParam === 'string') {
    const valid = isAddress(urlParam)
    if (valid) return valid
    if (urlParam.toUpperCase() === 'ETH') return 'ETH'
  }
  return ''
}

function parseTokenAmountURLParameter(urlParam: any): string {
  return typeof urlParam === 'string' && !isNaN(parseFloat(urlParam)) ? urlParam : ''
}

function parseIndependentFieldURLParameter(urlParam: any): Field {
  return typeof urlParam === 'string' && urlParam.toLowerCase() === 'output' ? Field.OUTPUT : Field.INPUT
}

const ENS_NAME_REGEX = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/
const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/
function validatedRecipient(recipient: any): string | null {
  if (typeof recipient !== 'string') return null
  const address = isAddress(recipient)
  if (address) return address
  if (ENS_NAME_REGEX.test(recipient)) return recipient
  if (ADDRESS_REGEX.test(recipient)) return recipient
  return null
}

export function queryParametersToSwapState(parsedQs: ParsedQs): SwapState {
  let inputCurrency = parseCurrencyFromURLParameter(parsedQs.inputCurrency)
  let outputCurrency = parseCurrencyFromURLParameter(parsedQs.outputCurrency)
  if (inputCurrency === '' && outputCurrency === '') {
    // default to ETH input
    inputCurrency = 'ETH'
  } else if (inputCurrency === outputCurrency) {
    // clear output if identical
    outputCurrency = ''
  }

  const recipient = validatedRecipient(parsedQs.recipient)

  return {
    [Field.INPUT]: {
      currencyId: inputCurrency,
    },
    [Field.OUTPUT]: {
      currencyId: outputCurrency,
    },
    typedValue: parseTokenAmountURLParameter(parsedQs.exactAmount),
    independentField: parseIndependentFieldURLParameter(parsedQs.exactField),
    recipient,
    arbiProfit: {
      userProfit: '0',
      hash: null,
    },
  }
}

// updates the swap state to use the defaults for a given network
export function useDefaultsFromURLSearch():
  | { inputCurrencyId: string | undefined; outputCurrencyId: string | undefined }
  | undefined {
  const { chainId } = useActiveWeb3React()
  const dispatch = useDispatch<AppDispatch>()
  const parsedQs = useParsedQueryString()
  const [result, setResult] = useState<
    { inputCurrencyId: string | undefined; outputCurrencyId: string | undefined } | undefined
  >()

  useEffect(() => {
    if (!chainId) return
    const parsed = queryParametersToSwapState(parsedQs)

    dispatch(
      replaceSwapState({
        typedValue: parsed.typedValue,
        field: parsed.independentField,
        inputCurrencyId: parsed[Field.INPUT].currencyId,
        outputCurrencyId: parsed[Field.OUTPUT].currencyId,
        recipient: parsed.recipient,
      })
    )

    setResult({ inputCurrencyId: parsed[Field.INPUT].currencyId, outputCurrencyId: parsed[Field.OUTPUT].currencyId })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, chainId])

  return result
}

type ArbiProfitType = AppState['swap']['arbiProfit']

export function useArbiProfit(): [ArbiProfitType, (aProfit: ArbiProfitType) => void] {
  const dispatch = useDispatch<AppDispatch>()
  const arbiProfit = useSelector<AppState, ArbiProfitType>((state) => {
    return state.swap.arbiProfit
  })

  const setArbiProfit = useCallback(
    (arbiProfit: ArbiProfitType) => {
      dispatch(updateArbiProfit(arbiProfit))
    },
    [dispatch]
  )

  return [arbiProfit, setArbiProfit]
}
