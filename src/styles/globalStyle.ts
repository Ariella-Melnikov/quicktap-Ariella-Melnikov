import { createGlobalStyle } from 'styled-components'
import bgImage from '../assets/img/BG.png'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
  }
`;
