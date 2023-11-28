import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Percent } from '@uniswap/sdk-core'
import styled, { ThemeContext } from 'styled-components'

import QuestionHelper from '../QuestionHelper'
import { TYPE } from '../../theme'
import { AutoColumn } from '../Column'
import { RowBetween, RowFixed } from '../Row'
import { DEFAULT_DEADLINE_FROM_NOW } from 'constants/index'
import { darken } from 'polished'
import { useSetUserSlippageTolerance, useUserSlippageTolerance, useUserTransactionTTL } from 'state/user/hooks'
import ReactGA from 'react-ga4'

enum SlippageError {
  InvalidInput = 'InvalidInput',
}

enum DeadlineError {
  InvalidInput = 'InvalidInput',
}

const FancyButton = styled.button`
  color: ${({ theme }) => theme.text1};
  align-items: center;
  height: 2rem;
  border-radius: 36px;
  font-size: 1rem;
  width: auto;
  min-width: 3.5rem;
  border: 1px solid ${({ theme }) => theme.bg3};
  outline: none;
  background: ${({ theme }) => theme.bg1};
  :hover {
    border: 1px solid ${({ theme }) => theme.bg4};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
  }
`

const Option = styled(FancyButton)<{ active: boolean }>`
  margin-right: 8px;
  :hover {
    border: 1px solid transparent;
    cursor: pointer;
  }
  background-color: ${({ active, theme }) => active ? '#3D6FEC' : '#202231'};
  color: ${({ active, theme }) => (active ? theme.white : theme.white)};
  border: ${({ active, theme }) => (active ? '1px solid #3D6FEC' : '#202231')};
`

const Input = styled.input`
  background: ${({ theme }) => theme.bg1};
  font-size: 16px;
  background: #202231;
  width: auto;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  color: ${({ theme, color }) => (color === 'red' ? theme.red1 : theme.white)};
  text-align: right;
`

const OptionCustom = styled(FancyButton)<{ active?: boolean; warning?: boolean }>`
  height: 2rem;
  position: relative;
  padding: 0 0.75rem;
  flex: 1;
  border: 1px solid transparent;
  border: ${({ theme, active, warning }) =>
    active ? `1px solid ${warning ? theme.red1 : theme.primary1}` : warning && `1px solid ${theme.red1}`};
  :hover {
    border: 1px solid transparent;
    border: ${({ theme, active, warning }) =>
      active && `1px solid ${warning ? darken(0.1, theme.red1) : darken(0.1, theme.primary1)}`};
  }
  background: #202231;
  border-radius: 6px;
  color: #fff;

  input {
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 2rem;
  }
`

const SlippageEmojiContainer = styled.span`
  color: #f3841e;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;  
  `}
`

export interface TransactionSettingsProps {
  placeholderSlippage: Percent // varies according to the context in which the settings dialog is placed
}

export default function TransactionSettings({ placeholderSlippage }: TransactionSettingsProps) {
  const theme = useContext(ThemeContext)
  const { t } = useTranslation();

  const userSlippageTolerance = useUserSlippageTolerance()
  const setUserSlippageTolerance = useSetUserSlippageTolerance()

  const [deadline, setDeadline] = useUserTransactionTTL()

  const [slippageInput, setSlippageInput] = useState('')
  const [slippageError, setSlippageError] = useState<SlippageError | false>(false)

  const [deadlineInput, setDeadlineInput] = useState('')
  const [deadlineError, setDeadlineError] = useState<DeadlineError | false>(false)

  function parseSlippageInput(value: string) {
    // populate what the user typed and clear the error
    setSlippageInput(value)
    setSlippageError(false)

    ReactGA.event({
      category: 'Settings',
      action: 'Settings Changed: Auto slippage tolerance',
      label: 'Auto',
    })

    if (value.length === 0) {
      setUserSlippageTolerance('auto')
    } else {
      const parsed = Math.floor(Number.parseFloat(value) * 100)

      if (!Number.isInteger(parsed) || parsed < 0 || parsed > 5000) {
        setUserSlippageTolerance('auto')
        if (value !== '.') {
          setSlippageError(SlippageError.InvalidInput)
        }
      } else {
        setUserSlippageTolerance(new Percent(parsed, 10_000))
      }
    }
  }

  const tooLow = userSlippageTolerance !== 'auto' && userSlippageTolerance.lessThan(new Percent(5, 10_000))
  const tooHigh = userSlippageTolerance !== 'auto' && userSlippageTolerance.greaterThan(new Percent(1, 100))

  function parseCustomDeadline(value: string) {
    // populate what the user typed and clear the error
    setDeadlineInput(value)
    setDeadlineError(false)

    if (value.length === 0) {
      setDeadline(DEFAULT_DEADLINE_FROM_NOW)
    } else {
      try {
        const parsed: number = Math.floor(Number.parseFloat(value) * 60)
        if (!Number.isInteger(parsed) || parsed < 60 || parsed > 180 * 60) {
          setDeadlineError(DeadlineError.InvalidInput)
        } else {
          setDeadline(parsed)
        }
      } catch (error) {
        console.error(error)
        setDeadlineError(DeadlineError.InvalidInput)
      }
    }
  }

  return (
    <AutoColumn gap="md">
      <AutoColumn gap="sm">
        <RowFixed>
          <TYPE.black fontWeight={600} fontSize={14} color={'#fff'}>
          {t('slippage_tolerance')}
          </TYPE.black>
          <QuestionHelper text={t('slippage_tolerance_tooltip')} />
        </RowFixed>
        <RowBetween>
          <Option
            onClick={() => {
              parseSlippageInput('')
            }}
            active={userSlippageTolerance === 'auto'}
          >
            {t('auto')}
          </Option>
          <OptionCustom active={userSlippageTolerance !== 'auto'} warning={!!slippageError} tabIndex={-1}>
            <RowBetween>
              {tooLow || tooHigh ? (
                <SlippageEmojiContainer>
                  <span role="img" aria-label="warning">
                    ⚠️
                  </span>
                </SlippageEmojiContainer>
              ) : null}
              <Input
                placeholder={placeholderSlippage.toFixed(2)}
                value={
                  slippageInput.length > 0
                    ? slippageInput
                    : userSlippageTolerance === 'auto'
                    ? ''
                    : userSlippageTolerance.toFixed(2)
                }
                onChange={(e) => parseSlippageInput(e.target.value)}
                onBlur={() => {
                  ReactGA.event({
                    category: 'Settings',
                    action: 'Settings Changed: Slippage tolerance',
                    label: slippageInput,
                  })
                  setSlippageInput('')
                  setSlippageError(false)
                }}
                color={slippageError ? 'red' : ''}
              />
              %
            </RowBetween>
          </OptionCustom>
        </RowBetween>
        {slippageError || tooLow || tooHigh ? (
          <RowBetween
            style={{
              fontSize: '14px',
              paddingTop: '7px',
              color: slippageError ? 'red' : '#F3841E',
            }}
          >
            {slippageError
              ? 'Enter a valid slippage percentage'
              : tooLow
              ? 'Your transaction may fail'
              : 'Your transaction may be frontrun'}
          </RowBetween>
        ) : null}
      </AutoColumn>

      <AutoColumn gap="sm">
        <RowFixed>
          <TYPE.black fontSize={14} fontWeight={600} color={'#fff'}>
          {t('transaction_deadline')}
          </TYPE.black>
          <QuestionHelper text={t('transaction_deadline_tooltip')} />
        </RowFixed>
        <RowFixed>
          <OptionCustom style={{ width: '80px' }} warning={!!deadlineError} tabIndex={-1}>
            <Input
              placeholder={(DEFAULT_DEADLINE_FROM_NOW / 60).toString()}
              value={
                deadlineInput.length > 0
                  ? deadlineInput
                  : deadline === DEFAULT_DEADLINE_FROM_NOW
                  ? ''
                  : (deadline / 60).toString()
              }
              onChange={(e) => parseCustomDeadline(e.target.value)}
              onBlur={() => {
                ReactGA.event({
                  category: 'Settings',
                  action: 'Settings Changed: Transaction deadline',
                  label: deadlineInput,
                })
                setDeadlineInput('')
                setDeadlineError(false)
              }}
              color={deadlineError ? 'red' : ''}
            />
          </OptionCustom>
          <TYPE.body style={{ paddingLeft: '8px', color: '#fff' }} fontSize={14}>
          {t('minutes')}
          </TYPE.body>
        </RowFixed>
      </AutoColumn>
    </AutoColumn>
  )
}
