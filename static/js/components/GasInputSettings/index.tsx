import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { ThemeContext } from 'styled-components'

import QuestionHelper from '../QuestionHelper'
import { TYPE } from '../../theme'
import { ColumnCenter } from '../Column'
import { RowBetween, RowFixed } from '../Row'
import { formatUnits, parseUnits } from '@ethersproject/units'

import { darken } from 'polished'
import { ETHER } from '@uniswap/sdk-core'
import { tryParseGasFee, weiToGwei } from '../../state/swap/hooks'
import { useUserGasEstimate, useUserGasPrice } from '../../state/user/hooks'
import { BLXR_TIP_RATIO } from '../../constants'
import ReactGA from 'react-ga4'

enum ETHTipError {
  InvalidInput = 'InvalidInput'
}

const FancyButton = styled.button`
  color: ${({ theme }) => theme.text1};
  align-items: center;
  height: 2rem;
  border-radius: 36px;
  font-size: 1rem;
  width: 100px;
  border: 1px solid ${({ theme }) => theme.bg3};
  outline: none;
  background: ${({ theme }) => theme.bg0};
  :hover {
    border: 1px solid ${({ theme }) => theme.bg4};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
  }
`

const AutoButton = styled.button`
  color: ${({ theme }) => theme.text1};
  align-items: center;
  height: 2rem;
  border-radius: 36px;
  font-size: 1rem;
  // border: 1px solid ${({ theme }) => theme.bg3};
  border: 1px solid transparent;
  outline: none;
  background: ${({ theme }) => theme.bg0};
  :hover {
    // border: 1px solid ${({ theme }) => theme.bg4};
    border: 1px solid #202231;
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
  }
`

const Input = styled.input`
  background: ${({ theme }) => theme.bg0};
  font-size: 16px;
  width: auto;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  color: ${({ theme, color }) => (color === 'red' ? theme.red1 : theme.text2)};
  text-align: right;
`

const OptionCustom = styled(FancyButton)<{ active?: boolean; warning?: boolean }>`
  height: 32px;
  position: relative;
  padding: 0 0.5rem;
  width: 130px;
  color: #fff;
  border-radius: 6px;
  // border: ${({ theme, active, warning }) => active && `1px solid ${warning ? theme.red1 : 'theme.primary1'}`};
  border: 1px solid #202321;
  border: ${({ theme, active, warning }) => active && `1px solid ${warning ? theme.red1 : '#3D6FEC'}`};
  :hover {
    border: 1px solid #202321;
    border: ${({ theme, active, warning }) =>
      active && `1px solid ${warning ? darken(0.1, theme.red1) : darken(0.1, theme.primary1)}`};
  }

  input {
    width: 60px;
    height: 100%;
    border: 0px;
    border-radius: 2rem;
    color: #fff;
  }
  @media(min-width: 320px) and (max-width: 960px) {
    width: 120px;
    height: 2rem;
    input {
      width: 40px;
    }
  } 
`

// const OptionPtxFee = styled.button`
//   height: 2rem;
//   color: ${({ theme }) => theme.text1};
//   background: ${({ theme }) => theme.bg0};
//   position: relative;
//   padding: 0 0.5rem;
//   width: 80px;
//   border-radius: 36px;
//   border: 1px solid ${({ theme }) => theme.bg3};
//   input {
//     width: 30px;
//     height: 100%;
//     border: 0px;
//     border-radius: 2rem;
//   }
// `

const OptionGasCost = styled.button`
  height: 32px;
  // color: ${({ theme }) => theme.text1};
  color: #fff;
  background: ${({ theme }) => theme.bg0};
  position: relative;
  padding: 0 0.5rem;
  width: 130px;
  border-radius: 6px;
  // border: 1px solid ${({ theme }) => theme.bg3};
  border: 1px solid #202231;
  input {
    width: 75px;
    height: 100%;
    border: 0px;
    border-radius: 2rem;
    color: #fff;
  }
  @media(min-width: 320px) and (max-width: 960px) {
    width: 100px;
    height: 2rem;
    input {
      width: 50px;
    }
  } 
`

const OptionGasLimit = styled(FancyButton)<{ active?: boolean; warning?: boolean }>`
  height: 32px;
  position: relative;
  padding: 0 0.5rem;
  width: 130px;
  border-radius: 6px;
  border: 1px solid #202321;
  // border: ${({ theme, active, warning }) => active && `1px solid ${warning ? theme.red1 : theme.primary1}`};
  border: ${({ theme, active, warning }) => active && `1px solid ${warning ? theme.red1 : '#3D6FEC'}`};
  :hover {
    border: 1px solid #202321;
    border: ${({ theme, active, warning }) =>
    active && `1px solid ${warning ? darken(0.1, theme.red1) : darken(0.1, theme.primary1)}`};
  }
  input {
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 2rem;
    color: #fff;
  }
  @media(min-width: 320px) and (max-width: 960px) {
    width: 120px;
    height: 2rem;
    input {
      width: 100%;
    }
  } 
`

const OptionAuto = styled(AutoButton)<{ active?: boolean; warning?: boolean }>`
  // border: ${({ theme, active, warning }) => active && `1px solid ${warning ? theme.red1 : theme.primary1}`};
  border: ${({ theme, active, warning }) => active && `1px solid ${warning ? theme.red1 : 'transparent'}`};
  color: #fff;
  background-color: #202230;
  background-color: ${({ theme, active, warning }) =>
    active && '#3D6FEC !important'};
  };
  width: 64px;
  height: 32px;
  margin-right: 10px;
  :hover {
    border: ${({ theme, active, warning }) =>
    active && `1px solid ${warning ? darken(0.1, theme.red1) : darken(0.1, theme.primary1)}`};
    };
  }
  input {
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 2rem;
    color: #fff;
  }
  @media(min-width: 320px) and (max-width: 960px) {
    width: auto;
    height: 2rem;
  } 
`

export interface SlippageTabsProps {
  tipManualOverride: boolean,
  setTipManualOverride: (manualOverride: boolean) => void,
  userGasEstimateManualOverride: boolean,
  setUserGasEstimateManualOverride: (manualOverride: boolean) => void,
}

export default function SlippageTabs(
  {
    tipManualOverride,
    setTipManualOverride,
    userGasEstimateManualOverride,
    setUserGasEstimateManualOverride,
  }: SlippageTabsProps
) {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext)
  const [userGasPrice, setUserGasPrice] = useUserGasPrice()
  const [userGasEstimate, setUserGasEstimate] = useUserGasEstimate()

  const [gasPriceInput, setGasPriceInput] = useState('')
  const [gasEstimateInput, setGasEstimateInput] = useState('')

  const gasPriceInputIsValid = (gasPriceInput === '' || gasPriceInput === '0' || !Number.isNaN(Number.parseInt(gasPriceInput)) || gasPriceInput == 'auto')
  const gasEstimateInputIsValid = (gasEstimateInput === '' || gasEstimateInput === '0' || !Number.isNaN(Number.parseInt(gasEstimateInput)) || gasEstimateInput == 'auto')


  let gasPriceError: ETHTipError | undefined
  if (!gasPriceInputIsValid) {
    gasPriceError = ETHTipError.InvalidInput
  } else {
    gasPriceError = undefined
  }
  let gasEstimateError: ETHTipError | undefined
  if (!gasEstimateInputIsValid) {
    gasEstimateError = ETHTipError.InvalidInput
  } else {
    gasEstimateError = undefined
  }

  function parseAutoGas(value: string) {
    setGasPriceInput(value)
    setTipManualOverride(true)
  }

  function parseAutoGasEstimate(value: string) {
    setGasEstimateInput(value)
    setUserGasEstimateManualOverride(true)
  }

  function parseCustomETHTip() {
    try {
      if (gasPriceInput === '0') {
        setTipManualOverride(false)
      } else {
        if (gasPriceInput.length > 0) {
          const valueAsCurrencyAmount = tryParseGasFee(gasPriceInput, ETHER)
          if (valueAsCurrencyAmount) {
            setUserGasPrice(valueAsCurrencyAmount.toString())
          }
        }
      }
    } catch {
    }
  }

  function parseCustomGasEstimate() {
    if (gasEstimateInput === '0') {
      setUserGasEstimateManualOverride(false)
    } else {
      if (gasEstimateInput.length > 0) {
        setUserGasEstimate(gasEstimateInput)
      }
    }
    ReactGA.event({
      category: 'Gas',
      action: 'Gas Price',
      label: gasPriceInput,
    })
    ReactGA.event({
      category: 'Gas',
      action: 'Gas Limit',
      label: gasEstimateInput,
    })
  }

  function getPlaceholder() {
    const gwei = weiToGwei(userGasPrice)
    if (gwei) {
      return gwei.toString()
    }
    return '0'
  }

  function getCost() {
    const gasPriceParsed = parseUnits(userGasPrice, 0)
    const gasCost = gasPriceParsed.mul(Math.round(Number.parseInt(userGasEstimate)))
    return Number.parseFloat(formatUnits(gasCost).toString()).toFixed(3)
  }

  return (
    <ColumnCenter>
       <RowBetween>
         <RowFixed>
           <TYPE.black fontSize={14} fontWeight={400} color={'#fff'}>
           {t('gas_price')}
          </TYPE.black>
          <QuestionHelper text={t('gas_price_tooltip')}/>
         </RowFixed>
          <div>
            <OptionAuto
              onClick={() => {
                setTipManualOverride(!tipManualOverride)
                setGasPriceInput('')
              }}
              active={!tipManualOverride}
            >
              {t('auto')}
            </OptionAuto>
            <OptionCustom active={tipManualOverride} warning={!!gasPriceError} tabIndex={-1}>
              <Input
                color={!!gasPriceError ? 'red' : undefined}
                onBlur={() => {
                  parseCustomETHTip()
                }}
                placeholder={getPlaceholder()}
                value={gasPriceInput.length > 0 ? gasPriceInput : ''}
                onChange={e => parseAutoGas(e.target.value)}
              />
                {' '}GWEI
            </OptionCustom>
          </div>

        </RowBetween>
      <RowBetween style={{ paddingTop: '10px' }}>
         <RowFixed>
           <TYPE.black fontSize={14} fontWeight={400} color={'#fff'}>
           {t('gas_limit')}
          </TYPE.black>
          <QuestionHelper text={t('gas_limit_tooltip')}/>
         </RowFixed>
        <div>
            <OptionAuto
              onClick={() => {
                setUserGasEstimateManualOverride(!userGasEstimateManualOverride)
                setGasEstimateInput('')
              }}
              active={!userGasEstimateManualOverride}
            >
              {t('auto')}
            </OptionAuto>
            <OptionGasLimit active={userGasEstimateManualOverride} warning={!!gasEstimateError} tabIndex={-1}>
              <Input
                color={!!gasEstimateError ? 'red' : undefined}
                onBlur={() => {
                  parseCustomGasEstimate()
                }}
                placeholder={userGasEstimate}
                value={gasEstimateInput.length > 0 ? gasEstimateInput : ''}
                onChange={e => parseAutoGasEstimate(e.target.value)}
              />
            </OptionGasLimit>
          </div>

        </RowBetween>

            <RowBetween style={{ paddingTop: '10px' }}>
         <RowFixed>
           <TYPE.black fontSize={14} fontWeight={400} color={'#fff'}>
           {t('estimated_cost')}
          </TYPE.black>
          <QuestionHelper text={t('estimated_cost_tooltip')}/>
         </RowFixed>
          <div>
            <OptionGasCost tabIndex={-1}>
              <Input
                color={!!gasPriceError ? 'red' : undefined}
                placeholder={'0.0'}
                value={getCost()}
                disabled
              />
                {' '}ETH
            </OptionGasCost>
          </div>

        </RowBetween>
    </ColumnCenter>
  )
}
