import { Currency, CurrencyAmount, Token, TradeType } from '@uniswap/sdk-core'
import { Trade as V2Trade } from '@uniswap/v2-sdk'
import { Trade as V3Trade } from '@uniswap/v3-sdk'
import { AdvancedSwapDetails } from 'components/swap/AdvancedSwapDetails'
import UnsupportedCurrencyFooter from 'components/swap/UnsupportedCurrencyFooter'
import { MouseoverTooltip, MouseoverTooltipContent } from 'components/Tooltip'
import JSBI from 'jsbi'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowDown, CheckCircle, HelpCircle, Info } from 'react-feather'
import ReactGA from 'react-ga4'
import { RouteComponentProps } from 'react-router-dom'
import { Text } from 'rebass'
import styled, { ThemeContext } from 'styled-components'
import AddressInputPanel from '../../components/AddressInputPanel'
import { ButtonConfirmed, ButtonError, ButtonLight, ButtonPrimary } from '../../components/Button'
import { GreyCard } from '../../components/Card'
import { AutoColumn } from '../../components/Column'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import CurrencyLogo from '../../components/CurrencyLogo'
import Loader from '../../components/Loader'
import Row, { AutoRow, RowFixed } from '../../components/Row'
import confirmPriceImpactWithoutFee from '../../components/swap/confirmPriceImpactWithoutFee'
import ConfirmSwapModal from '../../components/swap/ConfirmSwapModal'
import { ArrowWrapper, BottomGrouping, Dots, SwapCallbackError, Wrapper } from '../../components/swap/styleds'
import SwapHeader from '../../components/swap/SwapHeader'
import TradePrice from '../../components/swap/TradePrice'
import TokenWarningModal from '../../components/TokenWarningModal'
import { useActiveWeb3React } from '../../hooks'
import { useAllTokens, useCurrency } from '../../hooks/Tokens'
import { ApprovalState, useApproveCallbackFromTrade } from '../../hooks/useApproveCallback'
import useENSAddress from '../../hooks/useENSAddress'
import { useERC20PermitFromTrade, UseERC20PermitState } from '../../hooks/useERC20Permit'
import { useIsSwapUnsupported } from '../../hooks/useIsSwapUnsupported'
import { useSwapCallback } from '../../hooks/useSwapCallback'
import useToggledVersion from '../../hooks/useToggledVersion'
import { useUSDCValue } from '../../hooks/useUSDCPrice'
import useWrapCallback, { WrapType } from '../../hooks/useWrapCallback'
import { useBlockNumber, useWalletModalToggle } from '../../state/application/hooks'
import { Field } from '../../state/swap/actions'
import { Row as AntdRow, Col } from 'antd'
import {
  useArbiProfit,
  useDefaultsFromURLSearch,
  useDerivedSwapInfo,
  useSwapActionHandlers,
  useSwapState,
} from '../../state/swap/hooks'
import {
  useExpertModeManager,
  useUserGasEstimateManualOverride,
  useUserSingleHopOnly,
  useUserTipManualOverride,
} from '../../state/user/hooks'
import { LinkStyledButton, TYPE } from '../../theme'
import { computeFiatValuePriceImpact } from '../../utils/computeFiatValuePriceImpact'
import { getTradeVersion } from '../../utils/getTradeVersion'
import { maxAmountSpend } from '../../utils/maxAmountSpend'
import { warningSeverity } from '../../utils/prices'
import AppBody from '../AppBody'
import UnderlyingExchangeToggle from '../../components/UnderlyingExchangeToggle'
import GasInputSettings from '../../components/GasInputSettings'
import Tos from '../../components/Header/Tos'
import { ReactComponent as DropDown } from '../../assets/images/dropdown.svg'
import { ReactComponent as DropUp } from '../../assets/images/dropup-blue.svg'
import 'antd/dist/antd.css'
import './Swap.css'
import ArbiProfit from 'components/ArbiProfit'
import { useArbiProfitCallback } from 'hooks/useArbiProfitCallback'
import useDebounce from 'hooks/useDebounce'

const StyledInfo = styled(Info)`
  // color: ${({ theme }) => theme.text1};
  color: #fff;
  height: 16px;
  width: 16px;
  vertical-align: middle;
  marign-top: 2px;
  :hover {
    opacity: 0.8;
  }
`

const StyledDropUp = styled(DropUp)<{ selected: boolean }>`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({ selected, theme }) => (selected ? '#fff' : '#fff')};
    stroke-width: 1.5px;
  }
`

const StyledDropDown = styled(DropDown)<{ selected: boolean }>`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({ selected, theme }) => (selected ? '#fff' : '#fff')};
    stroke-width: 1.5px;
  }
`

export default function Swap({ history }: RouteComponentProps) {
  const loadedUrlParams = useDefaultsFromURLSearch()

  const { t } = useTranslation()

  // token warning stuff
  const [loadedInputCurrency, loadedOutputCurrency] = [
    useCurrency(loadedUrlParams?.inputCurrencyId),
    useCurrency(loadedUrlParams?.outputCurrencyId),
  ]
  const [dismissTokenWarning, setDismissTokenWarning] = useState<boolean>(false)
  const urlLoadedTokens: Token[] = useMemo(
    () => [loadedInputCurrency, loadedOutputCurrency]?.filter((c): c is Token => c?.isToken ?? false) ?? [],
    [loadedInputCurrency, loadedOutputCurrency]
  )
  const handleConfirmTokenWarning = useCallback(() => {
    setDismissTokenWarning(true)
  }, [])

  // dismiss warning if all imported tokens are in active lists
  const defaultTokens = useAllTokens()
  const importTokensNotInDefault =
    urlLoadedTokens &&
    urlLoadedTokens.filter((token: Token) => {
      return !Boolean(token.address in defaultTokens)
    })

  const { account } = useActiveWeb3React()
  const theme = useContext(ThemeContext)

  // toggle wallet when disconnected
  const toggleWalletModal = useWalletModalToggle()

  // for expert mode
  const [isExpertMode] = useExpertModeManager()

  // get version from the url
  const toggledVersion = useToggledVersion()

  // swap state
  const {
    independentField,
    typedValue,
    recipient,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const {
    toggledTrade: trade,
    allowedSlippage,
    currencyBalances,
    parsedAmount,

    currencies,
    inputError: swapInputError,
  } = useDerivedSwapInfo(toggledVersion)

  const { wrapType, execute: onWrap, inputError: wrapInputError } = useWrapCallback(
    currencies[Field.INPUT],
    currencies[Field.OUTPUT],
    typedValue
  )
  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE
  const { address: recipientAddress } = useENSAddress(recipient)

  const parsedAmounts = useMemo(
    () =>
      showWrap
        ? {
            [Field.INPUT]: parsedAmount,
            [Field.OUTPUT]: parsedAmount,
          }
        : {
            [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
            [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.outputAmount,
          },
    [independentField, parsedAmount, showWrap, trade]
  )

  const fiatValueInput = useUSDCValue(parsedAmounts[Field.INPUT])
  const fiatValueOutput = useUSDCValue(parsedAmounts[Field.OUTPUT])
  const priceImpact = computeFiatValuePriceImpact(fiatValueInput, fiatValueOutput)

  const { onSwitchTokens, onCurrencySelection, onUserInput, onChangeRecipient } = useSwapActionHandlers()
  const isValid = !swapInputError
  const dependentField: Field = independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value)
    },
    [onUserInput]
  )
  const handleTypeOutput = useCallback(
    (value: string) => {
      onUserInput(Field.OUTPUT, value)
    },
    [onUserInput]
  )

  // reset if they close warning without tokens in params
  const handleDismissTokenWarning = useCallback(() => {
    setDismissTokenWarning(true)
    history.push('/swap/')
  }, [history])

  // modal and loading
  const [{ showConfirm, tradeToConfirm, swapErrorMessage, attemptingTxn, txHash }, setSwapState] = useState<{
    showConfirm: boolean
    tradeToConfirm: V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType> | undefined
    attemptingTxn: boolean
    swapErrorMessage: string | undefined
    txHash: string | undefined
  }>({
    showConfirm: false,
    tradeToConfirm: undefined,
    attemptingTxn: false,
    swapErrorMessage: undefined,
    txHash: undefined,
  })

  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: showWrap
      ? parsedAmounts[independentField]?.toExact() ?? ''
      : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }

  const userHasSpecifiedInputOutput = Boolean(
    currencies[Field.INPUT] && currencies[Field.OUTPUT] && parsedAmounts[independentField]?.greaterThan(JSBI.BigInt(0))
  )
  const routeNotFound = !trade?.route
  const isLoadingRoute = false

  // check whether the user has approved the router on the input token
  const [approvalState, approveCallback] = useApproveCallbackFromTrade(trade, allowedSlippage)
  const { state: signatureState, signatureData, gatherPermitSignature } = useERC20PermitFromTrade(
    trade,
    allowedSlippage
  )

  const handleApprove = useCallback(async () => {
    if (signatureState === UseERC20PermitState.NOT_SIGNED && gatherPermitSignature) {
      try {
        await gatherPermitSignature()
      } catch (error) {
        // try to approve if gatherPermitSignature failed for any reason other than the user rejecting it
        if (error?.code !== 4001) {
          await approveCallback()
        }
      }
    } else {
      await approveCallback()
    }
  }, [approveCallback, gatherPermitSignature, signatureState])

  // check if user has gone through approval process, used to show two step buttons, reset on token change
  const [approvalSubmitted, setApprovalSubmitted] = useState<boolean>(false)

  // mark when a user has submitted an approval, reset onTokenSelection for input field
  useEffect(() => {
    if (approvalState === ApprovalState.PENDING) {
      setApprovalSubmitted(true)
    }
  }, [approvalState, approvalSubmitted])

  const maxInputAmount: CurrencyAmount<Currency> | undefined = maxAmountSpend(currencyBalances[Field.INPUT])
  const showMaxButton = Boolean(maxInputAmount?.greaterThan(0) && !parsedAmounts[Field.INPUT]?.equalTo(maxInputAmount))

  // the callback to execute the swap
  const { callback: swapCallback, error: swapCallbackError } = useSwapCallback(
    trade,
    allowedSlippage,
    recipient,
    signatureData
  )

  const [singleHopOnly] = useUserSingleHopOnly()

  const handleSwap = useCallback(() => {
    if (!swapCallback) {
      return
    }
    if (priceImpact && !confirmPriceImpactWithoutFee(priceImpact)) {
      return
    }
    setSwapState({ attemptingTxn: true, tradeToConfirm, showConfirm, swapErrorMessage: undefined, txHash: undefined })
    swapCallback()
      .then((hash) => {
        setSwapState({ attemptingTxn: false, tradeToConfirm, showConfirm, swapErrorMessage: undefined, txHash: hash })

        ReactGA.event({
          category: 'Swap',
          action:
            recipient === null
              ? 'Swap w/o Send'
              : (recipientAddress ?? recipient) === account
              ? 'Swap w/o Send + recipient'
              : 'Swap w/ Send',
          label: [
            trade?.inputAmount?.currency?.symbol,
            trade?.outputAmount?.currency?.symbol,
            getTradeVersion(trade),
            singleHopOnly ? 'SH' : 'MH',
          ].join('/'),
        })
      })
      .catch((error) => {
        setSwapState({
          attemptingTxn: false,
          tradeToConfirm,
          showConfirm,
          swapErrorMessage: error.message,
          txHash: undefined,
        })
      })
  }, [
    priceImpact,
    swapCallback,
    tradeToConfirm,
    showConfirm,
    recipient,
    recipientAddress,
    account,
    trade,
    singleHopOnly,
  ])

  // errors
  const [showInverted, setShowInverted] = useState<boolean>(false)

  // warnings on the greater of fiat value price impact and execution price impact
  const priceImpactSeverity = useMemo(() => {
    const executionPriceImpact = trade?.priceImpact
    return warningSeverity(
      executionPriceImpact && priceImpact
        ? executionPriceImpact.greaterThan(priceImpact)
          ? executionPriceImpact
          : priceImpact
        : executionPriceImpact ?? priceImpact
    )
  }, [priceImpact, trade])

  // show approve flow when: no error on inputs, not approved or pending, or approved in current session
  // never show if price impact is above threshold in non expert mode
  const showApproveFlow =
    !swapInputError &&
    (approvalState === ApprovalState.NOT_APPROVED ||
      approvalState === ApprovalState.PENDING ||
      (approvalSubmitted && approvalState === ApprovalState.APPROVED)) &&
    !(priceImpactSeverity > 3 && !isExpertMode)

  const handleConfirmDismiss = useCallback(() => {
    setSwapState({ showConfirm: false, tradeToConfirm, attemptingTxn, swapErrorMessage, txHash })
    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onUserInput(Field.INPUT, '')
    }
  }, [attemptingTxn, onUserInput, swapErrorMessage, tradeToConfirm, txHash])

  const handleAcceptChanges = useCallback(() => {
    fetchArbiProfit()
    setSwapState({ tradeToConfirm: trade, swapErrorMessage, txHash, attemptingTxn, showConfirm })
  }, [attemptingTxn, showConfirm, swapErrorMessage, trade, txHash])

  const handleInputSelect = useCallback(
    (inputCurrency) => {
      setApprovalSubmitted(false) // reset 2 step UI for approvals
      onCurrencySelection(Field.INPUT, inputCurrency)
    },
    [onCurrencySelection]
  )

  const handleMaxInput = useCallback(() => {
    maxInputAmount && onUserInput(Field.INPUT, maxInputAmount.toExact())
  }, [maxInputAmount, onUserInput])

  const handleOutputSelect = useCallback((outputCurrency) => onCurrencySelection(Field.OUTPUT, outputCurrency), [
    onCurrencySelection,
  ])

  const swapIsUnsupported = useIsSwapUnsupported(currencies?.INPUT, currencies?.OUTPUT)
  const [userTipManualOverride, setUserTipManualOverride] = useUserTipManualOverride()
  const [userGasEstimateManualOverride, setUserGasEstimateManualOverride] = useUserGasEstimateManualOverride()
  const priceImpactTooHigh = priceImpactSeverity > 3 && !isExpertMode
  const [showDown, setShowDown] = useState(false)

  const ToggleWrapper = styled.div<{ margin?: string }>`
    position: relative;
    margin-top: ${({ margin }) => margin ?? '0px'};
    max-width: 480px;
    background: ${({ theme }) => theme.bg0};
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
      0px 24px 32px rgba(0, 0, 0, 0.01);
    border-radius: 24px;
    margin-top: 70px;
    border: 1px solid #2b2e40;
    border-radius: 16px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 18vw;
  `};
  `
  const ToggleStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: flex-center;
    width: 100%;
    justify-content: center;
  `

  const setShowDownWithGA = () => {
    setShowDown(true)
    ReactGA.event({
      category: 'Settings',
      action: 'Clicked Changes DropDown',
      label: 'Changes',
    })
  }

  const shouldHideBoost = !account || !trade || swapIsUnsupported || routeNotFound

  const { loading: fetchingArbiProfit, arbiProfit, refetch: fetchArbiProfit } = useArbiProfitCallback(recipientAddress)

  const debouncedTypedValue = useDebounce(typedValue, 100)

  useEffect(() => {
    // Do not fetch arbi profit when SwapConfirmModal is opened
    if (!showConfirm && trade) fetchArbiProfit()
  }, [debouncedTypedValue, inputCurrencyId, outputCurrencyId])

  // console.log('trade => ', trade)

  return (
    <>
      <ToggleWrapper>
        <ToggleStyle>
          <UnderlyingExchangeToggle id="underlying-exchange-toggle" />
        </ToggleStyle>
      </ToggleWrapper>
      <TokenWarningModal
        isOpen={importTokensNotInDefault.length > 0 && !dismissTokenWarning}
        tokens={importTokensNotInDefault}
        onConfirm={handleConfirmTokenWarning}
        onDismiss={handleDismissTokenWarning}
      />
      <AppBody>
        <SwapHeader allowedSlippage={allowedSlippage} />
        <Wrapper id="swap-page">
          <ConfirmSwapModal
            isOpen={showConfirm}
            trade={trade}
            originalTrade={tradeToConfirm}
            onAcceptChanges={handleAcceptChanges}
            attemptingTxn={attemptingTxn}
            txHash={txHash}
            recipient={recipient}
            allowedSlippage={allowedSlippage}
            onConfirm={handleSwap}
            swapErrorMessage={swapErrorMessage}
            onDismiss={handleConfirmDismiss}
            arbiProfit={arbiProfit}
            fetchingArbiProfit={fetchingArbiProfit}
          />

          <AutoColumn gap={'md'}>
            <div style={{ display: 'relative' }}>
              <CurrencyInputPanel
                label={independentField === Field.OUTPUT && !showWrap ? 'From (at most)' : 'From'}
                value={formattedAmounts[Field.INPUT]}
                showMaxButton={showMaxButton}
                currency={currencies[Field.INPUT]}
                onUserInput={handleTypeInput}
                onMax={handleMaxInput}
                fiatValue={fiatValueInput ?? undefined}
                onCurrencySelect={handleInputSelect}
                otherCurrency={currencies[Field.OUTPUT]}
                showCommonBases={true}
                id="swap-currency-input"
              />
              <AutoColumn justify="space-between">
                <AutoRow justify={'space-between'}>
                  <ArrowWrapper clickable>
                    <ArrowDown
                      size="16"
                      onClick={() => {
                        setApprovalSubmitted(false) // reset 2 step UI for approvals
                        onSwitchTokens()
                      }}
                      color={'#fff'}
                    />
                  </ArrowWrapper>
                </AutoRow>
              </AutoColumn>
              <CurrencyInputPanel
                value={formattedAmounts[Field.OUTPUT]}
                onUserInput={handleTypeOutput}
                label={independentField === Field.INPUT && !showWrap ? 'To (at least)' : 'To'}
                showMaxButton={true}
                hideBalance={false}
                fiatValue={fiatValueOutput ?? undefined}
                priceImpact={priceImpact}
                currency={currencies[Field.OUTPUT]}
                onCurrencySelect={handleOutputSelect}
                otherCurrency={currencies[Field.INPUT]}
                showCommonBases={true}
                id="swap-currency-output"
              />
            </div>

            <Row style={{ justifyContent: !trade ? 'center' : 'space-between' }}>
              {trade ? (
                <>
                  <div className={!showDown ? 'showInfo' : 'showInfo show'}>
                    <RowFixed>
                      <TradePrice
                        price={trade.executionPrice}
                        showInverted={showInverted}
                        setShowInverted={setShowInverted}
                      />
                      <MouseoverTooltipContent
                        content={<AdvancedSwapDetails trade={trade} allowedSlippage={allowedSlippage} />}
                      >
                        <StyledInfo />
                      </MouseoverTooltipContent>
                    </RowFixed>
                    {!showDown ? (
                      <span onClick={setShowDownWithGA}>
                        <StyledDropDown selected={false} />
                      </span>
                    ) : (
                      <span onClick={() => setShowDown(false)}>
                        <StyledDropUp selected={false} />
                      </span>
                    )}
                  </div>
                </>
              ) : null}
            </Row>

            {trade && showDown ? (
              <Row
                className={showDown && 'showDiv'}
                width={'100%'}
                justify={'space-between'}
                style={{ padding: '0rem 0rem 0rem 0rem' }}
              >
                <GasInputSettings
                  tipManualOverride={userTipManualOverride}
                  setTipManualOverride={setUserTipManualOverride}
                  userGasEstimateManualOverride={userGasEstimateManualOverride}
                  setUserGasEstimateManualOverride={setUserGasEstimateManualOverride}
                />
              </Row>
            ) : null}

            {!shouldHideBoost ? (
              <Row width={'100%'} justify={'space-between'} style={{ padding: '0rem 0rem 0rem 0rem' }}>
                <ArbiProfit fetching={fetchingArbiProfit} arbiProfit={arbiProfit} />
              </Row>
            ) : null}

            {recipient !== null && !showWrap ? (
              <>
                <AutoRow justify="space-between" style={{ padding: '0 1rem' }}>
                  <ArrowWrapper clickable={false}>
                    <ArrowDown size="16" color={theme.text2} />
                  </ArrowWrapper>
                  <LinkStyledButton id="remove-recipient-button" onClick={() => onChangeRecipient(null)}>
                    {t('remove_send')}
                  </LinkStyledButton>
                </AutoRow>
                <AddressInputPanel id="recipient" value={recipient} onChange={onChangeRecipient} />
              </>
            ) : null}
            {/* {trade ? <Row style={{ justifyContent: 'center', display: 'flex' }}>
              <Tos/>
            </Row> : null} */}
            <BottomGrouping>
              {swapIsUnsupported ? (
                <ButtonPrimary disabled={true}>
                  <TYPE.main mb="4px">{t('unsupported_asset')}</TYPE.main>
                </ButtonPrimary>
              ) : !account ? (
                <ButtonLight onClick={toggleWalletModal}>{t('connect_wallet')}</ButtonLight>
              ) : showWrap ? (
                <ButtonPrimary disabled={Boolean(wrapInputError)} onClick={onWrap}>
                  {wrapInputError ??
                    (wrapType === WrapType.WRAP ? 'Wrap' : wrapType === WrapType.UNWRAP ? 'Unwrap' : null)}
                </ButtonPrimary>
              ) : routeNotFound && userHasSpecifiedInputOutput ? (
                <GreyCard style={{ textAlign: 'center' }}>
                  <TYPE.main mb="4px">
                    {isLoadingRoute ? (
                      <Dots>{t('loading')}</Dots>
                    ) : (
                      `${t('insufficient_liquidity_for_this_trade')}${
                        singleHopOnly ? ' Try enabling multi-hop trades.' : ''
                      }`
                    )}
                  </TYPE.main>
                </GreyCard>
              ) : showApproveFlow ? (
                <AutoRow style={{ flexWrap: 'nowrap', width: '100%' }}>
                  <AutoColumn style={{ width: '100%' }} gap="12px">
                    <ButtonConfirmed
                      onClick={handleApprove}
                      disabled={
                        approvalState !== ApprovalState.NOT_APPROVED ||
                        approvalSubmitted ||
                        signatureState === UseERC20PermitState.SIGNED
                      }
                      width="100%"
                      altDisabledStyle={approvalState === ApprovalState.PENDING} // show solid button while waiting
                      confirmed={
                        approvalState === ApprovalState.APPROVED || signatureState === UseERC20PermitState.SIGNED
                      }
                    >
                      <AutoRow justify="space-between" style={{ flexWrap: 'nowrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          <CurrencyLogo
                            currency={currencies[Field.INPUT]}
                            size={'20px'}
                            style={{ marginRight: '8px', flexShrink: 0 }}
                          />
                          {/* we need to shorten this string on mobile */}
                          {approvalState === ApprovalState.APPROVED || signatureState === UseERC20PermitState.SIGNED
                            ? 'You can now trade ' + currencies[Field.INPUT]?.symbol
                            : 'Allow the bloXroute Swap Protocol to use your ' + currencies[Field.INPUT]?.symbol}
                        </span>
                        {approvalState === ApprovalState.PENDING ? (
                          <Loader stroke="white" />
                        ) : (approvalSubmitted && approvalState === ApprovalState.APPROVED) ||
                          signatureState === UseERC20PermitState.SIGNED ? (
                          <CheckCircle size="20" color={theme.green1} />
                        ) : (
                          <MouseoverTooltip
                            text={t('give_the_uniswap_smart_contracts_permission', currencies[Field.INPUT]?.symbol)}
                          >
                            <HelpCircle size="20" color={'white'} style={{ marginLeft: '8px' }} />
                          </MouseoverTooltip>
                        )}
                      </AutoRow>
                    </ButtonConfirmed>
                    <ButtonError
                      onClick={() => {
                        if (isExpertMode) {
                          handleSwap()
                        } else {
                          setSwapState({
                            tradeToConfirm: trade,
                            attemptingTxn: false,
                            swapErrorMessage: undefined,
                            showConfirm: true,
                            txHash: undefined,
                          })
                        }
                      }}
                      width="100%"
                      id="swap-button"
                      disabled={
                        !isValid ||
                        (approvalState !== ApprovalState.APPROVED && signatureState !== UseERC20PermitState.SIGNED) ||
                        priceImpactTooHigh
                      }
                      error={isValid && priceImpactSeverity > 2}
                    >
                      <Text fontSize={16} fontWeight={500}>
                        {priceImpactSeverity > 2 ? t('swap_anyway') : t('swap_v2')}
                      </Text>
                    </ButtonError>
                  </AutoColumn>
                </AutoRow>
              ) : (
                <ButtonError
                  onClick={() => {
                    if (isExpertMode) {
                      handleSwap()
                    } else {
                      setSwapState({
                        tradeToConfirm: trade,
                        attemptingTxn: false,
                        swapErrorMessage: undefined,
                        showConfirm: true,
                        txHash: undefined,
                      })
                    }
                  }}
                  id="swap-button"
                  disabled={!isValid || priceImpactTooHigh || !!swapCallbackError}
                  error={isValid && priceImpactSeverity > 2 && !swapCallbackError}
                >
                  <Text fontSize={20} fontWeight={500}>
                    {swapInputError
                      ? swapInputError
                      : priceImpactTooHigh
                      ? t('price_impact_too_high')
                      : priceImpactSeverity > 2
                      ? t('swap_anyway')
                      : t('swap_v2')}
                  </Text>
                </ButtonError>
              )}
              {isExpertMode && swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
            </BottomGrouping>
          </AutoColumn>
        </Wrapper>
      </AppBody>
      <div className="guide-link">
        {t('have_questions')}
        <a
          href="https://s3.amazonaws.com/files.bloxroute.com/backrunme_files/BackRunMe_+a+step-by-step+tutorial+.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          {t('check_out_our_guide')}
        </a>
      </div>
      <div className="swapSec06">
        <AntdRow>
          <Col span={14} offset={5} className="content">
            <AntdRow gutter={32}>
              <Col className="gutter-row left" span={6}></Col>
              <Col className="gutter-row left" span={6}>
                <div>
                  <a href="https://bloxroute.com/" target="_blank" rel="noreferrer">
                    {t('footer_about_bloxroute')}
                  </a>
                  <a href="mailto:support@bloxroute.com" rel="noreferrer">
                    {t('footer_contact_us')}
                  </a>
                  <a href="https://discord.com/invite/mB95H7s" target="_blank" rel="noreferrer">
                    {t('footer_discord')}
                  </a>
                </div>
              </Col>
              <Col className="gutter-row right" span={6}>
                <div>
                  <a
                    href="https://bloxroute-tos.s3.amazonaws.com/BackRunMe_ToS_3-20-21.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('footer_terms_of_service')}
                  </a>
                  <a
                    href="https://bloxroute.com/wp-content/uploads/2021/12/bloXroute-Privacy-Policy-04-01-2019-Final.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('footer_privacy_policy')}
                  </a>
                  <a
                    href="https://s3.amazonaws.com/files.bloxroute.com/backrunme_files/BackRunMe_+a+step-by-step+tutorial+.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('footer_user_guide')}
                  </a>
                </div>
              </Col>
              <Col className="gutter-row left" span={6}></Col>
            </AntdRow>
          </Col>
        </AntdRow>
        <div className="footerBottom">
          <span className="footerLine"></span>
          <div className="copy">
            <span>{t('footer_backrunme_powered_by_bloxroute')}</span>
            <span>{t('footer_all_rights_reserved_2022')}</span>
          </div>
        </div>
      </div>
      {!swapIsUnsupported ? null : (
        <UnsupportedCurrencyFooter show={swapIsUnsupported} currencies={[currencies.INPUT, currencies.OUTPUT]} />
      )}
    </>
  )
}
