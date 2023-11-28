import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components/macro'

export const ToggleElement = styled.span<{ isActive?: boolean; isOnSwitch?: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 14px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.bg0) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: 400;

  padding: 0.35rem 0.6rem;
  border-radius: 16px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? 'theme.primary1' : theme.bg0) : 'none')};
  border-top-right-radius: ${({ theme, isActive, isOnSwitch }) => (isActive && '0')};
  border-bottom-right-radius: ${({ theme, isActive, isOnSwitch }) => (isActive && '0')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: ${({ isOnSwitch }) => (isOnSwitch ? '500' : '400')};
  width: 120px;
  img {
    opacity: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? 1 : 0.4) : 0.4)};
  }
  :hover {
    user-select: ${({ isOnSwitch }) => (isOnSwitch ? 'none' : 'initial')};
    background: ${({ theme, isActive, isOnSwitch }) =>
      isActive ? (isOnSwitch ? theme.primary1 : theme.bg0) : 'none'};
    color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  }
`

export const ToggleElement4 = styled.span<{ isActive?: boolean; isOnSwitch?: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 14px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.bg0) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: 400;

  padding: 0.35rem 0.6rem;
  border-radius: 16px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? 'theme.primary1' : theme.bg0) : 'none')};
  border-top-left-radius: ${({ theme, isActive, isOnSwitch }) => (isActive && '0')};
  border-bottom-left-radius: ${({ theme, isActive, isOnSwitch }) => (isActive && '0')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: ${({ isOnSwitch }) => (isOnSwitch ? '500' : '400')};
  width: 120px;
  img {
    opacity: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? 1 : 0.4) : 0.4)};
  }
  :hover {
    user-select: ${({ isOnSwitch }) => (isOnSwitch ? 'none' : 'initial')};
    background: ${({ theme, isActive, isOnSwitch }) =>
      isActive ? (isOnSwitch ? theme.primary1 : theme.bg0) : 'none'};
    color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  }
`

export const ToggleElement2 = styled.span<{ isActive?: boolean; isOnSwitch?: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 14px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.bg0) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: 400;

  padding: 0.35rem 0.6rem;
  border-radius: 16px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? '#3D6FEC' : theme.bg0) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text2)};
  font-size: 1rem;
  font-weight: ${({ isOnSwitch }) => (isOnSwitch ? '500' : '400')};
  :hover {
    user-select: ${({ isOnSwitch }) => (isOnSwitch ? 'none' : 'initial')};
    // background: ${({ theme, isActive, isOnSwitch }) => isActive ? (isOnSwitch ? theme.primary1 : theme.bg0) : 'none'};
    color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  }
`

export const ToggleElement3 = styled.span<{ isActive?: boolean; isOnSwitch?: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 14px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.bg0) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: 400;

  padding: 0.35rem 0.6rem;
  border-radius: 16px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? '#3D6FEC' : theme.bg0) : 'none')};
  color: '#fff';
  font-size: 1rem;
  font-weight: ${({ isOnSwitch }) => (isOnSwitch ? '500' : '400')};
  :hover {
    user-select: ${({ isOnSwitch }) => (isOnSwitch ? 'none' : 'initial')};
    // background: ${({ theme, isActive, isOnSwitch }) => isActive ? (isOnSwitch ? theme.primary1 : theme.bg0) : 'none'};
    color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  }
`

export const StyledToggle = styled.button<{ isActive?: boolean; activeElement?: boolean }>`
  border-radius: 16px;
  border: none;
  background: #202231;
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0;
  opactiy: 0.5;
`

export interface ToggleProps {
  id?: string
  isActive: boolean
  toggle: () => void
}

export default function Toggle({ id, isActive, toggle }: ToggleProps) {
  return (
    <StyledToggle id={id} isActive={isActive} onClick={toggle}>
      <ToggleElement2 isActive={isActive} isOnSwitch={true}>
        On
      </ToggleElement2>
      <ToggleElement3 isActive={!isActive} isOnSwitch={false}>
        Off
      </ToggleElement3>
    </StyledToggle>
  )
}
