import { BigNumber } from '@ethersproject/bignumber'
import { useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import isZero from '../utils/isZero'
import { useActiveWeb3React } from './index'
import { BLXR_RELAY_URI, BLXR_ENV } from '../constants'
import { ethers } from 'ethers'
import { useUserGasPrice, useUserGasEstimate } from '../state/user/hooks'
import { useArbiProfit } from 'state/swap/hooks'
import useToggledVersion from './useToggledVersion'
import { useDerivedSwapInfo } from 'state/swap/hooks'
import { useSwapCallArguments } from './useSwapCallback'
import { useERC20PermitFromTrade } from './useERC20Permit'
import { useSwapState } from 'state/swap/hooks'
import { Field } from 'state/swap/actions'

const { hexlify, hexValue } = ethers.utils

/**
 *
 * Returns callback to call estimate_arbi_profit
 *
 * @param recipientAddressOrName
 * @returns estimated_arbi_profit
 */
export function useArbiProfitCallback(
  recipientAddressOrName: string | null // the ENS name or address of the recipient of the trade, or null if swap should be returned to sender
): { loading: boolean; arbiProfit: string; refetch: () => Promise<any> } {
  const { account, chainId, library } = useActiveWeb3React()

  const [userGasPrice] = useUserGasPrice()
  const [userGasEstimate] = useUserGasEstimate()
  const userGasEstimateBN = BigNumber.from(userGasEstimate)
  const userGasPriceBN = BigNumber.from(userGasPrice)
  const [loading, setLoading] = useState(false)
  const [arbiProfit, setArbiProfit] = useArbiProfit()

  // get version from the url
  const toggledVersion = useToggledVersion()

  // swap state
  const { toggledTrade: trade, allowedSlippage } = useDerivedSwapInfo(toggledVersion)

  const { signatureData } = useERC20PermitFromTrade(trade, allowedSlippage)

  const swapCalls = useSwapCallArguments(trade, allowedSlippage, recipientAddressOrName, signatureData)

  const fetchArbiProfit = async () => {
    if (!trade || !library || !account || !chainId) {
      console.log('Could not determine the trade pair')
      return
    }
    const relayURI = chainId ? BLXR_RELAY_URI[chainId] : undefined
    if (!relayURI) {
      console.log('Could not determine relay URI for this network')
      return
    }

    if (swapCalls.length !== 1) {
      console.log('Could not determine the swap call for bx router')
      return
    }

    const bxSwapCall = swapCalls[0]

    const {
      contract,
      parameters: { methodName, args, value },
    } = bxSwapCall

    const inputData = contract.interface.encodeFunctionData(methodName, args)

    const partialTx = {
      from: account,
      to: contract.address,
      data: contract.interface.encodeFunctionData(methodName, args),
      gasLimit: userGasEstimateBN,
      gasPrice: userGasPriceBN,
      ...(value && !isZero(value) ? { value } : {}),
    }

    const fullTx = await contract.signer.populateTransaction(partialTx)

    const body = JSON.stringify({
      method: 'estimate_arb_profit',
      id: '1',
      params: {
        chain_id: hexValue(chainId || 1),
        from: account,
        to: contract.address,
        gas: hexValue(userGasEstimateBN),
        gas_price: hexValue(userGasPriceBN),
        input: inputData,
        nonce: fullTx.nonce ? hexValue(fullTx.nonce) : '0x0',
        value: ethers.utils.isHexString(value) ? value : hexValue(ethers.BigNumber.from(value)),
      },
    })

    console.log('estimate_arb_profit.body =>', body)

    setLoading(true)
    try {
      const response = await fetch(`${relayURI}/estimate_arb_profit` + '?blxr_env=' + BLXR_ENV, {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())

      const profitInETH = ethers.utils.formatEther(BigNumber.from(response.result.userProfit))

      console.log('profitInETH => ', profitInETH)

      setArbiProfit({
        hash: response.result?.hashId || null,
        userProfit: profitInETH,
      })
    } catch (e: any) {
      console.log(e.message)
      setArbiProfit({
        hash: null,
        userProfit: '0',
      })
    }

    setLoading(false)
  }

  return {
    loading,
    arbiProfit: arbiProfit.userProfit,
    refetch: fetchArbiProfit,
  }
}
