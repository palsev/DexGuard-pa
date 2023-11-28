import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'rebass'
import { ChainId, Currency, currencyEquals, Token, ETHER } from '@uniswap/sdk-core'
import styled from 'styled-components/macro'

import { SUGGESTED_BASES } from '../../constants'
import { AutoColumn } from '../Column'
import QuestionHelper from '../QuestionHelper'
import { AutoRow } from '../Row'
import CurrencyLogo from '../CurrencyLogo'

const BaseWrapper = styled.div<{ disable?: boolean }>`
  border: 1px solid ${({ theme, disable }) => (disable ? 'transparent' : theme.bg3)};
  border: 1px solid transparent;
  border-radius: 6px;
  display: flex;
  padding: 6px;

  align-items: center;
  :hover {
    cursor: ${({ disable }) => !disable && 'pointer'};
    background-color: ${({ theme, disable }) => !disable && theme.bg2};
    color: #000;
  }

  // background-color: ${({ theme, disable }) => disable && theme.bg3};
  background-color: #161521;
  opacity: ${({ disable }) => disable && '0.4'};
`

export default function CommonBases({
  chainId,
  onSelect,
  selectedCurrency,
}: {
  chainId?: ChainId
  selectedCurrency?: Currency | null
  onSelect: (currency: Currency) => void
}) {
  const { t } = useTranslation();
  return (
    <AutoColumn gap="md">
      <AutoRow>
        <Text fontWeight={500} fontSize={14} color={'#fff'}>
        {t('common_bases')}
        </Text>
        <QuestionHelper text={t('common_bases_tooltip')} />
      </AutoRow>
      <AutoRow gap="4px">
        <BaseWrapper
          onClick={() => {
            if (!selectedCurrency || !currencyEquals(selectedCurrency, ETHER)) {
              onSelect(ETHER)
            }
          }}
          disable={selectedCurrency?.isEther}
        >
          <CurrencyLogo currency={ETHER} style={{ marginRight: 8 }} />
          <Text fontWeight={500} fontSize={16}>
            ETH
          </Text>
        </BaseWrapper>
        {(typeof chainId === 'number' ? SUGGESTED_BASES[chainId] ?? [] : []).map((token: Token) => {
          const selected = selectedCurrency?.isToken && selectedCurrency.address === token.address
          return (
            <BaseWrapper onClick={() => !selected && onSelect(token)} disable={selected} key={token.address}>
              <CurrencyLogo currency={token} style={{ marginRight: 8 }} />
              <Text fontWeight={500} fontSize={16}>
                {token.symbol}
              </Text>
            </BaseWrapper>
          )
        })}
      </AutoRow>
    </AutoColumn>
  )
}
