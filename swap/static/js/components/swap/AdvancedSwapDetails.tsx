import { Percent, Currency, TradeType } from '@uniswap/sdk-core'
import { Trade as V2Trade } from '@uniswap/v2-sdk'
import { Trade as V3Trade } from '@uniswap/v3-sdk'
import React, { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from 'styled-components'
import { TYPE } from '../../theme'
import { computeRealizedLPFeePercent } from '../../utils/prices'
import { AutoColumn } from '../Column'
import { RowBetween, RowFixed } from '../Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import SwapRoute from './SwapRoute'

export interface AdvancedSwapDetailsProps {
  trade?: V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType>
  allowedSlippage: Percent
}

export function AdvancedSwapDetails({ trade, allowedSlippage }: AdvancedSwapDetailsProps) {
  const theme = useContext(ThemeContext)
  const { t } = useTranslation();

  const { realizedLPFee, priceImpact } = useMemo(() => {
    if (!trade) return { realizedLPFee: undefined, priceImpact: undefined }

    const realizedLpFeePercent = computeRealizedLPFeePercent(trade)
    const realizedLPFee = trade.inputAmount.multiply(realizedLpFeePercent)
    const priceImpact = trade.priceImpact.subtract(realizedLpFeePercent)
    return { priceImpact, realizedLPFee }
  }, [trade])

  return !trade ? null : (
    <AutoColumn gap="8px">
      <RowBetween>
        <RowFixed>
          <TYPE.black fontSize={12} fontWeight={400} color={'#fff'}>
          {t('liquidity_provider_fee')}
          </TYPE.black>
        </RowFixed>
        <TYPE.black textAlign="right" fontSize={12} color={'#999'}>
          {realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${realizedLPFee.currency.symbol}` : '-'}
        </TYPE.black>
      </RowBetween>

      <RowBetween>
        <RowFixed>
          <TYPE.black fontSize={12} fontWeight={400} color={'#fff'}>
          {t('route')}
          </TYPE.black>
        </RowFixed>
        <TYPE.black textAlign="right" fontSize={12} color={'#999'}>
          <SwapRoute trade={trade} />
        </TYPE.black>
      </RowBetween>

      <RowBetween>
        <RowFixed>
          <TYPE.black fontSize={12} fontWeight={400} color={'#fff'}>
          {t('price_impact')}
          </TYPE.black>
        </RowFixed>
        <TYPE.black textAlign="right" fontSize={12} color={'#999'}>
          <FormattedPriceImpact priceImpact={priceImpact} />
        </TYPE.black>
      </RowBetween>

      <RowBetween>
        <RowFixed>
          <TYPE.black fontSize={12} fontWeight={400} color={'#fff'}>
          {trade.tradeType === TradeType.EXACT_INPUT ? t('minimum_received') : t('maximum_sent')}
          </TYPE.black>
        </RowFixed>
        <TYPE.black textAlign="right" fontSize={12} color={'#999'}>
          {trade.tradeType === TradeType.EXACT_INPUT
            ? `${trade.minimumAmountOut(allowedSlippage).toSignificant(6)} ${trade.outputAmount.currency.symbol}`
            : `${trade.maximumAmountIn(allowedSlippage).toSignificant(6)} ${trade.inputAmount.currency.symbol}`}
        </TYPE.black>
      </RowBetween>

      <RowBetween>
        <RowFixed>
          <TYPE.black fontSize={12} fontWeight={400} color={'#fff'}>
          {t('slippage_tolerance')}
          </TYPE.black>
        </RowFixed>
        <TYPE.black textAlign="right" fontSize={12} color={'#999'}>
          {allowedSlippage.toFixed(2)}%
        </TYPE.black>
      </RowBetween>
    </AutoColumn>
  )
}
