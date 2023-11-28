import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { ThemeContext } from 'styled-components'

import QuestionHelper from '../QuestionHelper'
import { TYPE } from '../../theme'  
import { ColumnCenter } from '../Column'
import { RowBetween, RowFixed } from '../Row'
import { ArrowDown, CheckCircle, HelpCircle, Info } from 'react-feather'
import { Text } from 'rebass'

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

export default function ArbiProfit({ fetching, arbiProfit }: { fetching: boolean; arbiProfit: string }) {
  const { t } = useTranslation()

  return (
    <ColumnCenter>
      <RowBetween>
        <Text fontWeight={500} fontSize={18} color={'#fff'}>
          {t('backrunme')}
        </Text>
      </RowBetween>
      <RowBetween>
        <RowFixed>
          <TYPE.black fontSize={14} fontWeight={400} color={'#fff'}>
            {t('arb_profit')}
          </TYPE.black>
          <QuestionHelper text={t('estimate_arb_profit_tooltip')} />
        </RowFixed>
        <div>
          {fetching ? (
            <Text fontWeight={500} fontSize={14} color={'#fff'}>
              {t('calculating')}
            </Text>
          ) : (
            <RowBetween>
              <Text fontWeight={500} fontSize={14} color={'#fff'}>
                {arbiProfit || 0}
              </Text>
              <Text fontWeight={500} fontSize={14} color={'#eee'} paddingLeft="4px">
                {` ETH`}
              </Text>
            </RowBetween>
          )}
        </div>
      </RowBetween>
    </ColumnCenter>
  )
}
