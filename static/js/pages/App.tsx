import React, { Suspense } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import AddressClaimModal from '../components/claim/AddressClaimModal'
import Header from '../components/Header'
import HomeHeader from '../components/HomeHeader'
import Polling from '../components/Header/Polling'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import ErrorBoundary from '../components/ErrorBoundary'
import { ApplicationModal } from '../state/application/actions'
import { useModalOpen, useToggleModal } from '../state/application/hooks'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import Swap from './Swap'
import Home from './Home'
import { OpenClaimAddressModalAndRedirectToSwap, RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { ThemedBackground } from '../theme'
import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import PageNotFound from './PageNotFound/PageNotFound'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  background: #00001d !important;

`

const AppOtherWrapper = styled.div`

`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 120px;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px 0 150px;
    padding-top: 4rem;
  `};
`

const HeaderWrapper = styled.div`
  // ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 2;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

function TopLevelModals() {
  const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
  const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
  return <AddressClaimModal isOpen={open} onDismiss={toggle} />
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Route component={GoogleAnalyticsReporter} />
        <Route component={DarkModeQueryParamReader} />
        <Route component={ApeModeQueryParamReader} />
        {useLocation().pathname === '/swap' ? <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            {/* <ThemedBackground /> */}
            <Popups />
            <Polling />
            <TopLevelModals />
            <Web3ReactManager>
              <Switch>
                {/* <Route exact strict path="/" component={Home} /> */}
                <Route exact strict path="/claim" component={OpenClaimAddressModalAndRedirectToSwap} />

                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/swap" component={Swap} />

                <Route component={RedirectPathToSwapOnly} />
                <Route path='*' component={PageNotFound} />
              </Switch>
            </Web3ReactManager>
            <Marginer />
          </BodyWrapper>
        </AppWrapper> : <AppOtherWrapper><HeaderWrapper>
          <HomeHeader />
        </HeaderWrapper>
        <Web3ReactManager>
            <Switch>
              <Route exact strict path="/" component={Home} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </Web3ReactManager></AppOtherWrapper>}
      </Suspense>
    </ErrorBoundary>
  )
}
