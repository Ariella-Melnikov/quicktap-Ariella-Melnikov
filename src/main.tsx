import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { muiTheme, baseTheme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyle';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<MuiThemeProvider theme={muiTheme}>
  <ThemeProvider theme={baseTheme}>
    <CssBaseline />
    <GlobalStyle />
    <App />
  </ThemeProvider>
</MuiThemeProvider>
  </React.StrictMode>
);