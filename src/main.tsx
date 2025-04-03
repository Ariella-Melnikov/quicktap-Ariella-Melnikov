import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { muiTheme } from './styles/theme'; // ✅ only import muiTheme
import { GlobalStyle } from './styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MuiThemeProvider theme={muiTheme}>
    <StyledThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <CssBaseline />
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </StyledThemeProvider>
  </MuiThemeProvider>
);