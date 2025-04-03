import { createGlobalStyle } from 'styled-components';
import bgImage from '../../assets/img/BG.png'; 

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;