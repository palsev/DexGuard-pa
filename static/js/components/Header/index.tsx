import { ChainId } from "@uniswap/sdk-core";
import useScrollPosition from "@react-hook/window-scroll";
import React from "react";
import {LANGUAGES} from '../../constants/index';
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { Select } from "antd";
import { Text } from "rebass";
import styled from "styled-components/macro";

import newLogo from "../../assets/svg/backrunme-logo.svg";

import { useActiveWeb3React } from "../../hooks";
import { useDarkModeManager } from "../../state/user/hooks";
import { useETHBalances } from "../../state/wallet/hooks";

import { YellowCard } from "../Card";

import { RowFixed } from "../Row";
import Web3Status from "../Web3Status";
import lang from "../../assets/images/lang.png";
import '../HomeHeader/HomeHeader.css';

const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding: 1rem;
  z-index: 21;
  position: relative;
  padding: 1.51vw 9.21vw;

  /* Background slide effect on scroll. */
  background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`}
  background-position: ${({ showBackground }) => (showBackground ? "0 -100%" : "0 0")};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : "transparent;")};
  transition: background-position .1s, box-shadow .1s;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:  1rem;
    grid-template-columns: 120px 1fr;
    display: block;
    text-align: center;
  `};
`;

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: flex-end;
    // width: 100%;
    // max-width: 960px;
    padding: 1rem 0;
    position: absolute;
    top: 45px;
    right: 0px !important;
    // width: 100%;
    z-index: 99;
    height: 19.2vw;
    border-radius: 3.2vw 3.2vw 0 0;
    // background-color: ${({ theme }) => theme.bg1};
    button p {
      display: none;
    }
  `};
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-center;
  font-size: 1.5rem;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row-reverse;
    align-items: center;
  `};
`;

const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
   display: block;
  `};
`;

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  // background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg2)};
  // background-color: #fff;
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  // :focus {
  //   border: 1px solid blue;
  // }
`;

const HideSmall = styled.span`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`;

const HideMedium = styled.span`
  ${({ theme }) => theme.mediaWidth.upToMedium`
    // display: none;
    width: 100%;
    img {
      width: 70vw !important;
      max-width: 500px;
    }
  `};
`;

const NetworkCard = styled(YellowCard)`
  border-radius: 12px;
  padding: 8px 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0;
    margin-right: 0.5rem;
    width: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  `};
`;

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    // display: none;
  `};
`;

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-self: center;
    display: block;
  `};
  :hover {
    cursor: pointer;
  }
`;

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  img {
    width: auto;
  }
`;

export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg2};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`;

const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
  [ChainId.RINKEBY]: "Rinkeby",
  [ChainId.ROPSTEN]: "Ropsten",
  [ChainId.GÖRLI]: "Görli",
  [ChainId.KOVAN]: "Kovan"
};

export default function Header() {
  const { account, chainId } = useActiveWeb3React();
  // const {} = useTranslation()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? ""];
  // const [isDark] = useDarkModeManager()
  const [darkMode] = useDarkModeManager();

  const scrollY = useScrollPosition();
  const { Option } = Select;

  const { t } = useTranslation()

  function ChangeLanguage(value: string) {
    i18next.changeLanguage(value)
  }

  return (
    <HeaderFrame showBackground={false}>
      <HideMedium>
        <HeaderRow>
          <Title href="/">
            <UniIcon>
              <img src={newLogo} alt="logo" />
            </UniIcon>
          </Title>
        </HeaderRow>
      </HideMedium>
      <HeaderControls>
        <HeaderElement>
        <div className="rightNav2">
            <img src={lang} alt="language"/>
            <Select defaultValue={LANGUAGES[0].name} onChange={ChangeLanguage}>
              {LANGUAGES.map(({ code, name }) => (<Option key={code} value={code}>{name}</Option>))}
            </Select>
          </div>
          <HideSmall>
            {chainId && NETWORK_LABELS[chainId] && (
              <NetworkCard title={NETWORK_LABELS[chainId]}>{NETWORK_LABELS[chainId]}</NetworkCard>
            )}
          </HideSmall>
          <AccountElement active={!!account} style={{ pointerEvents: "auto" }}>
            {account && userEthBalance ? (
              <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500} color={'#fff'}>
                {userEthBalance?.toSignificant(4)} ETH
              </BalanceText>
            ) : null}
            <Web3Status />
          </AccountElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  );
}
