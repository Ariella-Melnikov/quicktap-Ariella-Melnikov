import styled, { keyframes } from 'styled-components';

const pulseLoader = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const WaitingLoader = styled.div`
  width: 555px;
  height: 11px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  background: linear-gradient(90deg, #e6d4dc 0%, #bcd9da 100%);
  background-size: 200% 100%;
  animation: ${pulseLoader} 2s ease-in-out infinite;
`;

export default WaitingLoader;
