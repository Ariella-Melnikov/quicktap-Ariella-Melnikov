import styled, { keyframes } from 'styled-components'

export const GameWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing(9)} ${({ theme }) => theme.spacing(5)};
  background-color: #f5f5f5;
`

export const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ColorMark = styled.img<{ $position: 'left' | 'right'; $visible: boolean }>`
  width: 102px;
  height: 102px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  z-index: 2;

  ${({ $position }) =>
    $position === 'left'
      ? 'left: calc(50% - 400px);'
      : 'right: calc(50% - 400px);'}
`

const pulse = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`

export const WaitingLoader = styled.div`
  width: 555px;
  height: 11px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #e6d4dc 0%, #bcd9da 100%);
  background-size: 200% 100%;
  animation: ${pulse} 2s ease-in-out infinite;
  z-index: 2;
`

export const EndGameButton = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(8)};
  right: ${({ theme }) => theme.spacing(8)};
  z-index: 9;
`