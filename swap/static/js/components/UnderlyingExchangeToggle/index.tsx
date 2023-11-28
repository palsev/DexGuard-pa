import React from 'react'
import { useActiveWeb3React } from '../../hooks'
import { useCallback } from 'react'
import { useUserUnderlyingExchange } from 'state/user/hooks'
import { StyledToggle, ToggleElement, ToggleElement4 } from '../Toggle'
import UniswapIcon from '../../assets/images/uniswap-icon.png'
import SushiswapIcon from '../../assets/images/sushiswap-icon.png'
import Icon from '../Icon'
import ReactGA from 'react-ga4'

export interface UnderlyingExchangeToggleProps {
  id?: string
}

export default function UnderlyingExchangeToggle({ id }: UnderlyingExchangeToggleProps) {
  const { chainId } = useActiveWeb3React()
  const [userUnderlyingExchange, setUserUnderlyingExchange] = useUserUnderlyingExchange()
  const isUniswap = chainId ? userUnderlyingExchange === 'Uniswap' : true
  const toggle = useCallback(() => {
    ReactGA.event({
      category: 'Mode',
      action: 'Change Mode',
      label: isUniswap ? 'Sushiswap' : 'Uniswap',
    })
    if (!chainId)
      return
    setUserUnderlyingExchange(isUniswap ? 'Sushiswap' : 'Uniswap')
  }, [chainId, isUniswap, setUserUnderlyingExchange])

  return (
    <StyledToggle id={id} isActive={isUniswap}>
      {isUniswap ? (<ToggleElement isActive={isUniswap} isOnSwitch={true}>
       <Icon src={UniswapIcon} /> Uniswap v2
      </ToggleElement>) : (<ToggleElement onClick={toggle} isActive={isUniswap} isOnSwitch={true}>
       <Icon src={UniswapIcon} /> Uniswap v2
      </ToggleElement>)
      }
      {!isUniswap ? (<ToggleElement4 isActive={!isUniswap} isOnSwitch={true}>
        <Icon src={SushiswapIcon} /> Sushiswap
      </ToggleElement4>) : (<ToggleElement4 onClick={toggle} isActive={!isUniswap} isOnSwitch={true}>
        <Icon src={SushiswapIcon} /> Sushiswap
      </ToggleElement4>)
      }
    </StyledToggle>
  )
}